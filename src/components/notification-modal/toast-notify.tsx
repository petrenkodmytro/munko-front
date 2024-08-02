import { toast } from 'react-toastify';

export const notifyAddedToCart = () =>
  toast.success(`Card added to cart!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#31304D',
      color: '#fff',
    },
  });

  export const notifyAddedToFavorite = () =>
    toast.success(`Card added to favorite!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      style: {
        backgroundColor: '#0e3d1b',
        color: '#fff',
      },
    });
