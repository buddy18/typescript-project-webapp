import React from 'react';
import {ConditionalButton,FlexBox} from './components/styles';
function App() {
  return (
  <div className={'flex'}>
 <FlexBox row justify="end" >
   <ConditionalButton isRed >
     Submit
   </ConditionalButton>
   </FlexBox>
   </div>
  );
}

export default App;
