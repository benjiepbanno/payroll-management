import React from "react";
import { cn } from "@/lib/utils";
import { modules } from "@/lib/modules";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export default function ModulesNavigationMenu() {
  return (
    <NavigationMenu className="[&_div.absolute]:left-auto [&_div.absolute]:right-0">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Modules</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-2 w-[300px]">
              {modules.map((module) => (
                <ListItem
                  key={module.title}
                  title={module.title}
                  href={"/payroll-management" + module.href}
                >
                  {module.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="https://afmis.davaocity.gov.ph/">
            AFMIS
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
