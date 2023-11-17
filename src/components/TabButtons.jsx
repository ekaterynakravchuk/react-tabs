const TabButtons = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className='tab_btns'>
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            onClick={() => setCurrentItem(index)}
            className={index === currentItem ? 'active' : ''}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default TabButtons;
