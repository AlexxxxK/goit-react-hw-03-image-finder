import axios from "axios";

const baseURL = "https://pixabay.com/api/";

const fetchImages = async (query, page) => {
  const response = await axios(
    `${baseURL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=13831608-fc33c401179d692a5e1a3e905`,
  );
  return response;
};

export default fetchImages;
