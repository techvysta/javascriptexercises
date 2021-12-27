import React from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { decrement, increment} from '../sandbox/testReducer';
import { openModal } from '../../app/common/modals/modalReducer';
import TestPlaceInput from './TestPlaceInput';

export default function Sandbox() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.test.data);
    const { loading } = useSelector( (state) => state.async );

 return (
   <>
     <h1>Testing 123</h1>
     <h3>The data is: {data} </h3>
      <Button 
      loading={loading}
      onClick={() => dispatch(increment(20))} 
      content='Increment' 
      color='green' />
      <Button 
      loading={loading}
      onClick={() => dispatch(decrement(10))} 
      content='Decrement' 
      color='red' />
      <Button 
      onClick={() => 
        dispatch(openModal({modalType: 'TestModal', modalProps: {data} }))
      } 
      content='Open Modal' 
      color='teal' />
     <div style={{marginTop: 15}}>
       < TestPlaceInput />
     </div>
   </>
 );
}