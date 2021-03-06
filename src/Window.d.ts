import { SvelteComponentTyped } from 'svelte';

import { AlertColor, BackgroundColor, IComponentProps } from './common';

interface IWindowProps extends IComponentProps {
  title?: string;
  returnable?: boolean;
  width?: string | number;
  height?: string | number;
  backgroundColor?: BackgroundColor;
  loading?: boolean;
  message?: string;
  messageColor?: AlertColor;
  messageTimeout?: number;
  messageCentered?: boolean;
  messageClosable?: boolean;
}

export default class Window extends SvelteComponentTyped<
  IWindowProps,
  { messageTimeout: CustomEvent<any> },
  { header: any; default: any; footer: any }
> {}
