import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";

export const BookList = ({apiPath, place, title}) => {

  const  { data: movies }  = useFetch(apiPath)

  useTitle(title);
  
  return (
    <main className="flex-grow w-screen min-h-screen px-4 md:w-4/5 md:px-0 mx-auto">
      <section className="max-w-7xl mb-7 mx-auto">
      <h1 className="md:text-3xl text-xl dark:text-white m-3">{place}</h1>
        <div className="flex justify-start flex-wrap other:justify-evenly">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}

