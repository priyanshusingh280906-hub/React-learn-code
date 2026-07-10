import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className={ color + " min-w-screen min-h-screen flex justify-center items-space-evenly flex-col gap-100 p-10"}>
        <div className="text-2xl font-bold text-center mb-10 bg-white p-8 rounded-4xl">BACKGROUND COLOR ALTER</div>
        <div className="flex flex-col gap-10 p-4 bg-white rounded-xl shadow-lg">
          <div className="flex gap-5 flex-nowrap">
            <button 
             className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-4xl text-2xl w-full"
             onClick={() => setColor("bg-amber-500")}>
              Amber
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-4xl text-2xl w-full"
              onClick={() => setColor("bg-blue-500")}
            >
              Blue
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-4xl text-2xl w-full"
              onClick={() => setColor("bg-red-500")}
            >
              Red
            </button>
            <button
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-4xl text-2xl w-full"
              onClick={() => setColor("bg-black")}
            >
              Black
            </button>
            <button 
             className="bg-olive-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-4xl text-2xl w-full"
             onClick={() => setColor("bg-olive-500")}>
              Olive 
            </button>
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-4xl text-2xl w-full"
              onClick={() => setColor("bg-purple-500")}
            >
              Purple
            </button>
            <button
              className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-4xl text-2xl w-full"
              onClick={() => setColor("bg-rose-500")}
            >
              Rose
            </button>
            <button
              className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-4xl text-2xl w-full"
              onClick={() => setColor("bg-emerald-500")}
            >
              Emerald
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
