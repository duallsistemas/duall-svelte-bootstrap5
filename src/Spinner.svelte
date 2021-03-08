<script lang="ts">
  export let ref: any | undefined = undefined;
  export let title: string = 'Carregando ...';
  export let small: boolean | undefined = undefined;
  export let center: boolean | undefined = undefined;
</script>

<div
  bind:this={ref}
  {...$$restProps}
  class="spinner-border {$$restProps.class}"
  class:spinner-border-sm={small}
  class:center
  role="status"
  aria-hidden="true"
  on:click
>
  <span class="visually-hidden">{title}</span>
</div>
