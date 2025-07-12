import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

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
                  Nairobi, Kenya
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
                  +254 707522004
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
              opportunities. <br />
            </p>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-sm bg-white dark:bg-gray-950">
          <h3 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-4">
            Send a Message
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
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
                value={form.name}
                onChange={handleChange}
                required
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
                value={form.email}
                onChange={handleChange}
                required
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
                value={form.subject}
                onChange={handleChange}
                required
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
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === "sending" && (
              <div className="text-blue-600 dark:text-blue-400 text-sm">
                Sending...
              </div>
            )}
            {status === "success" && (
              <div className="text-green-600 dark:text-green-400 text-sm">
                Message sent successfully!
              </div>
            )}
            {status === "error" && (
              <div className="text-red-600 dark:text-red-400 text-sm">
                {error || "Failed to send message."}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
