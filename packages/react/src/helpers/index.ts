/**
 * A read hook result.
 *
 * It's a discriminated union of the possible results of a read operation:
 * - Rely on the `loading` value to determine if the `data` or `error` can be evaluated.
 * - If `error` is `undefined`, then `data` value will be available.
 */
export type ReadResult<T, E = never> =
  | {
      data: undefined;
      error: undefined;
      loading: true;
    }
  | {
      data: T;
      error: undefined;
      loading: false;
    }
  | {
      data: undefined;
      error: E;
      loading: false;
    };

export const ReadResult = {
  Initial: <T, E = never>(): ReadResult<T, E> => ({
    data: undefined,
    error: undefined,
    loading: true,
  }),
};

/**
 * A read hook result that supports React Suspense
 */
export type SuspenseResult<T> = { data: T };