import React, { useState } from 'react';
import { Bookmark, Trash2, Heart } from 'lucide-react';
import RouteCard from '../components/RouteCard';
import SocialPost from '../components/SocialPost';
import { savedRoutesList, likedPostsList } from '../data/mockData';

export default function SavedRoutes() {
  const [activeTab, setActiveTab] = useState('routes'); // 'routes', 'posts'
  const [routes, setRoutes] = useState(savedRoutesList);
  const [likedPosts, setLikedPosts] = useState(likedPostsList);

  const handleDeleteRoute = (id, e) => {
    e.stopPropagation();
    if(window.confirm('저장된 경로를 삭제하시겠습니까?')) {
      setRoutes(routes.filter(r => r.id !== id));
    }
  };

  const handleUnlikePost = (id, e) => {
    e.stopPropagation();
    if(window.confirm('좋아요를 취소하시겠습니까?')) {
      setLikedPosts(likedPosts.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* 헤더 */}
      <div className="bg-white pt-12 pb-4 px-6 shadow-sm z-20 sticky top-0">
        <div className="flex items-center gap-2 mb-1">
          <Bookmark className="text-purple-600" size={24} />
          <h1 className="text-2xl font-black text-gray-900">저장 및 좋아요</h1>
        </div>
        <p className="text-sm font-semibold text-gray-500">
          내가 찜한 경로와 좋아요 누른 꿀팁
        </p>
      </div>

      {/* 탭 */}
      <div className="flex bg-white px-4 py-2 gap-2 border-b border-gray-100 sticky top-[88px] z-10 mb-4 shadow-sm">
        <button 
          onClick={() => setActiveTab('routes')}
          className={`flex-1 py-2 rounded-xl text-sm font-bold transition-colors ${activeTab === 'routes' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          저장된 동선
        </button>
        <button 
          onClick={() => setActiveTab('posts')}
          className={`flex-1 py-2 flex items-center justify-center gap-1 rounded-xl text-sm font-bold transition-colors ${activeTab === 'posts' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          <Heart size={16} className={activeTab === 'posts' ? "fill-white" : ""} /> 좋아요 누른 꿀팁
        </button>
      </div>

      {/* 리스트 */}
      <div className="px-4">
        {activeTab === 'routes' && (
          <>
            {routes.map(route => (
              <div key={route.id} className="relative group">
                <RouteCard route={route} onClick={() => {}} />
                <button 
                  onClick={(e) => handleDeleteRoute(route.id, e)}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-red-400 hover:text-red-600 transition-colors z-10"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            {routes.length === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bookmark size={24} className="text-gray-400" />
                </div>
                <p className="text-gray-500 font-bold mb-2">저장된 동선이 없습니다.</p>
                <p className="text-xs text-gray-400">마음에 드는 경로를 저장해보세요!</p>
              </div>
            )}
          </>
        )}

        {activeTab === 'posts' && (
          <>
            {likedPosts.map(post => (
              <div key={post.id} className="relative group">
                <SocialPost post={post} />
                <button 
                  onClick={(e) => handleUnlikePost(post.id, e)}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-pink-400 hover:text-pink-600 transition-colors z-10"
                >
                  <Heart size={18} className="fill-pink-400 text-pink-400" />
                </button>
              </div>
            ))}

            {likedPosts.length === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={24} className="text-gray-400" />
                </div>
                <p className="text-gray-500 font-bold mb-2">좋아요 누른 글이 없습니다.</p>
                <p className="text-xs text-gray-400">유용한 팁에 좋아요를 눌러보세요!</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
