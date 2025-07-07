import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <a href="#" className="block">
        <Card className="rounded-md">
          <CardHeader className="flex flex-col items-center">
            <span className="text-4xl">🎓</span>
            <CardTitle className="mt-2 text-nowrap">
              Academic Assistance Platform
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              An academic site for students to get help with their studies.
              Links students to tutors and provides a chatbot for quick
              questions.
            </CardDescription>
          </CardContent>
        </Card>
      </a>
      <a href="#" className="block">
        <Card className="rounded-lg">
          <CardHeader className="flex flex-col items-center">
            <span className="text-4xl">📞</span>
            <CardTitle className="mt-2 text-center">
              Voice Assistant for Booking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Built with RetellAI & Make.com. Automates appointment scheduling,
              integrates with Google Calendar and CRM tools.
            </CardDescription>
          </CardContent>
        </Card>
      </a>
      <a href="#" className="block">
        <Card className="rounded-lg">
          <CardHeader className="flex flex-col items-center">
            <span className="text-4xl">📹</span>
            <CardTitle className="mt-2 text-center">
              AI Content Workflow System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Low-code automation pipeline to generate, validate (SEO), approve,
              and publish content across YouTube, LinkedIn, and blogs.
            </CardDescription>
          </CardContent>
        </Card>
      </a>
      <a href="#" className="block">
        <Card className="rounded-lg">
          <CardHeader className="flex flex-col items-center">
            <span className="text-4xl">💼</span>
            <CardTitle className="mt-2 text-center">
              School Management System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              A school Management System for multi schools application providing
              different modules
            </CardDescription>
          </CardContent>
        </Card>
      </a>
      <a href="#" className="block">
        <Card className="rounded-lg">
          <CardHeader className="flex flex-col items-center">
            <span className="text-4xl">🏥</span>
            <CardTitle className="mt-2 text-center">
              Hospital & School Management System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Customized legacy systems for Marengoni College and Sisto Mazzoldi
              Hospital with offline-first deployments and remote support.
            </CardDescription>
          </CardContent>
        </Card>
      </a>
    </div>
  );
}
