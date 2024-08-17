import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ListOfLanguages from "./ListOfLanguages";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        
        <Routes>
          <Route path={`/`} element={<ListOfLanguages />} />
         
        </Routes>
        
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
