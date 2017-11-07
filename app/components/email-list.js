import Ember from 'ember';

export default Ember.Component.extend({

emails:[
  {
    post: null,
  title: 'Sign up for Spring classes!',
  read:false
},

{
  post: null,
  title: 'Sign up for Fall classes!',
  read: true
},

{
  post: null,
  title: 'Dont sign up for Fall classes!',
  read: false
},

{
  post: null,
  title: 'Please sign up for Fall classes!',
  read: false
},
{
  post: null,
  title: 'Dont sign up for Spring classes!',
  read: true
},
{
  post: null,
  title: 'No sign up for Fall classes!',
  read: false
},
{
  post: null,
  title: 'No sign up for Spring classes!',
  read: false
},

],
willRender(){

    for (var i=0; i <this.emails.length; i++){
      Ember.set(this.emails[i], "post", i);
      console.log(this.emails);
    }
},

actions: {
  markAsRead(post){
    if(!this.emails[post].read)
    {
      Ember.set(this.emails[post], "read", true );
        console.log(this.emails[post].read);
      } else {
        Ember.set(this.emails[post], "read", false );
          console.log(this.emails[post].read);
      }
  }
}

});
