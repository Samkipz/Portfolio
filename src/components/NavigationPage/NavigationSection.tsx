import { Card, CardContent } from "../ui/card";
import ProfileSection from "../ProfileSection/ProfileSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import EducationSection from "../EducationSection/EducationSection";
import ContactSection from "../ContactSection/ContactSection";

interface NavigationSectionProps {
  tab?: string;
}

export default function NavigationSection({
  tab = "profile",
}: NavigationSectionProps) {
  return (
    <Card className="w-full max-w-5xl mx-auto rounded-md">
      <CardContent className="flex flex-col min-h-[200px]">
        {/* <div className="text-lg font-medium mb-2 w-full capitalize">
          {tab.replace(/([A-Z])/g, " $1")}
        </div> */}
        {tab === "profile" && <ProfileSection />}
        {tab === "projects" && <ProjectsSection />}
        {tab === "skills" && <SkillsSection />}
        {tab === "experience" && <ExperienceSection />}
        {tab === "education" && <EducationSection />}
        {tab === "contact" && <ContactSection />}
      </CardContent>
    </Card>
  );
}
