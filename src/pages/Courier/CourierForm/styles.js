/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description:
 */

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
    text-align: center;
    background: #fff;
    border-radius: 4px;
    margin: 20px auto;
    padding-top: 28px;
  }

  label {
    display: flex;
    flex-direction: column;
    padding: 0 31px 10px;
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    color: #444444;

    input {
      background: #fff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 25px;
      color: #666666;
      margin: 8px 0;

      &::placeholder {
        color: ;
      }
    }
  }
`;
