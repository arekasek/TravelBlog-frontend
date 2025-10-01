import React from "react";

const BlogTemplate = ({ title, author, publishedDate }) => {
  return (
    <div className="w-full h-[1000px] flex flex-col items-center justify-center p-8 bg-black">
      <h1>{title}</h1>
      <p>
        By {author} on {publishedDate}
      </p>
    </div>
  );
};

export default BlogTemplate;
