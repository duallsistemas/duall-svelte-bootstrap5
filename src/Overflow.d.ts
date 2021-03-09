import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, OverflowType } from './common';

interface IOverflowProps extends IComponentProps {
  type?: OverflowType;
}

export default class Overflow extends SvelteComponentTyped<IOverflowProps, {}, { default: any }> {}
