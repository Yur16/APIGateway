import { useState, useEffect } from "react";
import api from './services/api';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';
import BitcoinAnalysis from "./components/BitcoinAnalysis";

import GlobalStyle from './styles/global';

import { Container } from './styles';
import Header from "./components/Header";

/*const data = [
  { name: '2020-11-23', total: 6087608},
  { name: '2020-11-22', total: 6071401},
  { name: '2020-11-21', total: 6052786},
  { name: '2020-11-21', total: 2780},
  { name: '2020-11-21', total: 1890},
  { name: '2020-11-21', total: 2390},
  { name: '2020-11-21', total: 3490}
];*/

export default function App() {
  const [cases, setCases] = useState([]);
  const [ticker, setTicker] = useState([])

  useEffect(() => {
    api.get('cases').then(response => {
      const total = response.data;
      let obj = [];
      for (const [key, value] of Object.entries(total)) {
        obj = [...obj, {name: key, total: value}]
      }
      setCases(obj.reverse())
    })

    api.get('ticker').then(response => {
      const bitcoin = response.data;
      setTicker(bitcoin);
    })
  }, [])

  return (
    <div className="App">
      <Header />
        <Container>
          <h1>Histórico de contaminações por COVID no Brasil</h1>
          <p>O Brasil registrou o primeiro caso do novo coronavírus SARS-CoV-2, causador da doença covid-19, no dia 26 de fevereiro. Foi em São Paulo. Um homem de 61 anos, cuja identidade não foi revelada, que esteve na Itália de 9 a 21 de fevereiro, mais especificamente na região da Lombardia, um dos epicentros da crise naquele país. Desde então, a infecção se alastrou por todos os Estados por meio de um tipo de transmissão chamada de comunitária, que não permite se saber onde, exatamente, uma pessoa contraiu o vírus.</p>

          <LineChart
            width={1100}
            height={400}
            data={cases}
            className='line-chart'
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="total" stroke="#ff0000" yAxisId={0} />
          </LineChart>
        </Container>

        <BitcoinAnalysis data={ticker}/>
        <GlobalStyle />
    </div>
  );
}