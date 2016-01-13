var cart = [];

Template.buy.events({
	'change #category':function(){
       var category = $("#category option:selected").val(); 
       //alert(category);
      Session.set('category', category);
	},

	'click .buy': function(){
		var item = this._id;
       cart.join(item);
	}

});

Template.buy.helpers({
  'items': function(){
  	var categoryName = Session.get('category');
  	return Items.find({'metadata.category': categoryName});
  },

  'ItemNumber':function(){
    return cart.length;
  }
});