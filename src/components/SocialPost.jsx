import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MapPin, Star } from 'lucide-react';

export default function SocialPost({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 mb-4">
      {/* 작성자 정보 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 to-blue-400 p-0.5">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-purple-600 text-sm">
              {post.nickname[0]}
            </div>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm">{post.nickname}</p>
            <p className="text-xs font-semibold text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full text-yellow-600 font-bold text-xs">
          <Star size={12} className="fill-yellow-500 text-yellow-500" />
          {post.rating}.0
        </div>
      </div>

      {/* 루트 정보 요약 */}
      <div className="flex items-center gap-2 mb-3 bg-gray-50 p-3 rounded-2xl">
        <MapPin size={16} className="text-purple-500" />
        <span className="text-sm font-bold text-gray-700">{post.departure}</span>
        <span className="text-gray-400">→</span>
        <span className="text-sm font-bold text-gray-700">{post.schoolName}</span>
      </div>

      {/* 내용 */}
      <p className="text-gray-800 text-sm font-medium leading-relaxed mb-4">
        {post.description}
      </p>

      {/* 액션 버튼 */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <button 
          onClick={handleLike}
          className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${liked ? 'text-pink-500' : 'text-gray-500 hover:text-pink-500'}`}
        >
          <Heart size={20} className={liked ? 'fill-pink-500' : ''} />
          {likes}
        </button>
        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-blue-500 transition-colors">
            <MessageCircle size={20} />
          </button>
          <button className="hover:text-green-500 transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
