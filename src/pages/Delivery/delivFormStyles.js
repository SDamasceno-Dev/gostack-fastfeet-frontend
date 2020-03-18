import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  div#Title {
    display: flex;
    justify-content: space-between;
    margin-top: 37px;

    strong {
      font-size: 24px;
      font-weight: bold;
      color: #444444;
    }

    aside {
      display: flex;

      button,
      div.buttonBack {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 112px;
        height: 36px;
        border: none;
        border-radius: 4px;
        background: #cccccc;
        color: #fff;
        margin-left: 16px;
        font-size: 14px;
        font-weight: bold;
      }

      button.btnSalvar {
        background: #7d40e7;
      }
    }
  }

  div#Form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 220;
    border: none;
    border-radius: 4px;
    padding: 30px 28px;
    margin-top: 20px;
    background: #fff;

    div {
      display: flex;
      justify-content: space-between;

      strong {
        font-size: 14px;
        font-weight: bold;
        color: #444444;
      }
    }
  }
`;

export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

export const InputSelect = styled.select`
  width: 405px;
  height: 45px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  color: #999999;
  margin-top: 10px;
  background: #fff;
  font-size: 16px;
`;

export const Input = styled.input`
  height: 45px;
  width: 840px;
  margin-top: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;
