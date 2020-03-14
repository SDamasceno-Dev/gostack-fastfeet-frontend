/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: SignIn App Page
 */

//  Import dependencies
import React from 'react';
import { Form, Input } from '@rocketseat/unform';

// Other imports
import logo from '~/assets/FastfeetAuthLogo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <div>
      <div>
        <img src={logo} alt="FastFeet" />

        <Form onSubmit={handleSubmit}>
          <span>Seu E-mail</span>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <span>Sua Senha</span>
          <Input name="password" type="password" placeholder="*************" />

          <button type="submit">Entrar no Sistema</button>
        </Form>
      </div>
    </div>
  );
}
