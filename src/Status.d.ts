import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, PointerEvents, TextSelection } from './common';

interface IStatusProps extends IComponentProps {
  color?: TextColor;
  fontSize?: FontSize;
  backgroundColor?: BackgroundColor;
  textAlignment?: TextAlignment;
  center?: boolean;
  middle?: boolean;
  zIndex?: number;
}

export default class Status extends SvelteComponentTyped<
  IStatusProps,
  {
    click: WindowEventMap['click'];
    mouseover: WindowEventMap['mouseover'];
    mouseenter: WindowEventMap['mouseenter'];
    mouseleave: WindowEventMap['mouseleave'];
  },
  { default: any }
> {}
