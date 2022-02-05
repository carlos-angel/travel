import { HomeIcon, MoonIcon, SearchIcon, HeartIcon, UserIcon } from '../components/icons';

export const Navbar = ({ children }) => {
  return (
    <nav className='fixed items-center justify-between hidden w-full p-4 bg-white h-14 lg:flex lg:z-10'>
      {children}
    </nav>
  );
};

const Logo = ({ className, children }) => (
  <div className={`${className ?? 'w-auto h-auto'}`}>{children}</div>
);

const Links = ({ className, children }) => (
  <div className={`${className ?? 'flex space-x-8'}`}>{children}</div>
);

const BoxIcons = ({ className, children }) => (
  <div className={`${className ?? 'flex space-x-4'}`}>{children}</div>
);

Navbar.Logo = Logo;
Navbar.Links = Links;
Navbar.BoxIcons = BoxIcons;
