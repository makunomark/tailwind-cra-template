import React from "react";
import { Formik } from 'formik';

function LoginForm({ logIn }) {
    return (
        <div className="w-full max-w-md bg-white rounded-lg">
            <form action="" className="px-4 py-4 flex flex-col">
                <label htmlFor="email" className="text-sm block font-bold pb-1">EMAIL ADDRESS</label>
                <input
                    type="email"
                    name="email"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                    placeholder="Johnbull@example.com"
                />
                <label htmlFor="password" className="text-sm block font-bold mt-4 pb-1">PASSWORD</label>
                <input
                    type="password"
                    name="email"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                    placeholder="Enter your password"
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline w-1/3 mt-4"
                    type="button"
                    onClick={logIn}
                >
                    Sign In
              </button>
            </form>
        </div>
    );
}

export default LoginForm;
