import {useEffect, useReducer, useRef, useState} from 'react';
export const useLocalStorage = (key: string, defaultValue: any, callback: (v: unknown) => void | undefined) => {
  const initialValue = () => {
    const valueFromStorage = JSON.parse(
      window.localStorage.getItem(key) ||
      JSON.stringify(defaultValue)
    )
    if(callback) { callback(valueFromStorage); }
    return valueFromStorage
  }

  const [storage, updateStorage] = useState(initialValue)

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storage))
  }, [storage])

  return [storage, updateStorage]
}

export function useSetState(initialState: any) {
  return useReducer((state, action) => ({
    ...state,
    ...action
  }), initialState)
}

export function useSafeSetState(initialState:any) {
  const [state, setState] = useSetState(initialState);
  const mountedRef = useRef(false);
  useEffect(()=>{
    mountedRef.current = true;
    return () => {
      mountedRef.current = false
    }

  }, []);
  const safeSetState = (args: any) => mountedRef.current && setState(args)

  return [state, safeSetState]
}


export const usePrevious = (value: any, initialValue: any) => {
  const ref = useRef(initialValue)
  useEffect(() => {
    ref.current = value;
  })
  return ref.current;
}

