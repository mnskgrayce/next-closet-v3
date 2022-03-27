import Link from "next/link";

/**
 * Display an item (piece of clothing) in card form
 * @param  {Item} {item}
 */
export default function ItemCard({ item }) {
  return (
    <Link href="/">
      <a className="max-w-full flex flex-col md:flex-row m-4 rounded border shadow">
        {/* Make sure the image never shrinks */}
        <div className="md:shrink-0">
          <img
            className="w-full h-48 md:w-48 md:h-full object-cover rounded-t md:rounded-l"
            src={item.photoUrl || "/clothes.png"}
            alt="product image"
          />
        </div>

        <div className="flex flex-col grow p-4 bg-white hover:bg-gray-50 border-t">
          <div className="flex flex-row flex-wrap items-center mb-2">
            <h5 className="text-xl font-bold tracking-tight mr-2">
              {item.name}
            </h5>

            <p className="text-lg tracking-wide text-rose-500">{item.brand}</p>
          </div>

          <div className="flex flex-row items-center mb-2">
            <p className="text-xs text-white font-semibold uppercase tracking-wide px-3 py-1 mr-1 bg-cyan-400 rounded-full">
              {item.type}
            </p>

            {item.timesUsed > 0 && (
              <p className="px-3 py-1 mr-2 text-xs text-white font-semibold rounded-full bg-cyan-600">
                in {item.timesUsed} outfit(s)
              </p>
            )}
          </div>

          <p className="text-sm">{item.description}</p>
        </div>
      </a>
    </Link>
  );
}
