import React, { useState , lazy , Suspense} from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
//import Details from "./Details";
//import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";


const Details = lazy(() => import("./Details"))
const SearchParams = lazy ( () => import ("./SearchParams"))
const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
       <NavBar/>
       <Suspense fallback={ <h1>loading route..</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
       </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));