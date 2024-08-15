"use client";

// react
import { useState } from "react";

const useServerAction = (
  asyncAction: Function
): { loading: boolean; action: Function } => {
  // asyncAction => to calling server action
  // fnInput => the input of server action
  // afterAction => the action we want to be done after the server action is done

  const [loading, setLoading] = useState<boolean>(false);

  const action = async (fnInput: object) => {
    setLoading(() => true);
    const result = await asyncAction(fnInput);
    setLoading(() => false);

    return result;
  };

  return {
    loading,
    action,
  };
};

export default useServerAction;
