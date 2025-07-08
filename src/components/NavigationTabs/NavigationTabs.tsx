import { useRef, useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

import {
  User,
  Folder,
  Sparkles,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = [
  {
    value: "profile",
    label: "Profile",
    icon: <User className="w-4 h-4 mr-1" />,
  },
  {
    value: "projects",
    label: "Projects",
    icon: <Folder className="w-4 h-4 mr-1" />,
  },
  {
    value: "skills",
    label: "Skills",
    icon: <Sparkles className="w-4 h-4 mr-1" />,
  },
  {
    value: "experience",
    label: "Experience",
    icon: <Briefcase className="w-4 h-4 mr-1" />,
  },
  {
    value: "education",
    label: "Education",
    icon: <GraduationCap className="w-4 h-4 mr-1" />,
  },
  {
    value: "contact",
    label: "Contact",
    icon: <Mail className="w-4 h-4 mr-1" />,
  },
];

export default function NavigationTabs({
  activeTab,
  onTabChange,
}: NavigationTabsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(
    TABS.findIndex((tab) => tab.value === activeTab)
  );
  const [hoverStyle, setHoverStyle] = useState({});
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setActiveIndex(TABS.findIndex((tab) => tab.value === activeTab));
  }, [activeTab]);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeIndex, tabRefs, activeTab]);

  useEffect(() => {
    // On mount, set the underline to the active tab
    requestAnimationFrame(() => {
      const activeElement = tabRefs.current[activeIndex];
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full border-b mb-6 mt-4 relative">
      <Tabs value={activeTab} className="w-full" onValueChange={onTabChange}>
        <div className="-mx-2 sm:mx-0">
          <TabsList
            className="flex min-w-[600px] overflow-x-auto whitespace-nowrap gap-2 bg-transparent p-0 border-none relative sm:grid sm:grid-cols-5 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent min-h-[44px]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Hover Highlight */}
            <div
              className="absolute h-[36px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] bg-blue-100/60 dark:bg-blue-900/30 rounded-lg z-0"
              style={{
                ...hoverStyle,
                opacity: hoveredIndex !== null ? 1 : 0,
                pointerEvents: "none",
                top: 0,
              }}
            />
            {/* Active Underline */}
            <div
              className="absolute bottom-0 h-[4px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-10"
              style={{ ...activeStyle }}
            />
            {TABS.map((tab, idx) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                className="relative z-10 rounded-lg px-4 py-2 font-medium flex items-center gap-1 transition-colors duration-300 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-300 data-[state=active]:font-semibold bg-transparent focus-visible:ring-2 focus-visible:ring-blue-400"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {tab.icon}
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
}
