import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "componets/Router";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
