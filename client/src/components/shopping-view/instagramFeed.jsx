// InstagramFeed.jsx
import React, { useState } from "react";
import InstagramCard from "./InstagramCard";

const InstagramFeed = ({ posts }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Instagram Post Thumbnails */}
            {posts.map((post, index) => (
                <div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                >
                    <img
                        src={`https://via.placeholder.com/400`} // Placeholder image; Instagram URL previews can't generate thumbnails directly.
                        alt={post.description}
                        className="w-full h-40 object-cover rounded-lg group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg font-semibold">
                            {post.title}
                        </span>
                    </div>
                </div>
            ))}

            {/* InstagramCard Modal */}
            {selectedPost && (
                <InstagramCard
                    post={selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}
        </div>
    );
};

export default InstagramFeed;
