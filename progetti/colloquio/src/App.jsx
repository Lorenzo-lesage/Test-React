import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router";

import { Home } from './pages/Home';
import { Table } from './pages/Table';

function App() {

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
