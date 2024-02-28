import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global_style';
import CreateAccount from './pages/create_account/Create_Account';
import Home from './pages/home/Home';
import { theme } from './theme';


const router = createBrowserRouter([
  {
    path: "/",
    element:<CreateAccount/>,
  },

  {
    path: "home",
    element: <Home/>
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
