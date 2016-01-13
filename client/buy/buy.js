Template.buy.events({

	'change #category':function(event, template){
       var category = $("#category option:selected").val();
       //alert(category); 
       Session.set('category', category);
	}

});

Template.buy.helpers({
  'items': function(){
  	var categoryName = Session.get('category');
  	return Items.find({'metadata.category': categoryName});
  }
});