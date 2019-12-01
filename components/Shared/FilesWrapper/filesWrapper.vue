<template>
  <v-content>
    <slot name="title">
      Title no provided
    </slot>
    <v-layout row wrap>
      <v-flex v-for="(element, index) in elements" :key="index" xs12 md6 class="element-padding">
        <v-card>
          <v-card-title class="blue darken-3 white--text">
            <slot name="header" :item="{ name: element.name, index }">
              Header no provided
            </slot>
          </v-card-title>
          <v-card-text>
            <slot name="content" :item="element">
              Content no provided
            </slot>
          </v-card-text>
          <v-card-actions>
            <slot name="btn-delete" :index="index" />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
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

<style scoped>
.element-padding {
  padding: 10px;
}
</style>