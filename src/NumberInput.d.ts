import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface INumberInputProps extends IComponentProps {
  value?: number;
  min?: number;
  max?: number;
  digits?: number;
}

export default class NumberInput extends SvelteComponentTyped<
  INumberInputProps,
  {
    blur: WindowEventMap['blur'];
    keydown: WindowEventMap['keydown'];
    input: WindowEventMap['input'];
    click: WindowEventMap['click'];
    focus: WindowEventMap['focus'];
    complete: CustomEvent<any>;
    accept: CustomEvent<any>;
  }
> {}
