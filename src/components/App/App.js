import './App.css';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom'

import Title from '../Title/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
