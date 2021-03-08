<script lang="ts">
  export let ref: any | undefined = undefined;
  export let caption: string | undefined = undefined;
  export let captionTop: boolean | undefined = undefined;
  export let color: TableColor | undefined = 'primary';
  export let size: TableSize | undefined = undefined;
  export let bordered: boolean | undefined = true;
  export let borderless: boolean | undefined = undefined;
  export let striped: boolean | undefined = undefined;
  export let hover: boolean | undefined = undefined;
  export let responsiveSize: TableResponsiveSize | '' | undefined = undefined;

  import type { TableColor, TableResponsiveSize, TableSize } from './common';
  import TableResponsive from './TableResponsive.svelte';
</script>

<TableResponsive {responsiveSize}>
  <table
    bind:this={ref}
    {...$$restProps}
    class:caption-top={captionTop}
    class:table-bordered={bordered}
    class:table-borderless={borderless}
    class:table-striped={striped}
    class:table-hover={hover}
    class:table-primary={color === 'primary'}
    class:table-secondary={color === 'secondary'}
    class:table-success={color === 'success'}
    class:table-danger={color === 'danger'}
    class:table-warning={color === 'warning'}
    class:table-info={color === 'info'}
    class:table-light={color === 'light'}
    class:table-dark={color === 'dark'}
    class:table-sm={size === 'sm'}
    class="table {$$restProps.class}"
  >
    {#if caption}
      <caption>
        {@html caption}
        <slot name="caption" />
      </caption>
    {/if}
    <thead>
      <slot name="head" />
    </thead>
    <tbody>
      <slot name="body" />
    </tbody>
  </table>
</TableResponsive>
