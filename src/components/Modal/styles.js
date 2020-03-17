import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ModalWindow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 200;
  display: ${props => (props.visible ? 'block' : 'none')};

  div#window {
    align-self: auto;
    background: #fff;
    border-radius: 5px;
    max-width: 1000px;
    min-height: 400px;
    margin: 0 auto;
    margin-top: 10%;
  }
`;
