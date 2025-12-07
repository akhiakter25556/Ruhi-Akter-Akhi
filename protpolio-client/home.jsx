import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

// This single-file React app is intended to be used as `src/App.jsx` in a Vite/CRA project
// Tailwind CSS classes are used throughout. Replace placeholders (name, photo, links, resume file)
// with your real information before deploying.

const PROFILE = {
  name: "Your Name",
  designation: "Frontend Developer",
  photo: "/profile.jpg", // put your profile photo at public/profile.jpg or change the path
  resume: "/resume.pdf", // put your resume at public/resume.pdf or change
  email: "you@example.com",
  phone: "+8801XXXXXXXXX",
  whatsapp: "+8801XXXXXXXXX",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username",
    twitter: "https://twitter.com/your-username",
    facebook: "https://facebook.com/your-username"
  }
};

const PROJECTS = [
  {
    id: "proj-1",
    name: "Project One",
    image: "/projects/project1.png",
    stack: ["React", "Tailwind CSS", "Firebase"],
    description: "A short description of Project One. Shows what it does and why it's useful.",
    live: "https://example-live-1.com",
    github: "https://github.com/your-username/project-one",
    challenges: "Integrating auth and realtime data was challenging; optimized queries to reduce reads.",
    improvements: "Add tests, improve accessibility, add server-side rendering for SEO."
  },
  {
    id: "proj-2",
    name: "Project Two",
    image: "/projects/project2.png",
    stack: ["Next.js", "Prisma", "Postgres"],
    description: "An e-commerce style demo with search and cart features.",
    live: "https://example-live-2.com",
    github: "https://github.com/your-username/project-two",
    challenges: "Payment integration and webhook reliability.",
    improvements: "Polish mobile UX and add advanced filtering."
  },
  {
    id: "proj-3",
    name: "Project Three",
    image: "/projects/project3.png",
    stack: ["Vue", "Node.js", "MongoDB"],
    description: "A small social app for sharing short posts and images.",
    live: "https://example-live-3.com",
    github: "https://github.com/your-username/project-three",
    challenges: "Scaling image uploads and CDN caching.",
    improvements: "Add image optimization and offline support."
  }
];

