import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () => {
  //const categories = ['One Punch', 'Samurai', 'Dargon Ball']

  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () =>{
  // let anime = 'Naruto';
  //     setCategories([...categories, anime]);//agregar de ultimo
  //     //setCategories([anime,...categories])//agregar de primero
  //     //setCategories(cats => [...categories,anime]); //callback
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid
          key={category}
          category = {category}/>
        )
        )}
      </ol>
    </div>
  );
};

export default GifExpertApp;
