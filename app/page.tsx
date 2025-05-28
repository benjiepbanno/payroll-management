import ModulesList from "@/components/modules-list";

export default function Home() {
  

  return (
    <div className="justify-items-center content-center h-svh space-y-16">
      <div className="text-2xl">
        Welcome to <span className="font-bold">Payroll Management</span>
      </div>

      <ModulesList />
    </div>
  );
}
