// import { Mail, Phone, Github } from "lucide-react";

// export default function ContactSection() {
//   const contactInfo = [
//     {
//       icon: <Mail className="h-5 w-5" />,
//       label: "Email",
//       value: "ndiemasam@gmail.com",
//       link: "mailto:ndiemasam@gmail.com",
//     },
//     {
//       icon: <Phone className="h-5 w-5" />,
//       label: "Phone",
//       value: "+254707522004 / +254110300268",
//       link: "tel:+254707522004",
//     },
//     {
//       icon: <Github className="h-5 w-5" />,
//       label: "GitHub",
//       value: "Samkipz",
//       link: "https://github.com/Samkipz",
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-3">
//       <div className="bg-white/80 dark:bg-slate-900/60 rounded-xl p-6 shadow-sm">
//         <div className="mb-4 text-lg font-medium">
//           Let&#39;s build something amazing.
//         </div>
//         <div className="grid gap-3">
//           {contactInfo.map((info, index) => (
//             <div key={index} className="flex items-center gap-4">
//               <div className="text-muted-foreground">{info.icon}</div>
//               <div>
//                 <span className="text-sm font-medium">{info.label}:</span>{" "}
//                 {info.link ? (
//                   <a
//                     href={info.link}
//                     className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
//                   >
//                     {info.value}
//                   </a>
//                 ) : (
//                   <span className="text-sm text-muted-foreground">
//                     {info.value}
//                   </span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="animate-in fade-in-50 duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-sm bg-white dark:bg-gray-950">
          <h3 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-4">
            Contact Information
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Location
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kitale, Kenya
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Email
                </p>
                <a
                  href="mailto:ndiemasam@gmail.com"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  ndiemasam@gmail.com
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Phone
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  +254 XXX XXX XXX
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
              Availability
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Available for freelance projects, consulting, and full-time
              opportunities. Typically responds within 24 hours.
            </p>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-sm bg-white dark:bg-gray-950">
          <h3 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-4">
            Send a Message
          </h3>

          <form className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                className="border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Subject
              </label>
              <Input
                id="subject"
                placeholder="Message subject"
                className="border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={4}
                className="border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
