<script lang="ts">
  export let ref: any | undefined = undefined;
  export let src: string | undefined = undefined;
  export let alt: string | undefined = undefined;
  export let width: number | undefined = undefined;
  export let height: number | undefined = undefined;
  export let size: number | undefined = undefined;
  export let center: boolean | undefined = undefined;
  export let visible: boolean | undefined = true;
  export let fallbackSrc: string | undefined = undefined;
  export let hideOnError: boolean | undefined = undefined;

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const divStyle = `width: ${size}px; height: ${size}px;`;
  const imgStyle = `max-width: ${size}px; max-height: ${size}px;`;

  function errorHandler(error) {
    error.target.src = fallbackSrc;
    if (hideOnError) visible = false;
    dispatch('error', error);
  }
</script>

{#if visible}
  {#if center}
    <div bind:this={ref} class="position-relative {$$restProps.class}" style={divStyle}>
      <img
        {...$$restProps}
        {src}
        {alt}
        {width}
        {height}
        class="position-absolute top-50 start-50 translate-middle"
        style={imgStyle}
        on:error={errorHandler}
      />
      <slot />
    </div>
  {:else}
    <img
      bind:this={ref}
      {...$$restProps}
      {src}
      {alt}
      {width}
      {height}
      class={$$restProps.class}
      on:error={errorHandler}
    />
    <slot />
  {/if}
{/if}
