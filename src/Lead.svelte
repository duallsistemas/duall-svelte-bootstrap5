<script lang="ts">
  export let ref: any | undefined = undefined;
  export let color: TextColor | undefined = 'primary';
  export let textAlignment: TextAlignment | undefined = undefined;

  import type { TextAlignment, TextColor } from './common';
</script>

<p
  bind:this={ref}
  {...$$restProps}
  class:text-start={textAlignment === 'start'}
  class:text-center={textAlignment === 'center'}
  class:text-end={textAlignment === 'end'}
  class="lead text-{color} {$$restProps.class}"
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:click
>
  <slot />
</p>
