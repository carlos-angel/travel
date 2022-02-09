import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from 'context/ThemeContext';

export const DarkMode = ({ width, height }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const onClick = () => setTheme(isDark ? 'light' : 'dark');

  return isDark ? (
    <FaSun
      width={width}
      height={height}
      className='text-yellow-400 cursor-pointer fill-current'
      onClick={onClick}
    />
  ) : (
    <FaMoon
      width={width}
      height={height}
      className='text-gray-800 cursor-pointer fill-current'
      onClick={onClick}
    />
  );
};
