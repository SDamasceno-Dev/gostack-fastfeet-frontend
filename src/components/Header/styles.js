/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Stylesheet of Component Header
 */

import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border: 1px solid #dddddd;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 30px;
      padding-right: 30px;
      border-right: 1px solid #dddddd;
    }

    a {
      font-size: 15px;
      font-weight: bold;
      color: #999999;
      margin-right: 21px;
    }

    .select {
      color: #444444;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;

    strong {
      display: block;
      font-size: 14px;
      color: #666666;
    }

    a {
      display: block;
      margin-top: 8px;
      font-size: 14px;
      color: #de3b3b;
    }
  }
`;
