import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, TextAlignment, TextColor } from './common';

interface ILeadProps extends IComponentProps {
  color?: TextColor;
  textAlignment?: TextAlignment;
}

export default class Lead extends SvelteComponentTyped<
  ILeadProps,
  {
    mouseover: WindowEventMap['mouseover'];
    mouseenter: WindowEventMap['mouseenter'];
    mouseleave: WindowEventMap['mouseleave'];
    click: WindowEventMap['click'];
  },
  { default: any }
> {}
