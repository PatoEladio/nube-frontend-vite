import { ChakraProvider } from '@chakra-ui/react';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';

import Login from './pages/login';
import Home from './pages/index';
import Cloud from './pages/cloud';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cloud" element={<Cloud />}></Route>
          <Route
            path="*"
            element={
              <div>
                <p>Page 404</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </UserContextProvider>
);
