import sanFrancisco from 'assets/img/sanFrancisco.jpg';

export const Hero = () => {
  return (
    <div id='home'>
      <div className='w-full h-3/4'>
        <div className='w-full h-full flex flex-col absolute space-y-96 py-4 items-center'>
          <input
            type='search'
            name='search'
            className='outline-none p-3 rounded-full shadow-sm'
            placeholder='San Francisco'
          />
          <button className='bg-white text-xl text-primary font-semibold p-4 w-36 rounded-full shadow-sm'>Explorar</button>
        </div>
        <div className='w-full h-full'>
          <img src={sanFrancisco} alt='san francisco' />
        </div>
      </div>
    </div>
  );
};
