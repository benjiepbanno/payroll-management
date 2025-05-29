"use client";

import { useUserAuthorizationStore } from "@/store/user-authorization-store";
import ModuleCard from "./module-card";
import { modules } from "@/lib/modules";
import { Skeleton } from "./ui/skeleton";

export default function ModulesList() {
  const { user_authorization, is_loading, error } = useUserAuthorizationStore();

  if (is_loading) {
    return (
      <div className="flex flex-row gap-8">
        <Skeleton className="w-2xs h-[150px] rounded-xl" />
        <Skeleton className="w-2xs h-[150px] rounded-xl" />
        <Skeleton className="w-2xs h-[150px] rounded-xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[150px]">
        <span style={{ color: "red" }}>{error}</span>
      </div>
    );
  }

  const access = user_authorization.body;

  const accessibleModules = modules.filter(
    (module) => access[module.accessKey] === 1
  );

  if (accessibleModules.length === 0) {
    return (
      <div className="flex justify-center items-center h-[150px]">
        <span className="text-center text-gray-500">
          You do not have access to any modules.
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-8">
      {accessibleModules.map((module) => (
        <ModuleCard
          key={module.title}
          title={module.title}
          description={module.description}
          href={module.href}
        />
      ))}
    </div>
  );
}
