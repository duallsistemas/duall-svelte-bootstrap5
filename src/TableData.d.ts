import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, TableColor, TextAlignment, VerticalAlignment } from './common';

interface ITableDataProps extends IComponentProps {
  color?: TableColor;
  active?: Boolean;
  alignment?: TextAlignment;
  verticalAlignment?: VerticalAlignment;
}

export default class TableData extends SvelteComponentTyped<ITableDataProps, {}, { default: any }> {}
