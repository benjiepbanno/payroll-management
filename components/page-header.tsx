import { ModeToggle } from "./mode-toggle";


type Props = {
  title: string;
}



export default function PageHeader({ title }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-4xl">{title}</div>

      <ModeToggle />
    </div>
  )
}