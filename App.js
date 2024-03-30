import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header'
import Body from './src/components/Body'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';
import UserContext from './src/utils/UserContext';


const AppLayout = (props) => {


  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: 'Harsh vardhan'
    }
    setUserName(data.name)
  }, [])

  console.log(props)
  return (
    <UserContext.Provider value={{ loggedInUser: userName ,setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);