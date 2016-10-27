import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost1() {
     var params = {
       title: this.get('title'),
       subtitle: this.get('subtitle'),
       date: this.get('date'),
       category: this.get('category'),
       image: this.get('image'),
       review: this.get('review'),
     };
     this.set('addNewPost', false);
     this.sendAction('savePost2', params);
   }
 }
});
