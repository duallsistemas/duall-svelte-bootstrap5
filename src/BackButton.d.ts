import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface IBackButtonProps extends IComponentProps {}

export default class BackButton extends SvelteComponentTyped<
  IBackButtonProps,
  {
    click: WindowEventMap['click'];
    mouseover: WindowEventMap['mouseover'];
    mouseenter: WindowEventMap['mouseenter'];
    mouseleave: WindowEventMap['mouseleave'];
  }
> {}
