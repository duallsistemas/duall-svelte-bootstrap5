<script lang="ts">
  export let ref: any | undefined = undefined;
  export let caption: string | undefined = undefined;
  export let captionTop: boolean | undefined = undefined;
  export let color: TableColor | undefined = undefined;
  export let size: TableSize | undefined = undefined;
  export let bordered: boolean | undefined = true;
  export let borderless: boolean | undefined = undefined;
  export let striped: boolean | undefined = undefined;
  export let hover: boolean | undefined = undefined;
  export let alignment: TextAlignment | undefined = undefined;
  export let verticalAlignment: VerticalAlignment | undefined = undefined;
  export let responsiveSize: TableResponsiveSize | '' | undefined = undefined;

  import type { TableColor, TableResponsiveSize, TableSize, TextAlignment, VerticalAlignment } from './common';
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
    class:text-start={alignment === 'start'}
    class:text-center={alignment === 'center'}
    class:text-end={alignment === 'end'}
    class:align-baseline={verticalAlignment === 'baseline'}
    class:align-top={verticalAlignment === 'top'}
    class:align-middle={verticalAlignment === 'middle'}
    class:align-bottom={verticalAlignment === 'bottom'}
    class:align-text-top={verticalAlignment === 'text-top'}
    class:align-text-bottom={verticalAlignment === 'text-bottom'}
    class="table {$$restProps.class}"
  >
    {#if caption}
      <caption>
        {@html caption}
        <slot name="caption" />
      </caption>
    {/if}
    <slot />
  </table>
</TableResponsive>
