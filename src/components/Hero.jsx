import sanFrancisco from 'assets/img/sanFrancisco.jpg';

export const Hero = () => {
  return (
    <div id='home'>
      <div className='w-full h-3/4'>
        <div className='w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-20 lg:justify-start'>
          <input
            type='search'
            name='search'
            className='outline-none p-3 rounded-full shadow-sm transition duration-300 focus-within:shadow-sm focus:right-2 focus:w-11/12 lg:hidden'
            placeholder='San Francisco'
          />
          <div className='hidden h-auto pb-6 lg:w-2/5 lg:flex'>
            <p className='text-gray-700 text-4xl ml-16 font-bold'>¡Encuentra más ubicaciones como esta!</p>
          </div>
          <button className='lg:ml-16 bg-white text-lg text-primary font-semibold p-4 w-48 rounded-full shadow-sm transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110'>
            Explorar
          </button>
        </div>
        <div className='w-full h-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center'>
          <img className='lg:hidden' src={sanFrancisco} alt='san francisco' />
        </div>
      </div>
    </div>
  );
};
