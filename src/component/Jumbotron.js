import React from "react";
import SearchBar from "./SearchBar";

const Jumbotron = () => {
  const jumbotronTextColor = "text-white";
  return (
    <>
      <section className="relative bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 min-h-screen bg-blend-multiply z-10">
        <div className="absolute inset-0 flex items-center justify-center md:ml-20 max-w-2xl mx-10 text-center md:text-left min-h-screen">
          <div>
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                Your Gateway to Career Opportunities
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-300 ">
                Explore a wide range of job vacancies from leading companies and
                industries. Whether you're an experienced professional or just
                starting your career, we have opportunities for you. Take the
                next step towards your dream job.
              </p>
            </div>
            <div className="w-full">
              <SearchBar textColor={jumbotronTextColor} />
            </div>
          </div>
        </div>
      </section>

      {/* <form
        onSubmit={handleSearch}
        className="flex justify-center mx-auto w-1/2"
      >
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            onChange={handleChangeSearch}
            type="text"
            className="appearance-none bg-transparent px-4 py-2 w-full focus:outline-none border-2 rounded-lg text-white text-lg"
            placeholder="Search Job Vacancy..."
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="mr-2 -ml-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Search
        </button>
      </form> */}
    </>
  );
};

export default Jumbotron;
