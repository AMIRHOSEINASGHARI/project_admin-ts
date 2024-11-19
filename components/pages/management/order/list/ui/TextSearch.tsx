// react
import { useEffect, useState } from "react";
// hooks
import { useHandleSearchParams } from "@/hooks";
// debounce
import { useDebouncedCallback } from "use-debounce";
// cmp
import { Input } from "@/components/ui/input";

const TextSearch = () => {
  const { handleSetQuery, searchParams } = useHandleSearchParams("search");
  const [query, setQuery] = useState(
    searchParams.get("search")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback((term: string) => {
    handleSetQuery(term);
  }, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (!params.has("search")) {
      setQuery("");
    } else {
      setQuery(searchParams.get("search")?.toString()!);
    }
  }, [searchParams]);
  return (
    <Input
      placeholder="Search customer or order number..."
      value={query}
      onChange={(e) => {
        setQuery(() => e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
};

export default TextSearch;
