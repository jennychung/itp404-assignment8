import Ember from 'ember';

export default Ember.Component.extend({
action:{
  markAsRead(post){
    this.attrs.markAsRead(this.attrs.post.value);
    // console.log(post);
  }
}

});
