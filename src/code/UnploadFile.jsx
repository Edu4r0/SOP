import doe
const uploadFile = async (image) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", '');

  try {
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dw2burqsv/auto/upload',
      {
        method: "POST",
        body: formData,
        cors: true,
      }
    );
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.log(error.message);
  }
  
};

export default uploadFile;
