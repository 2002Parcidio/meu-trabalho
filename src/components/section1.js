import React, {Component} from 'react';
class Home extends Component {
    render() {
	    return (
		<div className="row ">
	            <div className="medium-12 columns">

    <header>
                <nav>
            <a href="#" class="logo" id="logo" onmousemove="dentro()" onmouseleave="saiu()">BUYMORE</a>
            <ul class="nav-list">
                <li><a href="#"><strong>VENDAS</strong></a></li>
                <li><a href="#"><strong>Compras</strong></a></li>
                <li><a href="#"><strong>Sobre nós</strong></a></li>
                <li><a href="#"><strong> Apoio ao cliente</strong></a></li>
                <li><form class="pesquisar" onclick="minimizar()" action="">
                  <input type="search" id="texto" list="historico" placeholder="Pesquisar" name="q" />
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg></a>
                  <datalist id="historico">
                    <option value="Buymore"></option>
                    <option value="Parcídio"></option>
                    <option value="thegreat"></option>
                  </datalist>
                </form>
              </li>

              <li class="bpesquisar">
                <a href="#" onclick="mostrar()" class="bisearch">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" style="color: #fff;">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </a>
              </li>
            </ul>
        </nav>
    </header>

    
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/Novo Projeto.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="img/great&better Sports – Be happy here guy! - Google Chrome 13_09_2021 00_41_14.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="img/IMG_20200425_171723_286.png" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>





    <section>
      <div class="section-vender">
        <h2><strong>VENDER</strong></h2>
        <p>Venda aqui os seus produtos, para vender basta clicar no botão abaixo. Venda aqui os seus produtos, para vender basta clicar no botão abaixo Venda aqui os seus produtos, para vender basta clicar no botão abaixo</p>
        <button class="sabermais"><a href="#" class="section-vender-button">Saber mais</a></button>
      </div>
    </section> 
    
    <section>
      <div class="section-destaque">
        <h2><strong>EM DESTAQUE</strong></h2>
        <p>Os produtos mais comercializados e em bom preço, aproveita já, não demore</p>
      </div>


      <nav class="flex">
        <div class="card" style="width: 18rem; height: 450px; background-color: #23232e;">
          <img src="img/transferir.jpeg" class="card-img-top" alt="..." />
          <div class="card-body" >
            <h5 class="card-title" style="color: #fff;">Card title</h5>
            <input type="button" value="mostrar mais" onclick="showhide()" />
            <p class="card-text" style="color: #fff;">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 18rem; height: 450px; background-color: #23232e;">
          <img src="img/transferir2.jpeg" class="card-img-top" alt="..." />
          <div class="card-body" >
            <h5 class="card-title" style="color: #fff;">Card title</h5>
            <input type="button" value="mostrar mais" onclick="showhide()" />
            <p class="card-text" style="color: #fff;">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 18rem; height: 450px; background-color: #23232e;">
          <img src="img/transferir (1).jpeg" class="card-img-top" alt="..." />
          <div class="card-body" >
            <h5 class="card-title" style="color: #fff;">Card title</h5>
            <input type="button" value="mostrar mais" onclick="showhide()" />
            <p class="card-text" style="color: #fff;">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 18rem; height: 450px; background-color: #23232e;">
          <img src="img/transferir.jpeg" class="card-img-top" alt="..." />
          <div class="card-body" >
            <h5 class="card-title" style="color: #fff;">Card title</h5>
            <input type="button" value="mostrar mais" onclick="showhide()" />
            <p class="card-text" style="color: #fff;">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

      </nav>
    </section>

    <section>
    <input type="number" name="txt" id="txt" /> 
    <input type="button" value="verificar" onclick="calcular()" />
    <h4>Resultado:</h4>
    <div id="res">  </div>
    </section>


                </div>
        </div>  
	     );
    }
}
export default Home;