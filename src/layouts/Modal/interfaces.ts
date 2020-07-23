type ClassName = string | number | symbol | any;

export interface IModalProps {
  isShowed: boolean;
  hide: () => void;
  classNameLayout?: ClassName;
  classNameModal?: ClassName;
}
