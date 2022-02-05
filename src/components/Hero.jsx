export const Hero = ({ children }) => {
  return (
    <div
      id='home'
      className='w-full bg-center bg-cover h-3/4 bg-sanFrancisco lg:bg-sanFranciscoDesktop'
    >
      <div className='absolute flex flex-col items-center w-full h-full py-4 space-y-96 lg:space-y-0 lg:items-start lg:pt-48 lg:justify-start'>
        {children}
      </div>
    </div>
  );
};

const Search = ({ name, placeholder }) => (
  <input
    type='search'
    name={name}
    className='p-3 transition duration-300 rounded-full shadow-sm outline-none focus-within:shadow-sm focus:right-2 focus:w-11/12 lg:hidden'
    placeholder={placeholder}
  />
);

const ButtonExplore = ({ title }) => (
  <button className='w-48 p-4 text-lg font-semibold transition-all duration-500 ease-in-out transform bg-white rounded-full shadow-sm lg:ml-16 text-primary hover:bg-primary hover:text-white hover:-translate-y-1 hover:scale-110'>
    {title}
  </button>
);

const Paragraph = ({ content }) => (
  <div className='hidden h-auto pb-6 lg:w-2/5 lg:flex'>
    <p className='ml-16 text-4xl font-bold text-gray-700'>{content}</p>
  </div>
);

Hero.Search = Search;
Hero.ButtonExplore = ButtonExplore;
Hero.Paragraph = Paragraph;
