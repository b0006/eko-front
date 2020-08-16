type ClassName = string | number | symbol | any;

export interface IModalProps {
  isShowed: boolean;
  hide: () => void;
  type?: 'form' | 'div';
  submitBtn?: {
    title: string;
    handler: (args?: any) => void;
  };
  enctype?: 'multipart/form-data' | 'application/x-www-form-urlencoded' | 'text/plain';
  isShowedCancelBtn?: boolean;
  title?: string;
  classNameLayout?: ClassName;
  classNameModal?: ClassName;
}
