Template.kiosk.onRendered( function() {
	fileObj = { };

});

Template.kiosk.helpers({	
	'items': function (){ 
		return Items.find({$and: [{'metadata.purchasedBy':"none"}, {'metadata.owner': Meteor.userId()}]});
	},

	'message':function(){
         let check = Session.get('confirmAdd');

         if(check == true){
           return "Item Added, You have Space";
           $("#color-me").fadeOut(2000);

         }else{
           return "Kiosk is full, remove or sell";
           $("#color-me").fadeOut(2000);
         }
	}
});

Template.kiosk.events({
	'submit #kiosk-form': function(event, template){
		event.preventDefault();
      
		if((Items.find({'metadata.owner': Meteor.userId()}).count()) <= 11){
			fileObj.metadata = {
			itemName: template.find('#item-name').value,
			price: template.find('#price').value,
			description: template.find('#description').value,
			category: template.find('#category').value,
			purchasedBy:"none",
			available: "yes",
			owner: Meteor.userId()
		};
		Items.insert(fileObj, function (err) {});
		fileObj = { };
	    }
	    else{
        fileObj = { };
	    }

	},

	'change .fileInput': function(event, template) {
		FS.Utility.eachFile(event, function(file) {
			fileObj = new FS.File(file);
		});
	},

	'click .delete': function(){
		var itemid = this._id; 
		Items.remove(itemid);
	}
});

