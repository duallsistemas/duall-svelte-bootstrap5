import { SvelteComponentTyped } from 'svelte';

import { AlertColor, IComponentProps } from './common';

interface IAlertProps extends IComponentProps {
  color?: AlertColor;
  closable?: boolean;
  visible?: boolean;
  message?: string;
  small?: boolean;
  timeout?: number;
  center?: boolean;
}

export default class Alert extends SvelteComponentTyped<
  IAlertProps,
  {
    mouseover: WindowEventMap['mouseover'];
    mouseenter: WindowEventMap['mouseenter'];
    mouseleave: WindowEventMap['mouseleave'];
    close: CustomEvent<any>;
    timeout: CustomEvent<number>;
  },
  { default: any }
> {}
