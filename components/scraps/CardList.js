import { useState } from "react";
import ItemCard from "./ItemCard";
import OutfitCard from "./OutfitCard";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import OrderButton from "./OrderButton";

/**
 * Display a list of item or outfit cards with search and filter
 * @param  {Array} {data}
 */
export default function CardList({
  data,
  isItems,
  title,
  subtitle,
  filterTypes,
  sortOptions,
}) {
  // All these are managed by child components
  const [query, setQuery] = useState("");
  const [typeActive, setTypeActive] = useState("all");
  const [sortActive, setSortActive] = useState("name");
  const [isAscending, setAscending] = useState(true);

  data = getFilteredData(
    data,
    isItems,
    query,
    typeActive,
    sortActive,
    isAscending
  );
  // console.log("Filtered data ", data);

  return (
    <div className="container mx-auto">
      <SearchBar
        query={query}
        setQuery={setQuery}
        types={filterTypes}
        typeActive={typeActive}
        setTypeActive={setTypeActive}
        count={data.length}
      />

      <div className="flex flex-row justify-between items-center mx-4 mt-8 mb-2">
        <div>
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-sm">
            {subtitle}
            <span className="font-bold">{data.length}</span>
          </p>
        </div>

        <div className="flex flex-col items-end md:flex-row md:items-center">
          {/* Sort and Order */}
          <SortDropdown
            options={sortOptions}
            sortActive={sortActive}
            setSortActive={setSortActive}
          />
          <OrderButton isAscending={isAscending} setAscending={setAscending} />
        </div>
      </div>

      {/* Main content lol */}
      {data.map((entry, key) => {
        return isItems ? (
          <ItemCard key={key} item={entry} />
        ) : (
          <OutfitCard key={key} outfit={entry} />
        );
      })}
    </div>
  );
}

// Get either filtered items or outfits based on list type
const getFilteredData = (
  data,
  isItems,
  query,
  typeActive,
  sortActive,
  isAscending
) => {
  if (isItems) {
    return getFilteredItems(data, query, typeActive, sortActive, isAscending);
  } else {
    return getFilteredOutfits(data, query, typeActive, sortActive, isAscending);
  }
};

// Filter and sort by query in name or brand
const getFilteredItems = (
  items,
  query,
  typeActive,
  sortActive,
  isAscending
) => {
  return items
    .filter((item) => {
      const matchQuery =
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.brand.toLowerCase().includes(query.toLowerCase());
      const matchType = item.type === typeActive || typeActive === "all";
      return matchQuery && matchType;
    })
    .sort((a, b) => {
      let comp;
      // Sorting strings needs a custom comparator
      if (sortActive === "name") {
        comp = a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
      } else if (sortActive === "timesUsed") {
        comp = a.timesUsed - b.timesUsed;
      }
      return comp * (isAscending ? 1 : -1);
    });
};

// Filter and sort by query in name
const getFilteredOutfits = (
  outfits,
  query,
  typeActive,
  sortActive,
  isAscending
) => {
  return outfits
    .filter((outfit) => {
      const matchQuery = outfit.name
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchType = outfit.type === typeActive || typeActive === "all";
      return matchQuery && matchType;
    })
    .sort((a, b) => {
      let comp;
      // Sorting strings needs a custom comparator
      if (sortActive === "name") {
        comp = a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
      }
      return comp * (isAscending ? 1 : -1);
    });
};
