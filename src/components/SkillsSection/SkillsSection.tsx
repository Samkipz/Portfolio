import { Card } from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import {
  Bot,
  Code,
  Sparkles,
  Server,
  FileJson,
  Workflow,
  Cpu,
  Webhook,
  AppWindow,
  Table,
  LayoutGrid,
  Braces,
  Zap,
  Palette,
} from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      category: "Web & Backend",
      items: [
        { name: "React.js", icon: <Code className="mb-2 h-8 w-8" /> },
        { name: "Next.js", icon: <Code className="mb-2 h-8 w-8" /> },
        { name: "Vue.js", icon: <Code className="mb-2 h-8 w-8" /> },
        { name: "Node.js", icon: <Server className="mb-2 h-8 w-8" /> },
        { name: "Django", icon: <Server className="mb-2 h-8 w-8" /> },
        { name: "Flask", icon: <Server className="mb-2 h-8 w-8" /> },
        { name: "PHP", icon: <Braces className="mb-2 h-8 w-8" /> },
        { name: "Laravel", icon: <Braces className="mb-2 h-8 w-8" /> },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", icon: <Server className="mb-2 h-8 w-8" /> },
        { name: "DigitalOcean", icon: <Server className="mb-2 h-8 w-8" /> },
        { name: "Nginx", icon: <Server className="mb-2 h-8 w-8" /> },
        { name: "Apache", icon: <Server className="mb-2 h-8 w-8" /> },
      ],
    },
    {
      category: "AI & Automation",
      items: [
        { name: "N8n", icon: <Workflow className="mb-2 h-8 w-8" /> },
        { name: "ElevenLabs", icon: <Bot className="mb-2 h-8 w-8" /> },
        { name: "Zapier", icon: <Zap className="mb-2 h-8 w-8" /> },
        { name: "Make.com", icon: <Workflow className="mb-2 h-8 w-8" /> },
        { name: "OpenRouter", icon: <Cpu className="mb-2 h-8 w-8" /> },
        { name: "Airtable", icon: <Table className="mb-2 h-8 w-8" /> },
        { name: "Go High Level", icon: <Bot className="mb-2 h-8 w-8" /> },
        { name: "RetellAI", icon: <Bot className="mb-2 h-8 w-8" /> },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git/GitHub", icon: <Braces className="mb-2 h-8 w-8" /> },
        { name: "Jira", icon: <LayoutGrid className="mb-2 h-8 w-8" /> },
        { name: "Trello", icon: <LayoutGrid className="mb-2 h-8 w-8" /> },
        { name: "Notion", icon: <FileJson className="mb-2 h-8 w-8" /> },
        {
          name: "Google Workspace",
          icon: <AppWindow className="mb-2 h-8 w-8" />,
        },
        {
          name: "Citrix Director",
          icon: <AppWindow className="mb-2 h-8 w-8" />,
        },
      ],
    },
    {
      category: "Other",
      items: [
        {
          name: "Prompt Engineering",
          icon: <Sparkles className="mb-2 h-8 w-8" />,
        },
        {
          name: "System Deployment",
          icon: <Server className="mb-2 h-8 w-8" />,
        },
        { name: "User Training", icon: <Palette className="mb-2 h-8 w-8" /> },
        { name: "API Integration", icon: <Webhook className="mb-2 h-8 w-8" /> },
        {
          name: "Business Process Automation",
          icon: <Workflow className="mb-2 h-8 w-8" />,
        },
      ],
    },
  ];

  const categoryStyles: Record<
    string,
    { icon: string; text: string; card?: string }
  > = {
    "Web & Backend": {
      icon: "text-primary group-hover:text-purple-500 transition-colors duration-300",
      text: "font-medium group-hover:text-purple-600 transition-colors duration-300",
    },
    "Cloud & DevOps": {
      icon: "text-primary group-hover:text-cyan-500 transition-colors duration-300",
      text: "font-medium group-hover:text-cyan-600 transition-colors duration-300",
    },
    "AI & Automation": {
      icon: "text-primary group-hover:text-pink-500 transition-colors duration-300",
      text: "font-medium group-hover:text-pink-600 transition-colors duration-300",
    },
    Tools: {
      icon: "text-primary group-hover:text-blue-500 transition-colors duration-300",
      text: "font-medium group-hover:text-blue-600 transition-colors duration-300",
      card: "hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-blue-300/10",
    },
    Other: {
      icon: "text-primary group-hover:text-emerald-500 transition-colors duration-300",
      text: "font-medium group-hover:text-emerald-600 transition-colors duration-300",
    },
  };

  return (
    <section id="skills" className="w-full relative overflow-hidden">
      <div className="absolute -bottom-40 right-40 w-80 h-80 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="mx-auto">
          <Tabs defaultValue={skills[0].category} className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-muted/80 backdrop-blur-sm">
              {skills.map((skillGroup) => (
                <TabsTrigger
                  key={skillGroup.category}
                  value={skillGroup.category}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-cyan-500/20 data-[state=active]:text-foreground transition-all duration-300"
                >
                  {skillGroup.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {skills.map((skillGroup) => (
              <TabsContent
                key={skillGroup.category}
                value={skillGroup.category}
                className="mt-6"
              >
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {skillGroup.items.map((skill) => (
                    <Card
                      key={skill.name}
                      className={`flex flex-col items-center justify-center p-4 text-center group hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-purple-500/5 hover:to-cyan-500/5 ${
                        categoryStyles[skillGroup.category]?.card || ""
                      }`}
                    >
                      <div
                        className={categoryStyles[skillGroup.category]?.icon}
                      >
                        {skill.icon}
                      </div>
                      <p className={categoryStyles[skillGroup.category]?.text}>
                        {skill.name}
                      </p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
