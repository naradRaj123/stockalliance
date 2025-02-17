"use client"
const MainContantForm = () => {
  return (
    <div className="flex justify-center items-center px-4 md:px-0 py-10">
      <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black dark:text-white">
          Fill this form to contact
        </h2>

        <form>
          <div className="space-y-4">
            {/* Name Field */}
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:text-white"
            />

            {/* Number Field */}
            <input
              type="text"
              placeholder="Number"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:text-white"
            />

            {/* Email Field */}
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:text-white"
            />

            {/* City Field */}
            <input
              type="text"
              placeholder="City"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:text-white"
            />

            {/* Occupation Field */}
            <input
              type="text"
              placeholder="Occupation"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainContantForm;
