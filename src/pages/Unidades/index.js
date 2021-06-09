import { FaHospital } from 'react-icons/fa';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SectionIntro, SectionUnidade } from './styles';

function Home() {
  return (
    <>
      <Header />
      <SectionIntro>
        <div className="sectionFooter-text">
          <h1>Conheça as unidades</h1>
          <span>Pró Saúde</span>
        </div>
      </SectionIntro>

      <SectionUnidade>
        <div className="cards">
          <a
            href="https://g.page/sociedadeprosaudeaparecida?share"
            target="_blank"
            without
            rel="noreferrer"
            className="card"
          >
            <FaHospital color="#258CC6" size={25} />
            <h1>Aparecida</h1>
            <p>
              Rua Comendador Alexandre Amorim, 514
              <br />
              Aparecida, Manaus-AM
            </p>
            <span>69010-300</span>

            <div className="card__link-mapa">
              <a href="https://g.page/sociedadeprosaudeaparecida?share" target="_blank" without rel="noreferrer">
                Ver o mapa
              </a>
            </div>
          </a>

          <a
            href="https://g.page/prosaudecompensa?share"
            target="_blank"
            without
            rel="noreferrer"
            className="card"
          >
            <FaHospital color="#258CC6" size={25} />
            <h1>Compensa</h1>
            <p>
              Av. Brasil, 2231
              <br />
              Compensa, Manaus-AM
            </p>
            <span>69010-300</span>

            <div className="card__link-mapa">
              <a href="https://g.page/prosaudecompensa?share" target="_blank" without rel="noreferrer">
                Ver o mapa
              </a>
            </div>
          </a>

          <a
            href="https://g.page/ProSaudeCidadeNova?share"
            target="_blank"
            without
            rel="noreferrer"
            className="card"
          >
            <FaHospital color="#258CC6" size={25} />
            <h1>Cidade Nova</h1>
            <p>
              Rua Rouxinol, 45
              <br />
              Cidade Nova, Manaus-AM
            </p>
            <span>69010-300</span>

            <div className="card__link-mapa">
              <a href="https://g.page/ProSaudeCidadeNova?share" target="_blank" without rel="noreferrer">
                Ver o mapa
              </a>
            </div>
          </a>

          <a
            href="https://g.page/prosaudegrandecircular?share"
            target="_blank"
            without
            rel="noreferrer"
            className="card"
          >
            <FaHospital color="#258CC6" size={25} />
            <h1>Grande Circular</h1>
            <p>
              Av. Autaz Mirim, 267
              <br />
              Tancredo Neves, Manaus-AM
            </p>
            <span>69010-300</span>

            <div className="card__link-mapa">
              <a href="https://g.page/prosaudegrandecircular?share" target="_blank" without rel="noreferrer">
                Ver o mapa
              </a>
            </div>
          </a>

          <a
            href="https://goo.gl/maps/RHsvSBJip2aoAXn97"
            target="_blank"
            without
            rel="noreferrer"
            className="card"
          >
            <FaHospital color="#258CC6" size={25} />
            <h1>Major Gabriel</h1>
            <p>
              Rua Major Gabriel, 915
              <br />
              Centro, Manaus-AM
            </p>
            <span>69010-300</span>

            <div className="card__link-mapa">
              <a href="https://goo.gl/maps/RHsvSBJip2aoAXn97" target="_blank" without rel="noreferrer">
                Ver o mapa
              </a>
            </div>
          </a>

          <a
            href="https://goo.gl/maps/j6ccSg3LXAGKP5B78"
            target="_blank"
            without
            rel="noreferrer"
            className="card"
          >
            <FaHospital color="#258CC6" size={25} />
            <h1>Manoa</h1>
            <p>
              Av. Francisco Queiroz, 1177
              <br />
              Colônia Santo Antônio, Manaus-AM
            </p>
            <span>69010-300</span>

            <div className="card__link-mapa">
              <a href="https://goo.gl/maps/j6ccSg3LXAGKP5B78" target="_blank" without rel="noreferrer">
                Ver o mapa
              </a>
            </div>
          </a>

          <a
            href="https://goo.gl/maps/zjURCZHV2SxVQ6V26"
            target="_blank"
            without
            rel="noreferrer"
            className="card"
          >
            <FaHospital color="#258CC6" size={25} />
            <h1>Educandos</h1>
            <p>
              Av. Leopoldo Péres, 500 (em frente a Bemol)
              <br />
              Educandos, Manaus-AM
            </p>
            <span>69010-300</span>

            <div className="card__link-mapa">
              <a href="https://goo.gl/maps/zjURCZHV2SxVQ6V26" target="_blank" without rel="noreferrer">
                Ver o mapa
              </a>
            </div>
          </a>

          <a
            href="https://goo.gl/maps/zjURCZHV2SxVQ6V26"
            target="_blank"
            without
            rel="noreferrer"
            className="card"
          >
            <FaHospital color="#258CC6" size={25} />
            <h1>Torquato</h1>
            <p>
              Av. Leopoldo Péres, 500 (em frente a Bemol)
              <br />
              Educandos, Manaus-AM
            </p>
            <span>69010-300</span>

            <div className="card__link-mapa">
              <a href="https://goo.gl/maps/zjURCZHV2SxVQ6V26" target="_blank" without rel="noreferrer">
                Ver o mapa
              </a>
            </div>
          </a>

          <a
            href="https://goo.gl/maps/zjURCZHV2SxVQ6V26"
            target="_blank"
            without
            rel="noreferrer"
            className="card"
          >
            <FaHospital color="#258CC6" size={25} />
            <h1>Tapajós</h1>
            <p>
              Av. Leopoldo Péres, 500 (em frente a Bemol)
              <br />
              Educandos, Manaus-AM
            </p>
            <span>69010-300</span>

            <div className="card__link-mapa">
              <a href="https://goo.gl/maps/zjURCZHV2SxVQ6V26" target="_blank" without rel="noreferrer">
                Ver o mapa
              </a>
            </div>
          </a>
        </div>
      </SectionUnidade>

      <Footer />
    </>
  );
}

export default Home;
