import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/indedx';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) =>
            route.index ? (
              <Route key={index} index element={route.element} />
            ) : (
              <Route key={index} path={route.path} element={route.element} />
            )
          )}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
