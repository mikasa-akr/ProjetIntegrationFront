import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppContent from './component/AppContent.js';
function App() {
  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col">
            <AppContent />
          </div>
        </div>
      </div>
  );
  }
export default App;
