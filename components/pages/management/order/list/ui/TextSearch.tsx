import { Input } from "@/components/ui/input";
import { useHandleSearchParams } from "@/hooks";
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

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
