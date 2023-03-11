import React from "react"
import logo from "./imgs/logo.svg"
import beachGirl from "./imgs/beach-work.jpg"

function App() {
  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full 2xl:col-span-2">
        <div className="xl:max-w-xl">

          <img className="h-12" src={logo} alt="Workcation"></img>
          <img className="mt-6 rounded-xl shadow-lg  sm:h-64 sm:mt-8 sm:w-full sm:object-cover sm:object-center lg:hidden " src={beachGirl} alt="Woman workcationing on the beach"></img>

          <h1 className="mt-6 text-gray-900 text-2xl font-bold sm:mt-8 sm:text-4xl">You can work from anywhere.<span className="text-indigo-500 block">Take advantage of it.</span></h1>
          <p className="text-gray-600 mt-3 sm:mt-5 sm:text-lg">Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
            nice weather even when you're not on vacation.</p>
          <div>
            <a className="bg-indigo-500 text-white inline-block mt-4 px-3 py-3 rounded-xl uppercase tracking-wider text-xs shadow-lg font-semibold sm:text-base" href="#">Book your escape</a>
          </div>
        </div>

      </div>

      <div className="relative hidden lg:inline">
      <img className="absolute inset-0 h-full w-full object-cover object-center 2xl:col-span-3" src={beachGirl} alt="Woman workcationing on the beach"></img>
      </div>
    </div>
  )
}

export default App;
