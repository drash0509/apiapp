import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const FetchDataComponent = React.lazy(() => import('./components/FetchDataComponent'));
const UpdateDataComponent = React.lazy(() => import('./components/UpdateDataComponent'));

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Data Fetch and Update Example</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/fetch" element={<FetchDataComponent />} />
            <Route path="/update" element={<UpdateDataComponent />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
