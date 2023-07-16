import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';

const Router = () => {
  return (
    <Routes>
      {/* HOME */}
      <Route path='/' element={<HomePage />} />
      <Route path='/Homepage' element={<HomePage />} />

      {/* DETAIL */}
      <Route path='/:userId' element={<DetailPage />} />

      {/* NotFound */}
      {/* <Route path='*' element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default Router;
