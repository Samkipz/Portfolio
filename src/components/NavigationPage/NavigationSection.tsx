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
    <>
      {tab === "profile" && <ProfileSection />}
      {tab === "projects" && <ProjectsSection />}
      {tab === "skills" && <SkillsSection />}
      {tab === "experience" && <ExperienceSection />}
      {tab === "education" && <EducationSection />}
      {tab === "contact" && <ContactSection />}
    </>
  );
}
