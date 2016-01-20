Template.cart.onRendered(function(){

});


Template.cart.events({
  'click .remove':function(){
    var itemId = this._id;
    Items.update( 
      {_id: itemId},
      { $set: {'metadata.available': "yes"} }
      );
    var cart = Session.get('cart');
    var index = cart.indexOf(itemId);

    if (index > -1) {
      cart.splice(index, 1);
      Session.set('cart',cart);
      Session.set('increment', cart.length)
    }
  },

  'click .cash': function(){
    var bag = Session.get('cart');
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
    return cart;
  }

});