import React, { useEffect, useState } from "react";

const TwoColumnBlog = ({ menuTitle = "Menu", menuItems = [] }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/blogPosts");
        const data = await res.json();
        setBlogPosts(data.docs || []);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-row justify-center w-3/5 m-auto my-10 gap-10 ">
        <div className=" flex flex-col w-[70%] gap-5">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-row md:gap-8 sm:gap-1 rounded-md shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:duration-300 hover:ease-in-out"
            >
              <div className="flex-1 relative h-48">
                <img
                  src={post.image?.url || "/placeholder.png"}
                  alt={post.image?.alt || "Post image"}
                  className="object-cover w-full h-full rounded-l-md"
                />
              </div>

              <div className="flex-1 p-3 flex items-center">
                <article>
                  <div className="h-12">
                    <h2 className="md:text-2xl text-gray-500 font-normal sm:text-base font-oswald">
                      {post.heading}
                    </h2>
                  </div>

                  <p className="truncate-3-lines text-gray-400 text-xs font-quicksand font-normal sm:text-xs md:text-base lg:text-lg">
                    {post.text}
                  </p>

                  <div className="mt-5">
                    <a
                      href={`/blog/${post.slug}`}
                      className="hover:underline text-gray-500 hover:cursor-pointer text-sm font-light"
                    >
                      Read more
                    </a>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[30%] bg-gray-50 p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-4">{menuTitle}</h3>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnBlog;
