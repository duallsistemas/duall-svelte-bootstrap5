<script lang="ts">
  export let ref: any | undefined = undefined;
  export let overflow: OverflowType = 'auto';
  export let width: string | number = 'auto';
  export let height: string | number = 'auto';

  import type { OverflowType } from './common';
  import { getDimension } from './utils';
</script>

<div
  bind:this={ref}
  {...$$restProps}
  class:overflow-auto={overflow === 'auto'}
  class:overflow-hidden={overflow === 'hidden'}
  class:overflow-visible={overflow === 'visible'}
  class:overflow-scroll={overflow === 'scroll'}
  class={$$restProps.class}
  style="width: {getDimension(width)}; height: {getDimension(height)};"
>
  <slot />
</div>
