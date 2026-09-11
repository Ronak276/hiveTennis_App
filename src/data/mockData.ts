export interface Player {
  id: string;
  name: string;
  avatar: string;
  badge: string;
  utr: number;
  playStyle: string;
  statusTag?: string;
  winRate?: string;
  nextMatch?: string;
  court?: string;
  weeklyDrills?: string;
  drillProgress?: number;
  attendanceRate?: string;
  requestTime?: string;
  isOnline: boolean;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  subtitle: string;
  specialties: string[];
  yearsPro?: number;
  d1Recruits?: number;
  successRate?: number;
  rate: number;
  nextAvailable: string;
  isSpotlight?: boolean;
}

export interface Program {
  id: string;
  title: string;
  category: string;
  courtInfo: string;
  price: string;
  pricePeriod: string;
  coachName: string;
  coachTitle: string;
  timeSlot: string;
  duration: string;
  spotsBooked: number;
  spotsTotal: number;
  badgeColor?: string;
  isFull?: boolean;
  waitlistCount?: number;
}

export interface ChatThread {
  id: string;
  senderName: string;
  senderRole?: string;
  avatar: string;
  time: string;
  lastMessage: string;
  attachment?: string;
  unreadCount?: number;
  isGroup?: boolean;
  groupMembers?: number;
  isOnline?: boolean;
  status?: string;
  tag?: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  utrGain?: string;
}

export const MOCK_DASHBOARD = {
  userName: 'Alex',
  date: 'Today, Oct 24',
  weather: '74°F • Courts Open',
  utr: 9.4,
  streakDays: 12,
  upcomingSession: {
    id: 'sess-1',
    title: 'Singles Sparring Match',
    opponent: 'Marcus Vance',
    opponentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    opponentUtr: 9.4,
    timeSlot: 'Today • 4:30 PM - 6:00 PM',
    countdown: 'Starts in 2h 15m',
    court: 'Court 02 (Clay)',
    surfaceBadge: 'Clay Court',
    umpireOrCoach: 'Official Match • Fast4 Format',
  },
  registeredPrograms: [
    {
      id: 'reg-1',
      title: 'Grand Slam Prep Intensive',
      category: 'Elite Intensive Camp',
      coach: 'Coach Alex Mercer',
      coachAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
      nextSession: 'Tomorrow at 9:00 AM',
      court: 'Stadium Courts 1–4',
      sessionsCompleted: 6,
      totalSessions: 10,
      status: 'Confirmed',
    },
    {
      id: 'reg-2',
      title: 'Power Serve & Volley Masterclass',
      category: 'Advanced Clinic',
      coach: 'Coach Maria S.',
      coachAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80',
      nextSession: 'Thursday at 6:00 PM',
      court: 'Court 5',
      sessionsCompleted: 4,
      totalSessions: 8,
      status: 'Active',
    },
  ],
  stats: {
    activePrograms: { value: 2, growth: '2 Active', sub: 'Next: Tomorrow 9:00 AM' },
    courtBookings: { value: 'Today', growth: '4:30 PM', sub: 'Court 02 • Clay Surface' },
    weeklyDrills: { value: '6.5 hrs', progress: 81, sub: 'Goal: 8.0 hrs (81%)' },
    seasonRecord: { value: '24W - 6L', rating: '80%', sub: '30 Matches • +0.4 UTR' },
  },
  trainingCurve: [
    { day: 'Mon', minutes: 60, label: '60 min' },
    { day: 'Tue', minutes: 90, label: '90 min' },
    { day: 'Wed', minutes: 45, label: '45 min' },
    { day: 'Thu', minutes: 90, label: '90 min' },
    { day: 'Fri', minutes: 60, label: '60 min' },
    { day: 'Sat', minutes: 120, label: '120 min' },
    { day: 'Sun (Target)', minutes: 75, label: '75 min' },
  ],
  liveCourts: [
    {
      id: 'c1',
      courtNo: '01',
      title: 'Federer vs Nadal (Exhibition)',
      status: 'LIVE',
      score: '6-4, 5-5',
      details: 'Junior Elite Championship • Final Set',
      elapsed: '1h 42m elapsed',
      umpire: 'Sarah M.',
      gameScore: 'Game 11 • 30-15',
      isHot: true,
    },
    {
      id: 'c2',
      courtNo: '02',
      title: 'Your Reserved Court (Upcoming)',
      status: 'Reserved',
      timeSlot: '4:30 PM - 6:00 PM',
      remaining: 'Next up after current drill',
      details: 'Sparring Match vs Marcus Vance',
      student: 'Court 02 (Clay) • Pass Ready',
      isRecorded: true,
    },
    {
      id: 'c3',
      courtNo: '03',
      title: 'Open Drills & Community Rally',
      status: 'Club Hive',
      details: 'Intermediate Group (UTR 4.0 - 5.5) • 6 Players',
      extra: '68 mph avg rally speed',
      activeBadge: 'Ball Machine',
      canJoin: true,
    },
  ],
};

