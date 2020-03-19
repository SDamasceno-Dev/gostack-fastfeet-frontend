import styled from 'styled-components';

const badgeType = status => {
  switch (status) {
    case 'ENTREGUE':
      return 'color: #2CA42B; background: #DFF0DF;';
    case 'RETIRADA':
      return 'color: #4D85EE; background: #BAD2FF;';
    case 'CANCELADA':
      return 'color: #de3b3b; background: #fab0b0;';
    default:
      return 'color: #C1BC35; background: #F0F0DF;';
  }
};

export const Badge = styled.div.attrs(props => ({ status: props.status }))`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 110px;
  height: 27px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  padding: 0;

  ${({ status }) => badgeType(status)};
`;

export const BadgeContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
