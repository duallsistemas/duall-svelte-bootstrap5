import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, TableColor } from './common';

interface ITableResponsiveProps extends IComponentProps {
  color?: TableColor;
}

export default class TableResponsive extends SvelteComponentTyped<ITableResponsiveProps, {}, { default: any }> {}
