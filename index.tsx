import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Prepare the document for React mount
// We need to clear the static content provided in index.html to avoid duplication
// and to strictly follow the prompt's instruction to keep index.html as is.
const setupRoot = () => {
  // Clear existing body content but keep script tags if needed or just append root
  document.body.innerHTML = ''; 
  
  // Create root div
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);

  const root = ReactDOM.createRoot(rootDiv);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

setupRoot();
