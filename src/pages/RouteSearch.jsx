import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, Bus, Train } from 'lucide-react';
import { mockRoutes } from '../data/mockData';
import RouteCard from '../components/RouteCard';

export default function RouteSearch() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '동서대학교';
  const navigate = useNavigate();
  
  const [transportMode, setTransportMode] = useState('all'); // 'all', 'bus', 'subway'
  const [selectedRoute, setSelectedRoute] = useState(null);

  const filteredRoutes = mockRoutes.filter(route => {
    if (transportMode === 'all') return true;
    return route.transportation === transportMode;
  });

  return (
    <div className="flex flex-col h-screen bg-gray-50 pb-16">
      {/* 헤더 */}
      <div className="bg-white pt-12 pb-4 px-4 shadow-sm z-20 flex items-center justify-between sticky top-0">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
          <ArrowLeft size={24} className="text-gray-800" />
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-lg font-bold text-gray-900">{query} 가는 길</h1>
        </div>
        <button className="p-2 -mr-2 rounded-full hover:bg-gray-100">
          <SlidersHorizontal size={20} className="text-gray-800" />
        </button>
      </div>

      {/* 탭 */}
      <div className="flex bg-white px-4 py-2 gap-2 border-b border-gray-100 sticky top-[72px] z-10">
        <button 
          onClick={() => setTransportMode('all')}
          className={`flex-1 py-2 rounded-xl text-sm font-bold transition-colors ${transportMode === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          전체 추천
        </button>
        <button 
          onClick={() => setTransportMode('bus')}
          className={`flex-1 py-2 flex items-center justify-center gap-1 rounded-xl text-sm font-bold transition-colors ${transportMode === 'bus' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          <Bus size={16} /> 버스
        </button>
        <button 
          onClick={() => setTransportMode('subway')}
          className={`flex-1 py-2 flex items-center justify-center gap-1 rounded-xl text-sm font-bold transition-colors ${transportMode === 'subway' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          <Train size={16} /> 지하철
        </button>
      </div>

      {/* 리스트 */}
      <div className="flex-1 overflow-y-auto p-4">
        {filteredRoutes.map(route => (
          <RouteCard 
            key={route.id} 
            route={route} 
            onClick={() => setSelectedRoute(route)} 
          />
        ))}
        {filteredRoutes.length === 0 && (
          <div className="text-center py-10 text-gray-500 font-medium">
            조건에 맞는 경로가 없습니다.
          </div>
        )}
      </div>

      {/* 실시간 경로 상세 바텀 시트 (Mock) */}
      {selectedRoute && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center" onClick={() => setSelectedRoute(null)}>
          <div 
            className="w-full max-w-md bg-white rounded-t-3xl p-6 transform transition-transform" 
            onClick={e => e.stopPropagation()}
          >
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">
              {selectedRoute.totalTime}분 소요
            </h2>
            <p className="text-sm text-gray-500 font-semibold mb-6">
              예상 교통비 {selectedRoute.cost.toLocaleString()}원 • 도착 예정 {new Date(Date.now() + selectedRoute.totalTime * 60000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </p>
            
            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-gray-200 pl-8">
              {selectedRoute.steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-[37px] w-6 h-6 rounded-full flex items-center justify-center border-[3px] border-white
                    ${step.type === 'walk' ? 'bg-gray-400' : step.type === 'bus' ? 'bg-blue-500' : 'bg-green-500'}`}>
                  </div>
                  <p className="font-bold text-gray-900">{step.description}</p>
                  <p className="text-xs font-semibold text-gray-500 mt-1">{step.time}분 소요</p>
                </div>
              ))}
            </div>

            <button 
              className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-2xl transition-colors shadow-[0_4px_14px_rgba(170,59,255,0.39)]"
              onClick={() => {
                alert('경로가 저장되었습니다!');
                setSelectedRoute(null);
              }}
            >
              이 경로 저장하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
