import React from 'react';
import SideBar from '../SideBar';
import Header from '../Header';
import Footer from '../Footer';
import './style.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <SideBar />
      <div className="layout__inner">
        <Header />
        <main className="layout__main" style={{ height: '2000px' }}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
