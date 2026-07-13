import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-2">
          <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-10 space-y-8 text-center sm:text-right sm:ml-auto">
              <h2 className="text-4xl font-bold sm:text-5xl">
                Build Amazing
                <span className="hidden sm:block text-4xl">
                  React Applications
                </span>
              </h2>

              <p className="text-lg text-gray-700">
                Learn modern web development with React, Tailwind CSS, and
                JavaScript. Create responsive, fast, and interactive websites
                while building real-world projects that strengthen your frontend
                development skills.
              </p>

              <Link
                className="inline-flex items-center px-6 py-3 font-medium text-white bg-orange-700 rounded-lg hover:opacity-75 transition"
                to="/about"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Get Started
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoLBFmeKc05zHrgTDJTF1Ybo4GiE7sohgdQn1nNw1f2dOR-SDsvzlUNo-&s=10"
              alt="Developer working on React"
              className="w-45/100  object-cover"
            />
          </div>
        </aside>

        <div className="grid place-items-center sm:mt-20">
          <img
            src="https://www.equinetmedia.com/hubfs/How-to-find-b2b-blog-images.png"
            alt="Modern web development"
            className="rounded-xl shadow-lg"
          />
        </div>

        <section className="py-12 px-6 text-center">
          <h1 className="text-2xl sm:text-5xl font-bold mb-6">
            Learn React. Build Projects. Create Your Future.
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Whether you're just starting your web development journey or looking
            to sharpen your React skills, this platform helps you learn by
            building practical projects. Explore routing, state management,
            APIs, Tailwind CSS, and modern frontend development techniques used
            in real-world applications.
          </p>

          <div className="mt-8">
            <Link
              to="/about"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}