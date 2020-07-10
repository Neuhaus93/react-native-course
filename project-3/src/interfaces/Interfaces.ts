interface Reducer<T, R extends ActionProps> {
  (state: T, action: R): any;
}

interface Dispatch<T extends ActionProps> {
  (action: T): void;
}

interface ActionProps {
  readonly type: string;
  readonly payload?: any;
}

interface Action<T extends ActionProps> {
  (dispatch: Dispatch<T>): (
    arg1?: any,
    arg2?: any,
    arg3?: any,
    callback?: any
  ) => void;
}

export { Dispatch, Reducer, ActionProps, Action };
