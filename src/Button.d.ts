import { SvelteComponentTyped } from 'svelte';

import { ButtonColor, ButtonSize, IComponentProps } from './common';

interface IButtonProps extends IComponentProps {
  color?: ButtonColor;
  title?: string;
  hint?: string;
  icon?: string;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingMessage?: string;
  size?: ButtonSize;
}

export default class Button extends SvelteComponentTyped<
  IButtonProps,
  {
    click: WindowEventMap['click'];
    mouseover: WindowEventMap['mouseover'];
    mouseenter: WindowEventMap['mouseenter'];
    mouseleave: WindowEventMap['mouseleave'];
  },
  { default: any }
> {}
