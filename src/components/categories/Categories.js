import React from "react";
import { useSelector } from "react-redux";

const Categories = () => {
  const categories = useSelector((state) => state.apidata.categories);
  let limit = 4;
  return (
    <div className="flex gap-2 mx-8 mt-12 h-80">
      {categories.map((cat, id) => {
        if (id < limit) {
          return (
            <div key={cat.id} className="card">
              <img src={cat.icons[0].url} alt="" />
              <h3 className="mt-8 text-base font-urbanist">{cat.name}</h3>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Categories;
