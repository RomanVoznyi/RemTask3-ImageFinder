import { useState } from 'react';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import getImages from './utils/utils';
import './App.css';

function App() {
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [imageList, setImageList] = useState([]);

  const onSubmit = value => {
    setRequest(value);
    setPage(1);
    getImages(value, 1)
      .then(list =>
        setImageList(
          list.map(({ id, webformatURL, largeImageURL }) => {
            return { id, webformatURL, largeImageURL };
          }),
        ),
      )
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery imageList={imageList} />
    </div>
  );
}

export default App;
