import TwoColumn from "./BlogPost";

const BlogContainer = ({ items, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <div className="w-4/5 text-center mx-auto">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:w-[70%] w-full mx-auto my-10">
        {items?.map((block, i) => {
          if (block.blockType === "blogPostBlock") {
            return <TwoColumn key={i} {...block} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BlogContainer;
