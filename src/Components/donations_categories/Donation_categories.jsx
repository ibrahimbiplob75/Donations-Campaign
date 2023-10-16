import Category from "../Category/Category";
import React, { useEffect, useState } from "react";

const Donation_categories = ({searchTerm}) => {

   // console.log(searchTerm)

    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    useEffect(() => {
      fetch("donate.json")
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
          
          if (searchTerm) {
            const filtered = data.filter((category) =>
              category.category_name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            );
            setFilteredCategories(filtered);
          } else {
            setFilteredCategories(data);
          }
        });
    }, [searchTerm]);
 
  return (
    <div className="flex flex-wrap gap-4 m-20 justify-between">
      {filteredCategories.map((category) => (
        <Category key={category.id} category={category}></Category>
      ))}
    </div>
  );
};

export default Donation_categories;








