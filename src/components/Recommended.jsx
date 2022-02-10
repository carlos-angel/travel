import React from 'react';

export const Recommended = ({children, title, id}) => {
  return (
    <section id={id} className='w-full h-auto'>
      <p className='pt-6 pl-6 text-3xl font-semibold text-primary dark:text-gray-300'>
        {title}
      </p>
      <div className='flex items-center w-auto px-6 mt-6 space-x-4 overflow-x-auto h-96 overscroll-x-contain lg:space-x-6 scrollbar'>
        {children}
      </div>
    </section>
  );
};
