import React, {memo} from 'react';
import './css/login_regist.css';
import ProjectRoute from './ProjectRoutes';


function App() {
  console.log("App 렌더링");
  return (
    <div>
        <ProjectRoute />
        
    </div>
  );
}

export default memo(App);