function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={PROFILE.photo} alt="profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold">{PROFILE.name}</div>
                <div className="text-xs text-slate-600">{PROFILE.designation}</div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link to="#about" className="hover:text-pink-500">About</Link>
            <Link to="#skills" className="hover:text-pink-500">Skills</Link>
            <Link to="/projects" className="hover:text-pink-500">Projects</Link>
            <Link to="#contact" className="hover:text-pink-500">Contact</Link>
            <a href={PROFILE.resume} download className="px-4 py-2 bg-pink-500 text-white rounded-md shadow">Resume</a>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      {open && (
        <div className="absolute right-4 top-16 bg-white rounded-md p-4 shadow-lg w-48">
          <a href="#about" className="block py-2">About</a>
          <a href="#skills" className="block py-2">Skills</a>
          <Link to="/projects" className="block py-2">Projects</Link>
          <a href="#contact" className="block py-2">Contact</a>
          <a href={PROFILE.resume} download className="block mt-2 px-3 py-2 bg-pink-500 text-white rounded">Resume</a>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <header className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Hi — I'm {PROFILE.name}.</h1>
          <p className="text-slate-700 mb-6">
            {PROFILE.designation} with a focus on building accessible, fast, and delightful user interfaces.
            I build real-world applications and enjoy learning new technologies.
          </p>

          <div className="flex items-center gap-4">
            <a href={PROFILE.resume} download className="px-5 py-3 bg-pink-500 text-white rounded-md shadow">Download Resume</a>

            <div className="flex items-center gap-3">
              <a href={PROFILE.socials.github} aria-label="GitHub" className="hover:opacity-80">GitHub</a>
              <a href={PROFILE.socials.linkedin} aria-label="LinkedIn" className="hover:opacity-80">LinkedIn</a>
              <a href={PROFILE.socials.twitter} aria-label="Twitter" className="hover:opacity-80">Twitter</a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl">
            <img src={PROFILE.photo} alt="profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 prose">
          <p>
            I started my programming journey learning HTML and CSS. Over time I moved into JavaScript and modern frameworks like React and Next.js. I enjoy building user-focused interfaces, solving UI problems, and optimizing performance.
          </p>
          <p>
            The type of work I enjoy includes component-driven frontend engineering, accessibility-focused design, and small-to-medium full-stack applications where I can take a feature from concept to production.
          </p>
          <p>
            Outside programming I enjoy photography, playing football, and sketching — these hobbies keep my creative side active and help me think visually when designing interfaces.
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Quick Facts</h3>
          <ul className="text-sm space-y-2">
            <li><strong>Location:</strong> Dhaka, Bangladesh</li>
            <li><strong>Available for:</strong> Freelance / Full-time</li>
            <li><strong>Preferred stack:</strong> React, Next.js, Node.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const frontend = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  const backend = ["Node.js", "Express", "MongoDB", "Postgres"];
  const tools = ["Git", "Vercel", "Netlify", "Docker"];

  const renderSkillBar = (skill, idx) => {
    // sample percentage for visual - you can change
    const pct = Math.min(90, 60 + idx * 6);
    return (
      <div key={skill} className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span>{skill}</span>
          <span>{pct}%</span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full">
          <div className="h-2 rounded-full bg-pink-400" style={{ width: `${pct}%` }} />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Frontend</h3>
          {frontend.map(renderSkillBar)}
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Backend</h3>
          {backend.map(renderSkillBar)}
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Tools</h3>
          {tools.map(renderSkillBar)}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold">B.Sc. in Computer Science (example)</h3>
        <p className="text-sm text-slate-600">University Name — 2018 - 2022</p>
        <p className="mt-3">Course highlights: Data Structures, Databases, Web Development, Algorithms.</p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Frontend Developer — Example Co.</h3>
          <p className="text-sm text-slate-600">Jan 2023 - Present</p>
          <ul className="mt-2 list-disc pl-5">
            <li>Built and shipped customer-facing dashboards using React and Tailwind.</li>
            <li>Improved performance by 30% by optimizing bundle splits and lazy-loading heavy components.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectsList() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Link to="/projects" className="text-sm text-slate-600">See all projects</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <div key={p.id} className="bg-white rounded shadow overflow-hidden">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-slate-600 mb-4">{p.description}</p>
              <div className="flex items-center justify-between">
                <Link to={`/projects/${p.id}`} className="px-3 py-2 border rounded">View Details</Link>
                <a href={p.live} target="_blank" rel="noreferrer" className="text-sm">Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">All Projects</h2>
        <button onClick={() => navigate(-1)} className="text-sm text-slate-600">Back</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <div key={p.id} className="bg-white rounded shadow overflow-hidden">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-slate-600 mb-4">{p.description}</p>
              <div className="flex items-center gap-3">
                <Link to={`/projects/${p.id}`} className="px-3 py-2 border rounded">View Details</Link>
                <a href={p.github} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded">GitHub</a>
                <a href={p.live} target="_blank" rel="noreferrer" className="px-3 py-2 bg-pink-500 text-white rounded">Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const p = PROJECTS.find((x) => x.id === id);
  const navigate = useNavigate();

  if (!p) return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <p>Project not found.</p>
      <button onClick={() => navigate(-1)} className="mt-3 px-3 py-2 border rounded">Go Back</button>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-6">
        <button onClick={() => navigate(-1)} className="text-sm text-slate-600">❮ Back</button>
      </div>

      <div className="bg-white rounded shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-2">{p.name}</h2>
            <p className="text-sm text-slate-600 mb-4">{p.description}</p>

            <div className="mb-4">
              <h3 className="font-semibold">Main stack</h3>
              <div className="flex items-center gap-2 mt-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 bg-slate-100 rounded">{s}</span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Challenges faced</h3>
              <p className="text-sm text-slate-600">{p.challenges}</p>
            </div>

            <div>
              <h3 className="font-semibold">Potential improvements</h3>
              <p className="text-sm text-slate-600">{p.improvements}</p>
            </div>

            <div className="mt-6 flex gap-3">
              <a href={p.live} target="_blank" rel="noreferrer" className="px-4 py-2 bg-pink-500 text-white rounded">Visit Live</a>
              <a href={p.github} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">GitHub (client)</a>
            </div>
          </div>

          <div className="flex justify-center items-start">
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <p className="mb-3">Want to work together or ask something? Reach out via email or phone.</p>
          <ul className="text-sm space-y-2">
            <li><strong>Email:</strong> <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
            <li><strong>Phone:</strong> <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a></li>
            <li><strong>WhatsApp:</strong> <a href={`https://wa.me/${PROFILE.whatsapp.replace(/\D/g, "")}`}>{PROFILE.whatsapp}</a></li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <a href={PROFILE.socials.github} className="text-sm">GitHub</a>
            <a href={PROFILE.socials.linkedin} className="text-sm">LinkedIn</a>
            <a href={PROFILE.socials.twitter} className="text-sm">Twitter</a>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just open mailto. Replace with API or Netlify forms if you want server handling.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(form.message + "\n\nContact email: " + form.email);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="text-sm">Name</label>
        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full mt-1 p-2 border rounded" />
      </div>
      <div>
        <label className="text-sm">Email</label>
        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full mt-1 p-2 border rounded" />
      </div>
      <div>
        <label className="text-sm">Message</label>
        <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full mt-1 p-2 border rounded h-28" />
      </div>
      <div>
        <button type="submit" className="px-4 py-2 bg-pink-500 text-white rounded">Send</button>
      </div>
    </form>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">© {new Date().getFullYear()} {PROFILE.name} — All rights reserved.</div>
        <div className="text-sm mt-2 md:mt-0">Built with React • Hosted on Your Host</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomeRoutes />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

function HomeRoutes() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <ProjectsList />
      <Contact />
    </main>
  );
}

// Instructions:
// 1. Put this file as src/App.jsx in a new React project (Vite or Create React App).
// 2. Install react-router-dom and set up TailwindCSS according to the Tailwind docs.
// 3. Place your profile photo at public/profile.jpg, resume at public/resume.pdf and project images under public/projects/.
// 4. Update PROFILE and PROJECTS constants with your real data.
// 5. Deploy to Vercel / Netlify and provide the live link in submissions.
