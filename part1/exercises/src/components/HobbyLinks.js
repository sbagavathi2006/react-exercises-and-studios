import React from 'react';
//import classes from './HobbyLinks.module.css';

class HobbyLinks extends React.Component {
   render() {
      const hobbyLinks = ["https://novoresume.com/career-blog/volunteer-experience-resume", 
      "https://ung.edu/modern-languages/why-study-a-foreign-language.php"];
      return (
      <div>
         <h3>My Hobbies</h3>  
            <a href = {hobbyLinks[0]}>Career blog.</a>
            <br></br>
            <a href = {hobbyLinks[1]}>Why Study a for foreign language.</a>
     </div>
      );
   }
}

export default HobbyLinks;