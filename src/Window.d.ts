import { SvelteComponentTyped } from 'svelte';

import { BackgroundColor, IComponentProps } from './common';

interface IWindowProps extends IComponentProps {
  title?: string;
  returnable?: boolean;
  width?: string | number;
  height?: string | number;
  backgroundColor?: BackgroundColor;
  loading?: boolean;
  errorMessage?: string;
  errorTimeout?: number;
  errorCenter?: boolean;
}

export default class Window extends SvelteComponentTyped<
  IWindowProps,
  { errorTimeout: CustomEvent<any> },
  { header: any; default: any; footer: any }
> {}
