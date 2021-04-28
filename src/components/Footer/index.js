import {Link} from 'react-router-dom';
import {AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';


import { Container, SocialMedia, SectionInfo } from './styles';
import logo from '../../assets/img/logo.svg';

export default function Footer() {
  const today = new Date();
  const getCurrentYear = today.getFullYear();

  return (
    <Container>
      <SectionInfo>
        <img src={logo} alt="Clinicas Pro Saude" />

        <SocialMedia>
          <div>
            <p>Siga <span>#ClinicasProSaude</span></p>
            <div className="cards_icon">
              <div className="card_icon">
                <AiOutlineInstagram color="#FFFFFF" size={18}/>
              </div>

              <div className="card_icon">
                <AiOutlineWhatsApp color="#FFFFFF" size={18}/>
              </div>

              <div className="card_icon">
                <FaFacebookF color="#FFFFFF" size={18}/>
              </div>
            </div>
          </div>
        </SocialMedia>
      </SectionInfo>

      <div className="menu_footer">
        <Link to="/unidades">Unidades</Link>
        <Link to="/duvidas">Dúvidas Frequentes</Link>
        <Link to="/duvidas">Fale Conosco</Link>
      </div>

      <p className="direitos_footer">
        Todos os direitos reservados. &copy; {getCurrentYear} - Clinicas Pro Saude
      </p>

    </Container>
  );
}
