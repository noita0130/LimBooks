// ScrollContainer.jsx
import React from 'react';

const ScrollContainer = ({ children, darkMode }) => {
  return (
    <div 
      className="min-h-screen"
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: darkMode 
          ? 'rgb(82 82 82) rgb(38 38 38)' 
          : 'rgb(163 163 163) rgb(229 229 229)',
      }}
    >
      <style>
        {`
          /* Chrome, Edge, Safari */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: ${darkMode ? 'rgb(38 38 38)' : 'rgb(229 229 229)'};
          }
          ::-webkit-scrollbar-thumb {
            background: ${darkMode ? 'rgb(82 82 82)' : 'rgb(163 163 163)'};
            border-radius: 8px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: ${darkMode ? 'rgb(115 115 115)' : 'rgb(135 135 135)'};
          }

          /* Firefox */
          * {
            scrollbar-width: thin;
            scrollbar-color: ${darkMode 
              ? 'rgb(82 82 82) rgb(38 38 38)' 
              : 'rgb(163 163 163) rgb(229 229 229)'};
          }
        `}
      </style>
      {children}
    </div>
  );
};

export default ScrollContainer;