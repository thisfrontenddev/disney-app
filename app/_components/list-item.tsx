import Link from "next/link";

type Props = {
  id: number;
  imageUrl: string;
  name: string;
};
export function ListItem({ id, imageUrl, name }: Props) {
  return (
    <Link
      href={`/character/${id}`}
      className="block hover:bg-slate-100 p-2 rounded"
    >
      <li className="flex flex-row items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="object-cover w-[30px] h-[30px]"
          src={imageUrl}
          width={30}
          height={30}
          alt={name}
        />
        <span>{name}</span>
      </li>
    </Link>
  );
}
