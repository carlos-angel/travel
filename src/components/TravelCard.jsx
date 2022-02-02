export const TravelCard = ({ title, description, backgroundImage }) => {
  return (
    <div className='card'>
      <div className={`w-full h-3/5 rounded-t-lg bg-cover bg-${backgroundImage}`}></div>
      <div className='bg-secondary w-full h-2/5 text-white px-4 rounded-b-lg'>
        <p className='font-bold text-xl pt-2'>{title}</p>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  );
};
