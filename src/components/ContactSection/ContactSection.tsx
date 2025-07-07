import { Mail, Phone, Github } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ndiemasam@gmail.com",
      link: "mailto:ndiemasam@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+254707522004 / +254110300268",
      link: "tel:+254707522004",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "Samkipz",
      link: "https://github.com/Samkipz",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white/80 dark:bg-slate-900/60 rounded-xl p-6 shadow-sm">
        <div className="mb-4 text-lg font-medium">
          Let&#39;s build something amazing.
        </div>
        <div className="grid gap-3">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="text-muted-foreground">{info.icon}</div>
              <div>
                <span className="text-sm font-medium">{info.label}:</span>{" "}
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {info.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
