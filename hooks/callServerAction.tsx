"use client";

// react
import { useState } from "react";

const useServerAction = (
  asyncAction: Function,
  fnInput: object
): {
  loading: boolean;
  fn: Function;
  data: { message: string; code: number } | null;
} => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);

  const fn = async () => {
    setLoading(() => true);
    const result = await asyncAction(fnInput);
    setLoading(() => false);

    setData(() => result);
  };

  return {
    loading,
    fn,
    data,
  };
};

export default useServerAction;
