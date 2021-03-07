import { SvelteComponentTyped } from 'svelte';

interface ICopyrightProps {
  ref?: HTMLParagraphElement;
}

declare class Copyright extends SvelteComponentTyped<ICopyrightProps> {}

export default Copyright;
