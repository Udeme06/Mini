//helper
var fileObj = { };
var itemId = this._id;
var userId = Meteor.userId();

Template.kiosk.helpers({
	'updateItems':function(){
		return userId;
	},

	'selectedClass':function(){
		return this._id;
	},
	/*uploads:function(){
		return Uploads.find();
	}*/

	'images': function (){
        return Images.find({"metadata.owner": userId}); // Where Images is an FS.Collection instance
    }

});

Template.kiosk.events({
	'submit #kiosk-form': function(event, template){
		event.preventDefault();
		let itemName = template.find('#item-name').value;
		let price = template.find('#price').value;
		let description = template.find('#description').value;
		let category = template.find('#category').value;
		items.insert({'ItemName': itemName, 'price':price, 'description': description, 'category': category, 'user_Id': userId});

	    Images.insert(fileObj, function (err) { });
	},

	'change .fileInput': function(event, template) {
		FS.Utility.eachFile(event, function(file) {
			fileObj = new FS.File(file);
			fileObj.metadata = {owner: userId};
			
		});
      
	}

});

