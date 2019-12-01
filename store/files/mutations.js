export default {
  addNewPostFromFile(state, payload) {
    state.posts = [...state.posts, payload]
  },
  addNewImageFromFile(state, payload) {
    state.images = [...state.images, payload]
  }
}