const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "k0haptsq");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/dw2burqsv/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const responseData = await response.json();

  const senFileURL = async ()=>{
    fetch('')
  }
};

export default uploadImage;
