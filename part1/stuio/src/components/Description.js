// Description.js
import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
  
  const authorLink = 'https://preppykitchen.com/how-to-make-a-milkshake/';
  const authorPhoto = 'https://preppykitchen.com/wp-content/uploads/2020/09/New-Headshot-Round-60-2.jpg';
  const authorName = 'John Kanell';

  return (
    <div className={styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Blog name</a>
      </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Title</h1>
          <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
