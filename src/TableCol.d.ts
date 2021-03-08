import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, TableColor, TextAlignment, VerticalAlignment } from './common';

interface ITableColProps extends IComponentProps {
  color?: TableColor;
  scope?: 'row' | 'col';
  alignment?: TextAlignment;
  verticalAlignment?: VerticalAlignment;
}

export default class TableCol extends SvelteComponentTyped<ITableColProps, {}, { default: any }> {}
