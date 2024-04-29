import PropTypes from "prop-types";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import { MdEdit } from "react-icons/md";

const ShowData = ({ name, hour, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className="pt-2">
      <span className="capitalize font-black">{name}</span>
      <span className="font-black"> : </span>
      <span className="font-black">{hour}</span>
      <button
        onClick={onIncrement}
        className="text-center border p-2 text-base font-black bg-sky-300 text-neutral-50 hover:bg-sky-500 transition duration-150 ease-out hover:ease-in"
      >
        <IoAddCircleOutline />
      </button>
      <button
        onClick={onDecrement}
        className="text-center border p-2 text-base font-black bg-sky-300 text-neutral-50 hover:bg-sky-500 transition duration-150 ease-out hover:ease-in"
      >
        <FaMinus />
      </button>
      <button
        onClick={onDelete}
        className="text-center border p-2 text-base font-black bg-sky-300 text-neutral-50 hover:bg-sky-500 transition duration-150 ease-out hover:ease-in"
      >
        <MdDelete />
      </button>
    </div>
  );
};

ShowData.propTypes = {
  name: PropTypes.string,
  hour: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ShowData;
