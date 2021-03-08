import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, TableColor, TableResponsiveSize, TableSize } from './common';

interface ITableProps extends IComponentProps {
  caption?: string;
  captionTop?: boolean;
  color?: TableColor;
  size?: TableSize;
  bordered?: boolean;
  borderless?: boolean;
  striped?: boolean;
  hover?: boolean;
  responsiveSize?: TableResponsiveSize;
}

export default class Table extends SvelteComponentTyped<
  ITableProps,
  {
    click: WindowEventMap['click'];
    mouseover: WindowEventMap['mouseover'];
    mouseenter: WindowEventMap['mouseenter'];
    mouseleave: WindowEventMap['mouseleave'];
  },
  { caption: any; head: any; body: any }
> {}
