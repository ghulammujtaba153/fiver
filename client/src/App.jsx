
import './App.scss'
import Footer from './components/footer/Footer';

import Navbar from './components/home/Navbar';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs';
import Home from './pages/home/Home'
import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import MyGigs from './pages/myGigs/MyGigs';
import Orders from './pages/orders/Orders';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Add from './pages/add/Add';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'



function App() {
  
  const queryClient = new QueryClient()
  const Layout=()=>{
    return (
      <div className='app'>
        <QueryClientProvider client={queryClient}>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </QueryClientProvider>
      </div>
    )
  };

  const router=createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/gigs',
          element: <Gigs/>
        },
        {
          path: '/gigs/:id',
          element: <Gig/>
        },
        {
          path: '/mygigs',
          element: <MyGigs/>
        },
        {
          path: '/orders',
          element: <Orders/>
        },
        {
          path: '/messages',
          element: <Messages/>
        },
        {
          path: '/messages/:id',
          element: <Message/>
        },
        {
          path: '/add',
          element: <Add/>
        }

      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>     
    </>
  )
}

export default App
