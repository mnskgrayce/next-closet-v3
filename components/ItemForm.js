import moment from "moment";
import { useForm } from "react-hook-form";
import { addItem, deleteItem, updateItem } from "../lib/api";
import Loading from "./Loading";

/**
 * Display and submit changes to single item
 * @param  {Item} item
 */
export default function ItemForm({ item }) {
  if (!item) return <Loading />;

  const createdAt =
    typeof item.createdAt === "number"
      ? new Date(item.createdAt)
      : item.createdAt.toDate();

  const updatedAt =
    typeof item.updatedAt === "number"
      ? new Date(item.updatedAt)
      : item.updatedAt.toDate();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: item,
  });

  const onSubmit = (data) => {
    // Without ID means object not exist yet
    if (!data.id) addItem(data);
    else updateItem(data);
  };

  const onDelete = () => {
    deleteItem(item);
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
            <div className="mb-2">
              <label className="text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                {...register("name", {
                  maxLength: { value: 50, message: "Name is too long" },
                  minLength: { value: 3, message: "Name is too short" },
                  required: { value: true, message: "Name is required" },
                })}
                className="w-full rounded text-2xl font-medium placeholder-gray-400 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0"
                type="text"
                placeholder="My Crisp White T-Shirt"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-2">
              <label className="text-sm font-medium mb-1" htmlFor="brand">
                Brand
              </label>
              <input
                id="brand"
                name="brand"
                {...register("brand", {
                  required: false,
                  maxLength: { value: 255 },
                })}
                className="w-full rounded italic placeholder-gray-400 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0"
                type="text"
                placeholder="N/A"
              />
            </div>

            <div className="mb-2">
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
            </div>

            <div className="mb-2 flex flex-row justify-between items-center">
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
            </div>
          </fieldset>

          {/* Extra information */}
          <div className="w-full divide-y mb-4">
            <p className="flex flex-row justify-between items-center text-sm py-2">
              <span className="font-medium grow">No. of outfits</span>
              <span>{item.timesUsed}</span>
            </p>
            <p className="flex flex-row justify-between items-center text-sm py-2">
              <span className="font-medium grow">Created at</span>
              <span>{moment(createdAt).format("hh:mmA DD/MM/YYYY")}</span>
            </p>
            <p className="flex flex-row justify-between items-center text-sm py-2">
              <span className="font-medium grow">Updated at</span>
              <span>{moment(updatedAt).format("hh:mmA DD/MM/YYYY")}</span>
            </p>
          </div>

          <button
            type="submit"
            disabled={!isValid || !isDirty}
            className="w-full px-4 py-2 mb-2 text-sm rounded-full border-2 border-gray-700 hover:border-gray-800 bg-gray-700 hover:bg-gray-800 text-white disabled:opacity-70 disabled:hover:bg-gray-700 disabled:cursor-not-allowed"
          >
            Save Changes
          </button>

          {/* Only for existing item */}
          {item.id && (
            <button
              onClick={onDelete}
              className="w-full px-4 py-2 mb-2 text-sm rounded-full border-2 border-gray-700 hover:border-red-500 hover:text-red-500"
            >
              Delete Item
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
