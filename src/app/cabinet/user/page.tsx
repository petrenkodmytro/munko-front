'use client';
import React, { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { getCurrentUser, changeName, forgotPassword, deleteAccount } from '@/api/api';
import { User } from 'next-auth';
import ProfileIcon from './../../../../public/icons/profile-icon.svg';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Instructions from '@/components/pop-ups/instructions';
import ChangePassword from '@/components/pop-ups/change-password';
import NewPassConfirm from '@/components/pop-ups/new-pass-confirm';
import InputNewEmail from '@/components/pop-ups/new-email';
import DeleteAccountPopup from '@/components/pop-ups/delete-account';

type Props = {};

const UserData = (props: Props) => {
  const { data: session } = useSession();
  const [currentUser, setCurrentUser] = useState<User>();
  const [inputValue, setInputValue] = useState('');
  const [isInputShow, setIsInputShow] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [showChangeEmail, setShowChangeEmail] = useState(false);
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [error, setError] = useState('');

  const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short! min 3')
      .max(45, 'Too Long! max 45')
      .matches(/^[A-Za-z0-9 ]*$/, 'Use latin letters and numbers')
      .required('Required'),
  });

  useEffect(() => {
    const handleGetCurrentUser = async () => {
      if (session && session.token) {
        const data = await getCurrentUser(session.token);
        setCurrentUser(data);
      }
    };
    handleGetCurrentUser();
  }, [session]);

  const handleChangeName = async () => {
    setIsInputShow(false);
    if (session && currentUser) {
      if (inputValue !== currentUser.firstName) {
        const newName = await changeName(
          session.token,
          inputValue,
          Number(currentUser.id)
        );
        const newObj = currentUser;
        newObj.firstName = newName.firstName;
        setCurrentUser(newObj);
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    if (event.target.name === 'name') {
      setInputValue(event.target.value);
    }
  };

  const handleForgetPass = async () => {
    if (currentUser) {
      const response = await forgotPassword(currentUser?.email);
      if (response === 'Email address not found.') {
        setError(response);
      } else {
        setShowChangePassword(false);
        handleShowInstructions();
      }
    }
  };

  const handleChangePassword = () => {
    setShowChangePassword(true);
  };

  const handlePassConfrimOpen = () => {
    setShowChangePassword(false);
    setShowPassConfirm(true);
  };

  const handleChangeEmail = () => {
    setShowChangeEmail(true);
  };

  const handleShowInstructions = () => {
    setShowChangeEmail(false);
    setShowInstructions(true);
  };


  const handleDeleteAccount = () => {
    if(session){
      setShowDeleteAccount(false);
      deleteAccount(session.token)
      signOut({callbackUrl: '/'})
    }
  };

  return (
    <>
      <Formik
        initialValues={{}}
        validationSchema={SignUpSchema}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({ isValid }) => (
          <Form onChange={handleInputChange}>
            <div className="mx-4 md:mx-12 my-8 flex justify-between">
              <div className="flex gap-6">
                <div className="w-[54px] h-[54px] bg-[#B1B1B1] rounded-full relative">
                  <div className="absolute top-3 left-3">
                    <ProfileIcon />
                  </div>
                </div>
                {currentUser ? (
                  <div className="text-xs md:text-sm font-semibold">
                    {isInputShow ? (
                      <>
                        <Field
                          value={inputValue}
                          className="mb-3 text-base border border-[#B6BBC4] rounded h-8 p-2 outline-0"
                          type="text"
                          name="name"
                          placeholder={currentUser.firstName}
                        />
                        <ErrorMessage
                          className="self-start -mt-2.5 mb-2 text-[8px] text-[#D63F3F] font-medium pl-2"
                          component="div"
                          name="name"
                        />
                      </>
                    ) : (
                      <h3 className="text-base mb-3">
                        {inputValue ? inputValue : currentUser.firstName}
                      </h3>
                    )}
                    <p className="font-medium mb-3">{currentUser.email}</p>
                    {error && (
                      <div className="text-[8px] text-[#D63F3F]">
                        <span>{error}</span>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => handleChangeEmail()}
                      className="mb-2.5 hover:text-[#686868] duration-200 ease-linear"
                    >
                      Change email address
                    </button>
                    <button
                      type="button"
                      className="mb-2.5 block hover:text-[#686868] duration-200 ease-linear"
                      onClick={() => handleChangePassword()}
                    >
                      Change the password
                    </button>
                    <button
                      type="button"
                      onClick={() => handleForgetPass()}
                      className="mb-5 block hover:text-[#686868] duration-200 ease-linear"
                    >
                      Forgot the password
                    </button>
                    <button type="button" className="text-[#D63F3F]" onClick={()=>{setShowDeleteAccount(true)}}>
                      Delete you account
                    </button>
                  </div>
                ) : null}
              </div>
              <div>
                {isInputShow ? (
                  <button
                    disabled={!isValid}
                    type="submit"
                    className="text-xs text-blue-600 font-bold"
                    onClick={handleChangeName}
                  >
                    Done
                  </button>
                ) : (
                  <button
                    type="button"
                    className="text-xs text-[#D63F3F] font-bold"
                    onClick={() => setIsInputShow(true)}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Instructions
        notifyCart={showInstructions}
        setNotifyCart={setShowInstructions}
      />
      <ChangePassword
        notifyCart={showChangePassword}
        setNotifyCart={setShowChangePassword}
        handleOpenPopUp={handlePassConfrimOpen}
        resetToken={session?.token}
      />
      <NewPassConfirm
        notifyCart={showPassConfirm}
        setNotifyCart={setShowPassConfirm}
      />
      <InputNewEmail
        notifyCart={showChangeEmail}
        setNotifyCart={setShowChangeEmail}
        handleOpenPopUp={handleShowInstructions}
        userId={session?.user.id}
      />
      <DeleteAccountPopup
        notifyCart={showDeleteAccount}
        setNotifyCart={setShowDeleteAccount}
        showCloseButton={false}
        handleOpenPopUp={handleDeleteAccount}
      />
    </>
  );
};

export default UserData;
