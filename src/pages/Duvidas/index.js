import { IoLogoWhatsapp, IoIosCloudDownload } from 'react-icons/io';
import Collapsible from 'react-collapsible';
import ButtonLink from '../../components/ButtonLink';

import { SectionIntro, SectionDuvidas, SectionAtendimento } from './styles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Duvidas() {
  return (
    <>
      <Header />
      <SectionIntro>
        <div className="sectionFooter-text">
          <h1>Dúvidas frequentes</h1>
          <span>
            This is the collapsible content.
            <br />
            It can be any element or React.
          </span>
        </div>
      </SectionIntro>

      <SectionDuvidas>
        <Collapsible trigger="Você pode colocar alguma pergunta aqui?">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
        </Collapsible>

        <Collapsible trigger="Você pode colocar alguma pergunta aqui?">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it
            to make a type specimen book.
          </p>
        </Collapsible>

        <Collapsible trigger="Você pode colocar alguma pergunta aqui?">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
        </Collapsible>

        <Collapsible trigger="Você pode colocar alguma pergunta aqui?">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
        </Collapsible>
      </SectionDuvidas>

      <SectionAtendimento>
        <div>
          <h1>Horário de Funcionamento</h1>
          <p>Segunda à Sexta: 07h até as 17h</p>
          <p>Sábado: 06h até às 12h</p>
        </div>

        <div className="box-button">
          <ButtonLink bgColor="#FFF" textColor="#616161">
            <IoLogoWhatsapp color="#258CC6" size={20} />
            <span>Falar com um atendente</span>
          </ButtonLink>

          <ButtonLink bgColor="#FFF" textColor="#616161">
            <IoIosCloudDownload color="#258CC6" size={20} />
            <span>Baixar Cartão Digital</span>
          </ButtonLink>
        </div>
      </SectionAtendimento>

      <Footer />
    </>
  );
}

export default Duvidas;
