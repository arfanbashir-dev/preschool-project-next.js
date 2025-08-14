import React, { ReactNode } from 'react';

interface CardProps { icon: ReactNode; // for things like <FaUserFriends />
  title: string;
  value: string | number;
}

const Card: React.FC<CardProps> = ({ icon, title, value }) => {
  return (
    <div className='bg-medium p-4 rounded-lg shadow-md flex items-center space-x-6'>
      <div className='text-3xl text-gray-500'>{icon}</div>
      <div>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-xl'>{value}</p>
      </div>
    </div>
  );
};

export default Card;


// import React from 'react'

// const Card = ({icon, title, value}) => {
//   return (
//     <div className='bg-medium  p-4 rounded-lg shadow-md flex items-center space-x-6 '>
//         <div className='text-3xl text-gray-500'>{icon}</div>
//         <div>
//             <h2 className='text-lg font-semibold'>{title}</h2>
//             <p className='text-xl'>{value}</p>
//         </div>
//     </div>
//   )
// }

// export default Card