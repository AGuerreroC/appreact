import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Grilla from '../components/grilla';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

function App() {
  return (
    <div className="App mt-5">
      <Header></Header>
      <Grilla></Grilla>
      <Footer></Footer>
    </div>
  );
}

export default App;
