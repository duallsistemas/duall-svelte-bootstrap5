import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface ISelectOptionProps extends IComponentProps {
  id?: string;
  value?: any;
  text?: any;
}

export default class Select extends SvelteComponentTyped<ISelectOptionProps, {}, { default: any }> {}
