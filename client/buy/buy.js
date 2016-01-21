Template.buy.onRendered(function(){
 return Items.find({'Meteor.owner': {$ne: Meteor.userId()}}, {'metadata.available': "yes"});
});

var cart = [];

Template.buy.events({
	'change #category':function(){
		var category = $("#category option:selected").val(); 
   Session.set('category', category);
 },

 'click .addCart': function(){
  var item = this._id;
//checkk if the item already exists in the cart
  if(cart.indexOf(item)<0) {
    cart.push(item);
    console.log(cart);
    Items.update( 
      {_id: item},
      { $set: {'metadata.available': "no"} });
    
    Session.set('cart', cart);
    Session.set('increment', cart.length);  
    cart = Session.get('cart');  
  }
  else {
    cart = Session.get('cart');
   Session.set('increment', cart.length);
 }
 cart = Session.get('cart');
}

});

Template.buy.helpers({
	'items': function(){
		var categoryName = Session.get('category');
		return Items.find({ $and: [{'metadata.available': "yes"}, {'metadata.owner':{$ne: Meteor.userId()}}, {'metadata.category': categoryName} ] });
	},

	'ItemNumber':function(){
		var no = Session.get('increment');
		return no;
	},

});