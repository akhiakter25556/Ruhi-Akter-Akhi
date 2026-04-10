import { FaUser, FaDownload, FaArrowRight } from 'react-icons/fa';
import { aboutData } from '../data/aboutData';
import { resumeData } from '../data/resumeData';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)] items-start">
          <div className="mx-auto w-full max-w-[360px]">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-900 overflow-hidden shadow-lg">
              <img
                src="/anime_style_akhi.png"
                alt="Cartoon illustration of Akhi Akter"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
                <FaUser className="text-blue-400" />
                About Me
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {aboutData.subtitle}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                {aboutData.summary}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-sm leading-6 text-slate-300">{aboutData.highlights[0]}</p>
              </div>
              <div className="rounded-3xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-sm leading-6 text-slate-300">{aboutData.highlights[1]}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold text-white">Career Highlights</h3>
                <div className="mt-4 space-y-3">
                  {aboutData.stats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl bg-slate-950/80 p-4">
                      <div className={`text-3xl font-semibold ${stat.accent}`}>{stat.value}</div>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold text-white">Quick Info</h3>
                <div className="mt-4 space-y-4 text-slate-300">
                  {aboutData.details.map((detail) => (
                    <div key={detail.label}>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{detail.label}</p>
                      <p className="mt-1 text-base text-white">{detail.value}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={resumeData.googleDriveResume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-blue-500 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20"
                >
                  <FaDownload />
                  View Full Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
