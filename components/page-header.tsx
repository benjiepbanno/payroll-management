import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import React from "react";
import { modules } from "@/lib/modules";
import ModulesNavigationMenu from "./modules-navigation-menu";

type Props = {
  title: string;
};

export default function PageHeader({ title }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-4xl">{title}</div>

      <div className="flex flex-row gap-8">
        <ModulesNavigationMenu />
        <ModeToggle />
      </div>
    </div>
  );
}
