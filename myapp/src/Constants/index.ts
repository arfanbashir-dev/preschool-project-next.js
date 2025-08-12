

export const navLinks = [

  { id: '1', title: 'HOME', href: '/' },
  {
    id: '2', title: 'CURRICULUM', href: '/curriculum',
    submenu: [
        { title: 'Course Outline', href: '/courseoutline' },
        { title: 'Syllabus', href: '/syllabus' },
        { title: 'Timetable', href: '/timetable' }
    ]
  },
  {
    id: '3', title: 'EXTRA CURRICULUM', href: '/extracurriculum',
    submenu: [
      { title: 'Game Competition', href: '/games' },
      { title: 'Sports', href: '/sports' },
      { title: 'Health', href: '/health' },
    
    ]
  },
  {
    id: '4', title: 'INFORMATION', href: '/information', 
    submenu: [
      { title: 'News Updates', href: '/news' },
      { title: 'Annoucements', href: '/announcements' }
    ]
  },
  {
    id: '5', title: 'ADMISSION INFO', href: '',
    submenu: [
      { title: 'Admission Process', href: '/admissionprocess' },
      { title: 'Apply', href: '/apply' },
      { title: 'Admission Form', href: '/admissionform' },
      { title: 'Fee', href: '/fee' },
      { title: 'Term Dates', href: '/termdates' },
    ]
  },
  {
    id: '5', title:'CONTACT', href: '/contact'
  }
];




export const courseOutline = [
    {
      domain: 'Language & Communication',
      goals: [
        'Listening and responding to simple instructions',
        'Developing vocabulary through stories and songs',
        'Speaking in short phrases and full sentences',
        'Recognizing letters and phonics sounds',
      ],
    },
    {
      domain: 'Mathematical Development',
      goals: [
        'Understanding numbers, shapes, and patterns',
        'Counting objects and writing numbers',
        'Basic addition and subtraction (in Prep)',
        'Comparing sizes, quantities, and positions',
      ],
    },
    {
      domain: 'Creative Arts & Expression',
      goals: [
        'Exploring colors, textures, and art materials',
        'Learning through painting, drawing, and collage',
        'Expressing ideas through drama, music, and dance',
        'Participating in seasonal art and display projects',
      ],
    },
    {
      domain: 'Physical Development',
      goals: [
        'Improving fine motor skills with activities and tools',
        'Engaging in outdoor and group games',
        'Practicing balance, coordination, and movement',
        'Learning about health, hygiene, and body awareness',
      ],
    },
    {
      domain: 'Social & Emotional Growth',
      goals: [
        'Building friendships and empathy',
        'Following routines and classroom rules',
        'Sharing and taking turns',
        'Gaining independence and confidence',
      ],
    },
    {
      domain: 'Knowledge of the World',
      goals: [
        'Learning about animals, seasons, and weather',
        'Understanding community helpers and family roles',
        'Exploring basic science through observation and play',
        'Participating in field trips and nature walks',
      ],
    },
];






export  const syllabus = [
    {
      level: 'Preschool',
      subjects: [
        'Basic colors & shapes',
        'Nursery rhymes & action songs',
        'Fine motor skills through play',
        'Story time & listening skills',
        'Social development & routine following',
      ],
    },
    {
      level: 'Reception',
      subjects: [
        'Alphabet recognition & phonics',
        'Number concepts (1–20)',
        'Simple arts & crafts',
        'Personal hygiene & safety habits',
        'Group activities & communication skills',
      ],
    },
    {
      level: 'Pre-Prep',
      subjects: [
        'Writing letters A–Z',
        'Counting & number writing (1–50)',
        'Sorting, matching & sequencing',
        'Reading readiness',
        'Basic science concepts (weather, animals)',
      ],
    },
    {
      level: 'Prep',
      subjects: [
        'Reading simple sentences',
        'Addition & subtraction (1–20)',
        'Writing short words & phrases',
        'Creative drawing & storytelling',
        'Environmental awareness & physical activities',
      ],
    },
];





export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const schedule = [
    { time: '08:30 - 09:00', activity: 'Arrival & Free Play' },
    { time: '09:00 - 09:30', activity: 'Circle Time & Morning Songs' },
    { time: '09:30 - 10:30', activity: 'Learning Activities (Math/Language)' },
    { time: '10:30 - 11:00', activity: 'Snack Time' },
    { time: '11:00 - 12:00', activity: 'Art & Craft / Story Time' },
    { time: '12:00 - 01:00', activity: 'Outdoor Play / Physical Activities' },
    { time: '01:00 - 01:30', activity: 'Lunch Break' },
    { time: '01:30 - 02:30', activity: 'Nap Time / Quiet Play' },
    { time: '02:30 - 03:20', activity: 'Wrap Up & Dismissal' },
];






