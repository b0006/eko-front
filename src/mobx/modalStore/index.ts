import { decorate, observable, action } from 'mobx';

import { IModal, TypeModal } from './types';

const initialModal: IModal = {
  type: 'noModal',
  props: {},
};

export class ModalStore {
  public modal: IModal = initialModal;

  public showModal = <T>(type: TypeModal, props?: T) => {
    this.modal = { type, props };
  };

  public closeModal = () => {
    console.log(initialModal);
    this.modal = initialModal;
  };
}

decorate(ModalStore, {
  modal: observable,
  showModal: action,
  closeModal: action,
});

export default new ModalStore();
