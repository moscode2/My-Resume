import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  personalInfo: {
    fullName: 'Moses Onyango',
    title: 'Computer Science Graduate | Software Developer | ICT Support',
    contact: {
      phone: '+254 110626022',
      email: 'moisesmoses002@gmail.com',
      location: 'Nairobi, Kenya',
      linkedin: 'linkedin.com/in/moses-onyango-007459298',
      github: 'github.com/moscode2',
      portfolio: 'justmee.netlify.app',
    },
  },

  professionalSummary:
    'Computer Science graduate and Full Stack Developer with hands-on experience ' +
    'building responsive, mobile-first web applications using React.js,' +
    'JavaScript/ES6+, TypeScript, HTML5, CSS3, Next.js and Tailwind CSS.' +
    'Experienced in developing reusable UI components, integrating REST APIs, ' +
    'optimizing web performance, ensuring cross-browser compatibility, and ' +
    'troubleshooting frontend issues. Familiar with Agile development, Git/GitHub,' +
    'responsive design principles, and modern web application architecture.',

  coreCompetencies: [
    'Full-Stack Web Development',
    'Responsive UI Implementation',
    'Agile & Scrum Collaboration',
    'Version Control (Git/GitHub)',
    'Cross-Browser Compatibility',
    'API Design & Integration',
    'Technical Troubleshooting',
    'ICT Systems Support',
    'Client & Stakeholder Communication',
    'Code Review & Debugging',
  ],

  technicalSkills: [
    {
      category: 'Frontend Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Vue.js', 'Tailwind CSS' , 'Responsive Design', 'Mobile-First Development', 'Cross-Browser Compatibility'],
    },
    {
      category: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs'],
    },
    {
      category: 'Databases & Cloud',
      skills: ['PostgreSQL', 'MySQL', 'AWS', 'Docker', 'Firebase', 'Supabase'],
    },
    {
      category: 'Development Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Webpack', 'Vite', 'Jest'],
    },
  ],

  professionalExperience: [
    {
      jobTitle: 'Junior Full Stack Developer',
      company: 'CodSoft Limited',
      startDate: 'January 2025',
      endDate: 'July 2025',
      responsibilities: [
        'Assisted in developing and maintaining web applications using React.js and Node.js.',
        'Built responsive user interfaces with HTML, CSS, Tailwind CSS, and JavaScript/TypeScript.',
        'Collaborated with senior developers in code reviews, debugging, and feature deployment.',
        'Gained experience in Git/GitHub version control and Agile project management tools.',
        'Provided first-line technical support for hardware and software issues.',
        'Installed and configured Windows operating systems and office applications.',
        'Diagnosed and resolved printer and network connectivity issues.',
        'Assisted users with password resets and application support.',
        'Maintained ICT equipment inventory and documentation.',
      ],
    },
    {
      jobTitle: 'Front-End Developer',
      company: 'Safety Plus Consulting Limited, Rongai',
      startDate: 'May 2024',
      endDate: 'August 2024',
      responsibilities: [
        'Designed and implemented responsive web pages using HTML, CSS, Tailwind CSS, and JavaScript.',
        'Optimized website performance and ensured cross-browser compatibility.',
        'Worked closely with designers to translate wireframes into functional web pages.',
        'Participated in Agile development sprints.',
      ],
    },
    {
      jobTitle: 'Graphics Designer',
      company: 'Digital Agency Pro',
      startDate: 'January 2023',
      endDate: 'May 2023',
      responsibilities: [
        'Created visually appealing designs for logos, social media posts, and marketing materials using Adobe Photoshop, Illustrator, and Canva.',
        "Collaborated with clients to understand brand identity and translate ideas into engaging visuals.",
        'Delivered projects on time while maintaining high quality and creativity.',
      ],
    },
  ],

  projects: [
    {
      name: 'Budget Buddy — Financial Guidance',
      description:
        'A personal finance tracking web app that helps users monitor expenses, set savings goals, and ' +
        'visualize spending patterns through interactive charts and real-time updates.',
      techStack: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'TypeScript'],
      link: 'https://budgetbuddy-mu.vercel.app/',
      linkLabel: 'Live Demo',
    },
    {
      name: 'Task Management Web App',
      description: 'Real-time web application that helps users manage and schedule the tasks they need to perform.',
      techStack: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL'],
      link: 'https://github.com/moscode2',
      linkLabel: 'GitHub',
    },
    {
      name: 'AfriEuropa News',
      description:
        'Full-stack diaspora news platform connecting Africa and Europe, featuring curated articles, ' +
        'category-based filtering, and secure authentication. Focused on fast performance, mobile-first ' +
        'design, and a clean, modern UI for a global audience.',
      techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Vite'],
      link: 'https://www.afrieuropanews.com/',
      linkLabel: 'Live Demo',
    },
  ],

  education: [
    {
      degree: 'Diploma in Computer Science',
      institution: 'The Co-operative University of Kenya',
      location: 'Kenya',
      graduationDate: 'December 2025',
      coursework: ['Data Structures', 'Algorithms', 'Web Development', 'Database Systems', 'Software Engineering'],
    },
  ],

  certifications: [
    {
      name: 'Web Development',
      issuer: 'CodSoft Limited',
      date: '2024',
    },
    {
      name: 'Web Development and Software Engineering',
      issuer: 'SoftGrow Tech — SF TechWeek',
      date: '2026',
    },
  ],

  // Add awards or recognitions here as they are earned, e.g.:
  // { title: 'Best Final Year Project', issuer: 'The Co-operative University of Kenya', date: '2025' }
  awards: [],
};
