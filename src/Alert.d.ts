import { SvelteComponentTyped } from 'svelte';

import { AlertType } from './common';

interface IAlertProps {
  ref?: HTMLDivElement;
  type?: AlertType;
  closable: boolean;
  visible: boolean;
  message?: string;
  small?: boolean;
  timeout: number;
}

export default class Alert extends SvelteComponentTyped<IAlertProps, {}, { default: any }> {}
