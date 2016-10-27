import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        subtitle: this.get('subtitle'),
        date: this.get('date'),
        category: this.get('category'),
        image: this.get('image'),
        review: this.get('review'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
