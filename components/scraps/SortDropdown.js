import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

/**
 * Sort dropdown with dynamic options (need title and property name)
 * @param  {string, string} {options
 * @param  {string} sortActive
 * @param  {function} setSortActive}
 */
export default function SortDropdown({ options, sortActive, setSortActive }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="w-32 h-8 flex flex-col rounded border overflow-visible">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full h-full flex justify-between items-center text-sm font-medium tracking-wide px-2 py-1 hover:bg-gray-50 rounded"
      >
        <span>Sort By</span>
        {collapsed ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>

      {collapsed && (
        <div className="bg-white rounded-b border divide-y z-50">
          <SortOptions
            options={options}
            sortActive={sortActive}
            setSortActive={setSortActive}
          />
        </div>
      )}
    </div>
  );
}

// Generate dropdown based on list of options
const SortOptions = ({ options, sortActive, setSortActive }) => {
  const bars = options.map((option, key) => {
    return (
      <SortButton
        title={option.title}
        type={option.type}
        sortActive={sortActive}
        setSortActive={setSortActive}
        key={key}
      />
    );
  });
  return <ul>{bars}</ul>;
};

const SortButton = ({ title, type, sortActive, setSortActive }) => {
  return (
    <button
      onClick={() => {
        setSortActive(type);
      }}
      className={`text-sm text-left font-light p-2 w-full ${
        type === sortActive ? "bg-gray-200" : "hover:bg-gray-100"
      }`}
    >
      {title}
    </button>
  );
};
