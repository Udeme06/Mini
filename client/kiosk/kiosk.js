//helper


Template.kiosk.helpers({
	'updateItems':function(){
		return items.find({});
	},
	'selectedClass':function(){
		return this._id;
	},
	/*uploads:function(){
		return Uploads.find();
	}*/

	images: function () {
    return Images.find(); // Where Images is an FS.Collection instance
  }

});

Template.kiosk.events({
	'submit form': function(event, template){
		event.preventDefault();
		let itemName = template.find('#item-name').value;
		let price = template.find('#price').value;
		items.insert({'ItemName': itemName, 'price':price});
	},

	/*'change .fileInput': function(event, template){
		FS.Utility.eachFile(event, function(file){
			var fileObj = new FS.File(file);
			Uploads.insert(fileObj, function(err){
				console.log(err);
			})
		})
	}*/
	'change .fileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP

      });
    });
  }
});

