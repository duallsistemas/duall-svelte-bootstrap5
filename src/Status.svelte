<script lang="ts">
  export let ref: any | undefined = undefined;
  export let color: TextColor | undefined = 'secondary';
  export let fontSize: FontSize | undefined = 'fs-6';
  export let backgroundColor: BackgroundColor | undefined = undefined;
  export let textAlignment: TextAlignment | undefined = 'center';
  export let center: boolean | undefined = true;
  export let middle: boolean | undefined = undefined;
  export let zIndex: number | undefined = 1;

  import type { BackgroundColor, FontSize, TextAlignment, TextColor } from './common';
</script>

<div
  bind:this={ref}
  {...$$restProps}
  class:fs-1={fontSize === 'fs-1'}
  class:fs-2={fontSize === 'fs-2'}
  class:fs-3={fontSize === 'fs-3'}
  class:fs-4={fontSize === 'fs-4'}
  class:fs-5={fontSize === 'fs-5'}
  class:fs-6={fontSize === 'fs-6'}
  class:text-primary={color === 'primary'}
  class:text-secondary={color === 'secondary'}
  class:text-success={color === 'success'}
  class:text-danger={color === 'danger'}
  class:text-warning={color === 'warning'}
  class:text-info={color === 'info'}
  class:text-light={color === 'light'}
  class:text-dark={color === 'dark'}
  class:text-body={color === 'body'}
  class:text-muted={color === 'muted'}
  class:text-white={color === 'white'}
  class:text-black-50={color === 'black-50'}
  class:text-white-50={color === 'white-50'}
  class:text-start={textAlignment === 'start'}
  class:text-center={textAlignment === 'center'}
  class:text-end={textAlignment === 'end'}
  class:bg-primary={backgroundColor === 'primary'}
  class:bg-secondary={backgroundColor === 'secondary'}
  class:bg-success={backgroundColor === 'success'}
  class:bg-danger={backgroundColor === 'danger'}
  class:bg-warning={backgroundColor === 'warning'}
  class:bg-info={backgroundColor === 'info'}
  class:bg-light={backgroundColor === 'light'}
  class:bg-dark={backgroundColor === 'dark'}
  class:bg-body={backgroundColor === 'body'}
  class:bg-white={backgroundColor === 'white'}
  class:bg-transparent={backgroundColor === 'transparent'}
  class:translate-middle={middle}
  class:position-absolute={center}
  class:top-50={center}
  class:start-50={center}
  class={$$props.class}
  style="z-index: {zIndex}"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
>
  <slot />
</div>
