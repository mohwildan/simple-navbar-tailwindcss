const Page = async () => {
  return (
    <div className="w-full flex items-center flex-col max-w-screen-lg text-center">
      <div className="md:max-w-4xl tracking-wide capitalize">
        <h1 className="sm:text-6xl text-4xl md:text-7xl font-extrabold">
          first-class Business Countsultan
        </h1>
      </div>
      <div className="max-w-3xl mt-8">
        <p className="text-zinc-500">
          we know how large Lorem ipsum dolor sit amet, qui minim labore
          adipisicing minim sint cillum sint consectetur cupidatat.
        </p>
      </div>
      <div className="mt-5 flex gap-x-4">
        <button className="bg-blue-500 text-white ring-2 hover:ring-blue-700  rounded-md hover:bg-blue-700 transition-all duration-300  py-2 px-4">
          Get Quote Now
        </button>
        <button className="text-blue-500 ring-2 hover:ring-blue-700 rounded-md border border-blue-500 transition-all duration-300  py-2 px-4">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Page;
