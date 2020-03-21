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

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
    background: #fff;
    border-radius: 4px;
    margin: 20px auto;
    padding: 30px 14px;

    div {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;

      & + div {
        padding-top: 11px;
      }

      label {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 16px;
        font-size: 14px;
        font-weight: bold;
        color: #444444;

        input {
          margin-top: 10px;
          width: 100%;
          height: 45px;
          box-sizing: border-box;
          border: 1px solid #dddddd;
          border-radius: 4px;
          padding: 13px 15px;
          color: #999999;
          font-size: 16px;
        }

        input#street {
          width: 518px;
        }
      }
    }
  }
`;
