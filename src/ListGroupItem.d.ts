import { SvelteComponentTyped } from 'svelte';

interface IListGroupItemProps {
  ref?: HTMLLIElement | HTMLButtonElement | HTMLAnchorElement;
  title?: string;
  icon?: string;
  action?: boolean;
  href?: string;
  hint?: string;
  disabled?: boolean;
}

export default class ListGroupItem extends SvelteComponentTyped<IListGroupItemProps, {}, { default: any }> {}
