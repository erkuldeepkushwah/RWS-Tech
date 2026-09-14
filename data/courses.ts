export interface CourseModule {
  title: string;
  duration: string;
  lessons: string[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: 'Web Development' | 'Programming' | 'App Development' | 'Other Technology Courses';
  shortDescription: string;
  description: string;
  duration: string;
  fee: number; // in INR
  originalFee: number;
  rating: number;
  reviewCount: number;
  studentsCount: number;
  level: 'Beginner' | 'Intermediate' | 'All Levels' | 'Advanced';
  image: string;
  iconName: string;
  badge?: string;
  whatYouWillLearn: string[];
  modules: CourseModule[];
  projects: string[];
  certificate: {
    title: string;
    description: string;
    skills: string[];
  };
  instructor: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
}

export const COURSES_DATA: Course[] = [
  // WEB DEVELOPMENT (1 to 12)
  {
    id: 'web-1',
    title: 'HTML & CSS',
    slug: 'html-css',
    category: 'Web Development',
    shortDescription: 'Master semantic HTML5 markup and modern responsive CSS3 layout systems including Flexbox and Grid.',
    description: 'The definitive foundation for any web developer. Learn to structure accessible web pages with modern HTML5 semantics and craft responsive layouts using CSS3 Flexbox, Grid, custom properties, and micro-animations.',
    duration: '4 Weeks',
    fee: 999,
    originalFee: 2499,
    rating: 4.8,
    reviewCount: 320,
    studentsCount: 1850,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    iconName: 'Code2',
    badge: 'Fundamental',
    whatYouWillLearn: [
      'Semantic HTML5 elements, accessibility standards, and SEO basics',
      'CSS Box Model, specificity, cascade, and modern CSS custom properties',
      'Fluid layouts with Flexbox and CSS Grid architecture',
      'Mobile-first responsive media queries and fluid typography',
      'CSS animations, keyframes, transitions, and hover micro-interactions',
      'Deploying live responsive landing pages to GitHub Pages / Vercel'
    ],
    modules: [
      { title: 'Module 1: Semantic HTML5 Architecture', duration: '1 Week', lessons: ['Document tree & metadata', 'Semantic tags (header, nav, main, article)', 'Forms, accessible inputs & validation', 'Audio, video & SVG graphics'] },
      { title: 'Module 2: Modern CSS3 Styling & Box Model', duration: '1 Week', lessons: ['Box model depth & box-sizing', 'Typography & web fonts', 'Colors, shadows & gradients', 'CSS Variables (custom properties)'] },
      { title: 'Module 3: Responsive Flexbox & Grid Masterclass', duration: '1 Week', lessons: ['Flex container & item axes', 'CSS Grid lines, tracks & template areas', 'Combining Grid + Flex for enterprise layouts', 'Breakpoints & fluid math (clamp, min, max)'] },
      { title: 'Module 4: Transitions, Animations & Deployment', duration: '1 Week', lessons: ['Transforms & keyframe animations', 'Performance & will-change rules', 'Git basics & production deployment', 'Final Capstone Project evaluation'] },
    ],
    projects: ['Modern SaaS Landing Page', 'Interactive Portfolio Website', 'Responsive Multi-Device Tech News Portal'],
    certificate: {
      title: 'Certified HTML5 & CSS3 Responsive Web Specialist',
      description: 'Verifies proficiency in semantic HTML, responsive CSS3 architectures, and cross-browser accessibility compliance.',
      skills: ['Semantic HTML5', 'CSS3 Flexbox/Grid', 'Responsive Layouts', 'WCAG Accessibility']
    },
    instructor: {
      name: 'Aditya Sharma',
      role: 'Senior UI Architect',
      company: 'RWS Tech Labs',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'web-2',
    title: 'JavaScript',
    slug: 'javascript',
    category: 'Web Development',
    shortDescription: 'Core JavaScript and ES6+ from variables and closures to asynchronous Promises and DOM mastery.',
    description: 'Learn vanilla JavaScript the right way. Deep-dive into execution contexts, closures, prototypes, event loops, async/await, DOM APIs, and API consumption without relying on external libraries.',
    duration: '6 Weeks',
    fee: 1499,
    originalFee: 3999,
    rating: 4.9,
    reviewCount: 480,
    studentsCount: 2400,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80',
    iconName: 'Braces',
    badge: 'Core Tech',
    whatYouWillLearn: [
      'JavaScript memory model, call stack, and Event Loop mechanics',
      'Modern ES6+ syntax (destructuring, arrow functions, rest/spread, optional chaining)',
      'Closures, lexical scoping, higher-order array methods (map, filter, reduce)',
      'Asynchronous programming with Promises, async/await, and Fetch API',
      'Dynamic DOM manipulation, event delegation, and browser storage (localStorage)',
      'Object-Oriented Programming (Classes) and Functional Programming fundamentals'
    ],
    modules: [
      { title: 'Module 1: JS Basics & Primitive Data Structures', duration: '1.5 Weeks', lessons: ['Data types, type coercion, and operators', 'Conditionals & loops', 'Functions, parameters, and return types', 'Arrays & Object literals'] },
      { title: 'Module 2: Advanced Functions & Scope', duration: '1.5 Weeks', lessons: ['Execution context & hoisting', 'Scope chain & closures', '`this` keyword, call, apply, bind', 'Pure functions & immutability'] },
      { title: 'Module 3: DOM, Events & Browser APIs', duration: '1.5 Weeks', lessons: ['Selecting & mutating DOM nodes', 'Event listeners & event bubbling', 'Forms & client validation', 'localStorage & sessionStorage persistence'] },
      { title: 'Module 4: Asynchronous JavaScript & REST APIs', duration: '1.5 Weeks', lessons: ['Event loop & microtask queue', 'Promises & Promise.all', 'Async/Await patterns & error handling', 'Building real-time data driven apps'] }
    ],
    projects: ['Interactive Task Kanban App', 'Real-Time Crypto Currency Tracker', 'Multi-Step Interactive Quiz Platform'],
    certificate: {
      title: 'Certified Modern JavaScript (ES6+) Developer',
      description: 'Accredits deep understanding of ECMAScript standards, asynchronous architecture, and client-side DOM application engineering.',
      skills: ['ES6+', 'Async/Await', 'DOM APIs', 'Event Loop', 'Closures & Scopes']
    },
    instructor: {
      name: 'Pooja Verma',
      role: 'Staff Frontend Engineer',
      company: 'Ex-Flipkart & RWS Mentor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'web-3',
    title: 'Bootstrap',
    slug: 'bootstrap',
    category: 'Web Development',
    shortDescription: 'Build rapid, responsive web applications using Bootstrap 5 grid systems and utility classes.',
    description: 'Accelerate your frontend workflow using Bootstrap 5. Learn its 12-column grid, responsive breakpoints, flex utilities, modals, offcanvas drawers, and custom Sass theming.',
    duration: '3 Weeks',
    fee: 899,
    originalFee: 2199,
    rating: 4.6,
    reviewCount: 190,
    studentsCount: 1100,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    iconName: 'LayoutGrid',
    whatYouWillLearn: [
      'Bootstrap 5 grid container, row, and column hierarchy',
      'Utility-first spacing, typography, borders, and flexbox modifiers',
      'Pre-built interactive UI components (Navbars, Cards, Modals, Offcanvas)',
      'Customizing Bootstrap themes using Sass variables and maps',
      'Building production dashboards with responsive tables and charts'
    ],
    modules: [
      { title: 'Module 1: Bootstrap 5 Layouts & Grid', duration: '1 Week', lessons: ['Setup & CDN vs npm', 'Containers, Rows & 12-Col Grid', 'Responsive breakpoints & offsets'] },
      { title: 'Module 2: Essential UI Components', duration: '1 Week', lessons: ['Navbars & Dropdowns', 'Cards, Badges & Lists', 'Modals, Toasts & Tooltips'] },
      { title: 'Module 3: Custom Sass Overrides & Project', duration: '1 Week', lessons: ['Sass compilation & variables', 'Color overrides', 'Admin Portal Capstone'] }
    ],
    projects: ['Corporate Agency Portal', 'E-Commerce Product Listing', 'Enterprise Admin Dashboard'],
    certificate: {
      title: 'Bootstrap 5 Rapid UI Developer Certification',
      description: 'Validates ability to design clean, mobile-first business interfaces utilizing Bootstrap 5 UI library.',
      skills: ['Bootstrap 5', 'Sass Customization', 'Responsive Grids', 'Component Integration']
    },
    instructor: {
      name: 'Vikram Mehta',
      role: 'Frontend UI Lead',
      company: 'RWS Tech',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'web-4',
    title: 'Tailwind CSS',
    slug: 'tailwind-css',
    category: 'Web Development',
    shortDescription: 'Master modern utility-first CSS styling for lightning-fast responsive UI development.',
    description: 'Learn the modern industry standard for web styling. Master utility composition, responsive variants, dark mode configuration, custom themes, and Tailwind v4 architecture.',
    duration: '3 Weeks',
    fee: 1199,
    originalFee: 2999,
    rating: 4.9,
    reviewCount: 410,
    studentsCount: 2200,
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    iconName: 'Palette',
    badge: 'Popular',
    whatYouWillLearn: [
      'Core philosophy of utility-first CSS versus traditional class-based CSS',
      'Design tokens: spacing, typography, colors, shadows, and screen breakpoints',
      'State variants: hover, focus, active, group-hover, and peer interactions',
      'Tailwind configuration, themes, plugins, and custom utility classes',
      'Building dark mode toggles and high-converting modern interfaces'
    ],
    modules: [
      { title: 'Module 1: Utility Foundations', duration: '1 Week', lessons: ['Installing Tailwind in Vite/Next.js', 'Core layout & typography utilities', 'Flexbox & CSS Grid utilities'] },
      { title: 'Module 2: Interactive States & Dark Mode', duration: '1 Week', lessons: ['Hover, focus, disabled states', 'Group and peer selectors', 'Class-based dark mode'] },
      { title: 'Module 3: Design Systems & Component Design', duration: '1 Week', lessons: ['Extracting reusable styles & cva', 'Animation utilities', 'Full SaaS Dashboard Clone'] }
    ],
    projects: ['Fintech Dashboard UI', 'Modern Developer Portfolio', 'Streaming Platform Interface'],
    certificate: {
      title: 'Tailwind CSS Architecture Specialist',
      description: 'Certifies proficiency in building pixel-perfect responsive web designs with utility-first CSS.',
      skills: ['Tailwind CSS', 'Responsive UI', 'Theme Customization', 'Modern UI Design']
    },
    instructor: {
      name: 'Rohan Gupta',
      role: 'Design Technologist',
      company: 'RWS Studio',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'web-5',
    title: 'React.js',
    slug: 'react-js',
    category: 'Web Development',
    shortDescription: 'Build modern dynamic single-page applications with React 19, Hooks, Context, and Vite.',
    description: 'The premier frontend framework. Master JSX, component lifecycle, custom hooks, state management with Context & Redux Toolkit, client routing, and performance optimization.',
    duration: '8 Weeks',
    fee: 2499,
    originalFee: 5999,
    rating: 4.9,
    reviewCount: 750,
    studentsCount: 3800,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    iconName: 'Atom',
    badge: 'Bestseller',
    whatYouWillLearn: [
      'Component-driven architecture, JSX syntax, and props validation',
      'Hooks mastery: useState, useEffect, useMemo, useCallback, useRef, useId',
      'Writing custom hooks for reusable business logic (fetch, forms, storage)',
      'Global state management with React Context API and Redux Toolkit',
      'Client-side routing with React Router DOM v6 and route protections',
      'Performance tuning: memoization, code splitting with React.lazy and Suspense'
    ],
    modules: [
      { title: 'Module 1: React Fundamentals & JSX', duration: '2 Weeks', lessons: ['React mental model & virtual DOM', 'JSX rules & conditional rendering', 'Props, children & composition', 'Handling events & form state'] },
      { title: 'Module 2: Hooks Deep Dive', duration: '2 Weeks', lessons: ['useState & useReducer mechanics', 'useEffect lifecycle & cleanup functions', 'useRef for DOM & mutable refs', 'Custom hooks creation'] },
      { title: 'Module 3: Routing & Global State', duration: '2 Weeks', lessons: ['React Router v6 nested routes', 'Protected auth routes', 'Context API patterns', 'Redux Toolkit store & slices'] },
      { title: 'Module 4: Production Best Practices', duration: '2 Weeks', lessons: ['API integration with TanStack Query', 'Form handling with React Hook Form', 'Optimization & lazy loading', 'Capstone Full App Build'] }
    ],
    projects: ['Trello-style Task Board', 'Streaming Movie Catalog & Player', 'Complete E-Commerce Storefront with Cart'],
    certificate: {
      title: 'Certified React.js Frontend Engineer',
      description: 'Validates enterprise-level competency in building scalable React SPA architectures, state patterns, and API integrations.',
      skills: ['React 19', 'Hooks', 'Redux Toolkit', 'React Router', 'Clean Architecture']
    },
    instructor: {
      name: 'Aditya Sharma',
      role: 'Principal Engineer',
      company: 'RWS Tech',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'web-6',
    title: 'Next.js',
    slug: 'next-js',
    category: 'Web Development',
    shortDescription: 'Master full-stack React with Next.js 15+ App Router, Server Components, SSR, and API routes.',
    description: 'Learn industry-standard production full-stack React. Master Server Components, Server Actions, Dynamic Routing, Metadata SEO optimization, caching strategies, and edge deployment.',
    duration: '6 Weeks',
    fee: 2999,
    originalFee: 6999,
    rating: 4.9,
    reviewCount: 520,
    studentsCount: 2600,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    iconName: 'Cpu',
    badge: 'Industry Standard',
    whatYouWillLearn: [
      'Next.js 15+ App Router architecture and file-based nested routing',
      'React Server Components (RSC) vs Client Components boundary design',
      'Data fetching patterns: SSR, SSG, ISR, and Route Handlers (API)',
      'Server Actions with optimistic UI updates and Zod validation',
      'Advanced SEO optimization with dynamic OpenGraph generation',
      'Authentication integration with NextAuth / Auth.js and deployment to Vercel'
    ],
    modules: [
      { title: 'Module 1: App Router & File Conventions', duration: '1.5 Weeks', lessons: ['Next.js project setup & structure', 'page.tsx, layout.tsx, template.tsx', 'loading.tsx, error.tsx, not-found.tsx', 'Nested layouts & route groups'] },
      { title: 'Module 2: Server vs Client Components', duration: '1.5 Weeks', lessons: ['When to use "use client"', 'Composition strategies & leaf patterns', 'Hydration boundaries & SSR nuances'] },
      { title: 'Module 3: Server Actions & Data Fetching', duration: '1.5 Weeks', lessons: ['Server actions with form data', 'Route handlers (/app/api/*)', 'Revalidation & caching control', 'Database connectivity'] },
      { title: 'Module 4: Production Edge Architecture', duration: '1.5 Weeks', lessons: ['Authentication flows & middleware', 'Dynamic SEO metadata', 'Performance metrics & Vercel deployment'] }
    ],
    projects: ['Full Stack SaaS Feedback Platform', 'Dev Blog with MDX & Comments', 'Real-Time Job Board with Stripe/UPI'],
    certificate: {
      title: 'Certified Next.js Production Architect',
      description: 'Accredits full-stack proficiency with Next.js App Router, Server Actions, hybrid rendering, and secure API routes.',
      skills: ['Next.js 15+', 'Server Actions', 'RSC Architecture', 'SEO & Performance']
    },
    instructor: {
      name: 'Aditya Sharma',
      role: 'Principal Engineer',
      company: 'RWS Tech',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'web-7',
    title: 'Node.js',
    slug: 'node-js',
    category: 'Web Development',
    shortDescription: 'Build high-performance, asynchronous server-side applications using Node.js runtime.',
    description: 'Harness the power of Node.js for backend engineering. Understand the V8 engine, Libuv event loop, streams, buffers, file system operations, worker threads, and microservices.',
    duration: '5 Weeks',
    fee: 1999,
    originalFee: 4999,
    rating: 4.8,
    reviewCount: 380,
    studentsCount: 1950,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    iconName: 'Server',
    whatYouWillLearn: [
      'Node.js architecture: V8 engine, Libuv, event loop phases, and thread pool',
      'Core modules: fs, path, http, crypto, events, and buffer streams',
      'Building scalable HTTP web servers without external frameworks',
      'Asynchronous file processing with Node.js Readable and Writable streams',
      'Package management with npm, semantic versioning, and environment secrets',
      'Debugging, memory profiling, and cluster mode load balancing'
    ],
    modules: [
      { title: 'Module 1: Node Runtime & Internals', duration: '1 Week', lessons: ['JavaScript outside the browser', 'Global objects & module system (CommonJS vs ESM)', 'Process & environment management'] },
      { title: 'Module 2: File System & Streams', duration: '1.5 Weeks', lessons: ['Asynchronous fs operations', 'Buffers & binary data handling', 'Stream pipelines for large datasets'] },
      { title: 'Module 3: Events & Networking', duration: '1 Week', lessons: ['EventEmitter pattern', 'HTTP / TCP networking', 'Handling concurrent connections'] },
      { title: 'Module 4: Production Operations', duration: '1.5 Weeks', lessons: ['Cluster module & PM2 process manager', 'Security hardening & rate limiting', 'Deploying Node to Cloud Run'] }
    ],
    projects: ['File Streaming & Transcoding Server', 'Real-Time Log Aggregator Service', 'Multi-Threaded Web Scraper Microservice'],
    certificate: {
      title: 'Certified Node.js Backend Developer',
      description: 'Certifies expertise in building high-throughput backend runtimes, streams, and asynchronous server architectures.',
      skills: ['Node.js', 'Event Loop', 'Streams & Buffers', 'Clustering', 'System Architecture']
    },
    instructor: {
      name: 'Kunal Deshmukh',
      role: 'Backend Architect',
      company: 'RWS Cloud Infrastructure',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'web-8',
    title: 'Express.js',
    slug: 'express-js',
    category: 'Web Development',
    shortDescription: 'Design RESTful APIs, robust middleware, authentication, and error pipelines with Express.',
    description: 'The most widely used backend framework for Node.js. Master REST architecture, routing, error-handling middleware, CORS, JWT authentication, and file upload pipelines.',
    duration: '4 Weeks',
    fee: 1499,
    originalFee: 3499,
    rating: 4.7,
    reviewCount: 310,
    studentsCount: 1700,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80',
    iconName: 'Network',
    whatYouWillLearn: [
      'RESTful API conventions, HTTP status codes, and idempotency',
      'Express routing, route parameters, query strings, and controllers',
      'Custom middleware pipeline (logging, authentication, error interception)',
      'Security headers with Helmet, CORS policies, and rate-limiting',
      'Handling multipart form data and file uploads with Multer',
      'Unit & integration testing of APIs using Jest and Supertest'
    ],
    modules: [
      { title: 'Module 1: RESTful Principles & Routing', duration: '1 Week', lessons: ['Express server bootstrap', 'CRUD endpoints & URL conventions', 'Request & Response objects'] },
      { title: 'Module 2: Middleware Ecosystem', duration: '1 Week', lessons: ['Application vs Router vs Error middleware', 'Third-party middleware (morgan, cors, helmet)', 'Building custom validator middleware'] },
      { title: 'Module 3: Authentication & Security', duration: '1 Week', lessons: ['Password hashing with bcrypt', 'JWT generation and token verification', 'Role-based access control (RBAC)'] },
      { title: 'Module 4: Testing & Deployment', duration: '1 Week', lessons: ['API integration testing with Supertest', 'API documentation with Swagger/OpenAPI', 'Cloud deployment'] }
    ],
    projects: ['Secure Authentication Gateway API', 'E-Commerce Backend REST API', 'Digital Media Upload & Storage API'],
    certificate: {
      title: 'Certified Express.js REST API Engineer',
      description: 'Confirms ability to architect enterprise REST endpoints, robust middleware pipelines, and security controls.',
      skills: ['Express.js', 'REST APIs', 'JWT Authentication', 'Middleware', 'Security']
    },
    instructor: {
      name: 'Kunal Deshmukh',
      role: 'Backend Architect',
      company: 'RWS Cloud Infrastructure',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'web-9',
    title: 'MongoDB',
    slug: 'mongodb',
    category: 'Web Development',
    shortDescription: 'Master NoSQL database modeling, indexing, aggregation pipelines, and Mongoose ODM.',
    description: 'Learn schema-less and schema-enforced NoSQL document design with MongoDB. Master indexing for ultra-fast queries, the complex Aggregation Pipeline, and Mongoose ODM integration.',
    duration: '4 Weeks',
    fee: 1499,
    originalFee: 3499,
    rating: 4.8,
    reviewCount: 290,
    studentsCount: 1600,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Database',
    whatYouWillLearn: [
      'Document database principles vs relational database structures',
      'CRUD operations: insert, find, update operators ($set, $push, $inc), and delete',
      'Schema design: Embedding versus referencing data models',
      'MongoDB Aggregation framework ($match, $group, $project, $lookup)',
      'Index strategies: compound indexes, text indexes, and explain plans',
      'Mongoose ODM schemas, middleware hooks, virtuals, and population'
    ],
    modules: [
      { title: 'Module 1: Document Modeling & CRUD', duration: '1 Week', lessons: ['MongoDB Atlas setup', 'BSON vs JSON', 'Query operators & projection'] },
      { title: 'Module 2: Advanced Schema Design', duration: '1 Week', lessons: ['1-to-many & many-to-many relationships', 'Mongoose schemas & validations', 'Pre/Post save middleware hooks'] },
      { title: 'Module 3: Aggregation Framework', duration: '1 Week', lessons: ['Multi-stage pipelines', 'Analytics queries & grouping', '$lookup relational joins'] },
      { title: 'Module 4: Performance & Indexing', duration: '1 Week', lessons: ['Index creation & query execution plans', 'Transactions in MongoDB', 'Backup & production maintenance'] }
    ],
    projects: ['Analytics Metrics Engine', 'Social Network Data Layer with Relational Populates', 'Inventory Management Catalog'],
    certificate: {
      title: 'Certified MongoDB Database Developer',
      description: 'Attests to deep knowledge of NoSQL database modeling, aggregation pipelines, and high-performance querying.',
      skills: ['MongoDB', 'Mongoose ODM', 'Aggregation Pipelines', 'Schema Modeling', 'Database Indexing']
    },
    instructor: {
      name: 'Pooja Verma',
      role: 'Staff Frontend Engineer',
      company: 'Ex-Flipkart & RWS Mentor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'web-10',
    title: 'MERN Stack Development',
    slug: 'mern-stack-development',
    category: 'Web Development',
    shortDescription: 'Complete end-to-end full stack development connecting MongoDB, Express, React, and Node.',
    description: 'Become a complete MERN stack developer. Learn to build full-stack web applications from database schema to interactive React frontend, with JWT auth, payment gateway, and cloud deployment.',
    duration: '12 Weeks',
    fee: 3999,
    originalFee: 9999,
    rating: 4.9,
    reviewCount: 920,
    studentsCount: 4500,
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    iconName: 'Layers',
    badge: 'Flagship Program',
    whatYouWillLearn: [
      'Architecting end-to-end full-stack web applications with standard MVC / modular layout',
      'Designing robust REST APIs in Node/Express and consuming them in React with Axios',
      'Full authentication with refresh tokens, HttpOnly cookies, and authorization guards',
      'State management in React with Redux Toolkit and persistence',
      'Integrating payment gateways, file uploads to AWS S3/Cloudinary, and email notifications',
      'Deploying frontend to Vercel and backend to Cloud Run / Render with CI/CD pipeline'
    ],
    modules: [
      { title: 'Module 1: React & UI Architecture', duration: '3 Weeks', lessons: ['Component design & Tailwind', 'State & client routing', 'Custom hooks for API consumption'] },
      { title: 'Module 2: Node.js, Express & MongoDB Backend', duration: '3 Weeks', lessons: ['API structure & controllers', 'Mongoose models & relationships', 'Error handling middleware'] },
      { title: 'Module 3: Authentication & Security', duration: '3 Weeks', lessons: ['JWT authentication flow', 'Role-based dashboards (Admin, Student, Instructor)', 'Protecting frontend & backend routes'] },
      { title: 'Module 4: Enterprise Capstone & Deployment', duration: '3 Weeks', lessons: ['Payment gateway integration (UPI / Razorpay / Stripe)', 'Real-time notifications with WebSockets', 'Production deployment & monitoring'] }
    ],
    projects: ['Full E-Learning Academy Platform', 'Airbnb Clone with Booking & Reviews', 'B2B CRM & Customer Ticket Management System'],
    certificate: {
      title: 'Certified MERN Stack Full Stack Software Engineer',
      description: 'Comprehensive certification certifying mastery of modern JavaScript across the entire technology stack.',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'System Design', 'CI/CD']
    },
    instructor: {
      name: 'Aditya Sharma',
      role: 'Principal Engineer',
      company: 'RWS Tech',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'web-11',
    title: 'Full Stack Web Development',
    slug: 'full-stack-web-development',
    category: 'Web Development',
    shortDescription: 'Comprehensive full stack track covering frontend, backend, databases, DevOps, and cloud deployment.',
    description: 'Our most comprehensive industry bootcamp. From core web foundations to modern React/Next.js frontends, polyglot backends (Node & Python), SQL & NoSQL databases, Docker, and cloud deployments.',
    duration: '16 Weeks',
    fee: 4999,
    originalFee: 12999,
    rating: 4.9,
    reviewCount: 1100,
    studentsCount: 5200,
    level: 'All Levels',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    iconName: 'Globe',
    badge: 'Career Bootcamp',
    whatYouWillLearn: [
      'Foundational & modern frontend technologies (HTML5, CSS3, Tailwind, React, Next.js)',
      'Backend engineering with Node.js, Express, and Python FastAPI',
      'Relational (PostgreSQL) and Document (MongoDB) database design & optimization',
      'System design principles: caching with Redis, message queues, and load balancing',
      'DevOps fundamentals: Git, GitHub Actions, Docker containerization, and AWS/Cloud Run',
      'Mock technical interviews, portfolio optimization, and live client projects'
    ],
    modules: [
      { title: 'Module 1: Frontend Mastery', duration: '4 Weeks', lessons: ['HTML5/CSS3/Tailwind', 'JavaScript ES6+', 'React.js & Next.js App Router'] },
      { title: 'Module 2: Server-Side Engineering', duration: '4 Weeks', lessons: ['Node.js & Express REST APIs', 'Microservice architecture', 'API security & testing'] },
      { title: 'Module 3: Databases & Caching', duration: '4 Weeks', lessons: ['PostgreSQL & SQL queries', 'MongoDB & Mongoose', 'Redis caching & rate limiting'] },
      { title: 'Module 4: DevOps, Cloud & Career Capstone', duration: '4 Weeks', lessons: ['Docker containers', 'CI/CD automation pipelines', 'Production deployment & resume preparation'] }
    ],
    projects: ['Multi-Vendor E-Commerce Marketplace', 'Collaborative Team Workspace with Real-Time Canvas', 'Fintech Invoicing & Ledger Platform'],
    certificate: {
      title: 'Certified Full Stack Web Architect & Engineer',
      description: 'Accredits full competency across client, server, database, security, and cloud infrastructure pipelines.',
      skills: ['Full Stack Architecture', 'React/Next.js', 'Node.js', 'PostgreSQL & MongoDB', 'Docker & DevOps']
    },
    instructor: {
      name: 'Aditya Sharma',
      role: 'Principal Engineer',
      company: 'RWS Tech',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'web-12',
    title: 'WordPress Development',
    slug: 'wordpress-development',
    category: 'Web Development',
    shortDescription: 'Build dynamic blogs, corporate portals, and WooCommerce stores with custom themes and plugins.',
    description: 'Powering over 40% of the web. Learn WordPress from site setup to building custom Gutenberg blocks, developing bespoke PHP themes from scratch, extending WooCommerce, and optimizing speed.',
    duration: '5 Weeks',
    fee: 1299,
    originalFee: 3299,
    rating: 4.7,
    reviewCount: 340,
    studentsCount: 1900,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    iconName: 'FileCode2',
    badge: 'Freelance Favorite',
    whatYouWillLearn: [
      'WordPress core architecture: database schema, template hierarchy, and loop',
      'Building custom WordPress themes from scratch with modern HTML/CSS and PHP',
      'Developing custom Gutenberg blocks with React and @wordpress/scripts',
      'WooCommerce configuration, custom payment gateway integration, and checkout flows',
      'Website migration, staging workflows, performance caching, and security hardening',
      'Freelancing blueprint: pricing, client handover, and maintenance retainers'
    ],
    modules: [
      { title: 'Module 1: WordPress Core & Site Setup', duration: '1 Week', lessons: ['Local development with LocalWP', 'Theme & plugin basics', 'Post types & taxonomies'] },
      { title: 'Module 2: Custom Theme Development', duration: '1.5 Weeks', lessons: ['Template hierarchy', 'The WordPress Loop & WP_Query', 'Hooks: Actions & Filters', 'Custom fields with ACF'] },
      { title: 'Module 3: WooCommerce & E-Commerce', duration: '1.5 Weeks', lessons: ['Store setup & catalog', 'Customizing single product & cart templates', 'Payment gateway & shipping rules'] },
      { title: 'Module 4: Security, Speed & Freelance', duration: '1 Week', lessons: ['Speed optimization & caching plugins', 'Security hardening', 'Client pitching & deployment'] }
    ],
    projects: ['Custom Corporate Business Portal', 'Full Featured WooCommerce Store with UPI Gateway', 'Real Estate Listing Directory with Search & Filters'],
    certificate: {
      title: 'Certified WordPress Theme & Plugin Developer',
      description: 'Certifies ability to develop custom WordPress themes, WooCommerce stores, and client-ready digital portals.',
      skills: ['WordPress Core', 'PHP & MySQL', 'WooCommerce', 'Theme Development', 'ACF Pro']
    },
    instructor: {
      name: 'Vikram Mehta',
      role: 'Frontend UI Lead',
      company: 'RWS Tech',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  },

  // PROGRAMMING (13 to 16)
  {
    id: 'prog-13',
    title: 'C Programming',
    slug: 'c-programming',
    category: 'Programming',
    shortDescription: 'Master foundational computer science, memory management, pointers, and data structures in C.',
    description: 'The mother of all modern programming languages. Understand how computers actually work beneath the abstractions: raw memory layout, pointers, dynamic allocation, structures, and file I/O.',
    duration: '5 Weeks',
    fee: 999,
    originalFee: 2499,
    rating: 4.8,
    reviewCount: 310,
    studentsCount: 2100,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    iconName: 'Binary',
    badge: 'CS Foundation',
    whatYouWillLearn: [
      'Compilation pipeline: preprocessor, compiler, assembler, and linker',
      'Data types, bitwise operators, memory addresses, and variable sizing',
      'Pointers deep-dive: single, double pointers, pointer arithmetic, and function pointers',
      'Dynamic memory allocation (malloc, calloc, realloc, free) and memory leak prevention',
      'Structs, unions, typedef, and custom data types',
      'File handling in C and implementing linked lists from scratch'
    ],
    modules: [
      { title: 'Module 1: C Syntax & Control Flow', duration: '1 Week', lessons: ['GCC compiler & build tools', 'Variables, types & formatting', 'Conditionals & loops'] },
      { title: 'Module 2: Pointers & Raw Memory', duration: '1.5 Weeks', lessons: ['Pointer basics & dereferencing', 'Pointer arithmetic & arrays', 'Function pointers & callbacks'] },
      { title: 'Module 3: Dynamic Allocation & Structs', duration: '1.5 Weeks', lessons: ['Heap vs Stack memory', 'malloc/free & Valgrind debugging', 'Structures, nested structs & unions'] },
      { title: 'Module 4: File I/O & Data Structures', duration: '1 Week', lessons: ['File reading/writing in text/binary', 'Singly & doubly linked lists', 'Final terminal project'] }
    ],
    projects: ['Banking Management Terminal System', 'Dynamic Memory Cache Implementation', 'Custom String Library from Scratch'],
    certificate: {
      title: 'Certified C Systems Programmer',
      description: 'Demonstrates deep grounding in low-level systems programming, pointers, and memory management in C.',
      skills: ['C Language', 'Pointers & Memory', 'Dynamic Allocation', 'Data Structures', 'GCC & GDB']
    },
    instructor: {
      name: 'Dr. Rajesh Nair',
      role: 'Head of Computer Science',
      company: 'RWS Academy',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'prog-14',
    title: 'C++',
    slug: 'cpp',
    category: 'Programming',
    shortDescription: 'Master Object-Oriented Programming, Modern C++ (C++17/20), STL, and High Performance computing.',
    description: 'Learn C++ for high-performance software engineering and competitive programming. Master OOP (inheritance, polymorphism), templates, the Standard Template Library (STL), and modern smart pointers.',
    duration: '6 Weeks',
    fee: 1499,
    originalFee: 3699,
    rating: 4.8,
    reviewCount: 420,
    studentsCount: 2300,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    iconName: 'Code',
    badge: 'Performance',
    whatYouWillLearn: [
      'Object-Oriented Programming: classes, constructors, destructors, and access specifiers',
      'Inheritance types, virtual functions, abstract classes, and run-time polymorphism',
      'Modern C++ features: auto, lambdas, range-based loops, move semantics (rvalue refs)',
      'Standard Template Library (STL): vector, map, set, priority_queue, and algorithms',
      'Resource management with RAII and smart pointers (unique_ptr, shared_ptr)',
      'Exception handling, templates, and generic programming'
    ],
    modules: [
      { title: 'Module 1: OOP Principles in C++', duration: '1.5 Weeks', lessons: ['Classes, objects & methods', 'Constructors & operator overloading', 'Inheritance & polymorphism'] },
      { title: 'Module 2: Standard Template Library (STL)', duration: '1.5 Weeks', lessons: ['Sequence containers (vector, list, deque)', 'Associative containers (set, map, unordered_map)', 'STL algorithms (sort, binary_search, transform)'] },
      { title: 'Module 3: Modern C++ (C++11/17/20)', duration: '1.5 Weeks', lessons: ['Smart pointers & memory safety', 'Move semantics & perfect forwarding', 'Lambda expressions & std::function'] },
      { title: 'Module 4: Advanced DSA in C++', duration: '1.5 Weeks', lessons: ['Graph representations & traversals', 'Dynamic programming patterns', 'Competitive programming techniques'] }
    ],
    projects: ['High-Performance In-Memory Key-Value Store', '2D Terminal Game Engine', 'Stock Market Order Book Simulator'],
    certificate: {
      title: 'Certified Modern C++ & STL Specialist',
      description: 'Accredits skills in high-performance OOP architecture, modern C++ idioms, and STL data structures.',
      skills: ['C++20', 'STL Containers', 'OOP & Polymorphism', 'Memory Management', 'Algorithms']
    },
    instructor: {
      name: 'Dr. Rajesh Nair',
      role: 'Head of Computer Science',
      company: 'RWS Academy',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'prog-15',
    title: 'Java',
    slug: 'java',
    category: 'Programming',
    shortDescription: 'Enterprise Java from Core concepts and JVM mechanics to Spring Boot microservices basics.',
    description: 'Master Java, the backbone of corporate enterprise software. Learn Core Java, OOP, Collections Framework, Multithreading, Generics, Lambdas, Streams API, and JDBC database access.',
    duration: '8 Weeks',
    fee: 1999,
    originalFee: 4999,
    rating: 4.8,
    reviewCount: 510,
    studentsCount: 2900,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    iconName: 'Coffee',
    badge: 'Enterprise',
    whatYouWillLearn: [
      'Java Virtual Machine (JVM) internals, Bytecode, JRE, and Garbage Collection',
      'Robust OOP: encapsulation, inheritance, interfaces, and design patterns',
      'Java Collections Framework: ArrayList, LinkedList, HashMap, TreeSet, and Iterators',
      'Multithreading, concurrency, synchronization, and ExecutorService',
      'Java 8+ Features: functional interfaces, Lambda expressions, and the Streams API',
      'Database integration with JDBC and intro to Spring Boot REST APIs'
    ],
    modules: [
      { title: 'Module 1: Core Java & OOP', duration: '2 Weeks', lessons: ['Variables, operators & control flow', 'Classes, objects & constructors', 'Inheritance, abstract classes & interfaces', 'Exception handling & custom exceptions'] },
      { title: 'Module 2: Collections & Generics', duration: '2 Weeks', lessons: ['List, Set, Map hierarchies', 'Generics & type safety', 'Comparable & Comparator interfaces'] },
      { title: 'Module 3: Concurrency & Java 8 Streams', duration: '2 Weeks', lessons: ['Thread lifecycle & synchronization', 'Deadlocks & locks', 'Streams pipeline (filter, map, collect)'] },
      { title: 'Module 4: Enterprise Integration', duration: '2 Weeks', lessons: ['JDBC & connection pooling', 'Maven build tool', 'Building a REST service with Spring Boot'] }
    ],
    projects: ['Hospital Patient Record System', 'Enterprise Payroll Processing Engine', 'Multi-Threaded Web Server Simulator'],
    certificate: {
      title: 'Certified Enterprise Java Developer',
      description: 'Validates mastery in Core Java, Collections Framework, Multithreading, and enterprise backend engineering.',
      skills: ['Java 21', 'Collections Framework', 'Multithreading', 'Streams API', 'JDBC & Spring']
    },
    instructor: {
      name: 'Sunil Rathore',
      role: 'Enterprise Architect',
      company: 'Ex-Cognizant & RWS Mentor',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'prog-16',
    title: 'Python',
    slug: 'python',
    category: 'Programming',
    shortDescription: 'From Python fundamentals to OOP, automation scripting, web scraping, and data manipulation.',
    description: 'The world’s most versatile programming language. Learn Python from scratch: variables, lists, dictionaries, functions, OOP, file automation, web scraping with BeautifulSoup, and REST APIs.',
    duration: '6 Weeks',
    fee: 1499,
    originalFee: 3999,
    rating: 4.9,
    reviewCount: 880,
    studentsCount: 4600,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80',
    iconName: 'Terminal',
    badge: 'Super Popular',
    whatYouWillLearn: [
      'Python data types, list comprehensions, dict comprehensions, and generators',
      'Functions, *args, **kwargs, decorators, and lambda expressions',
      'Object-Oriented Programming: classes, magic/dunder methods, and inheritance',
      'File automation, CSV/JSON processing, and system tasks with os/sys',
      'Web scraping with requests, BeautifulSoup, and Selenium',
      'Building fast lightweight web APIs using FastAPI and Pydantic'
    ],
    modules: [
      { title: 'Module 1: Python Basics & Collections', duration: '1.5 Weeks', lessons: ['Syntax, variables, input/output', 'Lists, tuples, sets, dictionaries', 'Conditionals, loops & comprehensions'] },
      { title: 'Module 2: Functional Python & OOP', duration: '1.5 Weeks', lessons: ['Functions & scope', 'Decorators & generators', 'Classes, objects & inheritance', 'Magic methods (__str__, __repr__)'] },
      { title: 'Module 3: Automation & Web Scraping', duration: '1.5 Weeks', lessons: ['Automating file & directory tasks', 'Web scraping with BeautifulSoup', 'Handling dynamic pages with Playwright'] },
      { title: 'Module 4: API Development & Data Intro', duration: '1.5 Weeks', lessons: ['FastAPI REST service setup', 'Pydantic data validation', 'Intro to Pandas for data analysis'] }
    ],
    projects: ['Automated Job Application Scraper & Alert', 'CLI Personal Finance Tracker', 'FastAPI Microservice with SQLite'],
    certificate: {
      title: 'Certified Python Software Developer',
      description: 'Accredits proficiency in Python programming, automated workflows, web scraping, and API development.',
      skills: ['Python 3', 'OOP', 'FastAPI', 'Web Scraping', 'Automation Scripts']
    },
    instructor: {
      name: 'Dr. Rajesh Nair',
      role: 'Head of Computer Science',
      company: 'RWS Academy',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    }
  },

  // APP DEVELOPMENT (17 to 18)
  {
    id: 'app-17',
    title: 'React Native',
    slug: 'react-native',
    category: 'App Development',
    shortDescription: 'Build native iOS and Android mobile apps using React Native and Expo framework.',
    description: 'Leverage your React knowledge to build high-performance native iOS and Android mobile applications. Master Expo, React Navigation, device APIs (Camera, GPS, Storage), and app store deployment.',
    duration: '8 Weeks',
    fee: 2999,
    originalFee: 6999,
    rating: 4.8,
    reviewCount: 460,
    studentsCount: 2100,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    iconName: 'Smartphone',
    badge: 'Mobile Specialist',
    whatYouWillLearn: [
      'React Native core primitives (View, Text, Image, ScrollView, FlatList)',
      'Cross-platform styling with StyleSheet and NativeWind (Tailwind)',
      'Stack, Bottom Tabs, and Drawer navigation with React Navigation v6',
      'Accessing native hardware APIs: camera, location GPS, biometric auth, and accelerometer',
      'Offline storage with AsyncStorage and SQLite local database',
      'Building production standalone APKs/IPAs with Expo EAS build service'
    ],
    modules: [
      { title: 'Module 1: Mobile Primitives & Expo Setup', duration: '2 Weeks', lessons: ['Expo development environment', 'Core components & styling differences', 'Handling touches, gestures, and haptics'] },
      { title: 'Module 2: Navigation & State', duration: '2 Weeks', lessons: ['React Navigation Stack & Tabs', 'Passing route params', 'Global state with Zustand/Redux'] },
      { title: 'Module 3: Hardware APIs & Storage', duration: '2 Weeks', lessons: ['Camera & image picker', 'Location GPS & MapView integration', 'Local caching & offline sync'] },
      { title: 'Module 4: Publishing to App Store & Play Store', duration: '2 Weeks', lessons: ['App icons & splash screens', 'Expo EAS configuration', 'Signing keys & publishing pipeline'] }
    ],
    projects: ['Food Delivery Mobile App with Live Tracking', 'Fitness & Workout Logger with Charts', 'Social Photo Sharing Mobile App'],
    certificate: {
      title: 'Certified Cross-Platform React Native Developer',
      description: 'Certifies competency in designing, building, and deploying cross-platform native iOS & Android applications.',
      skills: ['React Native', 'Expo', 'React Navigation', 'Device APIs', 'Mobile Architecture']
    },
    instructor: {
      name: 'Neha Kapoor',
      role: 'Lead Mobile Architect',
      company: 'RWS Mobile Labs',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'app-18',
    title: 'Android Development',
    slug: 'android-development',
    category: 'App Development',
    shortDescription: 'Build native modern Android apps using Kotlin, Jetpack Compose, Coroutines, and Room DB.',
    description: 'Learn modern native Android engineering. Master the Kotlin language, Jetpack Compose declarative UI, MVVM architecture, Coroutines & Flow for asynchronous tasks, and Room database.',
    duration: '10 Weeks',
    fee: 3499,
    originalFee: 7999,
    rating: 4.9,
    reviewCount: 390,
    studentsCount: 1750,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80',
    iconName: 'TabletSmartphone',
    badge: 'Native Android',
    whatYouWillLearn: [
      'Kotlin language fundamentals: null safety, data classes, extension functions',
      'Declarative UI with Android Jetpack Compose (Modifiers, State, LazyColumn)',
      'Modern Android Architecture (MVVM, ViewModel, StateFlow, LiveData)',
      'Asynchronous programming with Kotlin Coroutines and asynchronous Flows',
      'Local persistence with Room SQLite database and Repository pattern',
      'Networking with Retrofit, JSON parsing with Moshi, and Google Play Publishing'
    ],
    modules: [
      { title: 'Module 1: Kotlin Programming Masterclass', duration: '2.5 Weeks', lessons: ['Kotlin syntax & idioms', 'Object-oriented Kotlin & companion objects', 'Higher-order functions & lambdas'] },
      { title: 'Module 2: Jetpack Compose Declarative UI', duration: '2.5 Weeks', lessons: ['Composable functions & recomposition', 'Scaffold, TopAppBar & Navigation Compose', 'Animations & custom themes (Material 3)'] },
      { title: 'Module 3: MVVM, Coroutines & Room Database', duration: '2.5 Weeks', lessons: ['Architecture components & ViewModel', 'Coroutines scopes & dispatchers', 'Room entities, DAOs, and migrations'] },
      { title: 'Module 4: Networking & Play Store Publishing', duration: '2.5 Weeks', lessons: ['Retrofit REST client setup', 'Dependency Injection with Hilt', 'App bundle generation & Google Play release'] }
    ],
    projects: ['Daily Habit & Streak Tracker with Room DB', 'News Reader with Offline Cache & Search', 'Expense Management App with Interactive Charts'],
    certificate: {
      title: 'Certified Native Android Kotlin Engineer',
      description: 'Validates mastery of Android Jetpack Compose, Kotlin Coroutines, MVVM design, and Play Store publishing standards.',
      skills: ['Kotlin', 'Jetpack Compose', 'MVVM Pattern', 'Room Database', 'Coroutines']
    },
    instructor: {
      name: 'Neha Kapoor',
      role: 'Lead Mobile Architect',
      company: 'RWS Mobile Labs',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },

  // OTHER TECHNOLOGY COURSES (19 to 24)
  {
    id: 'other-19',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    category: 'Other Technology Courses',
    shortDescription: 'Master user research, wireframing, design systems, Figma prototyping, and usability testing.',
    description: 'Bridge aesthetics and user psychology. Learn end-to-end product design from user personas and journey mapping to high-fidelity Figma components, auto-layout, interactive prototypes, and design handoff.',
    duration: '6 Weeks',
    fee: 1999,
    originalFee: 4999,
    rating: 4.9,
    reviewCount: 540,
    studentsCount: 2800,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Figma',
    badge: 'High Demand',
    whatYouWillLearn: [
      'Design thinking methodology: Empathize, Define, Ideate, Prototype, Test',
      'User research techniques, competitor audits, and user personas',
      'Information architecture, site maps, and low-fidelity wireframing',
      'Advanced Figma: Auto-layout 5.0, components, variants, variables, and design tokens',
      'Micro-interactions, high-fidelity prototypes, and smart animations',
      'Developer handoff specs, design systems documentation, and case studies'
    ],
    modules: [
      { title: 'Module 1: UX Research & Product Strategy', duration: '1.5 Weeks', lessons: ['User interviews & surveys', 'Empathy mapping & user journeys', 'Heuristic evaluation & usability audits'] },
      { title: 'Module 2: Wireframing & Information Architecture', duration: '1.5 Weeks', lessons: ['Card sorting & sitemaps', 'Sketching & low-fidelity wireframes', 'Design accessibility (WCAG 2.2)'] },
      { title: 'Module 3: Visual Design & Figma Systems', duration: '1.5 Weeks', lessons: ['Typography, 8pt grid system & color theory', 'Figma Auto-layout & component variants', 'Design tokens & scalable libraries'] },
      { title: 'Module 4: Prototyping, Testing & Portfolio', duration: '1.5 Weeks', lessons: ['Interactive micro-prototypes', 'Usability testing sessions', 'Creating a standout Behance/Dribbble case study'] }
    ],
    projects: ['Fintech Banking Mobile App UI/UX Case Study', 'SaaS Analytics Dashboard Design System', 'E-Commerce Checkout Optimization Redesign'],
    certificate: {
      title: 'Certified Digital Product UI/UX Designer',
      description: 'Verifies proficiency in human-centered product research, Figma design systems, and interactive prototype delivery.',
      skills: ['Figma', 'UI/UX Design', 'Design Systems', 'User Research', 'Prototyping']
    },
    instructor: {
      name: 'Rohan Gupta',
      role: 'Design Technologist',
      company: 'RWS Studio',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'other-20',
    title: 'Git & GitHub',
    slug: 'git-github',
    category: 'Other Technology Courses',
    shortDescription: 'Master version control, Git branching strategies, pull requests, merge conflict resolution, and CI/CD.',
    description: 'Essential for every professional software developer. Master Git commands, branching models (GitFlow, trunk-based), rebase vs merge, stash, cherry-pick, and automated GitHub Actions workflows.',
    duration: '2 Weeks',
    fee: 799,
    originalFee: 1999,
    rating: 4.9,
    reviewCount: 410,
    studentsCount: 2500,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    iconName: 'GitBranch',
    badge: 'Essential Tool',
    whatYouWillLearn: [
      'Git architecture: working directory, staging area, local repo, and remotes',
      'Essential commands: commit, log, diff, status, push, pull, and fetch',
      'Branch management, branch policies, and resolving merge conflicts cleanly',
      'Advanced Git: git rebase -i, cherry-pick, stash, bisect, and reflog',
      'GitHub team collaboration: Pull Requests, code reviews, issues, and project boards',
      'GitHub Actions: Continuous Integration (CI) automated testing pipelines'
    ],
    modules: [
      { title: 'Module 1: Git Basics & Commit Architecture', duration: '0.5 Week', lessons: ['Installing & configuring Git', 'Initialising repositories & stage cycle', 'Inspecting commits & history diffs'] },
      { title: 'Module 2: Branching & Merge Conflicts', duration: '0.5 Week', lessons: ['Branch creation & switching', 'Fast-forward vs 3-way merges', 'Manual merge conflict resolution'] },
      { title: 'Module 3: Advanced History Manipulation', duration: '0.5 Week', lessons: ['Interactive rebase & squash', 'Git stash & cherry-pick', 'Recovering lost commits with reflog'] },
      { title: 'Module 4: GitHub Collaboration & CI Actions', duration: '0.5 Week', lessons: ['Pull request etiquette & reviews', 'Branch protection rules', 'Automated GitHub Actions lint/test workflows'] }
    ],
    projects: ['Multi-Branch Open Source Contribution Simulation', 'Automated CI/CD Pipeline with GitHub Actions', 'Git Merge Conflict Resolution Workshop'],
    certificate: {
      title: 'Certified Git & Version Control Specialist',
      description: 'Accredits fluency in distributed version control, Git branching workflows, and GitHub automated CI pipelines.',
      skills: ['Git CLI', 'GitHub Actions', 'Branching Strategies', 'Code Review', 'Conflict Resolution']
    },
    instructor: {
      name: 'Aditya Sharma',
      role: 'Principal Engineer',
      company: 'RWS Tech',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'other-21',
    title: 'SQL & Database',
    slug: 'sql-database',
    category: 'Other Technology Courses',
    shortDescription: 'Master relational database design, complex SQL joins, indexing, normalization, and transactions.',
    description: 'The foundation of data handling. Master PostgreSQL and MySQL, relational database modeling (1st, 2nd, 3rd Normal Forms), complex joins, subqueries, window functions, and ACID transactions.',
    duration: '5 Weeks',
    fee: 1499,
    originalFee: 3499,
    rating: 4.8,
    reviewCount: 360,
    studentsCount: 2200,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Database',
    whatYouWillLearn: [
      'Relational schema design, entity relationship diagrams (ERD), and normalization',
      'SQL DDL & DML: CREATE, ALTER, INSERT, UPDATE, DELETE, and constraints',
      'Advanced querying: INNER/LEFT/RIGHT/FULL JOINs, GROUP BY, and HAVING',
      'Window functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG) for analytics',
      'ACID transactions, isolation levels, row locks, and deadlock handling',
      'Indexing techniques (B-Tree, Hash, GIN) and EXPLAIN query plan optimization'
    ],
    modules: [
      { title: 'Module 1: Relational Modeling & Basic SQL', duration: '1 Week', lessons: ['Data modeling & ER diagrams', 'Primary keys, Foreign keys & constraints', 'Filtering with WHERE, LIKE, IN, BETWEEN'] },
      { title: 'Module 2: Aggregations & Joins', duration: '1.5 Weeks', lessons: ['Aggregate functions (COUNT, SUM, AVG)', 'GROUP BY & filtering with HAVING', 'Mastering all relational JOIN operations'] },
      { title: 'Module 3: Subqueries & Window Functions', duration: '1.5 Weeks', lessons: ['Correlated & scalar subqueries', 'Common Table Expressions (CTEs)', 'Analytics with Window functions'] },
      { title: 'Module 4: Transactions & Query Optimization', duration: '1 Week', lessons: ['ACID transactions & rollback', 'B-Tree indexes & EXPLAIN ANALYZE', 'Database migration best practices'] }
    ],
    projects: ['E-Commerce Relational Database Schema & Analytics Engine', 'Financial Ledger Transaction Pipeline with ACID Locks', 'SaaS Multi-Tenant Database Architecture'],
    certificate: {
      title: 'Certified Relational Database & SQL Specialist',
      description: 'Verifies proficiency in SQL querying, relational database normalization, index optimization, and transaction safety.',
      skills: ['SQL', 'PostgreSQL', 'Normalization', 'Window Functions', 'Query Optimization']
    },
    instructor: {
      name: 'Pooja Verma',
      role: 'Staff Frontend Engineer',
      company: 'Ex-Flipkart & RWS Mentor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'other-22',
    title: 'Cloud & Deployment',
    slug: 'cloud-deployment',
    category: 'Other Technology Courses',
    shortDescription: 'Learn Docker containers, AWS / Cloud Run deployment, CI/CD pipelines, and serverless hosting.',
    description: 'Ship code to production reliably. Master containerization with Docker, multi-stage builds, cloud architecture on AWS and Google Cloud Platform, domain & SSL configuration, and serverless monitoring.',
    duration: '6 Weeks',
    fee: 2499,
    originalFee: 5999,
    rating: 4.9,
    reviewCount: 390,
    studentsCount: 1950,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    iconName: 'Cloud',
    badge: 'High Value',
    whatYouWillLearn: [
      'Cloud computing models (IaaS, PaaS, SaaS, Serverless) and architecture concepts',
      'Docker containerization: Dockerfile, multi-stage builds, and Docker Compose',
      'Deploying web applications to AWS (EC2, S3, CloudFront) and Google Cloud Run',
      'Configuring custom domains, DNS records, and automated SSL/TLS certificates',
      'Automating deployments with GitHub Actions and webhook triggers',
      'Application monitoring, log aggregation, and error alerting with Sentry'
    ],
    modules: [
      { title: 'Module 1: Docker & Container Fundamentals', duration: '1.5 Weeks', lessons: ['Virtual machines vs Containers', 'Writing optimized Dockerfiles', 'Multi-container apps with Docker Compose'] },
      { title: 'Module 2: Cloud Infrastructure Foundations', duration: '1.5 Weeks', lessons: ['Cloud regions, VPCs, and subnets', 'Object storage (S3 / Cloud Storage)', 'Serverless compute & container services'] },
      { title: 'Module 3: CI/CD Pipeline Automation', duration: '1.5 Weeks', lessons: ['Building automated test & build workflows', 'Pushing to Docker Hub / Container Registry', 'Zero-downtime rolling deployments'] },
      { title: 'Module 4: Security, Domains & Monitoring', duration: '1.5 Weeks', lessons: ['DNS management & SSL certificates', 'Environment secrets security', 'Monitoring logs & performance metrics'] }
    ],
    projects: ['Containerized Full Stack App on Google Cloud Run', 'Automated GitHub Actions CI/CD Pipeline with Test Runners', 'High-Availability Static CDN on AWS CloudFront'],
    certificate: {
      title: 'Certified Cloud & DevOps Deployment Specialist',
      description: 'Certifies ability to package, automate, deploy, and monitor scalable web applications across cloud environments.',
      skills: ['Docker', 'Cloud Run', 'AWS', 'CI/CD', 'DNS & SSL']
    },
    instructor: {
      name: 'Kunal Deshmukh',
      role: 'Backend Architect',
      company: 'RWS Cloud Infrastructure',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'other-23',
    title: 'AI & Generative AI',
    slug: 'ai-generative-ai',
    category: 'Other Technology Courses',
    shortDescription: 'Master LLMs, prompt engineering, embeddings, RAG systems, and Gemini API integration.',
    description: 'The frontier of modern technology. Learn to build intelligent software using LLMs, prompt engineering frameworks, vector embeddings, Retrieval-Augmented Generation (RAG), and modern AI SDKs.',
    duration: '8 Weeks',
    fee: 3499,
    originalFee: 8999,
    rating: 4.9,
    reviewCount: 680,
    studentsCount: 3400,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sparkles',
    badge: 'Trending',
    whatYouWillLearn: [
      'Fundamentals of Large Language Models, tokenization, temperature, and context windows',
      'Advanced prompt engineering techniques: Few-shot, Chain-of-Thought, and system framing',
      'Working with modern AI SDKs: Google GenAI SDK and OpenAI APIs',
      'Vector embeddings, similarity search, and vector databases (Pinecone / Chroma)',
      'Building complete Retrieval-Augmented Generation (RAG) pipelines on private docs',
      'Function calling, autonomous AI agents, and multimodal image/audio processing'
    ],
    modules: [
      { title: 'Module 1: Generative AI & Prompt Engineering', duration: '2 Weeks', lessons: ['LLM mental model & architecture', 'Prompt patterns for structured JSON extraction', 'Guardrails & preventing prompt injection'] },
      { title: 'Module 2: AI SDK Integration', duration: '2 Weeks', lessons: ['Calling modern models programmatically', 'Streaming responses to the UI in real time', 'Multimodal analysis (text + images)'] },
      { title: 'Module 3: Embeddings & RAG Architecture', duration: '2 Weeks', lessons: ['Text chunking & vector math', 'Vector database queries', 'Building a question-answering system over PDFs'] },
      { title: 'Module 4: Autonomous Agents & Production', duration: '2 Weeks', lessons: ['Function calling & tools execution', 'Agent loops with memory', 'Deploying production AI web services'] }
    ],
    projects: ['Smart AI Document Knowledge Assistant (RAG)', 'Autonomous AI Web Research Agent with Tool Use', 'Multimodal AI Code Reviewer & Explainer'],
    certificate: {
      title: 'Certified Generative AI Application Engineer',
      description: 'Validates ability to design, build, and deploy production Generative AI applications, RAG pipelines, and agentic workflows.',
      skills: ['Generative AI', 'Prompt Engineering', 'RAG Pipelines', 'Vector Databases', 'AI Agent Architecture']
    },
    instructor: {
      name: 'Aditya Sharma',
      role: 'Principal Engineer',
      company: 'RWS Tech',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'other-24',
    title: 'Cyber Security',
    slug: 'cyber-security',
    category: 'Other Technology Courses',
    shortDescription: 'Master web security fundamentals, OWASP Top 10 vulnerabilities, ethical hacking, and network defense.',
    description: 'Protect digital applications against modern threats. Learn ethical hacking fundamentals, OWASP Top 10 web vulnerabilities (SQLi, XSS, CSRF, SSRF), network scanning with Nmap, cryptography, and defense.',
    duration: '8 Weeks',
    fee: 2999,
    originalFee: 7499,
    rating: 4.8,
    reviewCount: 470,
    studentsCount: 2150,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShieldCheck',
    badge: 'High Impact',
    whatYouWillLearn: [
      'Cybersecurity core concepts: Confidentiality, Integrity, Availability (CIA triad)',
      'Networking security: TCP/IP, OSI model, firewalls, and port scanning with Nmap',
      'OWASP Top 10 vulnerabilities: SQL Injection, Cross-Site Scripting (XSS), and Broken Auth',
      'Burp Suite proxy for intercepting and auditing web application traffic',
      'Applied cryptography: symmetric/asymmetric encryption, hashing, and TLS handshakes',
      'Defensive coding, security headers, rate limiting, and incident response fundamentals'
    ],
    modules: [
      { title: 'Module 1: Security Core & Network Recon', duration: '2 Weeks', lessons: ['Cyber threats & threat modeling', 'Network sniffing & Wireshark analysis', 'Port scanning & service enumeration with Nmap'] },
      { title: 'Module 2: OWASP Top 10 Web Vulnerabilities', duration: '2 Weeks', lessons: ['SQL Injection exploitation & parameterized fixes', 'Stored, Reflected & DOM XSS prevention', 'CSRF tokens & SameSite cookies'] },
      { title: 'Module 3: Authentication & Cryptography', duration: '2 Weeks', lessons: ['Password hashing algorithms (Argon2, bcrypt)', 'Symmetric (AES) vs Asymmetric (RSA/ECC) encryption', 'Digital certificates & PKI infrastructure'] },
      { title: 'Module 4: Defensive Engineering & Bug Bounty', duration: '2 Weeks', lessons: ['Security headers (CSP, HSTS, CORS)', 'Vulnerability disclosure & responsible reporting', 'Hands-on CTF (Capture The Flag) challenge'] }
    ],
    projects: ['Comprehensive Web Application Penetration Test Report', 'Secure Authentication Service with Defense-in-Depth', 'Automated Vulnerability Scanner Script in Python'],
    certificate: {
      title: 'Certified Cyber Security & Application Defense Specialist',
      description: 'Accredits skills in auditing web vulnerabilities, ethical hacking workflows, cryptography, and secure system defenses.',
      skills: ['OWASP Top 10', 'Penetration Testing', 'Applied Cryptography', 'Burp Suite', 'Web Defense']
    },
    instructor: {
      name: 'Sunil Rathore',
      role: 'Enterprise Architect',
      company: 'Ex-Cognizant & RWS Mentor',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  }
];

export const CATEGORIES = [
  'All',
  'Web Development',
  'Programming',
  'App Development',
  'Other Technology Courses'
] as const;
