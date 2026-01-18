import { ArrowRight, ArrowUpRight, Instagram, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "../extracomponents/Button";
import { AnimatedBorderButton } from "../extracomponents/animatedBorderButton";

const skills = ["C++", "Java", "MongoDB", "Postman", "Bootstrap", "Tailwind CSS"];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/websiteBGImage.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-1">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Fullstack Engineer - React/JS Specialist
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">

              Hello and welcome to my personal webiste created using React+Vite! This website showcases my skills, projects and provides a way 
              to get in touch with me. I am a freelance developer that creates responsive and efficient projects that are specific to the customer's 
              specifications. The technologies I have worked with are listed below:  

                {/* Hey there! Welcome to my personal website. I am Parth Srivastava,
                a Fullstack Engineer who builds scalable and user-friendly web
                applications. I have experience with CSS/HTML, Node.js, React,
                MongoDB, Bootstrap and Tailwind. */}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                        Download CV
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow Me:</span>
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300 order-2">
            <div className="relative max-w-md mx-auto lg:mx-0 lg:justify-self-center lg:-translate-x-6">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/ProPic.jpg"
                  alt="Parth Srivastava"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                <div className="absolute bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3">
                  <div className="text-2xl font-bold text-primary">
                    Parth Srivastava
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Fullstack Developer
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 mt-10 animate-fade-in animation-delay-600 order-3">
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Technologies I have worked with:
            </p>

            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, idx) => (
                  <div key={`${skill}-${idx}`} className="flex-shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
