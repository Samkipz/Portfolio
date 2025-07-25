import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Projects() {
  const projects = [
    {
      title: "Academic Assistance Platform",
      description:
        "Academic task marketplace with live chat, real-time updates, order tracking, and secure Stripe payments.",
      status: "Completed",
      technologies: [
        "Next.js",
        "Drizzle ORM",
        "Pusher",
        "Google Auth",
        "PostgreSQL",
      ],
      link: "https://v0-academic-landing-page.vercel.app/",
      github: "https://github.com/Samkipz/Lumo-academic",
      hasDownload: false,
      downloadLink: "",
    },
    {
      title: "Voice Assistant for Appointment Booking",
      description:
        "Intelligent voice assistant linked with GHL for scheduling and booking appointments with the aim of turning potential leads into clients.",
      status: "Completed",
      technologies: ["RetellAI", "Make.com", "GHL"],
      link: "https://make.com/",
      github: "#",
      hasDownload: true,
      downloadLink: "/downloads/GHL.zip",
    },
    {
      title: "Belle II Scientific Research Chatbot (RAG-powered)",
      description: "A domain-specific chatbot powered by Retrieval-Augmented Generation (RAG) to answer complex questions from Belle II physics publications. The system processes and embeds large corpora of documents, stores them in a scalable vector database (Pinecone), and retrieves relevant information in real-time to augment LLM responses",
      status: "Completed",
      technologies: ["Vector Database", "LLM (Inference)", "Embeddings", "RAG Architecture"],
      link: "https://sam-belle-ii-assistant.streamlit.app/",
      github: "https://github.com/Samkipz/Belle-II-Physics-Assistant",
      hasDownload: false,
      downloadLink: "/downloads/ai-content-pipeline.zip",
    },
    {
      title: "School Management System",
      description:
        "A multi-tenant school management system for local schools.To log in as superadmin demo mode, Use username:admin@hitechsms.co.ke, pass:admin123",
      status: "In Progress",
      technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "Shadcn UI"],
      link: "https://hi-tech-school-system-3yuz.vercel.app/superadmin",
      github: "https://github.com/JohnMutemi/Hi-Tech-school-system",
      hasDownload: false,
      downloadLink: "",
    },
  ];

  return (
    <div className="animate-in fade-in-50 duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-sm bg-white dark:bg-gray-950 animate-in fade-in-50  hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between mt-auto pt-2 border-t border-gray-100 dark:border-gray-800/50">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1 text-sm border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Code</span>
                  </a>
                </Button>
                {/* Dropdown for cards with download */}
                {project.hasDownload && project.downloadLink && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px]">
                      <DropdownMenuItem asChild>
                        <a href={project.downloadLink} download>
                          Download ZIP
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="gap-1 text-sm border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                asChild
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Demo</span>
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
