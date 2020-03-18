import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  div#Title {
    margin-top: 37px;

    strong {
      font-size: 24px;
      font-weight: bold;
      color: #444444;
    }
  }

  div#Form {
    display: flex;
    align-items: center;
    width: 237px;
    height: 36px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    padding-left: 16px;
    background: #fff;

    svg {
      margin-right: 8px;
    }
  }
`;

export const ToolsBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
  display: ${props => (props.visible ? 'flex' : 'none')};

  form {
    display: flex;
    align-items: center;

    input {
      width: 100%;
      font-size: 14px;
      color: #444444;
      border: 0;
      background: #fff;

      &::placeholder {
        color: #999999;
      }
    }
  }
`;

export const BtnSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: #7d40e7;
  border: 0;
  border-radius: 4px;
  margin-left: 5px;
`;

export const BtnRegister = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 36px;
  background: #7d40e7;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;

  svg {
    margin-right: 7px;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 60px repeat(calc(${props => props.colQtd} - 2), 1fr) 60px;
  padding: 0 23px;

  span {
    font-size: 16px;
    font-weight: bold;
    color: #444444;
    text-align: ${props => props.key};
  }
`;

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
