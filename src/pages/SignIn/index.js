/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: SignIn App Page
 */

//  Import dependencies
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// Other imports
import logo from '~/assets/FastfeetAuthLogo.svg';

// Yup schema validation
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira seu melhor e-mail')
    .required('E-mail é obrigatório!'),
  password: Yup.string().required('A Senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <div>
      <div>
        <img src={logo} alt="FastFeet" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <p>Seu E-mail</p>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <p>Sua Senha</p>
          <Input name="password" type="password" placeholder="*************" />

          <button type="submit">Entrar no Sistema</button>
        </Form>
      </div>
    </div>
  );
}
