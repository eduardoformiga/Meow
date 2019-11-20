const generateGifCat = async () => {
  clearGif();
  const jsonResult = await getCatGif();
  showGif(jsonResult);
};

const clearGif = () => {
  const img = document.querySelector("img");
  img.style.display = "none";
  img.style.opacity = 0;
  img.src = "";
};

const getCatGif = async () => {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/random?rating=g&tag=cat&api_key=ylFpggYt27WBqRTAghDTKTbdV8hn2Mwh&limit=1"
  );
  const jsonResult = await response.json();
  return jsonResult;
};

const showGif = jsonResult => {
  const img = document.querySelector("img");
  img.src = jsonResult.data.fixed_height_downsampled_url;
  img.style.display = "block";
  img.style.opacity = 1;
};

generateGifCat();
