'use client';

import { useState } from 'react';
import LoginForm from './login-form';
import SignForm from './sign-form';

const ModalWndForm = () => {

  const [toogleLogin, setToogleLogin] = useState(false);
  const border = ' border-b border-black'

  const handleToogleChange = () => {
    setToogleLogin(!toogleLogin);
  };

  return (
    <>
      {toogleLogin ? (
        <SignForm handleToogleChange={handleToogleChange} toogleLogin={toogleLogin} />
      ) : (
        <LoginForm handleToogleChange={handleToogleChange} toogleLogin={toogleLogin} />
      )}
    </>
  );
};

export default ModalWndForm;
