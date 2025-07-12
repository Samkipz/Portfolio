// import { Card, CardContent } from "../ui/card";

// export default function ExperienceSection() {
//   const experiences = [
//     {
//       title: "AI Automation Developer",
//       company: "Freelancer",
//       period: "2025 – Present",
//       description: [
//         "Developed AI tools for business workflows, voice assistants, and content automation.",
//         "Built full-stack web systems and internal tools using React, Django, and APIs.",
//       ],
//     },
//     {
//       title: "Software Developer",
//       company: "Research Solutions Network",
//       period: "May–Nov 2023",
//       description: [
//         "Customized & deployed management systems for hospitals and colleges.",
//         "Provided tech support, user training, and legacy code modernization.",
//       ],
//     },
//     {
//       title: "Digital Talent Intern",
//       company: "ICT Authority",
//       period: "2023–2024",
//       description: [
//         "Managed IT assets and support operations across 4+ remote sites.",
//         "Ensured secure network uptime and resolved support tickets via Citrix.",
//       ],
//     },
//     {
//       title: "Frontend Intern",
//       company: "Cytonn Investments",
//       period: "2022–2023",
//       description: [
//         "Developed modern web apps using Vue, React, Laravel.",
//         "Deployed projects on DigitalOcean with Nginx & Apache configurations.",
//       ],
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-3">
//       {experiences.map((exp, index) => (
//         <Card key={index} className="rounded-md border bg-muted/40 p-0">
//           <CardContent>
//             <div className="bg-white/80 dark:bg-slate-900/60 rounded-xl p-6 shadow-sm">
//               <div className="font-semibold">
//                 {exp.title}{" "}
//                 <span className="text-sm font-normal">
//                   | {exp.company} ({exp.period})
//                 </span>
//               </div>
//               <ul className="list-disc list-inside text-sm mt-1">
//                 {exp.description.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }

import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      title: "AI Automation Developer",
      company: "Freelancer",
      period: "2025–Present",
      description:
        "Developing AI-powered automation solutions for businesses and individuals. Building custom integrations and workflows using Make.com, RetellAI, and other low-code tools.",
      skills: ["AI", "Automation", "Make.com", "RetellAI", "API Integration"],
    },
    {
      title: "Intern",
      company: "ICT Authority – Presidential Digital Talent Program",
      period: "2023–2024",
      description:
        "Managed IT assets and support operations across 4+ remote sites. Ensured secure network uptime and resolved support tickets via Citrix.",
      skills: ["Citrix Director", "System Development", "Mentorship"],
    },
    {
      title: "Software Developer",
      company: "Research Solutions Network",
      period: "2023",
      description:
        "Customized & deployed management systems for hospitals and colleges. Provided tech support, user training, and legacy code modernization.",
      skills: ["PHP", "Laravel", "PostgreSQL"],
    },
    {
      title: "Frontend Intern",
      company: "Cytonn Investments",
      period: "2022–2023",
      description:
        "Assisted in the development and maintenance of the company's web applications. Implemented responsive designs and improved user experience.",
      skills: ["HTML/CSS", "JavaScript", "React", "UI/UX", "Apache", "Nginx"],
    },
  ];

  return (
    <div className="animate-in fade-in-50 duration-300">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-sm bg-white dark:bg-gray-950 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.company}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800"
                >
                  {exp.period}
                </Badge>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
