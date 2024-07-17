import { Routes, Route } from "react-router-dom";
import { BookList, BookDetails, SearchBook, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
            <Route path="/" element={<BookList apiPath="movie/now_playing" place="Home" title="Home" />} />
            <Route path="movie/:id" element={<BookDetails />} />
            <Route path="movie/popular" element={<BookList apiPath="movie/popular" place="Popular Movies" title="Popular" />} />
            <Route path="movie/top" element={<BookList apiPath="movie/top_rated" place="Top Rated Movies" title="Top Rated" />} />
            <Route path="movie/upcoming" element={<BookList apiPath="movie/upcoming" place="Upcoming Movies" title="Upcoming"/>} />
            <Route path="search" element={<SearchBook apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound title="Page Not Found" />} />
        </Routes>
    </div>
  )
}


