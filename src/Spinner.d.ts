import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface ISpinnerProps extends IComponentProps {
  title: string;
  small?: boolean;
  center?: boolean;
}

export default class Spinner extends SvelteComponentTyped<ISpinnerProps> {}
