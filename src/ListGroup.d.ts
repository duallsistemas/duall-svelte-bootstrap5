import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface IListGroupProps extends IComponentProps {
  flush?: boolean;
}

export default class ListGroup extends SvelteComponentTyped<IListGroupProps, {}, { default: any }> {}
