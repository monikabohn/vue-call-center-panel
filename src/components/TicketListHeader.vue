<template>
  <div class="ticket-header">
    <div>ID</div>
    <div>Klient</div>
    <div>Temat</div>
    <div>Status</div>
    <div>Priorytet</div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.ticket-header {
  display: none;

  @media (min-width: $breakpoint-mobile) {
    display: grid;
    grid-template-columns: 50px 1fr 2fr 150px 100px;
    padding: $space-sm;
    gap: $space-lg;
    font-weight: $font-semibold;
    text-align: left;
    background-color: $color-bg-header;
    border-bottom: 1px solid $color-border;
    border-radius: $border-radius $border-radius 0 0;
  }
}
</style>