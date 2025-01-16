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

export const notifyRemoveFromCart = () =>
  toast.success(`Card deleted from cart!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#B6BBC4',
      color: '#161629',
      border: '2px, solid, #161629',
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
      backgroundColor: '#161629',
      color: '#fff',
    },
  });

export const notifyRemoveFromFavorite = () =>
  toast.success(`Card deleted from favorite!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#B6BBC4',
      color: '#161629',
      border: '2px, solid, #161629',
    },
  });

export const notifyRemoveCreditCard = () =>
  toast.success(`Credit Card deleted from your account!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#B6BBC4',
      color: '#161629',
      border: '2px, solid, #161629',
    },
  });

export const notifyAddedCreditCard = () =>
  toast.success(`Credit Card added to your account!!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#161629',
      color: '#fff',
    },
  });

  export const notifyCopiedOrderId = () =>
    toast.success(`Order id copied!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      style: {
        textAlign: 'center',
        backgroundColor: '#B6BBC4',
        color: '#161629',
        border: '2px, solid, #161629',
      },
    });