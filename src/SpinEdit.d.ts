import { SvelteComponentTyped } from 'svelte';

import { ButtonColor, IComponentProps } from './common';

interface ISpinEditProps extends IComponentProps {
  color?: ButtonColor;
  value?: number;
  max?: number;
  min?: number;
  step?: number;
  readOnly?: boolean;
  removable?: boolean;
  inputGroup?: boolean;
  disabled?: boolean;
}

export default class SpinEdit extends SvelteComponentTyped<
  ISpinEditProps,
  {
    mouseover: WindowEventMap['mouseover'];
    mouseenter: WindowEventMap['mouseenter'];
    mouseleave: WindowEventMap['mouseleave'];
    inc: CustomEvent<number | undefined>;
    dec: CustomEvent<number | undefined>;
    remove: CustomEvent<number | undefined>;
    input: CustomEvent<number | undefined>;
  }
> {}
