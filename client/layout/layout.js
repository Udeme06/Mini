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

Template.nav.helpers({
	'ItemAmount': function (){
		return Items.find({$and: [{'metadata.purchasedBy':"none"}, {'metadata.owner': Meteor.userId()}]}).count();
	}
});