import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <div className="bg-gray-700 min-h-screen w-full flex flex-col items-center">
        <div className="w-full flex justify-center items-center">
          <div className="text-4xl w-full font-bold mb-10 bg-amber-300 p-4 rounded-4xl m-4 text-center">
            Counter App
          </div>
        </div>
        <div className="flex flex-col items-center m-10 bg-gray-800 p-10 rounded-4xl w-full max-w-2xl">
          <div className="text-6xl font-bold m-4 bg-amber-50 w-full text-center p-8 rounded-4xl">
            Count: {count}
          </div>
          <div className="flex p-20  justify-center items-center w-full gap-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl text-2xl w-full"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl text-2xl w-full"
              onClick={() => { if (count > 0) setCount(count - 1); }}
            >
              Decrement
            </button>
          </div>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-xl text-2xl w-full"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
