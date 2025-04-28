import { useState } from "react";

const Container = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value.target.value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="bg-black h-140 w-70 rounded-xl text-white flex text-2xl justify-center">
      <div className=" w-full">
        <div className="flex justify-center mt-4 font-bold">Calculator</div>
        <div className="h-[85px] border-2 rounded-sm px-2 py-5 my-3 mx-5 bg-indigo-900 text-white text-right font-bold text-4xl">
          {input}
        </div>
        <div className="mt-6 ">
          <div className="font-bold">
            <div className="flex w-[90%] mx-auto justify-center">
              <button
                onClick={handleClick}
                value={9}
                className="border-2 p-4 rounded mx-2 cursor-pointer hover:bg-white hover:text-black"
              >
                9
              </button>
              <button
                onClick={handleClick}
                value={8}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                8
              </button>
              <button
                onClick={handleClick}
                value={7}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                7
              </button>
              <button
                onClick={handleClick}
                value={"+"}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                +
              </button>
            </div>
            <div className="flex w-[90%] mx-auto justify-center mt-2">
              <button
                onClick={handleClick}
                value={6}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                6
              </button>
              <button
                onClick={handleClick}
                value={5}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                5
              </button>
              <button
                onClick={handleClick}
                value={4}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                4
              </button>
              <button
                onClick={handleClick}
                value={"-"}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                -
              </button>
            </div>
            <div className="flex w-[90%] mx-auto justify-center mt-2">
              <button
                onClick={handleClick}
                value={3}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                3
              </button>
              <button
                onClick={handleClick}
                value={2}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                2
              </button>
              <button
                onClick={handleClick}
                value={1}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                1
              </button>
              <button
                onClick={handleClick}
                value={"*"}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                *
              </button>
            </div>
            <div className="flex w-[90%] mx-auto justify-center mt-2">
              <button
                onClick={handleClick}
                value={0}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                0
              </button>
              <button
                onClick={handleClick}
                value={"."}
                className="border-2 px-5 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                .
              </button>
              <button
                onClick={handleEqual}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                =
              </button>
              <button
                onClick={handleClick}
                value={"/"}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                /
              </button>
            </div>
            <div className="flex w-[90%] mx-auto justify-center mt-2">
              <button
                onClick={handleClear}
                className="border-2 p-4 rounded mx-2 cursor-pointer  hover:bg-white hover:text-black"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
