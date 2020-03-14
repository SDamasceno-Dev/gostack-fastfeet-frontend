/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: SignIn App Page
 */

//  Import dependencies
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

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
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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

          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no Sistema'}
          </button>
        </Form>
      </div>
    </div>
  );
}
