import Category from "../Category/Category";
import React, { useEffect, useState } from "react";

const Donation_categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch("donate.json")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);
 
  return (
    <div className="flex flex-wrap gap-4 m-20 justify-between">
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          style={{
            color: category.text_color,
            backgroundColor: category.category_background_color,
          }}
        ></Category>
      ))}
    </div>
  );
};

export default Donation_categories;








