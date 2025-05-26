import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import HumanResourceCardContent from "./human-resource-card-content";

type Props = {
  description: string;
};

export default function HumanResourceCard({ description }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Human Resource</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <ScrollArea className="h-102">
        <HumanResourceCardContent />
      </ScrollArea>
    </Card>
  );
}
