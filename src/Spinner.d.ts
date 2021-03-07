import { SvelteComponentTyped } from 'svelte';

interface ISpinnerProps {
  ref?: HTMLDivElement;
  title: string;
  small?: boolean;
  center?: boolean;
}

export default class Spinner extends SvelteComponentTyped<ISpinnerProps> {}
