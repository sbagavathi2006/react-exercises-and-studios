/*export default function ChoresList () {
   return (<><p><b>Today's Chores</b></p>
   <div>
      <ul>
         <li>Empty dishwasher</li>
         <li>Complete prep work</li>
         <li>Buy groceries</li>
      </ul>
   </div></>);
}*/

import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const chores = ["Empty dishwasher", "Complete prep work","Buy groceries"];
      return (
      <div>
         <h3 className = {classes.choresHeading}>Today's Chores</h3>
         <ul>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
         </ul>
      </div>
      );
   }
}

export default ChoresList;