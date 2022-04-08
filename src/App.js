import * as React from 'react';
import Home from './components/Section0';
import Slide from './components/Carroussel';
import Produtos from './components/Product';
import styles from './components/Module.css';
import Cartao from './components/Products';
import ContactUs from "./components/ContactUs";
import './index.css'
import './App.css'
import Dialog from './components/Cartoes'
import { Router } from '@mui/icons-material';




function App() {
  return (

    <div>
     
    <Home />
    <Slide />
    <Dialog />
  <div className='container mt-5 carousel'>
    <Cartao />
  </div>
    <Produtos img="img/transferir.jpeg" nome="Iphone 12 Azul" valor="780.000,00" descrição="Novo na caixa, está sujeito a negociações" />
    <Produtos img="img/images.jpeg" nome="SamSung A12 Azul" valor="80.000,00" descrição="Telemóvel 2ª mão, usado por menos de 2semanas" />
    <Produtos img="img/transferir2.jpeg" nome="Nokia" valor="34.900,00" descrição="Novo, entra 2 chips" />
    <ContactUs />
  
    </div>
    
  );
}
export default App;
