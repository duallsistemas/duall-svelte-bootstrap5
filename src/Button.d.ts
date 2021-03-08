import { SvelteComponentTyped } from 'svelte';

import { ButtonType, ButtonSize, IComponentProps } from './common';

interface IButtonProps extends IComponentProps {
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
