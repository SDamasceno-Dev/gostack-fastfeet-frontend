import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ActionBtnMenu = styled.button`
  position: relative;
  background: none;
  border: 0;
`;

export const ActionMenu = styled.div`
  position: absolute;
  width: 150px;
  padding: 17px 10px;
  left: calc(50% - 75px);
  top: calc(100% + 5px);
  background: #fff;
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 2px rgba(0, 0, 10, 0.3);
  display: ${props => (props.visible ? 'block' : 'none')};
  z-index: 100;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #fff;
    filter: drop-shadow(0 -1px 1px rgba(0, 0, 4, 0.1));
  }
`;

export const ActionItem = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  border: 0;
  width: 100%;

  :hover {
    font-weight: bold;
  }

  & + button {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  a {
    display: flex;
    flex-direction: row;
  }

  svg {
    margin-right: 8px;
  }

  span {
    font: 16px;
    color: #999999;
  }
`;
