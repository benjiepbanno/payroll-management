import { ChevronRightCircle } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function AppCard({ title, description, href }: Props) {
  return (
    <Card className="flex flex-col justify-between w-2xs">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="">
        <Button size="sm" asChild>
          <Link href={href}>
          Proceed
            <ChevronRightCircle />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
