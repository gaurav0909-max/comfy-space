import React from "react";
import { FaRegComment } from "react-icons/fa";
import { blogs } from "../../data/blogs";

const Blogs = () => {

    return (
        <div className="bg-[#FDDBBB] py-16 px-6 font-poppins">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Header */}
                <h3 className="text-sm text-purple-600 font-medium uppercase ">Blog Post</h3>
                <h2 className="text-xl font-semibold mt-2 mb-8 ">
                    Popular blog posts we update every day
                </h2>

                {/* Blog Cards */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-transparent rounded-lg shadow-sm overflow-hidden hover:shadow-2xl transition-shadow duration-300 hover:border-[1px] hover:border-black"
                        >
                            {/* Blog Image */}
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-64 object-cover"
                            />
                            {/* Blog Content */}
                            <div className="p-4">
                                <h3 className="text-md font-thin text-gray-800 mb-3">
                                    {blog.title}
                                </h3>
                                {/* Comments */}
                                <div className="flex items-center text-gray-500 text-sm">
                                    <FaRegComment className="mr-2" />
                                    {blog.comments} Comments
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Blogs;
