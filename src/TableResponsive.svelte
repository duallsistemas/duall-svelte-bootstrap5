<script lang="ts">
  export let ref: any | undefined = undefined;
  export let responsiveSize: TableResponsiveSize | '' | undefined = undefined;

  import type { TableResponsiveSize } from './common';
</script>

{#if responsiveSize !== undefined}
  <div
    bind:this={ref}
    {...$$restProps}
    class:table-responsive={responsiveSize === ''}
    class:table-responsive-sm={responsiveSize === 'sm'}
    class:table-responsive-md={responsiveSize === 'md'}
    class:table-responsive-lg={responsiveSize === 'lg'}
    class:table-responsive-xl={responsiveSize === 'xl'}
    class:table-responsive-xxl={responsiveSize === 'xxl'}
    class={$$restProps.class}
  >
    <slot />
  </div>
{:else}
  <slot />
{/if}
