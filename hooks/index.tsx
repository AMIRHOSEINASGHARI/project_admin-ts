"use client";

// react
import { Dispatch, SetStateAction, useEffect } from "react";
// next
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// react query
import { useQuery } from "@tanstack/react-query";
// services
import { fetchSession } from "@/services/queries";

export const useSession = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["session"],
    queryFn: fetchSession,
    retry: 1,
    // staleTime: 300,
    // cacheTime: 300,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export const useHandleSearchParams = (
  name: string,
  setValue?: Dispatch<SetStateAction<string>>
) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push, replace } = useRouter();

  const handleSetQuery = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    let newRoute = `${pathname}?${params.toString()}`;
    push(newRoute);
  };

  const handleDeleteQuery = () => {
    const params = new URLSearchParams(searchParams);

    if (params?.has(name)) {
      params.delete(name);
    }

    let newRoute = `${pathname}?${params.toString()}`;

    if (params.size === 0) {
      newRoute = pathname;
    }

    replace(newRoute);
  };

  useEffect(() => {
    if (setValue) {
      const params = new URLSearchParams(searchParams);

      if (!params.has(name)) {
        setValue("");
      } else {
        setValue(searchParams.get(name)?.toString()!);
      }
    }
  });

  return {
    handleSetQuery,
    handleDeleteQuery,
    searchParams,
  };
};
