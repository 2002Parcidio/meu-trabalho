import React from 'react';
import styles from './component/Module.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Router } from 'react-router-dom';
import styles from './component/Module.css'
import Compra from './Pages/Compra';
import Venda from './Pages/Vendas';
import Netflix from './Pages/Netflix';

function Home() {

  return ( 
  <Router> 
    <div class="flex">
      <div class="logo">
        <a href="#">BuyMore</a>
           </div>
            <div class="" id=''>
            <ul class="nav-list">
            <li><Link to="/">Vender</Link></li>
            <li><Link to="/Comprar">Comprar</Link></li>
            <li><Link to="/Netflix">Netflix</Link></li>
            <li><Link to="/Apoio ao Cliente">Apoio ao cliente</Link></li>
            </ul>
            </div>
         </div>
            <Switch>
                <Route Exact path='/'>
                <Home />
                </Route>
                <Route path='/vender'>
                <Vender />
                </Route>
                <Route path='/comprar'>
                <Comprar />
                </Route>
                <Route path='/apoio'>
                <Apoio />
                </Route>
            </Switch>

         </Router>         
)
};
export default Home;

<Dialog />








import React from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    function enviarEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_n2brc0g', e.target, 'kpI_-XyAKb6kTekAN')
      .then((result) => {
          alert('Mensagen enviada com sucesso! :)')
      }, (error) => {
          alert(error.message)
      });
      e.target.reset();
    
}
    return (
        <div>
            <div className="container">
                <form onSubmit={enviarEmail}>
                    <div className='row pt-5 mx-auto'>
                        <div className='col-lg-8 col-sm-12 form-group mx-auto'>
                            <label>Nome</label>
                            <input type="text" autoFocus className='form-control' required placeholder='Nome' name="name" ></input>
                        </div>
                        <div className='col-lg-8 col-sm-12 form-group pt-1 mx-auto'>
                            <label>Email</label>
                            <input type="email" className='form-control' required placeholder='Seu email' name="email"></input>
                        </div>
                        <div className='col-lg-8 col-sm-12 form-group  pt-1 mx-auto'>
                            <label>Mensagen</label>
                            <textarea className='form-control' id="" cols="30" rows="8" required placeholder='Sua mensagen' name="mesagen"></textarea>
                        </div>
                        <div className='col-lg-8 col-sm-12 pt-3 mx-auto'>
                            <input type="submit" className='btn btn-info' value="Emviar mensagen" name="email"></input>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}
