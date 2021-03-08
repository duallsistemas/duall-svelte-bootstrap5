export declare type TextAlignment = 'start' | 'center' | 'end';

export declare type VerticalAlignment = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom';

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

export declare type AlertColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export declare type ButtonColor =
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

export declare type TableColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export declare type TableSize = 'sm';

export declare type TableResponsiveSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export declare type ModalSize = 'sm' | 'lg' | 'xl' | 'fullscreen';

export declare interface IComponentProps {
  ref?: any;
  children?: any;
  class?: string;
  [key: string]: any;
}
