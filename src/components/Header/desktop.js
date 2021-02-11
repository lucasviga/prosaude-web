import React from 'react';
import { Link } from 'react-router-dom';
import {FaTooth, FaDna, FaHeartbeat} from 'react-icons/fa';

import logo from '../../assets/img/logo_prosaude.png';

import { Container } from './styles';

export default function Desktop() {

  return (
    <Container>
      <header className="menu fixed">
        <div className="menu__content">
          <div className="box__first">
            <Link to="/">
              <img className="" src={logo} alt="Fiber Network" />
            </Link>

            <div className="box__links">
              <Link to="/consultas">
                <FaHeartbeat size={14} />
                <span>Consultas</span>
              </Link>

              <Link to="/exames">
                <FaDna size={14} />
                <span>Exames</span>
              </Link>

              <Link to="/">
                <FaTooth size={14} />
                <span>Odonto</span>
              </Link>
            </div>
          </div>
          <nav className="nav__menu">
            <ul>
              {/* <li>
                Nossos planos
                <Dropdown>
                  <li>
                    <MdPhonelink />
                    <Link to="/residencial">Para Você</Link>
                  </li>
                  <li>
                    <MdBusiness />
                    <Link to="/residencial">Para Sua Empresa</Link>
                  </li>
                </Dropdown>
              </li> */}
              <li>
                <Link to="/unidades">Unidades</Link>
              </li>

              <li>
                <Link to="/duvidas">Dúvidas</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Container>
  );
}
