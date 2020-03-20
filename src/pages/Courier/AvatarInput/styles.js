import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 28px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 1px #dddddd dashed;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
