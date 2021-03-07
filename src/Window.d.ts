import { SvelteComponentTyped } from 'svelte';

import { BackgroundColor } from './common';

interface IWindowProps {
  ref?: HTMLDivElement;
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
