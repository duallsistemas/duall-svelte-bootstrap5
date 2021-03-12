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
    complete: WindowEventMap['complete'];
    focus: WindowEventMap['focus'];
    accept: WindowEventMap['accept'];
  }
> {}
