import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing code that is scalable and maintainable",
    },

    {
        icon: Rocket,
        title: "Performance",
        description: "Optomized code that ensures efficiency and lighting fast user experiences",
    },

    {
        icon: Users,
        title: "Collaboration",
        description: "Working with teams to create and deploy unique ideas, apps and code",
    },

    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead with the latest technologies and best practices to ensure the highest quality of code",
    }

]
export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden" >
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm dont-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5l font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground ">Building the future,
                            <span className="font-serif italic font-normal text-white"> one component at a time!</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                {/* THIS IS WHERE MY BIO WILL GO */}
                                As a Fullstack Developer I am always looking to learn new skills and implement clean and efficient
                                code to create user-friendly applications. I am open and eager to work! Below is way to contact me through email or phone!
                            </p>

                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "To build high-quality, scalable applications with passion and precision,
                                delivering delightful experiences that foster growth."
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );

}