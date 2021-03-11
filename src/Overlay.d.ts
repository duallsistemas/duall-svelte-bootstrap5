import { SvelteComponentTyped } from 'svelte';

import { IComponentProps, PointerEvents, TextSelection } from './common';

interface IOverlayProps extends IComponentProps {
  disabled?: boolean;
  textSelection?: TextSelection;
  pointerEvents?: PointerEvents;
}

export default class Overlay extends SvelteComponentTyped<IOverlayProps, {}, { default: any }> {}
