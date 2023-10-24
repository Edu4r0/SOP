
const uploadFile = async (image) => {
  const baseURL = import.meta.env.VITE_UNPLOAD_PRESENT;
  const driveNAME = import.meta.env.VITE_DRIVE_NAME;

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", baseURL);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${driveNAME}/auto/upload`,
      {
        method: "POST",
        body: formData,
        cors: true,
      }
    );
    const responseData = await response.json();
    
    return responseData.secure_url;
  } catch (error) {
    console.log(error.message);
  }
};

export default uploadFile;