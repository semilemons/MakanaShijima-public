import React from 'react';
import './global.scss';

const Layout = ({children}) => {
  return (
    <div>
      {children}
      
      {/* フッター部分 */}
      <footer className="bg-dark text-white text-center p-3">
        <p>© {new Date().getFullYear()} 四島摩訶那. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;