import { useState } from 'react'
import { Routes, Route, Outlet } from "react-router";

import { Home } from '../pages/Home';
import { Table } from '../pages/Table';

export function Layout() {

  return (

    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/table" element={<Table />} />
      </Routes>
      
    </div>
  )
}

