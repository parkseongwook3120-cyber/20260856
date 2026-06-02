import React, { useState } from 'react';
import { Bookmark, Trash2 } from 'lucide-react';
import RouteCard from '../components/RouteCard';
import { savedRoutesList } from '../data/mockData';

export default function SavedRoutes() {
  const [routes, setRoutes] = useState(savedRoutesList);

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if(window.confirm('저장된 경로를 삭제하시겠습니까?')) {
      setRoutes(routes.filter(r => r.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* 헤더 */}
      <div className="bg-white pt-12 pb-4 px-6 shadow-sm mb-4">
        <div className="flex items-center gap-2 mb-1">
          <Bookmark className="text-purple-600" size={24} />
          <h1 className="text-2xl font-black text-gray-900">저장된 동선</h1>
        </div>
        <p className="text-sm font-semibold text-gray-500">
          내가 찜한 최적 경로 모아보기
        </p>
      </div>

      {/* 리스트 */}
      <div className="px-4">
        {routes.map(route => (
          <div key={route.id} className="relative group">
            <RouteCard route={route} onClick={() => {}} />
            <button 
              onClick={(e) => handleDelete(route.id, e)}
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
      </div>
    </div>
  );
}
