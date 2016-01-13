Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('welcome');
  } else {
    this.next();
  }
});

Router.configure({ layoutTemplate: 'layout'});
Router.route('/', {name: "welcome"});
Router.route('/kiosk', {name: "kiosk"});
Router.route('/buy', {name: "buy"});
