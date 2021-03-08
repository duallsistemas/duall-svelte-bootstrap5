<script lang="ts">
  export let ref: any | undefined = undefined;
  export let color: TableColor | undefined = undefined;
  export let scope: 'row' | 'col' | undefined = undefined;

  import type { TableColor } from './common';
</script>

<th
  bind:this={ref}
  {...$$restProps}
  class:table-primary={color === 'primary'}
  class:table-secondary={color === 'secondary'}
  class:table-success={color === 'success'}
  class:table-danger={color === 'danger'}
  class:table-warning={color === 'warning'}
  class:table-info={color === 'info'}
  class:table-light={color === 'light'}
  class:table-dark={color === 'dark'}
  class={$$restProps.class}
  {scope}
>
  <slot />
</th>
