import { SvelteComponentTyped } from "svelte";

declare module '@duallsistemas/duall-svelte-bootstrap5/types.ts' {
	export type BackgroundColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'body' | 'white' | 'transparent';
	export type AlertType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
	export type ButtonType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
	export type ButtonSize = 'sm' | 'lg';
	export type ModalSize = 'sm' | 'lg' | 'xl' | 'fullscreen';
}

declare module '@duallsistemas/duall-svelte-bootstrap5/utils.ts' {
	export function makeId(): string;
}

declare module '@duallsistemas/duall-svelte-bootstrap5/Alert.svelte' {
	interface AlertProps {
		ref?: HTMLDivElement;
		type?: AlertType;
		closable: boolean;
		visible: boolean;
		message?: string;
		small?: boolean;
		timeout: number;
	}

	class Alert extends SvelteComponentTyped<
		AlertProps,
		{  },
		{  }
	> {}

	export default Alert;
}

declare module '@duallsistemas/duall-svelte-bootstrap5/BackButton.svelte' {
	interface BackButtonProps {
	}

	class BackButton extends SvelteComponentTyped<
		BackButtonProps,
		{  },
		{  }
	> {}

	export default BackButton;
}

declare module '@duallsistemas/duall-svelte-bootstrap5/Button.svelte' {
	interface ButtonProps {
		ref?: HTMLButtonElement | HTMLAnchorElement;
		type?: ButtonType;
		title?: string;
		hint?: string;
		icon?: string;
		href?: string;
		disabled?: boolean;
		loading?: boolean;
		loadingMessage?: string;
		size?: ButtonSize;
	}

	class Button extends SvelteComponentTyped<
		ButtonProps,
		{  },
		{  }
	> {}

	export default Button;
}

declare module '@duallsistemas/duall-svelte-bootstrap5/Container.svelte' {
	interface ContainerProps {
		ref?: HTMLDivElement;
	}

	class Container extends SvelteComponentTyped<
		ContainerProps,
		{  },
		{  }
	> {}

	export default Container;
}

declare module '@duallsistemas/duall-svelte-bootstrap5/Copyright.svelte' {
	interface CopyrightProps {
		ref?: HTMLParagraphElement;
	}

	class Copyright extends SvelteComponentTyped<
		CopyrightProps,
		{  },
		{  }
	> {}

	export default Copyright;
}

declare module '@duallsistemas/duall-svelte-bootstrap5/Input.svelte' {
	interface InputProps {
		ref?: HTMLInputElement;
		id: string;
		list?: Array<string>;
		listId: string;
		listClass?: string;
		listItemClass?: string;
		label?: string;
		labelClass?: string;
	}

	class Input extends SvelteComponentTyped<
		InputProps,
		{  },
		{  }
	> {}

	export default Input;
}

declare module '@duallsistemas/duall-svelte-bootstrap5/Modal.svelte' {
	interface ModalProps {
		ref?: HTMLDivElement;
		size?: ModalSize;
		title?: string;
		visible?: boolean;
		body?: string;
		closable: boolean;
		disabled?: boolean;
	}

	class Modal extends SvelteComponentTyped<
		ModalProps,
		{  },
		{ name: any, name: any, name: any }
	> {}

	export default Modal;
}

declare module '@duallsistemas/duall-svelte-bootstrap5/ListGroup.svelte' {
	interface ListGroupProps {
		ref?: HTMLUListElement;
		flush?: boolean;
	}

	class ListGroup extends SvelteComponentTyped<
		ListGroupProps,
		{  },
		{  }
	> {}

	export default ListGroup;
}

declare module '@duallsistemas/duall-svelte-bootstrap5/Icon.svelte' {
	interface IconProps {
		icon: string;
	}

	class Icon extends SvelteComponentTyped<
		IconProps,
		{  },
		{  }
	> {}

	export default Icon;
}

declare module '@duallsistemas/duall-svelte-bootstrap5/ListGroupItem.svelte' {
	interface ListGroupItemProps {
		ref?: HTMLLIElement | HTMLButtonElement | HTMLAnchorElement;
		title?: string;
		icon?: string;
		action?: boolean;
		href?: string;
		hint?: string;
		disabled?: boolean;
	}

	class ListGroupItem extends SvelteComponentTyped<
		ListGroupItemProps,
		{  },
		{  }
	> {}

	export default ListGroupItem;
}

declare module '@duallsistemas/duall-svelte-bootstrap5/Spinner.svelte' {
	interface SpinnerProps {
		ref?: HTMLDivElement;
		title: string;
		small?: boolean;
		center?: boolean;
	}

	class Spinner extends SvelteComponentTyped<
		SpinnerProps,
		{  },
		{  }
	> {}

	export default Spinner;
}

declare module '@duallsistemas/duall-svelte-bootstrap5/Window.svelte' {
	import { BackgroundColor } from './types';

	interface WindowProps {
		ref?: HTMLDivElement;
		title?: string;
		returnable: boolean;
		width: string | number;
		height: string | number;
		backgroundColor: BackgroundColor;
		loading?: boolean;
		errorMessage?: string;
		errorTimeout: number;
	}

	class Window extends SvelteComponentTyped<
		WindowProps,
		{  },
		{ name: any, name: any }
	> {}

	export default Window;
}

