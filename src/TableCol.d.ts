import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, TableColor } from './common';

interface ITableColProps extends IComponentProps {
  color?: TableColor;
  scope?: 'row' | 'col';
}

export default class TableCol extends SvelteComponentTyped<ITableColProps, {}, { default: any }> {}
