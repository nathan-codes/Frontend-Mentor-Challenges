
import {useState, useEffect} from "react"

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(true)
    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    }, [])
    

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme","dark")
        }

        else {
             document.documentElement.classList.remove("dark");
             localStorage.setItem("theme", "light");   
        }

    }, [darkMode])


  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" onClick={()=> setDarkMode(!darkMode)}/>
      <div className="w-11 h-6 bg-[#757575] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
    </label>
  );
} 

export default ThemeToggle
