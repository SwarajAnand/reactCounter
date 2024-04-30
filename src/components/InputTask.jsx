import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ShowData from "./ShowData";

const InputTask = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [value, setValue] = useState("");
  const [hour, setHour] = useState("");

  useEffect(() => {
    updateLocalData();
  }, [data]);

  const updateLocalData = () => {
    localStorage.setItem("users", JSON.stringify(data));
  };

  const handleSubmit = () => {
    if (!value || !hour) return;
    let id = uuidv4();
    setData([...data, { id, name: value, hour: parseInt(hour) }]);
    setValue("");
    setHour("");
  };

  const handleIncrement = (index) => {
    const updatedData = [...data];
    updatedData.map((ele) => {
      ele.id === index && (ele.hour += 1);
    });
    setData(updatedData);
  };

  const handleDecrement = (index) => {
    const updatedData = [...data];
    updatedData.map((ele) => {
      ele.id === index && (ele.hour === 0 ? ele.hour : (ele.hour -= 1));
    });
    setData(updatedData);
  };

  const handleEdit = (index) => {
    if (value || hour) {
      return;
    }
    const updatedData = [...data];
    let editData = updatedData.find((ele) => {
      return ele.id === index;
    });

    setValue(editData.name);
    setHour(editData.hour);

    setData(updatedData);
    handleDelete(index);
  };

  const handleDelete = (index) => {
    const updatedData = [...data];
    console.log(index);

    const filterData = updatedData.filter((ele) => {
      return ele.id !== index;
    });
    console.log(filterData);
    setData(filterData);
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold text-red-500">
        Geekster Education Planner
      </h1>
      <input
        className="p-2 outline-none border border-sky-500 m-4"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Subject"
      />

      <input
        className="p-2 outline-none border border-sky-500 m-4"
        type="number"
        value={hour}
        onChange={(e) => setHour(e.target.value)}
        placeholder="Hours"
      />
      <button
        onClick={handleSubmit}
        className=" p-2 w-1/6 text-base font-black bg-sky-300 text-neutral-50 hover:bg-sky-500 transition duration-150 ease-out hover:ease-in"
      >
        ADD
      </button>
      <div className="d w-1/2 m-auto">
        {data.map((item) => {
          return (
            <ShowData
              name={item.name}
              hour={item.hour}
              onIncrement={() => handleIncrement(item.id)}
              onDecrement={() => handleDecrement(item.id)}
              onDelete={() => handleDelete(item.id)}
              onEdit={() => handleEdit(item.id)}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InputTask;
