import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

export default function SkillsSection() {
  const skills = [
    {
      category: "Web & Backend",
      items: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Node.js",
        "Django",
        "Flask",
        "PHP",
        "Laravel",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "DigitalOcean", "Nginx", "Apache"],
    },
    {
      category: "AI & Automation",
      items: [
        "RetellAI",
        "ElevenLabs",
        "Zapier",
        "Make.com",
        "OpenRouter",
        "Airtable",
        "Go High Level",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git/GitHub",
        "Jira",
        "Trello",
        "Notion",
        "Google Workspace",
        "Citrix Director",
      ],
    },
    {
      category: "Other",
      items: [
        "Prompt Engineering",
        "System Deployment",
        "User Training",
        "API Integration",
        "Business Process Automation",
      ],
    },
  ];

  return (
    <Tabs defaultValue={skills[0].category} className="w-full">
      <TabsList className="mb-6">
        {skills.map((skillGroup) => (
          <TabsTrigger key={skillGroup.category} value={skillGroup.category}>
            {skillGroup.category}
          </TabsTrigger>
        ))}
      </TabsList>
      {skills.map((skillGroup) => (
        <TabsContent key={skillGroup.category} value={skillGroup.category}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillGroup.items.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center rounded-md border border-muted bg-muted/40 py-6 text-lg font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
