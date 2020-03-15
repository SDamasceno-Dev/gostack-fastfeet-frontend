import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.div`
  margin-top: 37px;

  strong {
    font-size: 24px;
    font-weight: bold;
    color: #444444;
  }
`;

export const ToolsBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
`;

export const InputSearch = styled.input`
  width: 237px;
  height: 36px;
  font-size: 14px;
  color: #444444;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding-left: 16px;

  &::placeholder {
    color: #999999;
  }
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
  display: flex;
  justify-content: space-between;
  padding: 0 23px;

  span {
    font-size: 16px;
    font-weight: bold;
    color: #444444;
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  margin-top: 14px;
`;

export const ListElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 57px;
  padding: 0 23px;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 21px;

  span {
    font-size: 16px;
    color: #666666;
  }
`;
