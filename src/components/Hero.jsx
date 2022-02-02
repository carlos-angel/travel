import sanFrancisco from 'assets/img/sanFrancisco.jpg';

export const Hero = () => {
  return (
    <div id='home'>
      <div className='w-full h-3/4'>
        <div className='w-full h-full flex flex-col absolute space-y-96 py-4 items-center'>
          <input
            type='search'
            name='search'
            className='outline-none p-3 rounded-full shadow-sm transition duration-300 focus-within:shadow-sm focus:right-2 focus:w-11/12'
            placeholder='San Francisco'
          />
          <button className='bg-white text-lg text-primary font-semibold p-4 w-48 rounded-full shadow-sm transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110'>
            Explorar
          </button>
        </div>
        <div className='w-full h-full'>
          <img src={sanFrancisco} alt='san francisco' />
        </div>
      </div>
    </div>
  );
};
