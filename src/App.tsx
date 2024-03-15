// react router dom
import { BrowserRouter } from "react-router-dom";

//component router page
import Router from "./Router/Router";

// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// options default react query
import defaultOptions from "./configs/reactQueryOptins";

function App() {
  const queryClient = new QueryClient({ defaultOptions });
  return (
    <QueryClientProvider client={queryClient}>
      <>
        {/* <BrowserRouter> */}
        <Router />
        {/* </BrowserRouter> */}
        <ReactQueryDevtools />
      </>
    </QueryClientProvider>
  );
}

export default App;
