
/*Uploads = new FS.Collection('uploads', {
	stores:[new FS.Store.FileSystem('uploads',{path:'~/projectUploads'})]
});*/

Items = new FS.Collection("Items", {
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

