import styled from 'styled-components';

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  margin-top: 14px;
`;

export const ListElement = styled.div`
  display: grid;
  grid-template-columns: 60px repeat(calc(${props => props.colQtd} - 2), 1fr) 60px;
  width: 100%;
  height: 57px;
  padding: 10px 23px;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 21px;

  span {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #666666;
  }

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const ModalWindow = styled.div``;
