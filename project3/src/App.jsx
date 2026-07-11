import { useState , useCallback, useEffect} from "react";

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [password, setPassword] = useState("");
  const [integer, setInteger] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const generatePassword = useCallback(() => {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*?";

    if (integer) {
      alphabet += numbers;
    }
    if (symbol) {
      alphabet += symbols;
    } 

    let newPassword = "";
    for (let index = 0; index < passwordLength; index++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      newPassword += alphabet[randomIndex];
    }
    setPassword(newPassword);
  }, [passwordLength, integer, symbol]);

  useEffect(() => {
  generatePassword();
}, [generatePassword]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-500 w-full">
      <div className="text-3xl font-bold text-white mt-5 mb-5 w-full text-center bg-gray-700 py-4">
        PASSWORD GENERATOR
      </div>
      <div className="flex flex-col items-center justify-center mt-10 w-3/4 H-3/4 bg-black rounded-lg ">
        <div className="text-2xl font-bold text-white py-2 px-4 rounded w-full text-center m-4">
          <div className="flex items-center gap-2 mb-10 ">
            <input
              type="text"
              value={password}
              readOnly
              className="bg-gray-700 text-white placeholder:text-white border border-gray-500 w-3/4 text-center py-2 px-4 rounded"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={generatePassword}
            >
              Generate Password
            </button>
          </div>
          <input 
          type="range"
          min="8"
          max="100"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
          className="bg-gray-700 text-white placeholder:text-gray-400 border border-gray-500 w-3/4 text-center py-2 px-4 rounded"
          >
          </input>
          <div className="flex items-center gap-2 mb-4 justify-evenly" >
            <div className="flex items-center gap-2">
            <label className="text-white mr-2">Password Length:</label>
            <input
              type="number"
              min="8"
              max="100"
              value={passwordLength}
              onChange={(e) => setPasswordLength(parseInt(e.target.value))}
              className="bg-gray-700 text-white placeholder:text-gray-400 border border-gray-500 "
            />
            </div>
            <div className="flex items-center gap-2">
            <label className="text-white mr-2">Include Numbers:</label>
            <input
              type="checkbox"
              checked={integer}
              onChange={() => {
                setInteger((prev) => !(prev))
              }}
              className="bg-gray-700 text-white placeholder:text-gray-400 border border-gray-500 "
            />
            </div>
            <div className="flex items-center gap-2">
            <label className="text-white mr-2">Include Symbols:</label>
            <input
              type="checkbox"
              checked={symbol}
              onChange={() => {
                setSymbol((prev) => !(prev))
              }}
              className="bg-gray-700 text-white placeholder:text-gray-400 border border-gray-500 "
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
