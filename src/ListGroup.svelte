<script lang="ts">
  export let ref: HTMLUListElement | undefined = undefined;
  export let flush: boolean | undefined = undefined;
</script>

<ul bind:this={ref} {...$$restProps} class="list-group {$$restProps.class}" class:list-group-flush={flush}>
  <slot />
</ul>
