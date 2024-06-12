import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/pages/App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Corredor } from './src/pages/Corredor/corredor.jsx'
import { QuartoYuka } from './src/pages/Quarto03/quarto03.jsx'
import { QuartoBonas } from './src/pages/Quarto02/quarto02.jsx';
import { Entrada } from './src/pages/Entrada/entrada.jsx';
import { PortaCrime } from './src/pages/Crime/crime.jsx';
import { QuartoAlex } from './src/pages/Quarto01/quarto01.jsx';
import { QuartoMiguelito } from './src/pages/Quarto05/quarto05.jsx';
import { QuartoLorencini } from './src/pages/Quarto04/quarto04.jsx';
import ErrorPage from './src/Error/erro.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './src/service/userContext.jsx'
import { ContadorProvider } from './src/service/userContextTimer.jsx';
import { QuemSomos } from './src/pages/QuemSomos/quemSomos.jsx'
import { FinalPrisao } from './src/pages/Final/finalPrisao.jsx';
import { FinalGameOver } from './src/pages/Final/finalGameOver.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/entrada',
    element: <Entrada />,
    errorElement: <ErrorPage />
  },
  {
    path: '/corredor',
    element: <Corredor />,
    errorElement: <ErrorPage />
  },
  {
    path: '/quartoYuka',
    element: <QuartoYuka />,
    errorElement: <ErrorPage />
  },
  {
    path: '/quartoBonas',
    element: <QuartoBonas />,
    errorElement: <ErrorPage />
  },
  {
    path: '/crime',
    element: <PortaCrime />,
    errorElement: <ErrorPage />
  },
  {
    path: '/quartoAlex',
    element: <QuartoAlex />,
    errorElement: <ErrorPage />
  },
  {
    path: '/quartoMiguelito',
    element: <QuartoMiguelito />,
    errorElement: <ErrorPage />
  },
  {
    path: '/quartoLorencini',
    element: <QuartoLorencini />,
    errorElement: <ErrorPage />
  },
  {
    path: '/quemSomos',
    element: <QuemSomos />,
    errorElement: <ErrorPage />
  },
  {
    path: '/finalPrisao',
    element: <FinalPrisao />,
    errorElement: <ErrorPage />
  },
  {
    path: '/finalGameOver',
    element: <FinalGameOver />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ContadorProvider> 
        <RouterProvider router={router} />
        <ToastContainer />
      </ContadorProvider> 
    </UserProvider>
  </React.StrictMode>,
);
