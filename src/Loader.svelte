<script lang="ts">
  import Spinner from './Spinner.svelte';

  export let ref: any | undefined = undefined;
  export let title: string = 'Carregando ...';
  export let small: boolean | undefined = undefined;
  export let grow: boolean | undefined = undefined;
  export let center: boolean | undefined = undefined;
  export let visible: boolean | undefined = true;
</script>

{#if visible}
  <div bind:this={ref} {...$$props} class={$$props.class}>
    <Spinner {title} {small} {grow} {center} visible />
  </div>
{:else}
  <slot />
{/if}
