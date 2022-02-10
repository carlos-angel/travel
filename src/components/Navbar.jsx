export const Navbar = ({ children }) => {
  return (
    <nav className='fixed justify-between hidden w-full h-16 p-4 text-xl bg-white lg:flex lg:z-10 dark:bg-gray-800'>
      {children}
    </nav>
  );
};

const Section = ({ children, className }) => (
  <div className={`${className ?? 'flex space-x-4'}`}>{children}</div>
);

const Link = ({ children, href, onClick }) => (
  <a className='font-bold text-primary dark:text-gray-300 dark:hover:text-primary' href={href} onClick={onClick}>
    {children}
  </a>
);

Navbar.Section = Section;
Navbar.Link = Link;
