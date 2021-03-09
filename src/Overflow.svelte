<script lang="ts">
  export let ref: any | undefined = undefined;
  export let type: OverflowType = 'auto';

  import type { OverflowType } from './common';
</script>

<div
  bind:this={ref}
  {...$$restProps}
  class:overflow-auto={type === 'auto'}
  class:overflow-hidden={type === 'hidden'}
  class:overflow-visible={type === 'visible'}
  class:overflow-scroll={type === 'scroll'}
  class={$$restProps.class}
>
  <slot />
</div>
