import { decorate, observable, action } from 'mobx';

export class HeaderStore {
  public isFixed = false;

  public toggleFixed = (value: boolean) => {
    this.isFixed = value;
  };
}

decorate(HeaderStore, {
  isFixed: observable,
  toggleFixed: action,
});

export default new HeaderStore();
