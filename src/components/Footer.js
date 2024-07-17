import { Link, NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bg-white border-t-2 dark:bg-slate-900 dark:border-transparent">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between max-sm:text-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">MyLiBro</Link>. All Rights Reserved.
        </span>
        <ul className="flex gap-8 max-sm:flex-col max-sm:gap-0 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <NavLink to="/" className="hover:underline">Home</NavLink>
            </li>
            <li>
                <NavLink to="movie/top" className="hover:underline">Top Ratings</NavLink>
            </li>
            <li>
                <NavLink to="movie/popular" className="hover:underline">Popular Books</NavLink>
            </li>
            <li>
                <NavLink to="movie/upcoming" className="hover:underline">Upcoming Books</NavLink>
            </li>
        </ul>
      </div>
    </footer>
  )
}
