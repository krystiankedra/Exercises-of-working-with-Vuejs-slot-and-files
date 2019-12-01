<template>
  <div>
    <slot name="title">
      Title no provided
    </slot>
    <v-card v-for="(element, index) in elements" :key="index" class="col-12">
      <v-card-title class="blue darken-2 white--text">
        <slot name="header" :item="{ name: element.name, index }">
          Header no provided
        </slot>
      </v-card-title>
      <v-card-text>
        <slot name="content" :item="element">
          Content no provided
        </slot>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    elements: {
      type: Array,
      default: () => []
    }
  }
}
</script>