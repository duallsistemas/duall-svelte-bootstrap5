import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface IIconProps extends IComponentProps {
  icon?: string;
}

export default class Icon extends SvelteComponentTyped<IIconProps> {}
