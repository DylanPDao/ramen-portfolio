"use client";
import ScrollAnimation from "./scroll-animation";

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "JavaScript ES6+"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "RESTful APIs"],
  "Cloud & DevOps": ["AWS", "Docker", "Git/GitHub", "Agile/JIRA", "CI/CD", "Stripe"],
  "Languages & Tools": ["Python", "Figma", "Postman", "MySQL", "CloudFlare", "Digital Ocean"],
};

export default function About() {
  return (
    <section id="about" className="min-h-screen py-32 px-6 relative flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <ScrollAnimation animation="ghost-fade">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
            <span className="text-gradient">About Me</span>
          </h2>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8 flex flex-col justify-center">
            <ScrollAnimation animation="ghost-slide" delay={200}>
              <p className="text-xl leading-relaxed text-purple-200/90">
                I&apos;m a passionate full-stack engineer with over 3 years of
                experience building modern web applications. Like Gengar emerging from shadows,
                I love creating elegant solutions that appear out of nowhere.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="ghost-slide" delay={400}> 
              <p className="text-xl leading-relaxed text-purple-200/90">
                My journey in tech started with curiosity about how things work
                on the web, and has evolved into a career focused on building
                scalable, user-centric applications that haunt users (in a good way).
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="ghost-slide" delay={600}>
              <p className="text-xl leading-relaxed text-purple-200/90">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open-source projects, or training ghost Pokémon.
              </p>
            </ScrollAnimation>
          </div>

          <div className="space-y-10">
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items], index) => (
                <ScrollAnimation 
                  key={category} 
                  animation="ghost-float-in" 
                  delay={300 + index * 150}
                >
                  <div className="space-y-4">
                    <h4 className="text-poison text-sm font-bold uppercase tracking-widest">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-shadow/30 text-purple-200 rounded-full text-sm 
                                   border border-gengar/30 hover:border-poison/60 hover:bg-gengar/20 
                                   transition-all hover:scale-105 transform cursor-default font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}