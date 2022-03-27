import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpAZ, faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";

/**
 * @param  {boolean} {isAscending
 * @param  {function} setAscending}
 */
export default function OrderButton({ isAscending, setAscending }) {
  return (
    <button
      onClick={() => setAscending(!isAscending)}
      className={`text-sm font-semibold capitalize tracking-wide text-rose-500 hover:text-rose-700 md:ml-2`}
    >
      {isAscending ? (
        <span>
          ASC
          <FontAwesomeIcon className="ml-1" icon={faArrowDownAZ} />
        </span>
      ) : (
        <span>
          DSC
          <FontAwesomeIcon className="ml-1" icon={faArrowUpAZ} />
        </span>
      )}
    </button>
  );
}
