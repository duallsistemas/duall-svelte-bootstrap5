export declare type TextColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'body'
  | 'muted'
  | 'white'
  | 'black-50'
  | 'white-50';

export declare type FontSize = 'fs-1' | 'fs-2' | 'fs-3' | 'fs-4' | 'fs-5' | 'fs-6';

export declare type TextAlignment = 'start' | 'center' | 'end';

export declare type VerticalAlignment = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom';

export declare type OverflowType = 'auto' | 'hidden' | 'visible' | 'scroll';

export declare type TextSelection = 'all' | 'auto' | 'none';

export declare type PointerEvents = 'none' | 'auto';

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
