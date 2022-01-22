import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncActionStart } from '../async/asyncReducer';

export default function useFirestoreCollection({query, data, deps}) {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(asyncActionStart());
      const unsubscribe = query(),
  })
}