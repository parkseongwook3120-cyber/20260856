import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SocialPost from '../components/SocialPost';
import { socialPosts } from '../data/mockData';
import { Sparkles } from 'lucide-react';

export default function Social() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('latest');

  const filteredPosts = socialPosts.filter(post => 
    post.schoolName.includes(searchQuery) || post.departure.includes(searchQuery)
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOrder === 'likes_desc') {
      return b.likes - a.likes;
    } else if (sortOrder === 'likes_asc') {
      return a.likes - b.likes;
    }
    // latest default
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="min-h-screen bg-[#f4f3ec] pb-24">
      {/* 헤더 배경 */}
      <div className="bg-white rounded-b-[40px] pt-12 pb-8 shadow-sm">
        <div className="px-6 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="text-yellow-400" size={24} />
            <h1 className="text-2xl font-black text-gray-900">소셜 큐레이션</h1>
          </div>
          <p className="text-sm font-semibold text-gray-500">
            우리 학교 학생들의 진짜 통학 꿀팁
          </p>
        </div>
        
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery} 
          placeholder="학교나 동네를 검색해보세요"
        />
      </div>

      {/* 피드 목록 */}
      <div className="px-4 mt-6">
        <div className="flex justify-end mb-4">
          <select 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-white border border-gray-100 text-gray-700 text-sm rounded-xl focus:ring-purple-500 focus:border-purple-500 block px-3 py-2 outline-none font-semibold shadow-sm appearance-none cursor-pointer"
          >
            <option value="latest">최신순</option>
            <option value="likes_desc">좋아요 많은 순</option>
            <option value="likes_asc">좋아요 적은 순</option>
          </select>
        </div>
        
        {sortedPosts.map(post => (
          <SocialPost key={post.id} post={post} />
        ))}
        {sortedPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-semibold">
            검색 결과가 없습니다.
          </div>
        )}
      </div>

      {/* 플로팅 글쓰기 버튼 */}
      <button className="fixed bottom-24 right-4 w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-800 transition-colors z-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
      </button>
    </div>
  );
}
