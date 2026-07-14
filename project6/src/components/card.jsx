import React from "react";

export default function Card() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800">
      <img
        className="h-56 w-full object-cover"
        src="https://www.crio.do/blog/content/images/2021/03/Javascript-projects--React.png"
        alt="React Project"
      />

      <div className="p-6">
        <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
          React + Tailwind CSS
        </span>

        <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
          React Project Showcase
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
          A modern React application built using reusable components,
          Context API, React Hooks, and Tailwind CSS with responsive
          design and dark mode support.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-md bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            React
          </span>

          <span className="rounded-md bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-900 dark:text-sky-300">
            Tailwind
          </span>

          <span className="rounded-md bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
            Context API
          </span>

          <span className="rounded-md bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-300">
            Hooks
          </span>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Status
            </p>
            <p className="font-semibold text-green-600">
              ● Completed
            </p>
          </div>

          <button className="rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}