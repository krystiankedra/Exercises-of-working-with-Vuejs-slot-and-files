<template>
  <v-container>
    <upload-file-wrapper :upload-handler="uploadFile">
      <template #btn-name>
        Upload File
      </template>
    </upload-file-wrapper>
    <files-wrapper :elements="posts" class="mt-3">
      <template #title>
        <h1 class="title">
          Posts List
        </h1>
      </template>
      <template #header="{ item: { name, index } }">
        {{ `File - ${index + 1}. ${name}` }}
      </template>
      <template #content="{ item: { content } }">
        <span>
          {{ content }}
        </span>
      </template>
    </files-wrapper>
  </v-container>
</template>

<script>
const uploadFileWrapper = () => import('~/components/Shared/UploadFileWrapper/uploadFileWrapper')
const filesWrapper = () => import('~/components/Shared/FilesWrapper/filesWrapper')
import { ADD_NEW_POST_FROM_FILE } from '~/store/actionTypes'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    uploadFileWrapper,
    filesWrapper
  },
  computed: {
    ...mapGetters({
      posts: 'posts'
    })
  },
  methods: {
    ...mapActions({
      addNewPostFromFile: ADD_NEW_POST_FROM_FILE
    }),
    uploadFile(file) {
      this.addNewPostFromFile(file)
    }
  }
}
</script>