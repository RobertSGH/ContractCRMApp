import { ReactNode } from 'react';
import '../styles/Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='layout'>
      <header className='layout-header'>
        <h1>Contract Management System</h1>
      </header>
      <main className='layout-main'>{children}</main>
      <footer className='layout-footer'>
        <p>&copy; 2024 Omega React Task</p>
      </footer>
    </div>
  );
};

export default Layout;
