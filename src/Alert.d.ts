import { SvelteComponentTyped } from 'svelte';

import { AlertType, IComponentProps } from './common';

interface IAlertProps extends IComponentProps {
  type?: AlertType;
  closable?: boolean;
  visible?: boolean;
  message?: string;
  small?: boolean;
  timeout?: number;
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
