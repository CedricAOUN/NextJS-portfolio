export const LanguageSelector = () => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col">
        <h1 className="text-center text-xl h-[3rem] font-bold py-2 shadow-md shadow-inner shadow-xl bg-gray-900 text-white">
          Language:
        </h1>
        <div className="flex justify-evenly items-center bg-gray-500 h-[calc(100%-3rem)]">
          <button className="h-full w-full hover:bg-gray-700 border-r-2 btn-shadow transition-colors duration-200">
            <p
              className='lg:text-8xl md:text-4xl sm:text-2xl font-extrabold flag-bg bg-[url("https://media.istockphoto.com/id/1063022726/video/french-flag-waving-in-wind-video-footage-full-hd-realistic-french-flag-background-france-flag.jpg?s=640x640&k=20&c=QVWVJP9LDrR4-YV6zYr1wsIVfzpwY_OHFLuzqx04o7o=")]
                bg-no-repeat bg-center text-transparent bg-auto bg-[size:7rem] sm:bg-[size:10rem] md:bg-[size:14rem] lg:bg-[size:32rem]'
            >
              FRANÇAIS
            </p>
          </button>
          <button className="h-full w-full hover:bg-gray-700 border-l-2 btn-shadow transition-colors duration-200">
            <p
              className='lg:text-8xl md:text-4xl sm:text-2xl font-extrabold flag-bg bg-[url("https://media.istockphoto.com/id/1156722488/photo/usa-or-american-flag-background.jpg?s=612x612&w=0&k=20&c=qUKPOuzXDoWkN0Cq-UTzJ-mHRsGNo5PgHeZ3WyqOkUo=")]
                bg-no-repeat bg-center text-transparent bg-cover bg-[size:7rem] sm:bg-[size:10rem] md:bg-[size:14rem] lg:bg-[size:32rem]'
            >
              ENGLISH
            </p>
          </button>
        </div>
      </div>
    </>
  );
};
