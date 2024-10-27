import React from "react";

const App1 = React.lazy(() => import("app1/App"));
// const App2 = React.lazy(() => import("app2/App"));
const Button = React.lazy(() => import('app1/Button'));

function App() {
  return (
    <div>
      <h1>Container App</h1>
      <React.Suspense fallback="Loading App1...">
        <App1 />
      </React.Suspense>
      <React.Suspense fallback="Loading Button...">
        <Button /> 
      </React.Suspense>
    </div>
  );
}

export default App;
