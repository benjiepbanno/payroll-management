import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import AccountingCardContent from "./accounting-card-content";

type Props = {
  description: string;
};

export default function AccountingCard({ description }: Props) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="text-xl">Accounting</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <ScrollArea className="h-102">
        <AccountingCardContent />
      </ScrollArea>

      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
