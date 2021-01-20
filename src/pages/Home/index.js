import { IoLogoWhatsapp } from 'react-icons/io';
import { FaTooth, FaHospital, FaFileMedicalAlt } from 'react-icons/fa';
import { GiLifeBar } from 'react-icons/gi';
import { Carousel } from 'react-responsive-carousel';

import ButtonLink from '../../components/ButtonLink';
import { ContentTextSlide, SectionAtendimento, SectionVantagens } from './styles';

import slide01 from '../../assets/img/bg-01.png';

function Home() {
  return (
    <>
      <div>
        <h1>menu</h1>
      </div>

      <Carousel showArrows showThumbs={false} showStatus={false}>
        <div>
          <img src={slide01} alt="Clinico Geral e Pediatra Gratuito" />
          <ContentTextSlide>
            <h1>
              Clinico Geral e
              <br />
              Pediatra
            </h1>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </ContentTextSlide>
        </div>
      </Carousel>

      <SectionVantagens>
        <h1>Title Text Lorem ipsum</h1>
        <div className="container">
          <div className="card">
            <div className="card-content">
              <GiLifeBar color="#258cc6" size={30} />
              <h1>Consultas</h1>
              <p>Lorem Ipsum is simply dummy text of the.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <FaFileMedicalAlt color="#258cc6" size={30} />
              <h1>Exames</h1>
              <p>Lorem Ipsum is simply dummy text of the.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <FaTooth color="#258CC6" size={30} />
              <h1>Odontologia</h1>
              <p>Lorem Ipsum is simply dummy text of the.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <FaHospital color="#258CC6" size={30} />
              <h1>Unidades</h1>
              <p>Lorem Ipsum is simply dummy text of the.</p>
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

        <div>
          <ButtonLink bgColor="#FFF" textColor="#616161">
            <IoLogoWhatsapp color="#128C7E" size={20} />
            <span>Falar com um atendente</span>
          </ButtonLink>
        </div>
      </SectionAtendimento>
    </>
  );
}

export default Home;
