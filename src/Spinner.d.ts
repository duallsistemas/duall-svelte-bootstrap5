import { SvelteComponentTyped } from 'svelte';

import { IComponentProps } from './common';

interface ISpinnerProps extends IComponentProps {
  title?: string;
  small?: boolean;
  center?: boolean;
  visible?: boolean;
}

export default class Spinner extends SvelteComponentTyped<ISpinnerProps, { click: WindowEventMap['click'] }> {}
