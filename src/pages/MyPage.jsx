import React from 'react';
import { Settings, User as UserIcon, Bookmark, MessageSquare, MapPin, ChevronRight } from 'lucide-react';
import { userInfo } from '../data/mockData';

export default function MyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24">
      {/* 프로필 헤더 */}
      <div className="bg-white pt-12 pb-8 px-6 shadow-sm rounded-b-3xl mb-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-black text-gray-900">내 정보</h1>
          <button className="p-2 text-gray-400 hover:text-gray-700 transition-colors">
            <Settings size={24} />
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full p-1">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <UserIcon size={32} className="text-purple-300" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">{userInfo.nickname}</h2>
            <p className="text-sm font-semibold text-gray-500">{userInfo.email}</p>
          </div>
        </div>
      </div>

      {/* 요약 카드 */}
      <div className="px-4 mb-6">
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex divide-x divide-gray-100">
          <div className="flex-1 text-center">
            <p className="text-xs font-bold text-gray-400 mb-1">저장한 루트</p>
            <p className="text-xl font-black text-purple-600">{userInfo.savedRoutesCount}</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-xs font-bold text-gray-400 mb-1">작성한 글</p>
            <p className="text-xl font-black text-blue-600">{userInfo.postsCount}</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-xs font-bold text-gray-400 mb-1">받은 추천</p>
            <p className="text-xl font-black text-pink-500">12</p>
          </div>
        </div>
      </div>

      {/* 메뉴 리스트 */}
      <div className="px-4 space-y-3">
        <h3 className="font-bold text-gray-900 px-2 py-1">설정 및 관리</h3>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                <MapPin size={16} className="text-purple-600" />
              </div>
              <span className="font-semibold text-gray-700">즐겨찾는 학교 설정</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400">{userInfo.favoriteSchool}</span>
              <ChevronRight size={18} className="text-gray-300" />
            </div>
          </button>
          
          <div className="h-px bg-gray-50 mx-4"></div>
          
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <Bookmark size={16} className="text-blue-600" />
              </div>
              <span className="font-semibold text-gray-700">저장된 동선 관리</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </button>

          <div className="h-px bg-gray-50 mx-4"></div>
          
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <MessageSquare size={16} className="text-green-600" />
              </div>
              <span className="font-semibold text-gray-700">내가 작성한 글</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
