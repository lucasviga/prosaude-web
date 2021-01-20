import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import history from './services/history';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <Routes history={history} />
      <GlobalStyle />
    </Router>
  );
}

export default App;
