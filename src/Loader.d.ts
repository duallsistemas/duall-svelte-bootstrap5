import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface ILoaderProps extends IComponentProps {
  title?: string;
  small?: boolean;
  center?: boolean;
  visible?: boolean;
}

export default class Loader extends SvelteComponentTyped<
  ILoaderProps,
  { click: WindowEventMap['click'] },
  { default: any }
> {}
