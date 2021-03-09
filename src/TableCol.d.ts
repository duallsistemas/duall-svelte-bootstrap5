import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, TableColor, TextAlignment, VerticalAlignment } from './common';

interface ITableColProps extends IComponentProps {
  color?: TableColor;
  scope?: 'row' | 'col';
  alignment?: TextAlignment;
  verticalAlignment?: VerticalAlignment;
}

export default class TableCol extends SvelteComponentTyped<
  ITableColProps,
  {
    click: WindowEventMap['click'];
    mouseover: WindowEventMap['mouseover'];
    mouseenter: WindowEventMap['mouseenter'];
    mouseleave: WindowEventMap['mouseleave'];
  },
  { default: any }
> {}
