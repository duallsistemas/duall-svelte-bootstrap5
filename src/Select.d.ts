import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface ISelectProps extends IComponentProps {
  id?: string;
  value?: number | boolean | string;
  label?: string;
  labelClass?: string;
  labelHidden?: boolean;
  title?: string;
  defaultItem?: string | undefined;
}

export default class Select extends SvelteComponentTyped<
  ISelectProps,
  {
    change: WindowEventMap['change'];
    input: WindowEventMap['input'];
    keydown: WindowEventMap['keydown'];
    keypress: WindowEventMap['keypress'];
    focus: WindowEventMap['focus'];
    blur: WindowEventMap['blur'];
  },
  { default: any }
> {}