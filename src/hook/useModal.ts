import { useState } from 'react';

const useModal = (): [boolean, () => void, () => void] => {
  const [isShowed, setIsShowed] = useState(false);

  const showModal = () => setIsShowed(true);
  const hideModal = () => setIsShowed(false);

  return [isShowed, showModal, hideModal];
};

export default useModal;
