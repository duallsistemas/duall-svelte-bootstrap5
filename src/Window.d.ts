import { SvelteComponentTyped } from 'svelte';

import { BackgroundColor, IComponentProps } from './common';

interface IWindowProps extends IComponentProps {
  title?: string;
  returnable: boolean;
  width: string | number;
  height: string | number;
  backgroundColor: BackgroundColor;
  loading?: boolean;
  errorMessage?: string;
  errorTimeout: number;
}

export default class Window extends SvelteComponentTyped<
  IWindowProps,
  {},
  { header: any; default: any; footer: any }
> {}
