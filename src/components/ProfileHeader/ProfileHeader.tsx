import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { ExternalLink, Github, Linkedin, Mail, Download } from "lucide-react";
import { ModeToggle } from "../ThemeProvider";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-8 w-full border-b pb-8 relative glass shadow-md px-6 py-6 lg:sticky lg:top-0 lg:z-50 backdrop-blur-lg">
      <div className="absolute right-4 top-4 z-10">
        <ModeToggle />
      </div>
      <div className="flex items-center gap-6">
        <Avatar className="w-24 h-24 shadow-xl ring-4 ring-blue-200 dark:ring-blue-900">
          <AvatarImage src="/samprofile.png" alt="Samuel Ndiema" />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-sm">
              Samuel K Ndiema
            </h1>
            <Badge
              variant="secondary"
              className="accent-gradient px-3 py-1 text-base font-semibold shadow-md border-none"
            >
              Software Engineer
            </Badge>
          </div>
          <div className="text-lg text-muted-foreground mt-2 font-medium">
            I build full-stack, intelligent systems that automate workflows and
            boost efficiency.
          </div>
          <div className="flex flex-wrap gap-3 text-base mt-3">
            <span className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <a
                href="mailto:samkip@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-semibold"
              >
                ndiemasam@gmail.com <ExternalLink className="h-4 w-4" />
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 flex-wrap mt-2">
            <span className="flex items-center gap-2">
              <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <a
                href="https://www.linkedin.com/in/samuel-ndiema-84b298228/"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Samuel Ndiema
              </a>
            </span>
            <span className="flex items-center gap-2">
              <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <a
                href="https://github.com/Samkipz"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Samkipz
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
      {/* Download CV button at bottom right */}
      <a href="/downloads/SamuelNdiemaCV.pdf" download className="absolute bottom-4 right-6 z-10">
        <button
          type="button"
          className="h-7 gap-1 text-sm ml-auto border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border rounded-md px-3 flex items-center shadow-sm transition-colors"
        >
          <Download className="h-3.5 w-3.5 mr-1" />
          <span>Download CV</span>
        </button>
      </a>
    </div>
  );
}
