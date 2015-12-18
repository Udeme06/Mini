items = new Mongo.Collection('items');

/*Uploads = new FS.Collection('uploads', {
	stores:[new FS.Store.FileSystem('uploads',{path:'~/projectUploads'})]
});*/

/*Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/projectUploads"})]
});*/

/*var createThumb = function(fileObj, readStream, writeStream) {
  // Transform the image into a 10x10px thumbnail
  gm(readStream, fileObj.name()).resize('100', '100').stream().pipe(writeStream);
};*/

Images = new FS.Collection("images", {
  stores: [
    new FS.Store.FileSystem("thumbs", { path: "~/projectUploads" }),
    new FS.Store.FileSystem("images"),
  ],
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
});