"use client";

import { fetchSession } from "@/providers/queries";
// react query
import { useQuery } from "@tanstack/react-query";
// services

const useSession = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["session"],
    queryFn: fetchSession,
    retry: 1,
    staleTime: 1 * 60 * 60,
    cacheTime: 1 * 60 * 60,
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

export default useSession;
