import { useForm } from "react-hook-form";
import { ItemCard } from "./ItemCardGrid";

/**
 * Display and submit changes to single outfit
 * @param  {Outfit} outfit
 */
export default function OutfitForm({ outfit }) {
  if (!outfit) return <Loading />;

  const { register, handleSubmit } = useForm({
    outfit,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start">
      {/* Item horizontal scroll */}
      <div className="w-full md:w-1/2 lg:w-2/3 md:shrink-0 mb-2 bg-gray-50">
        <ItemsBand items={outfit.items} />
      </div>

      {/* Form */}
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
                placeholder="My awesome fit"
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
                placeholder="This basic fit is a great foundation to build on."
              />
            </p>
            <p className="mb-2 flex flex-row justify-between items-center">
              <label className="text-sm font-medium mb-1" htmlFor="type">
                Type
              </label>
              <select
                className="rounded text-sm border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0"
                name="type"
                defaultValue="Everyday"
                {...register("type")}
              >
                <option value="Everyday">Everyday</option>
                <option value="Formal">Formal</option>
                <option value="Athletic">Athletic</option>
                <option value="Sleep">Sleep</option>
                <option value="Party">Party</option>
                <option value="Swimwear">Swimwear</option>
              </select>
            </p>
          </fieldset>

          {/* Extra information */}
          <div className="w-full divide-y mb-4">
            <p className="flex flex-row justify-between items-center text-sm py-2">
              <span className="font-medium grow">No. of items</span>
              <span>{outfit.items.length}</span>
            </p>
            <p className="flex flex-row justify-between items-center text-sm py-2">
              <span className="font-medium grow">Date added</span>
              <span>01/01/1970</span>
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

const ItemsBand = ({ items }) => {
  return (
    <div className="flex flex-row flex-nowrap justify-start items-stretch overflow-x-scroll">
      {items.map((item, key) => {
        return (
          <div key={key} className="w-64 lg:w-72 flex-none mr-2 last:mr-0">
            <ItemCard item={item} />
          </div>
        );
      })}
    </div>
  );
};
