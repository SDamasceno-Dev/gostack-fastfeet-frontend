import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 370px;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    width: 360px;
    height: 425px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    div {
      flex-direction: column;

      img {
        margin-top: 60px;
      }

      form {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-top: 42px;

        p {
          font-weight: bold;
          font-size: 14px;
          text-transform: uppercase;
          margin: 0 0 10px;
          color: #444444;
        }

        input {
          width: 300px;
          height: 45px;
          border: 1px solid #dddddd;
          border-radius: 4px;
          padding: 0 15px;
          margin-bottom: 20px;

          &::placeholder {
            color: #999999;
            font-size: 16px;
          }
        }

        span {
          color: #f64c75;
          align-self: flex-start;
          margin: -15px 0 10px;
          font-weight: bold;
        }

        button {
          height: 45px;
          border: 0;
          border-radius: 4px;
          background: #7d40e7;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          transition: background 0.3s;

          &:hover {
            background: ${darken(0.05, '#7d40e7')};
          }
        }
      }
    }
  }
`;
