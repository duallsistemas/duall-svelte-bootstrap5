<script lang="ts">
  import Spinner from './Spinner.svelte';

  export let ref: any | undefined = undefined;
  export let title: string = 'Carregando ...';
  export let small: boolean | undefined = undefined;
  export let grow: boolean | undefined = undefined;
  export let center: boolean | undefined = undefined;
  export let visible: boolean | undefined = true;
</script>

<Spinner {ref} {title} {small} {grow} {center} {visible}>
  <slot />
</Spinner>
{#if !visible}
  <slot />
{/if}
