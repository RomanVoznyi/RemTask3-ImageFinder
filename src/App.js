import { useState } from 'react';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Nothing from './Components/Nothing';
import Loader from './Components/Loader';
import getImages from './utils/utils';
import './App.css';

function App() {
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [imageList, setImageList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = value => {
    console.log('isLoading - ', isLoading);
    setIsLoading(true);
    setRequest(value);
    setPage(1);
    getImages(value, 1)
      .then(({ total, hits }) => {
        setTotal(total);
        setImageList(
          hits.map(({ id, webformatURL, largeImageURL }) => {
            return { id, webformatURL, largeImageURL };
          }),
        );
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loadMore = () => {
    setIsLoading(true);
    getImages(request, page + 1)
      .then(({ hits }) => {
        setImageList(prevList => [
          ...prevList,
          ...hits.map(({ id, webformatURL, largeImageURL }) => {
            return { id, webformatURL, largeImageURL };
          }),
        ]);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
    setPage(prevPage => prevPage + 1);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ImageGallery imageList={imageList} />
          {(page - 1) * 12 + imageList.length < total && (
            <Button loadMore={loadMore} />
          )}
          {imageList.length === 0 && request !== '' && <Nothing />}
        </>
      )}
    </div>
  );
}

export default App;
