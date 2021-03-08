import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface IListGroupItemProps extends IComponentProps {
  title?: string;
  icon?: string;
  action?: boolean;
  href?: string;
  hint?: string;
  disabled?: boolean;
}

export default class ListGroupItem extends SvelteComponentTyped<
  IListGroupItemProps,
  {
    click: WindowEventMap['click'];
    mouseover: WindowEventMap['mouseover'];
    mouseenter: WindowEventMap['mouseenter'];
    mouseleave: WindowEventMap['mouseleave'];
  },
  { default: any }
> {}
