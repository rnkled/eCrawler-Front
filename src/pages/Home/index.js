import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./styles.css";
import { BiSearchAlt2 } from 'react-icons/bi';
import logo from '../../assets/logo.png'
import Noticia from './components/Noticia/'
import NoticiaPequena from './components/NoticiaPequena/'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


function Home() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null)

  const [main, setMain] = useState('ESPN')
  const [sub1, setSub1] = useState('Globo')
  const [sub2, setSub2] = useState('The Enemy')
  const [sub3, setSub3] = useState('Uol')

  const [newsMain, setNewsMain] = useState([])
  const [newsSub1, setNewsSub1] = useState([])
  const [newsSub2, setNewsSub2] = useState([])
  const [newsSub3, setNewsSub3] = useState([])


  async function getData() {
    axios.get('https://aps05-ecrawler.herokuapp.com/noticias')
      .then(response => {

        setData(response.data); setLoading(false);

        console.log(response.data)

        let arrayMain = []
        response.data[main].forEach((noticia, index) => { arrayMain.push(<Noticia noticia={noticia} key={index} />) })
        setNewsMain(arrayMain)

        let arraySub1 = []
        response.data[sub1].forEach((noticia, index) => { arraySub1.push(<NoticiaPequena noticia={noticia} key={index} />) })
        setNewsSub1(arraySub1)

        let arraySub2 = []
        response.data[sub2].forEach((noticia, index) => { arraySub2.push(<NoticiaPequena noticia={noticia} key={index} />) })
        setNewsSub2(arraySub2)

        let arraySub3 = []
        response.data[sub3].forEach((noticia, index) => { arraySub3.push(<NoticiaPequena noticia={noticia} key={index} />) })
        setNewsSub3(arraySub3)

        setLoading(false)
      })
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
            {!loading && <h2 className="newsNameMain">{main}</h2>}
            <div className="scrollContent">
              {loading ? <Loader
                type="TailSpin"
                color="#FFF8"
                height={100}
                width={100}
                timeout={3000}
                style={{ position: 'relative', left: '45%', top: '30%' }}
              /> : newsMain}
            </div>
          </div>

          <div className="contentSecundary">

            <div className="contentItem">
              {!loading && <h2 className="newsName">{sub1}</h2>}
              <div className="scrollContent">
                {loading ? <Loader
                  type="TailSpin"
                  color="#FFF8"
                  height={100}
                  width={100}
                  timeout={3000} //3 secs
                  style={{ position: 'relative', left: '38%', top: '10%' }}
                /> : newsSub1}
              </div>
            </div>


            <div className="contentItem">
              {!loading && <h2 className="newsName">{sub2}</h2>}
              <div className="scrollContent">
                {loading ? <Loader
                  type="TailSpin"
                  color="#FFF8"
                  height={100}
                  width={100}
                  timeout={3000} //3 secs
                  style={{ position: 'relative', left: '38%', top: '10%' }}
                /> : newsSub2}
              </div>
            </div>

            <div className="contentItem">
              {!loading && <h2 className="newsName">{sub3}</h2>}
              <div className="scrollContent">
                {loading ? <Loader
                  type="TailSpin"
                  color="#FFF8"
                  height={100}
                  width={100}
                  timeout={3000} //3 secs
                  style={{ position: 'relative', left: '38%', top: '10%' }}
                /> : newsSub3}
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