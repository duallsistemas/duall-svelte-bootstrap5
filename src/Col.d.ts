import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface IColProps extends IComponentProps {}

export default class Col extends SvelteComponentTyped<IColProps, {}, { default: any }> {}
