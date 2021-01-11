import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';

export default function Signin() {
  const [emailAdress, setEmailAdress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base />
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
