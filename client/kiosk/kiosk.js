//helper
var fileObj = { };
//var itemId = this._id;
var userId = Meteor.userId();
var id;

Template.kiosk.helpers({
	/*uploads:function(){
		return Uploads.find();
	}*/

	'images': function (){ 
       return Images.find({'metadata.owner': userId});
    }

});

Template.kiosk.events({
	'submit #kiosk-form': function(event, template){
		event.preventDefault();
		var itemNew = {
		itemName: template.find('#item-name').value,
		price: template.find('#price').value,
		description: template.find('#description').value,
		category: template.find('#category').value,
		owner: userId
	};
		items.insert(itemNew, function(error, result){
			if(!error){
				id = result;
				fileObj.metadata = {owner: userId, itemId: id};
			}else{
				alert("item not added");
			}
		}); 
	    Images.insert(fileObj, function (err) { });
	},

	'change .fileInput': function(event, template) {
		FS.Utility.eachFile(event, function(file) {
			fileObj = new FS.File(file);
			//fileObj.metadata = {owner: userId};
		});
	}

});

