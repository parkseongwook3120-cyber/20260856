export const schools = [
  { id: 1, name: '동서대학교', location: '부산광역시 사상구 주례로 47' },
  { id: 2, name: '부산대학교', location: '부산광역시 금정구 부산대학로63번길 2' },
  { id: 3, name: '부경대학교', location: '부산광역시 남구 용소로 45' },
  { id: 4, name: '동아대학교', location: '부산광역시 사하구 낙동대로550번길 37' },
];

export const mockRoutes = [
  {
    id: 1,
    destination: '동서대학교',
    type: 'fast',
    transportation: 'bus',
    totalTime: 45,
    cost: 1500,
    congestion: 'low',
    safety: 'high',
    steps: [
      { type: 'walk', description: '집에서 출발', time: 5 },
      { type: 'bus', description: '68번 버스 탑승 (주례역)', time: 30 },
      { type: 'walk', description: '동서대학교 도착', time: 10 },
    ],
    rating: 4.8,
    reviews: 120,
    weather: 'sunny',
    timeZone: 'morning',
  },
  {
    id: 2,
    destination: '동서대학교',
    type: 'save',
    transportation: 'subway',
    totalTime: 55,
    cost: 1300,
    congestion: 'high',
    safety: 'high',
    steps: [
      { type: 'walk', description: '집에서 출발', time: 10 },
      { type: 'subway', description: '2호선 주례역 탑승 -> 냉정역 하차', time: 15 },
      { type: 'walk', description: '학교 셔틀버스 또는 도보', time: 30 },
    ],
    rating: 4.5,
    reviews: 85,
    weather: 'rainy',
    timeZone: 'evening',
  },
  {
    id: 3,
    destination: '동서대학교',
    type: 'fast',
    transportation: 'subway',
    totalTime: 40,
    cost: 1400,
    congestion: 'medium',
    safety: 'medium',
    steps: [
      { type: 'walk', description: '집에서 출발', time: 5 },
      { type: 'subway', description: '2호선 주례역 탑승 -> 냉정역 하차', time: 15 },
      { type: 'bus', description: '마을버스 환승 (사상6)', time: 20 },
    ],
    rating: 4.9,
    reviews: 200,
    weather: 'sunny',
    timeZone: 'morning',
  },
  {
    id: 4,
    destination: '부산대학교',
    type: 'fast',
    transportation: 'subway',
    totalTime: 50,
    cost: 1400,
    congestion: 'high',
    safety: 'high',
    steps: [
      { type: 'walk', description: '집에서 출발', time: 5 },
      { type: 'subway', description: '1호선 서면역 탑승 -> 부산대역 하차', time: 35 },
      { type: 'walk', description: '부산대학교 도착', time: 10 },
    ],
    rating: 4.7,
    reviews: 150,
    weather: 'sunny',
    timeZone: 'morning',
  }
];

export const socialPosts = [
  {
    id: 1,
    userId: 'student123',
    nickname: '길잡이',
    schoolName: '동서대학교',
    departure: '해운대구',
    description: '아침 8시에는 2호선 타고 냉정역에서 마을버스 타는게 제일 빠릅니다! 셔틀은 줄이 너무 길어요.',
    likes: 45,
    rating: 5,
    createdAt: '2026-06-01T08:30:00Z',
  },
  {
    id: 2,
    userId: 'buslover',
    nickname: '버스매니아',
    schoolName: '동서대학교',
    departure: '사하구',
    description: '비오는 날에는 지하철보다는 68번 버스 타고 학교 앞까지 가는게 덜 젖고 좋습니다.',
    likes: 32,
    rating: 4,
    createdAt: '2026-06-02T07:15:00Z',
  },
];

export const savedRoutesList = [
  mockRoutes[0],
  mockRoutes[2]
];

export const userInfo = {
  id: 'user1',
  nickname: '통학러',
  email: 'student@example.com',
  favoriteSchool: '동서대학교',
  savedRoutesCount: 2,
  postsCount: 1,
};
