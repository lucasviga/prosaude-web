import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import history from './services/history';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GlobalStyle from './styles/global';
import ScrollToTop from './config/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes history={history} />
      <GlobalStyle />
    </Router>
  );
}

export default App;
