import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, OverflowType } from './common';

interface IOverflowProps extends IComponentProps {
  overflow?: OverflowType;
  width?: string | number;
  height?: string | number;
}

export default class Overflow extends SvelteComponentTyped<IOverflowProps, {}, { default: any }> {}
