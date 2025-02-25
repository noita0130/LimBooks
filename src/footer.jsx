// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LimBooks</h3>
            <p>림버스 컴퍼니의 스토리를 쉽게 읽어보세요.</p>
          </div>
          
          <div className="footer-section">
            <h3>링크</h3>
            <ul>
              <li><a href="/LimBooks">홈</a></li>
              <li><a href="/LimBooks/dialog">대사집</a></li>
              <li><a href="/LimBooks/ministory">미니스토리</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>정보</h3>
            <p>이 사이트는 비공식 팬 페이지입니다.</p>
            <p>림버스 컴퍼니는 Project Moon의 저작물입니다.</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LimBooks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;