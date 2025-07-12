export default function ProfileSection() {
  return (
    <div className="animate-in fade-in-50 duration-300">
      <div className="space-y-6">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 shadow-sm bg-white dark:bg-gray-950 hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-2 mb-2">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                Professional Summary
              </h3>
              <hr className="my-2 border-gray-200 dark:border-gray-800" />
            </div>

            <div className="text-md text-gray-600 dark:text-gray-400 mb-3">
              Software developer with a strong interest in AI-driven automation
              and scalable web applications. I&apos;ve built solutions ranging
              from lightweight platforms to enterprise systems, using tools like
              React, Django, and cloud services. I also have hands-on experience
              developing AI agents (like voice assistants), automating
              workflows, and integrating low-code tools such as Make.com and N8n
              to streamline processes. What motivates me is solving real-world
              problems and contributing to meaningful, tech-forward teams.
              I&apos;m always eager to grow, collaborate, and bring value
              through thoughtful development and innovation.
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="bg-white/80 dark:bg-gray-950 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ">
    //   <p>
    //     Software developer with a strong interest in AI-driven automation and
    //     scalable web applications. I&apos;ve built solutions ranging from
    //     lightweight platforms to enterprise systems, using tools like React,
    //     Django, and cloud services.
    //   </p>
    //   <br />
    //   <p>
    //     I also have hands-on experience developing AI agents (like voice
    //     assistants), automating workflows, and integrating low-code tools such
    //     as Make.com and N8n to streamline processes.
    //   </p>
    //   <br />
    //   <p>
    //     What motivates me is solving real-world problems and contributing to
    //     meaningful, tech-forward teams. I&apos;m always eager to grow,
    //     collaborate, and bring value through thoughtful development and
    //     innovation.
    //   </p>
    // </div>
  );
}
