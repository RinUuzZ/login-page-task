import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import ListViewPage from './Components/ListViewPage';
import DetailViewPage from './Components/DetailViewPage';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/detail/:id" element={<DetailViewPage />} />
        <Route path="/list" element={<ListViewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
