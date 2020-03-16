/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Component Actions usable on all lists
 */

import React, { useState } from 'react';

import { FaEllipsisH, FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';

import { Container, ActionBtnMenu, ActionMenu, ActionItem } from './styles';

export default function Actions() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <ActionBtnMenu onClick={handleToggleVisible} type="ActionBtnMenu">
        <FaEllipsisH color="#C6C6C6" size={15} />
      </ActionBtnMenu>
      <ActionMenu visible={visible}>
        <ActionItem>
          <FaEye color="#8E5BE8" size={15} />
          <span>Visualizar</span>
        </ActionItem>
        <ActionItem>
          <FaPen color="#4D85EE" size={15} />
          <span>Editar</span>
        </ActionItem>
        <ActionItem>
          <FaTrashAlt color="#DE3B3B" size={15} />
          <span>Excluir</span>
        </ActionItem>
      </ActionMenu>
    </Container>
  );
}
