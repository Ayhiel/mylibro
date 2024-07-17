import { AllRoutes } from "./routes/AllRoutes"; 
import { Header, Footer } from "./components"; 
import './App.css';

function App() {
  return (
    <div className="w-screen mx-auto flex flex-col justify-between min-h-screen">
        <Header />
        <AllRoutes />
        <Footer />
    </div>
  );
}

export default App;
