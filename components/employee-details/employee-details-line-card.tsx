type Props = {
  title: string;
  value: string;
};

export default function EmployeeDetailsLineCard({ title, value }: Props) {
  return (
    <div className="grid grid-cols-2">
      <div>{title}</div>
      <div>{value}</div>
    </div>
  );
}
