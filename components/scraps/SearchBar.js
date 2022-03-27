/**
 * Search bar with query and dynamic filter buttons
 * @param  {string} {query
 * @param  {function} setQuery
 * @param  {string} typeActive
 * @param  {function} setTypeActive
 * @param  {number} count
 * @param  {Array} types}
 */
export default function SearchBar({
  query,
  setQuery,
  types,
  typeActive,
  setTypeActive,
  count,
}) {
  return (
    <div className="max-w-full h-fit p-4 mx-4 flex flex-col bg-gray-50 rounded border">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="bg-white p-2 mb-2 rounded border focus:border focus:ring-2 focus:ring-cyan-400"
      />

      <div className="max-w-full flex flex-row flex-wrap items-center mb-2">
        <TypeButtonList
          types={types}
          typeActive={typeActive}
          setTypeActive={setTypeActive}
        />
      </div>

      <p className="tracking-tight">
        Showing <span className="font-bold">{count}</span> result(s) of type{" "}
        <span className="font-bold capitalize">{typeActive}</span> matching{" "}
        <span className="font-bold">"{query}"</span>
      </p>
    </div>
  );
}

// Generate buttons based on list of types
const TypeButtonList = ({ types, typeActive, setTypeActive }) => {
  const buttons = types.map((type, key) => {
    return (
      <TypeButton
        type={type}
        typeActive={typeActive}
        setTypeActive={setTypeActive}
        key={key}
      />
    );
  });
  return <ul>{buttons}</ul>;
};

// Button with type and active state
const TypeButton = ({ type, typeActive, setTypeActive }) => {
  return (
    <button
      onClick={() => setTypeActive(type)}
      className={`px-3 py-1 m-1 text-sm font-semibold capitalize tracking-wide rounded-full border border-gray-500 ${
        type === typeActive
          ? "bg-cyan-400 text-white"
          : "bg-transparent hover:bg-gray-200"
      }`}
    >
      {type}
    </button>
  );
};
