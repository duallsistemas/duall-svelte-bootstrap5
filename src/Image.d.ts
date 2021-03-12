import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface IImageProps extends IComponentProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  size?: number;
  center?: boolean;
  visible?: boolean;
  fallbackSrc?: string;
  hideOnError?: boolean;
}

export default class Image extends SvelteComponentTyped<
  IImageProps,
  {
    click: WindowEventMap['click'];
    mouseover: WindowEventMap['mouseover'];
    mouseenter: WindowEventMap['mouseenter'];
    mouseleave: WindowEventMap['mouseleave'];
    error: CustomEvent<any>;
  },
  { default: any }
> {}
