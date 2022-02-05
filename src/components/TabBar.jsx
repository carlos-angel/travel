export const TabBar = ({ children }) => {
  return (
    <div
      id='tab_bar'
      className='fixed bottom-0 left-0 flex items-center justify-center w-full h-16 space-x-8 bg-gray-100 shadow-md dark:bg-gray-700 lg:hidden'
    >
      {children}
    </div>
  );
};

const Link = ({ href, children }) => <a href={href}>{children}</a>;

TabBar.Link = Link;
