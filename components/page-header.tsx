import { ModeToggle } from "./mode-toggle";
import React from "react";
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
