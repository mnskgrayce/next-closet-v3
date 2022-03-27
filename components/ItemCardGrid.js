import Link from "next/link";
import { useRouter } from "next/router";
import Loading from "./Loading";

/**
 * Organize JSON items (with ref) into a card grid
 * @param  {Array} items
 */
export default function ItemCardGrid({ items }) {
  if (!items) return <Loading />;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 overflow-auto">
      {items.map((item, key) => {
        return <ItemCard item={item} key={key} />;
      })}
    </div>
  );
}

export const ItemCard = ({ item }) => {
  if (!item) return <Loading />;

  const router = useRouter();

  return (
    <Link
      href={{
        pathname: `${router.pathname}/[id]`,
        query: {
          uid: router.query.uid,
          id: item.id,
        },
      }}
    >
      <a>
        <div className="bg-white">
          <img
            className="w-full aspect-square object-cover mb-1"
            src={item.photoURL || "/tshirt.png"}
            alt="product image"
          />
          <div className="flex flex-row justify-between">
            <p className="font-medium text-sm lg:text-base">{item.name}</p>
            <p className="text-sm text-right ml-2 capitalize lg:text-base">
              {item.type}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-light text-xs italic lg:text-sm">{item.brand}</p>
            <p className="font-light text-xs italic text-right ml-2 lg:text-sm">
              in <span className="underline">{item.timesUsed}</span> outfits
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};
