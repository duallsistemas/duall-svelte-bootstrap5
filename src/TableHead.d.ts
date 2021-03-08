import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, TableColor } from './common';

interface ITableHeadProps extends IComponentProps {
  color?: TableColor;
}

export default class TableHead extends SvelteComponentTyped<ITableHeadProps, {}, { default: any }> {}
