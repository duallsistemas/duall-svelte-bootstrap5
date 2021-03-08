import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface IInputProps extends IComponentProps {
  id?: string;
  value?: number | string;
  list?: Array<string>;
  listId?: string;
  listClass?: string;
  listItemClass?: string;
  label?: string;
  labelClass?: string;
  labelHidden?: boolean;
  title?: string;
}

export default class Input extends SvelteComponentTyped<
  IInputProps,
  {
    change: WindowEventMap['change'];
    input: WindowEventMap['input'];
    keydown: WindowEventMap['keydown'];
    keypress: WindowEventMap['keypress'];
    focus: WindowEventMap['focus'];
    blur: WindowEventMap['blur'];
  }
> {}
