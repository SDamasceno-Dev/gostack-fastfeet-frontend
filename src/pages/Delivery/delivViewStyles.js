import styled from 'styled-components';

export const DelivContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 27px 25px;

  div {
    font-size: 16px;
    color: #666666;
    line-height: 25px;
  }

  div > strong {
    font-size: 14px;
    color: #444444;
    font-weight: bold;
  }

  hr {
    border: 1px solid #eeeeee;
    margin: 10px 0;
  }

  span#label {
    font-weight: bold;
  }

  img#signature {
    width: 250px;
    height: 40px;
    border-radius: 0%;
    display: flex;
    align-self: center;
    justify-self: center;
    margin: 0 auto;
  }
`;
