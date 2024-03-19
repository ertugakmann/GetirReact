import React from "react";

function Category({ category: { id, title, image } }) {
  return (
    <a
      href="#"
      className="flex flex-col grpup items-center text-center p-4 transition hover:bg-purple-50"
    >
      <img src={image} className="h-12 rounded border-gray-200" />
      <span className="text-sm gap-y-2 text-gray-700 group hover:text-brand-color tracking-tight">
        {title}
      </span>
    </a>
  );
}

export default Category;
