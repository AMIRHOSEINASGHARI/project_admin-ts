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
  name?: string,
  setValue?: Dispatch<SetStateAction<string>>
) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push, replace } = useRouter();

  const handleSetQuery = (value: string) => {
    if (!!name?.trim()) {
      const params = new URLSearchParams(searchParams);

      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      let newRoute = `${pathname}?${params.toString()}`;
      push(newRoute);
    } else {
      return;
    }
  };

  const handleDeleteQuery = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (params?.has(value)) {
      params.delete(value);
    }

    let newRoute = `${pathname}?${params.toString()}`;

    if (params.size === 0) {
      newRoute = pathname;
    }

    replace(newRoute);
  };

  useEffect(() => {
    if (!!name?.trim()) {
      if (setValue) {
        const params = new URLSearchParams(searchParams);

        if (!params.has(name)) {
          setValue("");
        } else {
          setValue(searchParams.get(name)?.toString()!);
        }
      }
    } else {
      return;
    }
  });

  return {
    handleSetQuery,
    handleDeleteQuery,
    replace,
    push,
    pathname,
    searchParams,
  };
};
