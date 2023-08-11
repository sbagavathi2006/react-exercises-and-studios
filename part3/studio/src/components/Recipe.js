const RecipeAuthor = () => {
   let authorLink =
     "https://www.inspiredtaste.net/wp-content/uploads/2023/04/Adam-and-Joanne-2-1200.jpg";
   let authorPhoto =
     "https://www.inspiredtaste.net/wp-content/uploads/2023/04/Adam-and-Joanne-2-1200.jpg";
   let authorName = "Adam";
 
   return (
     <div>
       <img
         src={authorPhoto}
         alt=""
         style={{ objectFit: "contain", borderRadius: "50%" }}
       />
       <div>
         <h3>{authorName}</h3>
         <a href={authorLink}></a>
       </div>
     </div>
   );
 };
 
 const RecipeIngredients = () => {
   const ingredients = ["beef", "olive oil", "onion", "garlic", "tomato paste"];
   return (
     <div>
       <h3>Recipe Ingredients</h3>
       <ul>
         <li>{ingredients[0]}</li>
         <li>{ingredients[1]}</li>
         <li>{ingredients[2]}</li>
         <li>{ingredients[3]}</li>
         <li>{ingredients[4]}</li>
       </ul>
     </div>
   );
 };
 
 const RecipeDescription = () => {
   return (
     <div>
       <div>
         <h1>Weeknight Spaghetti</h1>
         <p>It's Spaghetti</p>
       </div>
       <div className="recipePhotoBlock">
         <RecipeIngredients />
         <RecipeAuthor />
       </div>
     </div>
   );
 };
 
 const RecipePhoto = () => {
   return (
     <img
       src="https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-3-1200.jpg"
       alt="Spaghetti"
       className="imageUpdates"
     />
   );
 };
 
 export default function RecipeDisplay() {
   return (
     <div className="recipePhotoBlock">
       <RecipePhoto />
       <div>
         <RecipeDescription />
       </div>
     </div>
   );
 }