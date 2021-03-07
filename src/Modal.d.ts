import { SvelteComponentTyped } from 'svelte';

import { ModalSize } from './common';

interface IModalProps {
  ref?: HTMLDivElement;
  size?: ModalSize;
  title?: string;
  visible?: boolean;
  body?: string;
  closable: boolean;
  disabled?: boolean;
}

export default class Modal extends SvelteComponentTyped<IModalProps, {}, { title: any; body: any; footer: any }> {}
