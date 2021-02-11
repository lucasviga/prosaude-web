import React from 'react';
import {
  MdList,
  MdHeadsetMic,
  MdLocationOn,
} from 'react-icons/md';
import {FaTooth, FaDna, FaHeartbeat} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo_prosaude.png';
import './mobile.css';

export default function Mobile() {
  return (
    <div className="mobile">
      <label htmlFor="toogle" className="mobile__btn">
        <MdList className="mobile__btn--icon" />
      </label>
      <input type="checkbox" className="mobile__checkbox" id="toogle" />

      <nav className="mobile__menu">
        <div className="mobile__header">
          <img
            className="mobile__header--photo"
            src={logo}
            alt="Pro Saude"
          />
          {/* <span className="mobile__header--text">
            <b>Fiber Network</b>
          </span> */}
        </div>

        <ul className="mobile__list">
          <li className="mobile__item">
            <Link to="/" className="mobile__item--link">
              <FaHeartbeat className="mobile__btn--icon" />
              Consultas
            </Link>
          </li>

          <li className="mobile__item">
            <Link to="/residencial" className="mobile__item--link">
              <FaDna className="mobile__btn--icon" />
              Exames
            </Link>
          </li>

          <li className="mobile__item">
            <Link to="/empresarial" className="mobile__item--link">
              <FaTooth className="mobile__btn--icon" />
              Odontologia
            </Link>
          </li>

          <li className="mobile__item">
            <Link to="/unidades" className="mobile__item--link">
              <MdLocationOn className="mobile__btn--icon" />
              Unidades
            </Link>
          </li>

          <li className="mobile__item">
            <Link to="/duvidas" className="mobile__item--link">
              <MdHeadsetMic className="mobile__btn--icon" />
              Duvidas
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
