import { Button } from "../components";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle"

export const PageNotFound = ({title}) => {

  useTitle(title);

  return (
    <main className="flex-grow w-screen min-h-screen px-4 md:w-4/5 md:px-0 mx-auto">
      <div className="mt-8 dark:text-blue-500">
        <p className="text-7xl">404 Error!</p>
        <p className="text-3xl mt-4">Page Not Found!</p>
        <p className="text-sm text-gray-200 mt-4">We are sorry, the page you requested could not be found. Please go back to the home page.</p>
        <Link to="/">
          <Button>&lt; Back to Home</Button>
        </Link>
      </div>
    </main>
  )
}
