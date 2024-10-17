"use client";

// react query
import { useQuery } from "@tanstack/react-query";
// services
import { fetchSession } from "@/services/queries";

const useSession = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
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

export default useSession;
