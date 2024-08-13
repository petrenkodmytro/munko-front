'use client';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getCurrentUser } from '@/api/api';
import { User } from 'next-auth';
import ProfileIcon from './../../../../public/icons/profile-icon.svg';
import { changeName } from '@/api/api';

type Props = {};

const UserData = (props: Props) => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [inputValue, setInputValue] = useState('');
  const [isInputShow, setIsInputShow] = useState(false);
  const { data: session } = useSession();  

  useEffect(() => {
    const handleGetCurrentUser = async () => {
      if (session && session.token) {
        const data = await getCurrentUser(session.token);
        setCurrentUser(data);
      }
    };
    handleGetCurrentUser();
  }, [session]);

  const handleChangeName = () => {
    setIsInputShow(false);
  };

  return (
    <div className="mx-12 my-8 flex justify-between">
      <div className="flex gap-6">
        <div className="w-[54px] h-[54px] bg-[#B1B1B1] rounded-full relative">
          <div className="absolute top-3 left-3">
            <ProfileIcon />
          </div>
        </div>
        {currentUser ? (
          <div className="text-xs font-semibold">
            {isInputShow ? (
              <input
                className="mb-3 text-base border border-[#B6BBC4] rounded h-8 p-2 outline-0"
                type="text"
                defaultValue={currentUser.firstName}
                onChange={e => setInputValue(e.target.value)}
              />
            ) : (
              <h3 className="text-base mb-3">{currentUser.firstName}</h3>
            )}
            <p className="font-medium mb-3">{currentUser.email}</p>
            <p className="mb-2.5">Change email address</p>
            <p className="mb-2.5">Change the password</p>
            <p className="mb-5">Forgot the password</p>
            <p className="text-[#D63F3F]">Delete you account</p>
          </div>
        ) : null}
      </div>
      <div>
        {isInputShow ? (
          <button
            type="button"
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
  );
};

export default UserData;
