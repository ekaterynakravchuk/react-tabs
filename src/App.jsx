import { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import TabButtons from './components/TabButtons';
import JobInfo from './components/JobInfo';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const getInfo = async () => {
    try {
      const result = await fetch('https://course-api.com/react-tabs-project');
      const data = await result.json();
      setInfo(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <h1>tabs</h1>
      <section className='tabs'>
        <TabButtons
          jobs={info}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <div className='tabs__content'>
          <JobInfo currentItem={currentItem} jobs={info} />
        </div>
      </section>
    </>
  );
}

export default App;
