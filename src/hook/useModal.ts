import { useState } from 'react';

const useModal = () => {
  const [isShowed, setIsShowed] = useState(false);

  const showModal = () => setIsShowed(true);
  const hideModal = () => setIsShowed(false);

  return { isShowed, showModal, hideModal };
};

export default useModal;
