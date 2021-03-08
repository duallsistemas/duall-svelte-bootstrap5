import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, TableColor } from './common';

interface ITableRowProps extends IComponentProps {
  color?: TableColor;
  active?: boolean;
}

export default class TableRow extends SvelteComponentTyped<ITableRowProps, {}, { default: any }> {}
