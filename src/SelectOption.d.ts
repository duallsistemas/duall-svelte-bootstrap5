import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface ISelectOptionProps extends IComponentProps {
  id?: string;
  value?: number | boolean | string;
  text?: number | boolean | string;
}

export default class Select extends SvelteComponentTyped<ISelectOptionProps, {}, { default: any }> {}
