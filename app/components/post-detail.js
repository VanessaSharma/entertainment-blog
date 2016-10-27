import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    saveComment(params){
      this.sendAction('saveComment', params);
  },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },
    update(comment, params) {
      console.log(comment);
      console.log(params);
      this.sendAction('update', comment, params);
    }
  }
});
