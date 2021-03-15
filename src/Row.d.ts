import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface IRowProps extends IComponentProps {}

export default class Row extends SvelteComponentTyped<IRowProps, {}, { default: any }> {}
