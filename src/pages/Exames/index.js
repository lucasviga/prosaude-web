import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { HeaderTitle, TableListExame, Exame, SectionIntro, Container, Wrapper } from './styles';

import {data} from './DataExames';

function Exames() {
  // const [showPrice, setShowPrice] = useState(false);
  // const [idRow, setIdRow] = useState();

  // function handleShowPrice(id) {
  //   setShowPrice(true);
  //   setIdRow(id)
  // }

  return (
    <>
      <Header />

      <SectionIntro>
        <div className="sectionFooter-text">
          <h1>Exames</h1>
          {/* <span>Pró Saúde</span> */}
        </div>
      </SectionIntro>

      <Container>
        <Exame>
          <HeaderTitle>
            <h3>Veja os nossos exames:</h3>
          </HeaderTitle>

          <Wrapper>
            <TableListExame>
              <thead>
                <tr>
                  <th>Exames</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {data.map((exame, index) => (
                  <tr key={exame.id}>
                    <th>{exame.nomeExame}</th>


                    {/* <td>
                      <button onClick={() => handleShowPrice(exame.id)} className="btn-show-price">
                        Ver preço
                      </button>
                    </td> */}
                    <td>{exame?.description}</td>
                    <td>R$ {exame.valor}</td>


                    {/* <td>Agendar pelo Whatsapp</td> */}
                  </tr>
                ))}
              </tbody>
            </TableListExame>
          </Wrapper>
        </Exame>
      </Container>

      {/* <SectionUnidade>
        <div className="cards">
          <div className="card">
            <h1>Ultrassonografia Morfológica</h1>
            <p>
              R$ 90,00
            </p>

            <div className="card__link-mapa">
              <a href="https://g.page/sociedadeprosaudeaparecida?share" target="_blank" without rel="noreferrer">
                Agendar por Whatsapp
              </a>
            </div>
          </div>

          <div className="card">
            <h1>Preventivo</h1>
            <p>
              R$ 90,00
            </p>

            <div className="card__link-mapa">
              <a href="https://g.page/sociedadeprosaudeaparecida?share" target="_blank" without rel="noreferrer">
                Agendar por Whatsapp
              </a>
            </div>
          </div>

          <div className="card">
            <h1>Ecocardiograma</h1>
            <p>
              R$ 90,00
            </p>

            <div className="card__link-mapa">
              <a href="https://g.page/sociedadeprosaudeaparecida?share" target="_blank" without rel="noreferrer">
                Agendar por Whatsapp
              </a>
            </div>
          </div>

          <div className="card">
            <h1>EEG + Mapeamento Cerebral</h1>
            <p>
              R$ 90,00
            </p>

            <div className="card__link-mapa">
              <a href="https://g.page/sociedadeprosaudeaparecida?share" target="_blank" without rel="noreferrer">
                Agendar por Whatsapp
              </a>
            </div>
          </div>

          <div className="card">
            <h1>Endoscopia</h1>
            <p>
              R$ 90,00
            </p>

            <div className="card__link-mapa">
              <a href="https://g.page/sociedadeprosaudeaparecida?share" target="_blank" without rel="noreferrer">
                Agendar por Whatsapp
              </a>
            </div>
          </div>

          <div className="card">
            <h1>Raio-X Simples</h1>
            <p>
              R$ 90,00
            </p>

            <div className="card__link-mapa">
              <a href="https://g.page/sociedadeprosaudeaparecida?share" target="_blank" without rel="noreferrer">
                Agendar por Whatsapp
              </a>
            </div>
          </div>

          <div className="card">
            <h1>Tomografia</h1>
            <p>
              R$ 90,00
            </p>

            <div className="card__link-mapa">
              <a href="https://g.page/sociedadeprosaudeaparecida?share" target="_blank" without rel="noreferrer">
                Agendar por Whatsapp
              </a>
            </div>
          </div>

          <div className="card">
            <h1>Ressonância Magnética</h1>
            <p>
              R$ 90,00
            </p>

            <div className="card__link-mapa">
              <a href="https://g.page/sociedadeprosaudeaparecida?share" target="_blank" without rel="noreferrer">
                Agendar por Whatsapp
              </a>
            </div>
          </div>
        </div>
      </SectionUnidade> */}

      <Footer />
    </>
  );
}

export default Exames;
