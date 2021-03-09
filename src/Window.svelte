<script lang="ts">
  export let ref: any | undefined = undefined;
  export let title: string | undefined = undefined;
  export let returnable: boolean = true;
  export let width: string | number = 'auto';
  export let height: string | number = 'auto';
  export let backgroundColor: BackgroundColor | undefined = 'body';
  export let loading: boolean | undefined = undefined;
  export let errorMessage: string | undefined = undefined;
  export let errorTimeout: number = 5000;
  export let errorCenter: boolean | undefined = undefined;

  import { createEventDispatcher } from 'svelte';

  import type { BackgroundColor } from './common';
  import { getDimension } from './utils';
  import Alert from './Alert.svelte';
  import Spinner from './Spinner.svelte';
  import BackButton from './BackButton.svelte';

  const dispatch = createEventDispatcher();
</script>

<div
  bind:this={ref}
  {...$$restProps}
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
  class="shadow rounded-3 px-3 {$$restProps.class}"
  style="width: {getDimension(width)}; height: {getDimension(height)};"
>
  {#if title}
    <p class="lead shadow-none bg-light rounded text-center p-1 mb-1 mt-3">
      <strong>{@html title}</strong>
    </p>
  {/if}
  <slot name="header" />
  {#if loading}
    <Spinner center />
  {/if}
  <slot />
  {#if errorMessage}
    <Alert
      type="danger"
      message={errorMessage}
      timeout={errorTimeout}
      center={errorCenter}
      small
      class="my-2"
      on:timeout={() => dispatch('errorTimeout')}
    />
  {/if}
  {#if returnable}
    <BackButton class="my-2" />
  {/if}
  <slot name="footer" />
</div>
