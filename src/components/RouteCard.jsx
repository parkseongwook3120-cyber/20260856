import React from 'react';
import { Bus, Train, Footprints, Clock, Coins, ShieldAlert, Star } from 'lucide-react';

export default function RouteCard({ route, onClick }) {
  const isFastest = route.type === 'fast';
  
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-4 cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden"
    >
      {/* 뱃지 */}
      {isFastest && (
        <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
          최적 경로
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-black text-gray-900">{route.totalTime}</span>
            <span className="text-sm font-semibold text-gray-500">분</span>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold text-gray-500">
            <span className="flex items-center gap-1"><Coins size={14} /> {route.cost.toLocaleString()}원</span>
            <span className="flex items-center gap-1">
              <Star size={14} className="text-yellow-400 fill-yellow-400" /> {route.rating} ({route.reviews})
            </span>
          </div>
        </div>
      </div>

      {/* 경로 스텝 (시각화) */}
      <div className="flex items-center gap-1 w-full h-2 rounded-full overflow-hidden mb-3">
        {route.steps.map((step, idx) => {
          let bgColor = 'bg-gray-300';
          if (step.type === 'bus') bgColor = 'bg-blue-500';
          if (step.type === 'subway') bgColor = 'bg-green-500';
          return (
            <div 
              key={idx} 
              className={`h-full ${bgColor}`} 
              style={{ flex: step.time }}
            ></div>
          );
        })}
      </div>
      
      {/* 스텝 설명 */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {route.steps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-1 shrink-0 bg-gray-50 px-2 py-1 rounded-md">
            {step.type === 'walk' && <Footprints size={12} className="text-gray-500" />}
            {step.type === 'bus' && <Bus size={12} className="text-blue-500" />}
            {step.type === 'subway' && <Train size={12} className="text-green-500" />}
            <span className="text-[11px] font-medium text-gray-700 truncate max-w-[100px]">
              {step.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
