Template.buy.onRendered(function(){
 return Items.find({'Meteor.owner': {$ne: Meteor.userId()}}, {'metadata.available': "yes"});
});

var cart = [];

Template.buy.events({
	'change #category':function(){
		var category = $("#category option:selected").val(); 
       //alert(category);
       Session.set('category', category);
     },

     'click .addCart': function(){
      var item = this._id;

      if(cart.indexOf(item)<0){
        cart.push(item);
       Items.update( 
        {_id: item},
        { $set: {'metadata.available': "no"} });

       Session.set('cart', cart);
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
		return Items.find({ $and: [{'metadata.available': "yes"}, {'metadata.owner':{$ne: Meteor.userId()}}, {'metadata.category': categoryName} ] });
	},

	'ItemNumber':function(){
		var no = Session.get('increment');
		return no;
	},

});