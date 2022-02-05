import sanFrancisco from 'assets/img/sanFrancisco.jpg';

export const Hero = () => {
  return (
    <div id='home' className='w-full h-full lg:h-128'>
      <div className='w-full h-full'>
        <div className='absolute flex flex-col items-center w-full h-full py-4 space-y-96 lg:space-y-0 lg:items-start lg:pt-48 lg:justify-start'>
          <input
            type='search'
            name='search'
            className='p-3 transition duration-300 rounded-full shadow-sm outline-none focus-within:shadow-sm focus:right-2 focus:w-11/12 lg:hidden'
            placeholder='San Francisco'
          />
          <div className='hidden h-auto pb-6 lg:w-2/5 lg:flex'>
            <p className='ml-16 text-4xl font-bold text-gray-700'>¡Encuentra más ubicaciones como esta!</p>
          </div>
          <button className='w-48 p-4 text-lg font-semibold transition-all duration-500 ease-in-out transform bg-white rounded-full shadow-sm lg:ml-16 text-primary hover:bg-primary hover:text-white hover:-translate-y-1 hover:scale-110'>
            Explorar
          </button>
        </div>
        <div className='w-full h-full lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center'>
          <img className='lg:hidden' src={sanFrancisco} alt='san francisco' />
        </div>
      </div>
    </div>
  );
};
