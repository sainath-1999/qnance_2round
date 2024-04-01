import { createBrowserRouter } from 'react-router-dom';
import OrdersHome from './pages/orders';
import App from './App';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/orders',
    element: <OrdersHome />,
  },
]);
