<script lang="ts">
  export let ref: any | undefined = undefined;
  export let color: TableColor | undefined = undefined;
  export let active: boolean | undefined = undefined;
  export let alignment: TextAlignment | undefined = undefined;
  export let verticalAlignment: VerticalAlignment | undefined = undefined;

  import type { TableColor, TextAlignment, VerticalAlignment } from './common';
</script>

<tr
  bind:this={ref}
  {...$$restProps}
  class:table-active={active}
  class:table-primary={color === 'primary'}
  class:table-secondary={color === 'secondary'}
  class:table-success={color === 'success'}
  class:table-danger={color === 'danger'}
  class:table-warning={color === 'warning'}
  class:table-info={color === 'info'}
  class:table-light={color === 'light'}
  class:table-dark={color === 'dark'}
  class:text-start={alignment === 'start'}
  class:text-center={alignment === 'center'}
  class:text-end={alignment === 'end'}
  class:align-baseline={verticalAlignment === 'baseline'}
  class:align-top={verticalAlignment === 'top'}
  class:align-middle={verticalAlignment === 'middle'}
  class:align-bottom={verticalAlignment === 'bottom'}
  class:align-text-top={verticalAlignment === 'text-top'}
  class:align-text-bottom={verticalAlignment === 'text-bottom'}
  class={$$restProps.class}
>
  <slot />
</tr>
