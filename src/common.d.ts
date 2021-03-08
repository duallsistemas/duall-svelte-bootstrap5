export declare type BackgroundColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'body'
  | 'white'
  | 'transparent';

export declare type AlertType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export declare type ButtonType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

export declare type ButtonSize = 'sm' | 'lg';

export declare type ModalSize = 'sm' | 'lg' | 'xl' | 'fullscreen';

export declare interface IComponentProps {
  ref?: any;
  children?: any;
  class?: string;
  [key: string]: any;
}
