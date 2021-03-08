import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface IInputProps extends IComponentProps {
  id: string;
  list?: Array<string>;
  listId: string;
  listClass?: string;
  listItemClass?: string;
  label?: string;
  labelClass?: string;
}

export default class Input extends SvelteComponentTyped<IInputProps> {}
