import React from "react";
import { FaRegComment } from "react-icons/fa";

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "How to work with prototype design with Adobe XD featuring tools",
            comments: 22,
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1722503583962-fb0622b436c2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Create multiple artboards by using Figma prototyping development",
            comments: 15,
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1518389764648-36d768899cbc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Convert your web layout theming easily with Sketch Zeplin extension",
            comments: 18,
        },
        {
            id: 4,
            image: "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Mastering responsive web design with modern CSS techniques",
            comments: 12,
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Using collaborative tools effectively in remote teams",
            comments: 8,
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1576153192621-7a3be10b356e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "The power of UX writing in enhancing user experiences",
            comments: 20,
        },
    ];

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
