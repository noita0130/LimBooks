// src/components/Footer.jsx
import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer px-4 py-8 ${darkMode ? "bg-neutral-800" : "bg-neutral-300"}`}>
      <div className="footer-container">
        <div className={`copyright-section flex-wrap break-keep footer px-4 py-8
          ${darkMode ? "text-neutral-400" : "text-neutral-700"}`}>
          <p>© 2025 LimBooks</p>
          <p>React + Vite</p>
          <p className='text-xs'>LimBooks는 개인 프로젝트로 공식 서비스가 아니며, 모든 데이터의 권리와 저작권은 Project Moon 에게 있습니다.</p>
          <p>문의사항 : limbooks0130@gmail.com</p>
        </div>
        <div className="footer-links">
        </div>
      </div>
    </footer>
  );
};

export default Footer;