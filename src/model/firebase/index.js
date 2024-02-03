const storage = firebase.storage();
const storageRef = storage.ref();
const fileRef = storageRef.child("path/to/your/image.jpg");

fileRef.put(file).then((snapshot) => {
  console.log("Uploaded a blob or file!");
});
