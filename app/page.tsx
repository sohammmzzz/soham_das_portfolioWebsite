"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowDown, ExternalLink, Github, Linkedin, Mail, Music } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ParticleBackground from "@/components/particle-background"
import SkillCard from "@/components/skill-card"
import TimelineItem from "@/components/timeline-item"

export default function Home() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <ParticleBackground />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            >
              Soham Das
            </motion.span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {["About", "Skills", "Experience", "Education", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <Link href="https://www.linkedin.com/in/soham-das/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitLab</span>
              </Button>
            </Link>
            <Link href="mailto:sohamdas1300@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="block">Hi, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Soham Das
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
                AI Engineer & Data Analyst
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="rounded-full">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="#about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link href="#about" className="flex flex-col items-center text-sm text-muted-foreground">
            <span className="mb-2">Scroll Down</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              AI Engineer with a strong foundation in Generative AI, RAG, and AI agentic workflows. Proficient in
              designing and deploying AI-powered applications using LLMs, LangChain, and cutting-edge frameworks. Adept
              at integrating AI models into enterprise ecosystems to enhance business intelligence and automation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-1">Name</h3>
                  <p className="text-muted-foreground">Soham Das</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">Nagpur, Maharashtra, IN</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">sohamdas1300@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 8335098451</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    AI & Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Data Analysis</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Music Production</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Multi-instrumentalist
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="#contact" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle>Extra-Curricular Activities</CardTitle>
                  <CardDescription>Beyond my professional work</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Music className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Music Producer</h4>
                      <p className="text-sm text-muted-foreground">
                        Multi-instrumentalist and music producer with expertise in recording and production using FL
                        Studio. Previously worked commercially in music before transitioning to AI and data science.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Music className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Music Club President</h4>
                      <p className="text-sm text-muted-foreground">
                        Spearheaded as the President of the Official Music Club at Sikkim Manipal Institute of
                        Technology, organizing multiple inter and intra-college music festivals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full">
                      <Music className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Original Music</h4>
                      <p className="text-sm text-muted-foreground">
                        Passionate about creating original music and exploring innovative production techniques.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              My technical toolkit spans AI engineering, data analysis, and software development, with specialized
              expertise in generative AI and agentic workflows.
            </p>
          </motion.div>

          <Tabs defaultValue="ai" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="ai">AI & ML</TabsTrigger>
              <TabsTrigger value="programming">Programming</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="databases">Databases</TabsTrigger>
            </TabsList>

            <TabsContent value="ai" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCard
                  title="Generative AI"
                  description="Expert in LLMs, prompt engineering, and generative AI applications"
                  level={95}
                />
                <SkillCard
                  title="RAG"
                  description="Retrieval Augmented Generation for enhanced AI responses"
                  level={90}
                />
                <SkillCard
                  title="AI Agentic Workflows"
                  description="Building autonomous AI agents for complex tasks"
                  level={85}
                />
                <SkillCard
                  title="Prompt Engineering"
                  description="Crafting effective prompts for optimal AI outputs"
                  level={95}
                />
                <SkillCard
                  title="Synthetic Data Generation"
                  description="Creating synthetic datasets for AI training"
                  level={80}
                />
                <SkillCard
                  title="Fine-Tuning"
                  description="Customizing pre-trained models for specific tasks"
                  level={85}
                />
              </div>
            </TabsContent>

            <TabsContent value="programming" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCard
                  title="Python"
                  description="Primary language for AI, data analysis, and backend development"
                  level={95}
                />
                <SkillCard title="JavaScript" description="Web development and interactive applications" level={85} />
                <SkillCard title="Java" description="Enterprise application development" level={75} />
                <SkillCard title="SQL" description="Database querying and management" level={90} />
                <SkillCard title="HTML" description="Web markup and structure" level={90} />
                <SkillCard title="CSS" description="Web styling and design" level={85} />
              </div>
            </TabsContent>

            <TabsContent value="frameworks" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCard title="LangChain" description="Building applications with language models" level={95} />
                <SkillCard title="Llama Index" description="Data framework for LLM applications" level={90} />
                <SkillCard title="AutoGen" description="Framework for building AI agents" level={85} />
                <SkillCard title="Crew AI" description="Multi-agent framework for complex tasks" level={80} />
                <SkillCard title="ReactJS" description="Frontend web development" level={85} />
                <SkillCard title="NodeJS" description="Backend JavaScript runtime" level={80} />
              </div>
            </TabsContent>

            <TabsContent value="databases" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCard title="PostgreSQL" description="Advanced relational database" level={90} />
                <SkillCard title="MySQL" description="Popular relational database" level={85} />
                <SkillCard title="Chroma" description="Vector database for AI applications" level={90} />
                <SkillCard title="Neo4j" description="Graph database for complex relationships" level={85} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              My professional journey in AI engineering and data analysis.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <TimelineItem
              title="Data Analyst"
              company="Solar Industries India Ltd"
              location="Nagpur, Maharashtra"
              period="October 2023 - Present"
              achievements={[
                {
                  title: "AI Agentic Applications",
                  description:
                    "Designed a LLM-powered application for real-time Root Cause Analysis in manufacturing plants using RAG frameworks, graph databases, Ollama, and deployed locally. Reduced downtime by 15% through faster identification and resolution of production bottlenecks.",
                },
                {
                  title: "Supply Chain Optimization with LLMs",
                  description:
                    "Developed an LLM-based application to dynamically adjust constraints for optimization or scheduling problems solved using Gurobi, enabling real-time insights into the monetary impact of disruptions or deviations.",
                },
                {
                  title: "Sales Analysis Data Bot",
                  description:
                    "Created a localized bot integrated with PostgreSQL to provide actionable insights into sales data, helping identify trends and outliers for improved decision-making. Improved sales forecasting accuracy by 25%, increasing revenue predictability and enabling proactive strategies.",
                },
                {
                  title: "Database Management",
                  description:
                    "Built and maintained vector stores (Chroma) and graph databases (Neo4j) for efficient knowledge retrieval and enhanced AI workflows. Decreased data retrieval time by 30%, boosting overall query efficiency for internal applications.",
                },
                {
                  title: "Sales Data Pipeline Implementation",
                  description:
                    "Spearheaded the creation of a robust sales-data pipeline, enhancing data processing efficiency and reliability. Developed an advanced data-cleaning script to preprocess raw sales data, ensuring data integrity and consistency. Automated the process with an AWS Lambda function triggered daily via AWS Event Bridge. Reduced manual data cleaning efforts by 80%, saving over 10 hours weekly for the analytics team.",
                },
                {
                  title: "Power BI Dashboard Development",
                  description:
                    "Designed and deployed interactive Power BI dashboards to visualize anomalies in sales data and other operational metrics, enabling data-driven decision-making across departments. Reduced decision-making time significantly with centralized and accessible data visualizations.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground">My academic background and qualifications.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Bachelor of Technology (Information Technology)</CardTitle>
                <CardDescription>Sikkim Manipal Institute of Technology, Majitar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">June 2018 - June 2022</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">CGPA: 8.17</span>
                </div>
                <p className="text-muted-foreground">
                  Completed a comprehensive program in Information Technology, focusing on programming, data structures,
                  algorithms, and software development. Participated in various technical events and led the college
                  music club.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:sohamdas1300@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sohamdas1300@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/soham-das/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      linkedin.com/in/soham-das
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitLab</h4>
                    <a
                      href="https://gitlab.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      gitlab.com
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-4">Location</h3>
                <p className="text-muted-foreground">Nagpur, Maharashtra, India</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          placeholder="Your Name"
                          className="w-full px-3 py-2 border rounded-md bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-3 py-2 border rounded-md bg-background"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        placeholder="Subject"
                        className="w-full px-3 py-2 border rounded-md bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your Message"
                        rows={5}
                        className="w-full px-3 py-2 border rounded-md bg-background resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Soham Das. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/soham-das/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitLab</span>
                </Button>
              </Link>
              <Link href="mailto:sohamdas1300@gmail.com">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Music className="h-5 w-5" />
                  <span className="sr-only">Music</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

