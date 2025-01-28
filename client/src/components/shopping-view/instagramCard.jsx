// InstagramCard.jsx
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramCard = ({ post, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl md:flex">
                {/* Media Section */}
                <div className="w-full md:w-1/2 h-auto">
                    <InstagramEmbed url={post.media} width="100%" />
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 p-4 flex flex-col">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="self-end text-gray-500 hover:text-black"
                    >
                        ✕
                    </button>

                    {/* Description */}
                    <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.description}</p>

                    {/* Comments */}
                    <div className="flex-1 overflow-y-auto">
                        <h3 className="font-semibold mb-2">Comments:</h3>
                        <ul className="space-y-2">
                            {post.comments.map((comment, index) => (
                                <li key={index} className="text-gray-700">
                                    <span className="font-semibold">{comment.user}</span>: {comment.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstagramCard;
