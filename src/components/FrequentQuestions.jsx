export const FrequentQuestions = ({ children }) => {
  return (
    <div id='faqs' className='w-full h-full'>
      <div className='w-full h-full px-6 flex flex-col space-y-4'>
        <p className='text-3xl text-primary font-semibold mt-6'>FAQS</p>
        {children}
      </div>
    </div>
  );
};

const FQA = ({ title, description }) => (
  <div>
    <p className='text-xl font-semibold text-primary'>{title}</p>
    <p className='text-md pt-2'>{description}</p>
  </div>
);

FrequentQuestions.FQA = FQA;
