import { SvelteComponentTyped } from 'svelte';

import { ButtonType, ButtonSize } from './common';

interface IButtonProps {
  ref?: HTMLButtonElement | HTMLAnchorElement;
  type?: ButtonType;
  title?: string;
  hint?: string;
  icon?: string;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingMessage?: string;
  size?: ButtonSize;
}

export default class Button extends SvelteComponentTyped<IButtonProps, {}, { default: any }> {}
