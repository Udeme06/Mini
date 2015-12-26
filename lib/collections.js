items = new Mongo.Collection('items');

/*Uploads = new FS.Collection('uploads', {
	stores:[new FS.Store.FileSystem('uploads',{path:'~/projectUploads'})]
});*/

Images = new FS.Collection("images", {
  stores: [
    new FS.Store.FileSystem("thumbs"),
    new FS.Store.FileSystem("images"),
  ],
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
});