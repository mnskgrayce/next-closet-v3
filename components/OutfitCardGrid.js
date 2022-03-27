import Link from "next/link";
import Loading from "./Loading";

/**
 * Organize JSON outfits into a card grid
 * @param  {Array} outfits
 */
export default function OutfitCardGrid({ outfits }) {
  if (!outfits) return <Loading />;

  return (
    <div className="w-full flex flex-col overflow-auto">
      {outfits.map((outfit, key) => {
        return <OutfitCard outfit={outfit} key={key} />;
      })}
    </div>
  );
}

export const OutfitCard = ({ outfit }) => {
  if (!outfit) return <Loading />;

  return (
    <Link href="/">
      <a>
        <div className="bg-white mb-4">
          {/* Make sure images don't shrink */}
          {outfit.items && (
            <div className="w-full h-48 lg:h-64 flex flex-row flex-nowrap md:shrink-0 overflow-hidden">
              <ItemPhotos items={outfit.items} />
            </div>
          )}
          <div className="flex flex-row justify-start items-center p-2 md:p-4">
            <p className="font-medium text-sm mr-2 lg:text-base">
              {outfit.name}
            </p>
            <span>|</span>
            <p className="font-light text-sm mx-2 lg:text-base capitalize">
              {outfit.type}
            </p>
            <span>|</span>
            <p className="font-light text-sm ml-2 lg:text-base italic">
              <span className="mr-1">{outfit.items.length}</span>items
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

const ItemPhotos = ({ items }) => {
  return items.map((item, key) => {
    return (
      <img
        key={key}
        className="object-cover grow mr-2 last:mr-0"
        src={item.photoUrl || "/tshirt.png"}
        alt="product image"
      />
    );
  });
};
