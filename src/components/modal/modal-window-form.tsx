'use client';

import { useState } from 'react';
import LoginForm from './login-form';
import SignForm from './sign-form';

type ModalWndFormProps = {
  onDestroy: () => void;
  serverError?: string;
  handleForgetOpen: () => void;
};

const ModalWndForm: React.FC<ModalWndFormProps> = ({onDestroy, serverError, handleForgetOpen}) => {

  const [toogleLogin, setToogleLogin] = useState(false);

  const handleToogleChange = () => {
    setToogleLogin(!toogleLogin);
  };

  return (
    <>
      {toogleLogin ? (
        <SignForm handleToogleChange={handleToogleChange} onDestroy={onDestroy} />
      ) : (
        <LoginForm handleToogleChange={handleToogleChange} serverError={serverError} onDestroy={onDestroy} handleForgetOpen={handleForgetOpen}/>
      )}
    </>
  );
};

export default ModalWndForm;
