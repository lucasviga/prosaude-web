import {useState} from 'react';

import { HeaderTitle, TableListConsulta, Consulta, Container, WrapperConsulta } from './styles';

import {data} from './DataConsultas';

export default function TableConsulta() {
  const [showPrice, setShowPrice] = useState(false);
  const [idRow, setIdRow] = useState();

  function handleShowPrice(id) {
    setShowPrice(true);
    setIdRow(id)
  }

  return (
    <Container>
      <Consulta>
        <HeaderTitle>
          <h3>Conheça nossos especialistas:</h3>
        </HeaderTitle>

        <WrapperConsulta>
          <TableListConsulta>
            <thead>
              <tr>
                <th>Especialiade</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {data.map((exame, index) => (
                <tr key={exame.id}>
                  <th>{exame.nomeExame}</th>
                  <td>
                    {exame.id !== idRow && (
                      <button onClick={() => handleShowPrice(exame.id)} className="btn-show-price">
                        {showPrice ? 'Ocultar preço' : 'Ver preço'}
                      </button>
                    )}
                  </td>
                  {showPrice && (
                    <>
                      <td>{exame?.description}</td>
                      <td>R$ ${exame.valor}</td>
                    </>
                  )}
                  <td>Agendar pelo Whatsapp</td>
                </tr>
              ))}
            </tbody>
          </TableListConsulta>
        </WrapperConsulta>
        </Consulta>
    </Container>
  );
}
