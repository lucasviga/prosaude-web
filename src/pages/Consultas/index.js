// import {useState, useEffect} from 'react';
import { Tabs, useTabState } from '@bumaga/tabs';

import {MdViewModule, MdViewList} from 'react-icons/md';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  SectionIntro,
  SectionConsulta,
  HeaderConsulta,
  Wrapper,
  TabNavigation,
  TabContent,
  TabItemNavBtn,
  // TabItemGrid,
} from './styles';
import TableConsulta from './TableConsulta';

function Consultas() {
  // const [showPrice, setShowPrice] = useState(false);
  // const [activeItemIndex, setActiveItemIndex] = useState(0);

  const Tab = ({ children }) => {
    const { onClick } = useTabState();

    return (
      <TabItemNavBtn type="TabItemNavBtn" onClick={onClick}>
        {children}
      </TabItemNavBtn>
    );
  };

  // const Panel = ({ children }) => {
  //   const isActive = usePanelState();

  //   return isActive ? <TabItemGrid>{children}</TabItemGrid> : null;
  // };

  return (
    <>
      <Header />
      <SectionIntro>
        <div className="sectionFooter-text">
          <h1>Consultas</h1>
        </div>
      </SectionIntro>

      <SectionConsulta>
        <Wrapper>
          <Tabs>
            <TabNavigation>
              <HeaderConsulta>
                <h3>Consultas</h3>
              </HeaderConsulta>
              <div>
                <Tab>
                  <MdViewList size={20}/>
                </Tab>
                <Tab>
                  <MdViewModule size={20}/>
                </Tab>
              </div>
            </TabNavigation>

            <TabContent>
              <TableConsulta />
            </TabContent>
          </Tabs>
        </Wrapper>
      </SectionConsulta>

      {/* <SectionUnidade>
        <div className="cards">
          <div className="card">
            <h1>Cardiologista</h1>

            <div className="card__show-price">
              <button onClick={() => setShowPrice(!showPrice)} className="card__btn-show-price">
                {showPrice ? 'Ocultar preço' : 'Ver preço'}
              </button>
              <p>
                {showPrice && 'R$ 90,00'}
              </p>
            </div>

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

export default Consultas;
