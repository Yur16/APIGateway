import { FaArrowUp, FaArrowDown} from 'react-icons/fa'

import { Container, Content, Box } from './styles';

export default function BitcoinAnalysis({ data }) {
  return (
    <Container>
      <h1 className='title'>Como anda o Bitcoin hoje? Acompanhe como a criptomoeda está. (valores em R$) </h1>
      <Content>
        <Box color='5cb85c'>
          <p>Maior preço unitário de negociação das últimas 24 horas</p> 
          <div className='value'>
            <span>{data.high}</span>
            <FaArrowUp size={28} color="#5cb85c"/>
          </div>
        </Box>

        <Box color='c00000'>
          <p>Menor preço unitário de negociação das últimas 24 horas</p> 
          <div className='value'>
            <span>{data.low}</span>
            <FaArrowDown size={28} color="#c00000"/>
          </div>
        </Box>

        <Box>
          <p>Quantidade negociada nas últimas 24 horas</p> 
          <div className='value'>
            <span>{data.vol}</span>
          </div>
        </Box>

        <Box>
          <p>Preço unitário da última negociação</p> 
          <div className='value'>
            <span>{data.last}</span>
          </div>
        </Box>

        <Box>
          <p>Maior preço de oferta de compra das últimas 24 horas</p> 
          <div className='value'>
            <span>{data.buy}</span>
          </div>
        </Box>
        <Box>
          <p>Menor preço de oferta de venda das últimas 24 horas</p> 
          <div className='value'>
            <span>{data.sell}</span>
          </div>
        </Box>
      </Content>
   </Container>
  );
};
