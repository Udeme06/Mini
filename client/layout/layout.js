Template.layout.events({
	'click .logout': function() {
		Meteor.logout();
		Router.go('welcome');
	}
});

Template.layout.helpers({
	'currentUser': function() {
		var currentUser = Meteor.user();
		return currentUser;
	}

});