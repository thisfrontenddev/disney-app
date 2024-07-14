"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler } from "react";
import { useDebouncedCallback } from "use-debounce";

export type Props = { placeholder: string };
export default function Search({ placeholder }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.set("query", "");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const term = e.target.value;
    handleSearch(term);
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        className="my-4"
        type="search"
        name="search-character"
        placeholder={placeholder}
        onChange={handleSearchChange}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
