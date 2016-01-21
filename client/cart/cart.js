Template.cart.onRendered(function(){

});


Template.cart.events({
  'click .remove':function(){
    var itemId = this._id;
    var cart = Session.get('cart');
    var index = cart.indexOf(itemId);

    if (index > -1) {
      cart.splice(index, 1);
      Items.update({_id: itemId},{ $set: {'metadata.available': "yes"} });
      //cart.splice(index, 1);
      Session.set('cart',cart);
      Session.set('increment', cart.length);
    }
  },

  'click .cash': function(){
    var bag = Session.get('cart');
    var count;
    var totalCost = 0;

    for(count = 0; count < bag.length; count++){
      Items.update({_id: bag[count]}, { $set: {'metadata.purchasedBy': Meteor.userId()} }); 
    
    let item = Items.findOne({_id: bag[count]}, {fields: {'metadata.price': 1}});
    totalCost += Number(item.metadata.price);
    console.log(totalCost);
    }
  }


});


Template.cart.helpers({
	'cart': function() {
    var cart = [];
    var buffer = Session.get('cart');
    for(i = 0; i < buffer.length; i++) {
      //cart.push(Items.findOne({'_id':buffer[i]}));
      cart.push(Items.findOne({$and: [{'metadata.available':"no"}, {'_id':buffer[i]}] }));
    }
    console.log(cart);
    return cart;
  }

});