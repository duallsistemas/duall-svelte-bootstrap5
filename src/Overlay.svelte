<script lang="ts">
  export let disabled: boolean | undefined = false;
  export let textSelection: TextSelection | undefined = 'none';
  export let pointerEvents: PointerEvents | undefined = undefined;

  import type { PointerEvents, TextSelection } from './common';
</script>

{#if disabled}
  <div
    class="overlay"
    class:user-select-all={textSelection === 'all'}
    class:user-select-auto={textSelection === 'auto'}
    class:user-select-none={textSelection === 'none'}
    class:pe-none={pointerEvents === 'none'}
    class:pe-auto={pointerEvents === 'auto'}
  >
    <slot />
  </div>
{/if}
