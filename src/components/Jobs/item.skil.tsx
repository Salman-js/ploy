import React from 'react';

type skillProps = {
  skill: string;
};

const JobSkill: React.FC<skillProps> = ({ skill }) => {
  return (
    <div className='px-2 py-1 rounded-md bg-slate-200 dark:bg-gray-700 text-xs text-gray-900 dark:text-sky-300 text-semibold'>
      {skill}
    </div>
  );
};
export default JobSkill;
