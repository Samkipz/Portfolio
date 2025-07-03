import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { ModeToggle } from "../ThemeProvider";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 w-full border-b pb-6 relative">
      <div className="absolute right-0 top-0">
        <ModeToggle />
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src="/samprofile.png" alt="Samuel Ndiema" />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl font-semibold">Samuel K Ndiema</h1>
            <Badge variant="secondary">Software Engineer</Badge>
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            I build full-stack, intelligent systems that automate workflows and
            boost efficiency.
          </div>
          <div className="flex flex-wrap gap-2 text-xs mt-2">
            {/* <span className="text-xs mt-1 flex items-center gap-1">
              <PhoneCallIcon className="h-4 w-4 text-black-600 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-blue-400 flex items-center gap-1">
                +254 (707) 522 004
              </span>
            </span>{" "} */}
            <span className="text-xs mt-1 flex items-center gap-1">
              <Mail className="h-4 w-4 text-black-600 dark:text-gray-400" />
              <a
                href="mailto:samkip@gmail.com"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                samkip@gmail.com <ExternalLink className="h-3 w-3" />
              </a>
            </span>
          </div>

          <div className="text-xs mt-1 flex items-center gap-1 flex-wrap">
            <span className="text-xs mt-1 flex items-center gap-1">
              <Linkedin className="h-4 w-4 text-black-600 dark:text-gray-400" />
              <a
                href="https://www.linkedin.com/in/samuel-ndiema-84b298228/"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Samuel Ndiema
              </a>
            </span>
            &nbsp;
            <span className="text-xs mt-1 flex items-center gap-1">
              <Github className="h-4 w-4 text-black-600 dark:text-gray-400" />
              <a
                href="https://github.com/Samkipz"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Samkipz
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
