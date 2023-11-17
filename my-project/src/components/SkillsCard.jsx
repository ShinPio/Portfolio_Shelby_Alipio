import React from 'react';

const SkillsCard = ({ icon, title, text }) => {
  return (
    <div className='bg-white p-6 rounded-md shadow-md'>
      <span>{icon}</span>
      <h4 className='mt-6 font-bold'>{title}</h4>
      <p className='mt-2 text-slate-500'>{text}</p>
    </div>
  );
};

export default SkillsCard;
