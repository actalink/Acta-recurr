import { useCallback, useEffect, useState, DependencyList } from "react";

export default function useAsync<Type>(
  callback: (...args: any) => Promise<Type>,
  dependencies: DependencyList = []
) {
  type StateType = {
    loading: "idle" | "pending" | "success" | "error";
    error: string | undefined;
    value: Type | undefined;
  };
  const [state, setState] = useState<StateType>({
    loading: "idle",
    error: undefined,
    value: undefined,
  });

  const callbackMemoized = useCallback(() => {
    setState({ loading: "pending", error: undefined, value: undefined });
    callback()
      .then((data) => {
        setState({ loading: "success", error: undefined, value: data });
      })
      .catch((err) => {
        setState({ loading: "error", error: err.message, value: undefined });
      });
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return state;
}
