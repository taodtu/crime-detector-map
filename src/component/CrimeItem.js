import React from 'react';
import { Link } from '@reach/router'

const CrimeItem = ({ crimeList }) => {
 return (
  <div>
   <Link to={"/"}>Map view</Link>
   <ul>
    {crimeList.map(crime => {
     return <div key={crime.id}>
      {crime.id}
      <div>
       {Object.keys(crime).map(key =>
        <li key={key}>
         {key}
        </li>)}
      </div>
     </div>
    })}
   </ul>
  </div>
 );
};

export default CrimeItem;