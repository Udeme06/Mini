//helper
Template.kiosk.helpers({
	'updateItems':function(){
		return items.find();
	},
	'otherHelper':function(){
		//do something to help
	}
});

Template.kiosk.events({
	'click #items':function(){
		//items.insert(price : 350, item: "x-box one", userid: "mark");
		
		var itemId = this._id;
    Session.set('selectedItem', itemId);
    
	}
});

