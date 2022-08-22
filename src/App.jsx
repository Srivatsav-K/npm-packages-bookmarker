import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
//----------------------------------------------------------------------------------
import AddFavourite from "./pages/add-favourite/AddFavourite";
import Home from "./pages/home/Home";
//----------------------------------------------------------------------------------

function App() {
  const favPackages = useSelector((state) => state.favPackages)

  useEffect(() => {
    localStorage.setItem('favPackages', JSON.stringify(favPackages))
  }, [favPackages])

  return (
    <div className="mx-36 mt-10">

      <Route path='/' component={Home} exact />
      <Route path='/add-favourite' component={AddFavourite} />
    </div>
  );
}

export default App;
