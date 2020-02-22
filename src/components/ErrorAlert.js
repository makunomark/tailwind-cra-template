import React from "react";

function ErrorAlert({ errorMessage }) {
  return (
    <div className="bg-red-700 max-w-md text-white rounded-lg px-4 py-2 m-2 w-full">
      <p>{errorMessage}</p>
    </div>
  )
}

export default ErrorAlert
