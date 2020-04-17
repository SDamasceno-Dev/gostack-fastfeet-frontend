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
  grid-template-columns:
    ${props => props.firstColumn} repeat(
      calc(${props => props.colQtd} - 2),
      1fr
    )
    60px;
  padding: 0 23px;

  span {
    font-size: 16px;
    font-weight: bold;
    color: #444444;
    text-align: ${props => props.key};
  }

  span.center {
    margin: 0 auto;
  }
`;

export const LabelPage = styled.span`
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
  text-align: center;
  margin-top: 35px;
  width: 100%;
`;

export const ChangePageContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const BtnPrevPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: #7d40e7;
  border: 0;
  border-radius: 50%;
  margin-right: 10px;
`;

export const BtnNextPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: #7d40e7;
  border: 0;
  border-radius: 50%;
  margin-left: 10px;
`;
