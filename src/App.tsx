import React from 'react';
// import {ConditionalButton, FlexBox} from './components/styles';
import {Header,} from './components/Header';
import {Navbar} from './components/Nav';

function App() {
  return (
  
   <div className=" bg-white dark:bg-slate-900 min-h-screen font-inter ">
				<div className="max-w-5xl w-11/12 mx-auto">
					<Header />
					{/* <Services />
					<Works />
					<About />
					<Footer /> */}
				</div>
			</div>
   
  );
}

export default App;
