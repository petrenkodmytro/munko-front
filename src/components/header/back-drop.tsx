import React from 'react';

interface BackDropProps {
  handleMenu: () => void;
}

const BackDrop: React.FC<BackDropProps> = ({ handleMenu }) => {
  return (
    <div
      className="fixed z-20 top-0 right-0 left-0 bottom-0"
      onClick={handleMenu}
    ></div>
  );
};

export { BackDrop };
