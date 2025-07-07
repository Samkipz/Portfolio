import { Card, CardContent } from "../ui/card";

export default function EducationSection() {
  const education = [
    {
      degree: "BSc. Computer Science",
      school: "University of Kabianga",
      period: "2018–2022",
    },
    {
      degree: "KCSE",
      school: "Immaculate Conception Mukuyu Secondary School",
      period: "2009–2013",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {education.map((edu, index) => (
        <Card key={index} className="rounded-md border bg-muted/40 p-0">
          <CardContent>
            <div className="bg-white/80 dark:bg-slate-900/60 rounded-xl p-6 shadow-sm">
              <div className="font-semibold">
                {edu.degree}{" "}
                <span className="text-sm font-normal">
                  | {edu.school} ({edu.period})
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
