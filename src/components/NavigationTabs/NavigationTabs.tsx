import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = [
  { value: "profile", label: "Profile" },
  { value: "projects", label: "Projects" },
  { value: "skills", label: "Skills" },
  { value: "experience", label: "Experience" },
  { value: "education", label: "Education" },
  { value: "contact", label: "Contact" },
];

export default function NavigationTabs({
  activeTab,
  onTabChange,
}: NavigationTabsProps) {
  return (
    <div className="w-full border-b mb-6">
      <Tabs value={activeTab} className="w-full" onValueChange={onTabChange}>
        <TabsList className="flex w-full overflow-x-auto gap-2 bg-transparent p-0 border-none">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
            >
              {tab.label}
            </TabsTrigger>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground focus:outline-none">
                More <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Documents</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TabsList>
      </Tabs>
    </div>
  );
}
