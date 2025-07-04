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
          <CardContent className="py-3 px-4">
            <div className="font-semibold">
              {edu.degree}{" "}
              <span className="text-sm font-normal">
                | {edu.school} ({edu.period})
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
