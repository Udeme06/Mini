var fileObj = { };
var userId = Meteor.userId();
var id;

Template.kiosk.helpers({
	/*uploads:function(){
		return Uploads.find();
	}*/

	'items': function (){ 
       return Items.find({'metadata.owner': userId});
    }

});

Template.kiosk.events({
	'submit #kiosk-form': function(event, template){
		event.preventDefault();

		fileObj.metadata = {
		itemName: template.find('#item-name').value,
		price: template.find('#price').value,
		description: template.find('#description').value,
		category: template.find('#category').value,
		owner: userId
	};
		Items.insert(fileObj, function (err) { });
	},

	'change .fileInput': function(event, template) {
		FS.Utility.eachFile(event, function(file) {
			fileObj = new FS.File(file);
		});
	},

	'click .player': function(){
    var itemid = this._id;
    Session.set('selectedPlayer', playerId);
    var selectedPlayer = Session.get('selectedPlayer');
},

	'click .delete': function(){
		var itemid = this._id; 
	   Items.remove(itemid);
	}
});

