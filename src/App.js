import React from "react";

function App() {
  return (
    <div className="App">
      <div className="bg-gray-200 h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg">
          <form action="" className="px-4 py-4 flex flex-col pt-8">
            <div className="px-4 pb-4">
              <label htmlFor="email" className="text-sm block font-bold">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                placeholder="Johnbull@example.com"
              />
            </div>
            <div className="px-4 pb-4">
              <label htmlFor="password" className="text-sm block font-bold">
                PASSWORD
              </label>
              <input
                type="password"
                name="email"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/3 mx-4 mt-2"
              type="button"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
