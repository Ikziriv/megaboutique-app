<script>
    // @ts-nocheck
    export let placeholder = null
</script>
  
<div>
{#if typeof placeholder === 'string'}
    <div>{placeholder}</div>
{:else if typeof placeholder === 'function'}
    <svelte:component this={placeholder} />
{/if}
</div>