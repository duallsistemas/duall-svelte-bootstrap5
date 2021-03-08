import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, TableColor, TextAlignment, VerticalAlignment } from './common';

interface ITableRowProps extends IComponentProps {
  color?: TableColor;
  active?: boolean;
  alignment: TextAlignment;
  verticalAlignment?: VerticalAlignment;
}

export default class TableRow extends SvelteComponentTyped<ITableRowProps, {}, { default: any }> {}
