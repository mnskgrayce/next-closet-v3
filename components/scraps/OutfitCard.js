import Link from "next/link";

/**
 * Display an outfit in card form
 * @param  {Outfit} {outfit}
 */
export default function OutfitCard({ outfit }) {
  return (
    <Link href="/">
      <a className="max-w-full flex flex-col m-4 rounded border shadow">
        {/* Clip images to fit in rounded corners */}
        {outfit.items && (
          <div className="w-full h-48 flex flex-row flex-nowrap md:shrink-0 overflow-hidden">
            <ItemPhotos items={outfit.items} />
          </div>
        )}

        <div className="flex flex-col grow p-4 bg-white hover:bg-gray-50 border-t">
          <div className="flex flex-row flex-wrap items-center mb-2">
            <h5 className="text-xl font-bold tracking-tight mr-2">
              {outfit.name}
            </h5>
          </div>

          <div className="flex flex-row items-center mb-2">
            <p className="text-xs text-white font-semibold uppercase tracking-wide px-3 py-1 mr-1 bg-cyan-400 rounded-full">
              {outfit.type}
            </p>
          </div>

          <p className="text-sm">{outfit.description}</p>
        </div>
      </a>
    </Link>
  );
}

const ItemPhotos = ({ items }) => {
  return items.map((item, key) => {
    return (
      <img
        key={key}
        className="object-cover grow"
        src={item.photoUrl || "/clothes.png"}
        alt="product image"
      />
    );
  });
};
