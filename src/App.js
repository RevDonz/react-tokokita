import { Hero, Navbar } from './components'
import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
      document.querySelector('html').classList.add('dark');
    } else {
      setDarkMode(false);
      document.querySelector('html').classList.remove('dark');
    }
  }, []);

  function toggleDarkMode() {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.remove('dark');
      setDarkMode(false);
      localStorage.setItem('theme', 'light');
    } else {
      document.querySelector('html').classList.add('dark');
      setDarkMode(true);
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <div>
      <div className="fixed right-0 top-40 ">
        <button className="p-4 focus:outline-none bg-teal-500 rounded-l-md" onClick={toggleDarkMode} type="button">
          
          {darkMode ? (
            <FaSun className="text-grey-500 dark:text-white" />
          ) : (
            <FaMoon className="text-grey-500 dark:text-white" />
          )}
        </button>
      </div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
