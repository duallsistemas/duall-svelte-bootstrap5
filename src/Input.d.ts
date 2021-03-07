import { SvelteComponentTyped } from 'svelte';

interface IInputProps {
  ref?: HTMLInputElement;
  id: string;
  list?: Array<string>;
  listId: string;
  listClass?: string;
  listItemClass?: string;
  label?: string;
  labelClass?: string;
}

export default class Input extends SvelteComponentTyped<IInputProps> {}
