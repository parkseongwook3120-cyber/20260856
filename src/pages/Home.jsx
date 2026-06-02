import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Compass, LocateFixed, Navigation, Sun, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // 날씨와 시간대 선택을 위한 임시 상태
  const [activeWeather, setActiveWeather] = useState('sunny');
  const [activeTime, setActiveTime] = useState('morning');

  return (
    <div className="relative w-full h-screen bg-[#e5f0ea] overflow-hidden flex flex-col">
      {/* 맵 배경 시뮬레이션 */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/129.0756,35.1796,13,0/600x800?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2V4YW1wbGUifQ.example')] bg-cover bg-center opacity-60">
          <div className="w-full h-full bg-[#f4f7f6]/80 backdrop-blur-[2px]"></div>
        </div>
        
        {/* 가짜 경로 선 */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,600 C150,550 120,400 200,350 C280,300 250,200 300,150" stroke="#aa3bff" strokeWidth="6" strokeLinecap="round" strokeDasharray="1 10" />
          <circle cx="100" cy="600" r="8" fill="#aa3bff" stroke="white" strokeWidth="3" />
          <circle cx="300" cy="150" r="10" fill="#3b82f6" stroke="white" strokeWidth="3" />
        </svg>
      </div>

      {/* 헤더 및 검색 */}
      <div className="relative z-10">
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery} 
          placeholder="어떤 학교로 가시나요?"
        />
        
        {/* 칩 필터 */}
        <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-semibold text-gray-700 border border-gray-100 shrink-0">
            <Navigation size={16} className="text-blue-500" /> 빠른 경로
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-semibold text-gray-700 border border-gray-100 shrink-0">
            <Compass size={16} className="text-green-500" /> 절약 모드
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-semibold text-gray-700 border border-gray-100 shrink-0">
            <Sun size={16} className="text-orange-500" /> 날씨 맞춤
          </button>
        </div>
      </div>

      {/* 현재 위치 버튼 */}
      <button className="absolute bottom-24 right-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 border border-gray-100">
        <LocateFixed size={24} className="text-blue-600" />
      </button>

      {/* 바텀 시트 (최근 검색/추천) */}
      <div className="absolute bottom-16 left-0 right-0 z-10 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-5 pb-8 transition-transform duration-300 transform translate-y-0">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5"></div>
        <h2 className="text-lg font-bold text-gray-800 mb-4">인기 목적지</h2>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-purple-50 cursor-pointer transition-colors" onClick={() => navigate('/search?q=동서대학교')}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <MapPin size={18} className="text-purple-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">동서대학교</p>
                <p className="text-xs text-gray-500">부산광역시 사상구 주례로 47</p>
              </div>
            </div>
            <div className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
              45분
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 hover:bg-purple-50 cursor-pointer transition-colors" onClick={() => navigate('/search?q=부산대학교')}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <MapPin size={18} className="text-gray-500" />
              </div>
              <div>
                <p className="font-bold text-gray-900">부산대학교</p>
                <p className="text-xs text-gray-500">부산광역시 금정구 부산대학로63번길 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
