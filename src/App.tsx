import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/HomePage';
import ContractsPage from './pages/ContractPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: 'contract/:contractId', element: <ContractsPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
