import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, TableColor } from './common';

interface ITableDataProps extends IComponentProps {
  color?: TableColor;
  active?: Boolean;
}

export default class TableData extends SvelteComponentTyped<ITableDataProps, {}, { default: any }> {}
