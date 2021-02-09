import React from 'react';

const DailyHistory = props => {
  const history = props.attributes;
  const list = props.attributes
    ? history.map(history => {
        const ate_food = history.attributes.ate_food ? '✅' : '❌';
        const drank_water =
          history.attributes.drank_water ? '✅' : '❌';
        return (
          <tbody>
          <tr>
            <th scope="row">Date placeholder</th>
            <td>{history.attributes.weight}</td>
            <td>{ate_food}</td>
            <td>{drank_water}</td>
            <td>{history.attributes.notes}</td>
            <td>
              <button className='btn btn-outline-' onClick={props.handleDestroy.bind(this, history.id)}>
                Delete
              </button>
            </td>
          </tr>
          </tbody>
        );
      })
    : null;

  return (
    
    
    
    <div>
      <table className='table bg-white table-striped'>
        <thead>
        <tr>
<<<<<<< HEAD
          <th>Weight</th>
          <th>Ate Food</th>
          <th>Drank Water</th>
          <th>Notes</th>
          <th>Delete</th>
=======
          <th scope='col'>Date</th>
          <th scope='col'>Weight</th>
          <th scope='col'>Ate Food</th>
          <th scope='col'>Drank Water</th>
          <th scope='col'>Notes</th>

>>>>>>> ccf968c38f77306abc5e69d2918e446047fc21b0
        </tr>
        </thead>
        <tbody>{list}</tbody>
       
      </table>
    </div>
  );
};

export default DailyHistory;

/*
import React from 'react';
import './daily-history.scss';


// const DailyHistory = props => {
//   return <div></div>
// }
//   export default DailyHistory;


const DailyHistory = props => {
  const history = props.attributes.data.relationships.daily_updates.data
  console.log(props.attributes.data.relationships.daily_updates.data)
  console.log('&')
  const list = history
    ? history.map(history => {
        
      const ate_food = history.attributes.attributes.ate_food === true ? '✅' : '❌';
      const drank_water = history.attributes.attributes.drank_water === true ? '✅' : '❌';
      console.log(history.attributes)
      console.log('&&&')
      return (
          <tr>
            <th>{history.attributes.attributes.weight}</th>
            <th>{ate_food}</th>
            <th>{drank_water}</th>
            <th>{history.attributes.attributes.notes}</th>
            <th><button onClick={props.handleDestroy.bind(this, history.attributes.id)}>Delete</button></th>
            </tr>
        );
      })
    : null;

  return (
    <div>
      <table>
        <tr>
          <th>Weight</th>
          <th>Ate Food</th>
          <th>Drank Water</th>
          <th>Notes</th>
          <th>Delete</th>
          </tr>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};

export default DailyHistory;

*/
