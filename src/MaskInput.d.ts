import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface IMaskInputProps extends IComponentProps {
  value?: any;
  options?: object;
}

export default class MaskInput extends SvelteComponentTyped<
  IMaskInputProps,
  {
    accept: CustomEvent<any>;
    complete: CustomEvent<any>;
    blur: WindowEventMap['blur'];
    keydown: WindowEventMap['keydown'];
    input: WindowEventMap['input'];
    click: WindowEventMap['click'];
    focus: WindowEventMap['focus'];
  }
> {}
