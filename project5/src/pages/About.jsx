import React from 'react'

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://designmodo.com/wp-content/uploads/2013/12/115.jpg"
              alt="React Development"
            />
          </div>

          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>

            <p className="mt-6 text-gray-600">
              React has transformed the way modern web applications are built by
              enabling developers to create fast, interactive, and scalable user
              interfaces. Its component-based architecture encourages code
              reusability, making development more efficient while ensuring
              applications remain easy to maintain and expand. With features
              such as the Virtual DOM, reusable components, and powerful Hooks,
              React delivers outstanding performance and an excellent user
              experience across different devices.
            </p>

            <p className="mt-4 text-gray-600">
              From startups to global enterprises, React is trusted for building
              dynamic web applications that are responsive, reliable, and
              future-ready. Supported by a strong developer community and a rich
              ecosystem of libraries and tools, React continues to evolve,
              empowering developers to build innovative solutions with
              confidence. Whether creating a simple portfolio or a complex
              enterprise platform, React provides the flexibility and
              performance needed to bring ideas to life.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}