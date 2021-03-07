import { SvelteComponentTyped } from 'svelte';

interface IListGroupProps {
  ref?: HTMLUListElement;
  flush?: boolean;
}

export default class ListGroup extends SvelteComponentTyped<IListGroupProps, {}, { default: any }> {}
