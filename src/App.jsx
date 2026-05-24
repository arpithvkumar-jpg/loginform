import react from 'react';
import Sidebar from './pages/sidebar';

import Home from './pages/home';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;