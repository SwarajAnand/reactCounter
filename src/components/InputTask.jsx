import { useEffect, useState } from "react";
import ShowData from "./ShowData";

const InputTask = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [hour, setHour] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("users")) || [];
    setData(userData);
  }, []);

  const handleSubmit = () => {
    if (!value || !hour) return;
    setData([...data, { name: value, hour: parseInt(hour) }]);

    localStorage.setItem(
      "users",
      JSON.stringify([...data, { name: value, hour: parseInt(hour) }])
    );
    setValue("");
    setHour("");
  };

  const handleIncrement = (index) => {
    const updatedData = [...data];
    updatedData[index].hour += 1;
    setData(updatedData);
  };

  const handleDecrement = (index) => {
    // console.log(index);
    const updatedData = [...data];
    if (updatedData[index].hour === 0) return;
    updatedData[index].hour -= 1;
    setData(updatedData);
  };

  console.log("render");

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
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
        {data.map((item, idx) => {
          return (
            <ShowData
              name={item.name}
              hour={item.hour}
              onIncrement={() => handleIncrement(idx)}
              onDecrement={() => handleDecrement(idx)}
              onDelete={() => handleDelete(idx)}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InputTask;
