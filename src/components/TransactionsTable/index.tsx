import { useEffect } from 'react';

import { Container } from './styles';


function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000</td>
            <td>desenvolvimento</td>
            <td>21/02/2021</td>
          </tr>
          <tr>
            <td>Internet</td>
            <td className="withdraw">- R$ 100</td>
            <td>despesas</td>
            <td>01/02/2021</td>
          </tr>
          <tr>
            <td>Alugel</td>
            <td className="withdraw">- R$ 1.000</td>
            <td>despesas</td>
            <td>05/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
