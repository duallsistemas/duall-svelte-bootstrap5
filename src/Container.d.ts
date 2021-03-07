import { SvelteComponentTyped } from 'svelte';

interface IContainerProps {
  ref?: HTMLDivElement;
}

export default class Container extends SvelteComponentTyped<IContainerProps, {}, { default: any }> {}
