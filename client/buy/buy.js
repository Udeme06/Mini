Template.buy.onRendered(function(){
   Items.find({});
});

var cart = [];

Template.buy.events({
	'change #category':function(){
		var category = $("#category option:selected").val(); 
       //alert(category);
       Session.set('category', category);
   },

   'click .buy': function(){
   	var item = this._id;

   	if(cart.indexOf(item)<0){
   		cart.push(item);
   		Session.set('increment', cart.length);
   	}
   	else{
   		Session.set('increment', cart.length);
   	}
   }

});

Template.buy.helpers({
	'items': function(){
		var categoryName = Session.get('category');
		return Items.find({'metadata.category': categoryName});
	},

	'ItemNumber':function(){
		var no = Session.get('increment');
		return no;
	}
});