
import React from "react";
// 1. Define the `Blog` type
type Blog = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};
// 2. Define the `blogs` array
const blogs: Blog[] = [
  {
    id: 1,
    title: "Apple Intelligence 224",
    description: "Check out the latest updates on Apple's new AI technology.",
    imageUrl: "https://res.cloudinary.com/dbczn8b8l/image/upload/v1732041861/kq3zgg0rk2onirsawr7z.jpg",
    link: "https://the-tech-checkmate.blogspot.com/2024/10/10-free-vpns-and-proxies-that-actually.html",
  },
  {
    id: 2,
    title: "Best Free VPNs and Proxies",
    description: "Discover the top free VPNs and proxies that actually work.",
    imageUrl: "https://res.cloudinary.com/dbczn8b8l/image/upload/v1732041979/ox2f7fnutv2l2uyaebp3.png",
    link: "https://res.cloudinary.com/dbczn8b8l/image/upload/v1732041979/ox2f7fnutv2l2uyaebp3.png",
  },
  {
    id: 3,
    title: "The Future of AI",
    description: "Explore the future of Artificial Intelligence and its impact on society.",
    imageUrl: "https://res.cloudinary.com/dbczn8b8l/image/upload/v1732041860/esovbcavhww77lotyjyp.jpg",
    link: "https://the-tech-checkmate.blogspot.com/2024/10/the-future-of-artificial-intelligence.html",
  },
];
// 3. Define the `BlogComponent` functional component
const BlogComponent: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-white dark:text-yellow-500">
        {'My Blogs { }'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden 
                transition-transform transform hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-700 
                duration-300 cursor-pointer"
            >
              {/* Blog Image */}
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              {/* Blog Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {blog.description.length > 100
                    ? blog.description.substring(0, 100) + "..."
                    : blog.description}
                </p>
                <span className="mt-4 inline-block text-blue-500 dark:text-blue-400 font-medium">
                  Read More &rarr;
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
