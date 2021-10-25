import { useState, useEffect } from 'react';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Nothing from './Components/Nothing';
import Error from './Components/Error';
import Loader from './Components/Loader';
import Modal from './Components/Modal';
import getImages from './utils/utils';
import './App.css';

function App() {
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [imageList, setImageList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [imageList]);

  const onSubmit = value => {
    setIsLoading(true);
    setRequest(value);
    setPage(1);
    getImages(value, 1)
      .then(({ total, hits }) => {
        setTotal(total);
        setImageList(hits);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const loadMore = () => {
    setIsLoading(true);
    getImages(request, page + 1)
      .then(({ hits }) => {
        setImageList(prevList => [...prevList, ...hits]);
        setPage(prevPage => prevPage + 1);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const showModal = url => {
    setUrl(url);
    setIsOpenModal(true);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {imageList.length > 0 && (
        <ImageGallery imageList={imageList} showModal={showModal} />
      )}
      {(page - 1) * 12 + imageList.length < total && (
        <Button loadMore={loadMore} />
      )}
      {imageList.length === 0 && request !== '' && <Nothing />}
      {error && <Error error={error} />}
      {isOpenModal && <Modal url={url} setIsOpenModal={setIsOpenModal} />}
    </div>
  );
}

export default App;
