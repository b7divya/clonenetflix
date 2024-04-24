import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Enjoy from './Components/Enjoy/Enjoy';
import Download from './Components/Download/Download';
import Watch from './Components/Watch/Watch';
import Create from './Components/Create/Create';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Enjoy />
      <Download />
      <Watch />
      <Create />
      <Faq />
      <Footer />
    </div>
  )
}

export default App;
