import JobDuties from './JobDuties';

const JobInfo = ({ currentItem, jobs }) => {
  const { title, dates, duties, company } = jobs[currentItem];
  return (
    <div>
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{dates}</p>
      <JobDuties duties={duties} />
    </div>
  );
};

export default JobInfo;
