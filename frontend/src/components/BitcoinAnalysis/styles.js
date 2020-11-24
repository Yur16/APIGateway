import styled from 'styled-components';

export const Container = styled.div`
  .title {
    font-family: Nunito, sans-serif;
    font-size: 38px;
    color: #fff;
    margin-bottom: 50px;
  }

  padding: 50px;

  background-color: blue;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
`;

export const Box = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);

  > p {
    font-size: 18px;
    color: #333;
    font-family: Nunito, sans-serif;
    margin-bottom: 10px;
  }

  .value {
    display: flex;
    align-items: center;

    > span {
      font-weight: bold;
      color: #${props => props.color};
      font-size: 28px;
      margin-right: 10px;
      font-family: Nunito, sans-serif;
    }
  }
`;
