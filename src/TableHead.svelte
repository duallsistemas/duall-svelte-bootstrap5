<script lang="ts">
  export let ref: any | undefined = undefined;
  export let color: TableColor | undefined = 'primary';

  import type { TableColor } from './common';
</script>

<thead
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
>
  <slot />
</thead>