export const MOCK_PLAYERS: Player[] = [
  {
    id: 'p1',
    name: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    badge: 'PRO TIER',
    utr: 9.4,
    playStyle: 'Right-Handed',
    winRate: '78%',
    nextMatch: 'Today 4:30 PM (Court 2)',
    isOnline: true,
  },
  {
    id: 'p2',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80',
    badge: 'ELITE SQUAD',
    utr: 11.2,
    playStyle: '2-Handed Backhand',
    statusTag: "Champ '24",
    weeklyDrills: '6.0 hrs logged',
    drillProgress: 85,
    isOnline: true,
  },
  {
    id: 'p3',
    name: 'Liam Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    badge: 'INTERMEDIATE',
    utr: 6.8,
    playStyle: 'Baseline Specialist',
    statusTag: '12 Sessions',
    attendanceRate: '92% this month',
    isOnline: false,
  },
  {
    id: 'p4',
    name: 'Sophia Miller',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80',
    badge: 'WEEKEND LEAGUE',
    utr: 8.1,
    playStyle: 'All-Court Player',
    statusTag: 'Booking Pending',
    requestTime: 'Saturday 9:00 AM (Court 4)',
    isOnline: false,
  },
];

export const MOCK_COACHES: Coach[] = [
  {
    id: 'c-spotlight',
    name: 'Alex Mercer',
    role: 'HEAD OF HIGH PERFORMANCE',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
    rating: 4.98,
    reviewsCount: 124,
    subtitle: 'Former ATP Top 300',
    specialties: ['Heavy Topspin', 'Forehand Kinetic Chain', 'Tournament Prep'],
    yearsPro: 14,
    d1Recruits: 38,
    successRate: 99,
    rate: 95,
    nextAvailable: 'Tomorrow at 10:00 AM',
    isSpotlight: true,
  },
  {
    id: 'c1',
    name: 'David Brooks',
    role: 'Junior Academy Director',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80',
    rating: 4.92,
    reviewsCount: 86,
    subtitle: '15yrs coaching • PTR Master Pro',
    specialties: ['High School Prep', 'USTA Sectionals', 'Next Gen Sparring'],
    rate: 80,
    nextAvailable: 'Today at 3:00 PM',
  },
  {
    id: 'c2',
    name: 'Serena Vance',
    role: 'Footwork & Agility Specialist',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80',
    rating: 5.0,
    reviewsCount: 110,
    subtitle: 'Former WTA Pro • Grand Slam Main Draw',
    specialties: ['Lateral Recovery', 'Split-Step Reaction', 'Match Toughness'],
    rate: 110,
    nextAvailable: 'Friday at 8:30 AM',
  },
  {
    id: 'c3',
    name: 'Mateo Silva',
    role: 'Serve Kinematics & AI Video',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=250&q=80',
    rating: 4.88,
    reviewsCount: 64,
    subtitle: 'FlightScope Master • 8 yrs exp',
    specialties: ['High-Speed Motion', 'Kick Serve Mechanics', 'Racket Speed 120+'],
    rate: 75,
    nextAvailable: 'Tomorrow at 1:00 PM',
  },
];

