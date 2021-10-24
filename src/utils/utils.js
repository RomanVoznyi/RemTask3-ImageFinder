import axios from 'axios';

const APIKEY = '18895827-cf969cabaa6d7255b0d8616bb';

const getImages = (request, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${request}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data);
};

export default getImages;
