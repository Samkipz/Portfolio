import { Card, CardContent } from "../ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "AI Automation Developer",
      company: "Freelancer",
      period: "2025 – Present",
      description: [
        "Developed AI tools for business workflows, voice assistants, and content automation.",
        "Built full-stack web systems and internal tools using React, Django, and APIs.",
      ],
    },
    {
      title: "Software Developer",
      company: "Research Solutions Network",
      period: "May–Nov 2023",
      description: [
        "Customized & deployed management systems for hospitals and colleges.",
        "Provided tech support, user training, and legacy code modernization.",
      ],
    },
    {
      title: "Digital Talent Intern",
      company: "ICT Authority",
      period: "2023–2024",
      description: [
        "Managed IT assets and support operations across 4+ remote sites.",
        "Ensured secure network uptime and resolved support tickets via Citrix.",
      ],
    },
    {
      title: "Frontend Intern",
      company: "Cytonn Investments",
      period: "2022–2023",
      description: [
        "Developed modern web apps using Vue, React, Laravel.",
        "Deployed projects on DigitalOcean with Nginx & Apache configurations.",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {experiences.map((exp, index) => (
        <Card key={index} className="rounded-md border bg-muted/40 p-0">
          <CardContent>
            <div className="bg-white/80 dark:bg-slate-900/60 rounded-xl p-6 shadow-sm">
              <div className="font-semibold">
                {exp.title}{" "}
                <span className="text-sm font-normal">
                  | {exp.company} ({exp.period})
                </span>
              </div>
              <ul className="list-disc list-inside text-sm mt-1">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
