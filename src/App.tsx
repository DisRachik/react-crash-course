import { useState } from 'react';
import HeaderMain from './components/HeaderMain/HeaderMain';
import PostList from './components/PostList/PostList';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const toggleModalHandler = () => {
    setModalIsVisible(prev => !prev);
  };

  return (
    <>
      <HeaderMain onCreatePost={toggleModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={toggleModalHandler} />
      </main>
    </>
  );
}

export default App;
