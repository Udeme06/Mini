
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
      
     /*Session.set('selectedItem',item);*/
      /*var selectedItem = Session.get('selectedItem');
      console.log(selectedItem);*/
    
   	}
   	else{
   		Session.set('increment', cart.length);
   	}
   }

});

Template.buy.helpers({
	'items': function(){
		var categoryName = Session.get('category');
		return Items.find({ $and: [ {'metadata.owner':{$ne: Meteor.userId()}}, {'metadata.category': categoryName} ] });
	},

	'ItemNumber':function(){
		var no = Session.get('increment');
		return no;
	},

/*'selectedClass': function(){
  //return "selected"
  //return this._id
   var itemId = this._id;
    var selectedItem = Session.get('selectedItem');
    if(itemId == selectedItem){
    return "selected";
  }*/

//}

});