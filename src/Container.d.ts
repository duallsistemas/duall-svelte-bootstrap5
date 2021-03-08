import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface IContainerProps extends IComponentProps {}

export default class Container extends SvelteComponentTyped<IContainerProps, {}, { default: any }> {}
