Template.welcome.onRendered(function() {
Session.set({userPressedLogin: false});
	Session.set({userPressedRegister: false});
});

Template.welcome.helpers({
	userPressedRegister: function(){
		let regPressed = Session.get("userPressedRegister");
		return regPressed;
	},
	userPressedLogin: function(){
		let logPressed = Session.get("userPressedLogin");
		return logPressed;
	}
});

Template.welcome.events({
    'click .login' : function(e) {
		Session.set({userPressedRegister: false});
		Session.set({userPressedLogin: true});
	},
	'click .register' : function(){
		Session.set({userPressedLogin: false});
		Session.set({userPressedRegister: true});
},

	'click #login-button' : function(event){
		event.preventDefault();
		let email = $('#input-email').val();
		let password = $('#input-password').val();
		Meteor.loginWithPassword(email, password, function(error){
			if(error){
				$('#error-message').text(error.reason);
			} 

			if (Meteor.userId) {
		        Router.go('/buy');
		    }
		});
	},

'click #register-button' : function(event){
		event.preventDefault();
		let email = $('#input-email').val();
		let password = $('#input-password').val();
		let firstname = $('#input-firstname').val();
		let lastname = $('#input-lastname').val();
		let mailing = $('#input-mailing').val();

var options = {
email: email,
password: password,
	profile: { firstname: firstname,
	lastname: lastname,
	mailing: mailing }
};

		if(password.length<6){
			$('#error-message').text("Password must be at least 6 characters in length");
		}
		else{
			Accounts.createUser(options, function(error){
	        	if (error) {
	            	$('#error-message').text(error.reason);
	        	}
	        	if (Meteor.userId) {
		        	Router.go('/buy');
		    	}
	        });
		}
	}

});
