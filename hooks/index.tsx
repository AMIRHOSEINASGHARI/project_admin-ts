"use client";

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

export const useHandleSearchParams = (name: string, value: string) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push, replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  let newRoute = `${pathname}?${params.toString()}`;

  const handleSetQuery = () => {
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    push(newRoute);
  };

  const handleDeleteQuery = () => {
    if (params?.has(name)) {
      params.delete(name);
    }

    if (params.size === 0) {
      newRoute = pathname;
    }

    replace(newRoute);
  };

  return {
    handleSetQuery,
    handleDeleteQuery,
  };
};
