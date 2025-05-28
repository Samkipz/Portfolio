import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

interface BankingSectionProps {
  tab?: string;
}

export default function BankingSection({
  tab = "banking",
}: BankingSectionProps) {
  if (tab !== "banking") {
    return (
      <Card className="w-full max-w-5xl mx-auto mt-8 ">
        <CardContent className="flex flex-col min-h-[200px]">
          <div className="text-lg font-medium mb-2 w-full capitalize">
            {tab.replace(/([A-Z])/g, " $1")}
          </div>
          <div className="text-muted-foreground">
            This is a placeholder for the ppp{" "}
            {tab.replace(/([A-Z])/g, " $1").toLowerCase()} tab.
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardContent className="py-8 px-6 flex flex-col items-center">
        <div className="text-lg font-medium mb-2 w-full text-left">Banking</div>
        <div className="text-sm text-muted-foreground mb-8 w-full text-left">
          You are currently enrolled in paper check. If you wish to receive
          direct deposit instead, please add a bank account.
        </div>
        <div className="flex flex-col items-center justify-center mb-8 w-full">
          <div className="bg-muted rounded-md w-72 h-28 flex items-center justify-center mb-2">
            {/* Placeholder illustration */}
            <Image
              src="/bank-placeholder.svg"
              alt="Bank Illustration"
              width={180}
              height={60}
              className="opacity-60"
            />
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Add a bank account to enroll in direct deposit.
          </div>
        </div>
        <Button className="mt-2 px-6 py-2 text-base">Add Bank Account</Button>
      </CardContent>
    </Card>
  );
}