export const MOCK_PROGRAMS: Program[] = [
  {
    id: 'prg-1',
    title: 'Power Serve & Volley Masterclass',
    category: 'Intermediate - Advanced',
    courtInfo: 'Courts 5 & 6',
    price: '$65',
    pricePeriod: '/ session',
    coachName: 'Coach Alex R.',
    coachTitle: 'USPTA Elite • Ex-ATP #380',
    timeSlot: 'Tues & Thurs 6:00 PM',
    duration: '90 Min Fast Drills',
    spotsBooked: 8,
    spotsTotal: 10,
  },
  {
    id: 'prg-2',
    title: 'Junior Rising Stars (Ages 7–11)',
    category: 'Junior Development',
    courtInfo: 'Orange & Green Dot',
    price: '$220',
    pricePeriod: '/ month',
    coachName: 'Coach Maria S.',
    coachTitle: 'Youth Development Director',
    timeSlot: 'Mon, Wed, Fri 4:00 PM',
    duration: '60 Min Drills + Play',
    spotsBooked: 15,
    spotsTotal: 16,
  },
  {
    id: 'prg-3',
    title: 'Adult Cardio Tennis & Live Ball',
    category: 'All Skill Levels',
    courtInfo: 'Court 1',
    price: '$35',
    pricePeriod: '/ drop-in',
    coachName: 'Coach Julian D.',
    coachTitle: 'High-Tempo Fitness Spec.',
    timeSlot: 'Saturday 9:00 AM',
    duration: '60 Min High Energy',
    spotsBooked: 12,
    spotsTotal: 12,
    isFull: true,
    waitlistCount: 3,
  },
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Chloe Lin',
    role: 'USTA 4.5 Player • With Alex M.',
    rating: 5,
    comment: 'Alex completely rebuilt my kick serve toss in two 1-on-1 sessions. My second serve is now a weapon instead of a liability.',
    utrGain: 'UTR +1.8',
  },
  {
    id: 'r2',
    author: 'Marcus Bennett',
    role: 'Tennis Parent • With Serena V.',
    rating: 5,
    comment: 'Coach Serena helped my daughter gain the court discipline and footwork needed to reach Sectionals top 10 rankings.',
    utrGain: 'UTR +2.1',
  },
];

export const MOCK_CHAT_THREADS: ChatThread[] = [
  {
    id: 't1',
    senderName: 'Coach Alex Mercer',
    senderRole: 'PRO',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
    time: '10:42 AM',
    lastMessage: 'Great topspin drills today! Reviewing video of your wrist snap at baseline...',
    attachment: '📹 1 Attachment',
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: 't2',
    senderName: 'Junior Elite Squad',
    senderRole: 'Group',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    time: '9:15 AM',
    lastMessage: 'Tournament schedule for this weekend has been published.',
    unreadCount: 0,
    isGroup: true,
    groupMembers: 14,
    status: '✓ Read',
  },
  {
    id: 't3',
    senderName: 'Court Desk & Front Desk',
    senderRole: 'Official',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=250&q=80',
    time: 'Yesterday',
    lastMessage: 'Your Court 3 booking is confirmed for Saturday 10:00 AM.',
    attachment: '📄 Booking_Pass.pdf',
    tag: 'Court 3 • Clay',
    isOnline: true,
  },
  {
    id: 't4',
    senderName: 'Elena Rostova',
    senderRole: '4.5 UTR',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80',
    time: 'Oct 22',
    lastMessage: 'Up for a 1-set tiebreaker before our evening clinic?',
    status: '✓ Delivered',
    tag: 'Rivalry (3-2)',
  },
];

