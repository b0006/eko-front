export interface IProps {
  [key: string]: any;
}

export interface IModal {
  type: TypeModal;
  props: any;
}

export type TypeModal = 'noModal' | 'categoryForm';
