import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  title: DS.attr(),
  subtitle: DS.attr(),
  date: DS.attr(),
  review: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
