import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./styles.css";
import { BiSearchAlt2 } from 'react-icons/bi';
import logo from '../../assets/logo.png'
import Noticia from './components/Noticia/index'


function Home() {

  const [noticias, setNoticias] = useState([]);
  async function getData() {
    const response = await fetch('https://aps05-ecrawler.herokuapp.com/noticias', {
      method: "GET",
      mode: 'no-cors',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });

    console.log(response)
    let arrayNoticias = [];
    let titulos = [];
    Object.keys(response).forEach(element => {
      let array = []
      response[element].forEach((chamada) => {
        array.push(<Noticia noticia={chamada} />)
      })
      arrayNoticias.push(array)
      titulos.push(element)
    });
    console.log(arrayNoticias)
    setNoticias(arrayNoticias)
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="home">
      <div className="headerHome">
        <div className="headerIndex">
          <div className="logoContainer">
            <div className="logoHeader">
              <img style={{ width: "180px" }} src={logo} alt="Logo" />
            </div>

          </div>
          <div className="searchContainer">
            <input type="text" placeholder="Pesquise aqui" className="inputText" />
            <BiSearchAlt2 size={25} color="#FFF" />

          </div>

        </div>
        <div className="headerLegend">
          <div className="titlePage">
            <h1 className="legendText">Acompanhe seu portal de noticias favorito, pesquise, se atualize, tudo isso de um só lugar.</h1>


          </div>
        </div>
      </div>


      <div className="containerInformation">
        <div className="containerContent">
          <div className="contentIndex">
            <div className="scrollContent">
              {noticias[0]}
            </div>
          </div>

          <div className="contentSecundary">

            <div className="contentItem">
              <div className="scrollContent">
                {noticias[1]}
              </div>
            </div>


            <div className="contentItem">
              <div className="scrollContent">
                {noticias[2]}
              </div>
            </div>

            <div className="contentItem">
              <div className="scrollContent">
                {noticias[3]}
              </div>
            </div>


          </div>

        </div>

      </div>


      <div className="footerHome">


      </div>


    </div>
  )
}

export default Home;