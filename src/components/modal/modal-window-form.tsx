'use client';

import { useState } from 'react';
import LoginForm from './login-form';
import SignForm from './sign-form';

type ModalWndFormProps = {
  onDestroy: () => void;
  serverError?: string;
};

const ModalWndForm: React.FC<ModalWndFormProps> = ({onDestroy, serverError}) => {

  const [toogleLogin, setToogleLogin] = useState(false);

  const handleToogleChange = () => {
    setToogleLogin(!toogleLogin);
  };

  return (
    <>
      {toogleLogin ? (
        <SignForm handleToogleChange={handleToogleChange} onDestroy={onDestroy} />
      ) : (
        <LoginForm handleToogleChange={handleToogleChange} serverError={serverError} onDestroy={onDestroy}/>
      )}
    </>
  );
};

export default ModalWndForm;
