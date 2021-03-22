import { IoLogoWhatsapp, IoIosCloudDownload } from 'react-icons/io';
import { FaTooth, FaHospital, FaDna, FaHeartbeat } from 'react-icons/fa';
// import { GiLifeBar } from 'react-icons/gi';
import { Carousel } from 'react-responsive-carousel';

import ButtonLink from '../../components/ButtonLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import cartaoVisita from '../../assets/download/cartao-de-visita.pdf';

import {
  // ContentTextSlide,
  SectionAtendimento,
  SectionVantagens,
  SectionEspecialidade,
  SectionFooter,
} from './styles';

// import slide01 from '../../assets/img/bg-01.png';
import img01 from '../../assets/img/especialista.png';

import banner1 from '../../assets/img/Banner1.jpg';
import banner2 from '../../assets/img/Banner2.jpg';
import banner3 from '../../assets/img/Banner3.jpg';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <Carousel className="mg-md-top" autoPlay infiniteLoop showArrows showThumbs={false} showStatus={false}>
        <div>
          <img src={banner1} alt="Clinico Geral e Pediatra Gratuito" />
          {/* <ContentTextSlide>
            <h1>
              Clinico Geral e
              <br />
              Pediatra
            </h1>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </ContentTextSlide> */}
        </div>

        <div><img src={banner2} alt="Clinico Geral e Pediatra Gratuito" /></div>
        <div><img src={banner3} alt="Clinico Geral e Pediatra Gratuito" /></div>
      </Carousel>

      <SectionVantagens>
        <h1>Title Text Lorem ipsum</h1>
        <div className="container">
          <div className="card">
            <div className="card-content">
              <FaHeartbeat color="#258cc6" size={30} />
              <h1>Consultas</h1>
              <p>Lorem Ipsum is simply dummy text of the.</p>

              <Link className="card-content__saiba-mais" to="/consultas">
                <span>Saiba mais</span>
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <FaDna color="#258cc6" size={30} />
              <h1>Exames</h1>
              <p>Lorem Ipsum is simply dummy text of the.</p>

              <Link className="card-content__saiba-mais" to="/exames">
                <span>Saiba mais</span>
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <FaTooth color="#258CC6" size={30} />
              <h1>Odontologia</h1>
              <p>Lorem Ipsum is simply dummy text of the.</p>

              <Link className="card-content__saiba-mais" to="/unidades">
                <span>Saiba mais</span>
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <FaHospital color="#258CC6" size={30} />
              <h1>Unidades</h1>
              <p>Lorem Ipsum is simply dummy text of the.</p>

              <Link className="card-content__saiba-mais" to="/unidades">
                <span>Ver Unidades</span>
              </Link>
            </div>
          </div>
        </div>
      </SectionVantagens>

      <SectionAtendimento>
        <div>
          <h1>Horário de Funcionamento</h1>
          <p>Segunda à Sexta: 07h até as 17h</p>
          <p>Sábado: 06h até às 12h</p>
        </div>

        <div className="box-button">
          <ButtonLink url={cartaoVisita} bgColor="#FFF" textColor="#616161">
            <IoLogoWhatsapp color="#258CC6" size={20} />
            <span>Falar com um atendente</span>
          </ButtonLink>

          <ButtonLink url={cartaoVisita} bgColor="#FFF" textColor="#616161" download>
            <IoIosCloudDownload color="#258CC6" size={20} />
            <span>Baixar Cartão Digital</span>
          </ButtonLink>
        </div>
      </SectionAtendimento>

      <SectionEspecialidade>
        <div className="box-img">
          <img src={img01} alt="Especialidade" />
        </div>

        <div className="box-text">
          <h1>Lorem ipsum text</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </SectionEspecialidade>

      <SectionFooter>
        <div className="sectionFooter-text">
          <h1>A família Pró Saúde está</h1>
          <span>#JuntoComVocê</span>
        </div>

        <ButtonLink bgColor="#FFF" textColor="#258CC6">
          <span>Entre em Contato</span>
        </ButtonLink>
      </SectionFooter>

      <Footer />
    </>
  );
}

export default Home;
