import AppCard from "@/components/app-card";
import { modules } from "@/lib/modules";

export default function Home() {
  return (
    <div className="justify-items-center content-center h-svh space-y-16">
      <div className="text-2xl">
        Welcome to <span className="font-bold">Payroll Management</span>
      </div>

      <div className="flex flex-row gap-8">
        {modules.map((module) => (
          <AppCard
            key={module.title}
            title={module.title}
            description={module.description}
            href={module.href}
          />
        ))}
      </div>
    </div>
  );
}
