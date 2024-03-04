'use client';

import { useState } from 'react';
import LoginForm from './login-form';
import SignForm from './sign-form';

const ModalWndForm = () => {

  const [toogleLogin, setToogleLogin] = useState(false);

  const handleToogleChange = () => {
    setToogleLogin(!toogleLogin);
  };

  return (
    <>
      {toogleLogin ? (
        <SignForm handleToogleChange={handleToogleChange} />
      ) : (
        <LoginForm handleToogleChange={handleToogleChange} />
      )}
    </>
  );
};

export default ModalWndForm;
