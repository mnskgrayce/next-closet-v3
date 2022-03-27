import { useForm } from "react-hook-form";
import Loading from "./Loading";

/**
 * Display and submit changes to single item
 * @param  {Item} item
 */
export default function ItemForm({ item }) {
  if (!item) return <Loading />;

  const createdAt =
    typeof item?.createdAt === "number"
      ? new Date(item.createdAt)
      : item.createdAt.toDate();

  const updatedAt =
    typeof item?.updatedAt === "number"
      ? new Date(item.createdAt)
      : item.createdAt.toDate();

  const { register, handleSubmit } = useForm({
    item,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start">
      {/* Prevent image from shrinking */}
      <div className="w-full md:w-1/2 lg:w-2/3 md:shrink-0 mb-2">
        <div className="flex flex-col items-end">
          <img
            className="w-full aspect-square object-cover"
            src={item.photoURL || "/tshirt.png"}
            alt="product image"
          />
          {/* Image Uploader */}
          <button className="w-fit px-4 py-1 rounded-bl-xl bg-gray-700 hover:bg-gray-800 text-white text-xs md:text-sm">
            Upload Image
          </button>
        </div>
      </div>

      {/* Item form */}
      <div className="w-full md:grow px-4 lg:px-6 xl:px-8 py-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <p className="mb-2">
              <label className="text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                {...register("name", {
                  required: true,
                })}
                className="w-full rounded text-2xl font-medium placeholder-gray-400 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0"
                type="text"
                placeholder="My crisp white t-shirt"
              />
            </p>
            <p className="mb-2">
              <label className="text-sm font-medium mb-1" htmlFor="brand">
                Brand
              </label>
              <input
                id="brand"
                name="brand"
                {...register("brand", {
                  required: false,
                })}
                className="w-full rounded italic placeholder-gray-400 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0"
                type="text"
                placeholder="Uniqlo"
              />
            </p>
            <p className="mb-2">
              <label className="text-sm font-medium mb-1" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                {...register("description", {
                  required: false,
                })}
                rows="3"
                className="w-full rounded text-sm placeholder-gray-400 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0"
                type="text"
                placeholder="This versatile shirt is a wardrobe staple."
              />
            </p>
            <p className="mb-2 flex flex-row justify-between items-center">
              <label className="text-sm font-medium mb-1" htmlFor="type">
                Type
              </label>
              <select
                className="rounded text-sm border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0"
                name="type"
                defaultValue="Top"
                {...register("type")}
              >
                <option value="Top">Top</option>
                <option value="Bottom">Bottom</option>
                <option value="Outerwear">Outerwear</option>
                <option value="Footwear">Footwear</option>
                <option value="Accessory">Accessory</option>
                <option value="Other">Other</option>
              </select>
            </p>
          </fieldset>

          {/* Extra information */}
          <div className="w-full divide-y mb-4">
            <p className="flex flex-row justify-between items-center text-sm py-2">
              <span className="font-medium grow">No. of outfits</span>
              <span>{item.timesUsed}</span>
            </p>
            <p className="flex flex-row justify-between items-center text-sm py-2">
              <span className="font-medium grow">Created at</span>
              <span>{createdAt.toTimeString()}</span>
            </p>
            <p className="flex flex-row justify-between items-center text-sm py-2">
              <span className="font-medium grow">Updated at</span>
              <span>{updatedAt.toTimeString()}</span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-800 text-white text-sm"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
