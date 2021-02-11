import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Unidades from '../pages/Unidades';
import Duvidas from '../pages/Duvidas';
import Consultas from '../pages/Consultas';
import Exames from '../pages/Exames';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/unidades" exact component={Unidades} />
      <Route path="/duvidas" exact component={Duvidas} />
      <Route path="/consultas" exact component={Consultas} />
      <Route path="/exames" exact component={Exames} />
    </Switch>
  );
}
