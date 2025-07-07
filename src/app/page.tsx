"use client";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import NavigationTabs from "../components/NavigationTabs/NavigationTabs";

import { useState } from "react";
import NavigationSection from "../components/NavigationPage/NavigationSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-2 sm:px-8 py-8">
      <div className="w-full max-w-4xl">
        <ProfileHeader />
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <NavigationSection tab={activeTab} />
        {/* <BankingSection tab={activeTab} /> */}
      </div>
    </div>
  );
}
