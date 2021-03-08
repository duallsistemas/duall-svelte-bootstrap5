import { SvelteComponentTyped } from 'svelte';

import { AlertType, IComponentProps } from './common';

interface IAlertProps extends IComponentProps {
  type?: AlertType;
  closable: boolean;
  visible: boolean;
  message?: string;
  small?: boolean;
  timeout: number;
}

export default class Alert extends SvelteComponentTyped<IAlertProps, {}, { default: any }> {}
