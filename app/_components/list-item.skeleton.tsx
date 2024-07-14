import { Skeleton } from "@/components/ui/skeleton";

export default function ListItemSkeleton() {
  return (
    <span className="block p-2">
      <li className="flex flex-row items-center gap-2">
        <Skeleton className="inline-block w-[30px] h-[30px] rounded-none" />
        <Skeleton className="inline-block w-[200px] h-[16px] rounded-none" />
      </li>
    </span>
  );
}
