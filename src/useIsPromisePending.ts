import { useCallback, useMemo, useState } from "react";

// Useful for connecting the pending state of a promise to React lifecycle
// Abstracts away the pattern of `useState` hooks that manually set and unset a loading status
export const useIsPromisePending = () => {
  const [isPending, setIsPending] = useState(false);
  const observePromise = useCallback(
    <Result, Args extends any[]>(
      fn: (...args: Args) => Promise<Result> | Result,
    ) =>
      async (...args: Args) => {
        try {
          setIsPending(true);
          return await fn(...args);
        } finally {
          setIsPending(false);
        }
      },
    [setIsPending],
  );

  return useMemo(
    () => [isPending, observePromise] as const,
    [isPending, observePromise],
  );
};
