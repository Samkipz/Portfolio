// import { Card, CardContent } from "../ui/card";

// export default function EducationSection() {
//   const education = [
//     {
//       degree: "BSc. Computer Science",
//       school: "University of Kabianga",
//       period: "2018–2022",
//     },
//     {
//       degree: "KCSE",
//       school: "Immaculate Conception Mukuyu Secondary School",
//       period: "2009–2013",
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-3">
//       {education.map((edu, index) => (
//         <Card key={index} className="rounded-md border bg-muted/40 p-0">
//           <CardContent>
//             <div className="bg-white/80 dark:bg-slate-900/60 rounded-xl p-6 shadow-sm">
//               <div className="font-semibold">
//                 {edu.degree}{" "}
//                 <span className="text-sm font-normal">
//                   | {edu.school} ({edu.period})
//                 </span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }


import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal} from "lucide-react"


export default function Education() {
  const education = [
    {
      title: "BSc Computer Science",
      institution: "University of Kabianga",
      period: "2018-2022",
      description:
        "Graduated with honors. Focused on software engineering, and database systems.",
    },
  ]

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Foundational understanding of AWS Cloud services, security, architecture, and pricing.",
    },
    {
      title: "Python Essentials 1 & 2",
      issuer: "Cisco Networking Academy",
      date: "2023",
      description: "Python programming fundamentals, data structures, and algorithms.",
    },
    {
      title: "UX Design & Agile Project Management",
      issuer: "Google/Coursera",
      date: "2023",
      description: "Comprehensive training in user experience design principles and practices.",
    },
  ]

  return (
    <div className="animate-in fade-in-50 duration-300">
      
      <div className="space-y-8">
        <div>
          <h3 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-4">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-sm bg-white dark:bg-gray-950 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{edu.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800"
                    >
                      {edu.period}
                    </Badge>                 
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-medium text-gray-900 dark:text-gray-100">Certifications</h3>
           
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 shadow-sm bg-white dark:bg-gray-950 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">{cert.title}</h4>
                  <Badge
                    variant="outline"
                    className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800"
                  >
                    {cert.date}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
