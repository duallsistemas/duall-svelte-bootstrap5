import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface ITableBodyProps extends IComponentProps {}

export default class TableBody extends SvelteComponentTyped<ITableBodyProps, {}, { default: any }> {}
