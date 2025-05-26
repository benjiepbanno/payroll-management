import { Badge } from "../ui/badge";

type Props = {
  title: string;
  value: string;
};

export default function EmployeeDetailsLineCard({ title, value }: Props) {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 font-medium">{title}</div>
      <div className="col-span-3">
        {value ? (
          <span>{value}</span>
        ) : (
          <Badge variant="destructive">not found</Badge>
        )}
      </div>
    </div>
  );
}