export interface UserProfile {
  id: string;
  name: string;
  handle: string;
  email: string;
  phone: string;
  avatar: string;
  statusTag: string;
  isOnline: boolean;
  utr: number;
  utrGain: string;
  ranking: string;
  matchesPlayed: number;
  winRate: string;
  wins: number;
  losses: number;
  playStyle: string;
  handedness: string;
  backhand: string;
  gear: {
    racquet: string;
    strings: string;
    tension: string;
    shoes: string;
  };
  courtPreferences: {
    surface: string;
    preferredTime: string;
    weeklyTargetHours: number;
  };
  stats: {
    drillsLoggedHours: number;
    courtBookingsCount: number;
    streakDays: number;
    acesTotal: number;
  };
  recentMatches: {
    id: string;
    opponent: string;
    opponentAvatar: string;
    opponentUtr: number;
    result: 'WON' | 'LOST';
    score: string;
    court: string;
    date: string;
  }[];
  achievements: {
    id: string;
    icon: string;
    title: string;
    desc: string;
    date: string;
  }[];
}

export const MOCK_USER_PROFILE: UserProfile = {
  id: 'usr-alex',
  name: 'Alex Mercer',
  handle: '@alex.mercer',
  email: 'alex.mercer@hivetennis.com',
  phone: '+1 (555) 234-5678',
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
  statusTag: 'ACTIVE ON COURT',
  isOnline: true,
  utr: 9.4,
  utrGain: '+0.4 this season',
  ranking: 'Club Top 5 • State Tier 1',
  matchesPlayed: 30,
  winRate: '80%',
  wins: 24,
  losses: 6,
  playStyle: 'Aggressive Baseliner',
  handedness: 'Right-Handed',
  backhand: '2-Handed Backhand',
  gear: {
    racquet: 'Wilson Pro Staff 97 v14',
    strings: 'Luxilon ALU Power 125',
    tension: '52 lbs (23.5 kg)',
    shoes: 'Nike Court Air Zoom Vapor Pro 2',
  },
  courtPreferences: {
    surface: 'Clay & Outdoor Hard',
    preferredTime: 'Weekday Evenings (5:00 - 8:30 PM)',
    weeklyTargetHours: 8,
  },
  stats: {
    drillsLoggedHours: 24.5,
    courtBookingsCount: 32,
    streakDays: 12,
    acesTotal: 148,
  },
  recentMatches: [
    {
      id: 'm1',
      opponent: 'Elena Rostova',
      opponentAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80',
      opponentUtr: 11.2,
      result: 'WON',
      score: '6-4, 5-5 (Tiebreaker 7-5)',
      court: 'Court 01 (Clay)',
      date: 'Yesterday, 4:30 PM',
    },
    {
      id: 'm2',
      opponent: 'Marcus Vance',
      opponentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      opponentUtr: 9.4,
      result: 'WON',
      score: '6-3, 7-6 (4)',
      court: 'Court 02 (Hard)',
      date: 'Oct 20, 2025',
    },
    {
      id: 'm3',
      opponent: 'David Brooks',
      opponentAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80',
      opponentUtr: 10.1,
      result: 'LOST',
      score: '4-6, 6-7 (5)',
      court: 'Court 04 (Indoor)',
      date: 'Oct 14, 2025',
    },
  ],
  achievements: [
    {
      id: 'a1',
      icon: '🏆',
      title: "Hive Fall Classic Champion '24",
      desc: 'Won Division 1 singles tournament bracket',
      date: 'Sep 2024',
    },
    {
      id: 'a2',
      icon: '⚡',
      title: '10-Match Win Streak',
      desc: 'Consecutive sanctioned singles victories',
      date: 'Oct 2024',
    },
    {
      id: 'a3',
      icon: '🎯',
      title: 'Precision Ace Master',
      desc: '100+ aces served with 68%+ first serve in',
      date: 'Aug 2024',
    },
  ],
};
