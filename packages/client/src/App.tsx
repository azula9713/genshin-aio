import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Character from "./pages/Character/Character";
import Home from "./pages/Home/Home";
import { RecoilRoot } from "recoil";

export default function App() {
  const queryClient = new QueryClient();
  // Check for user preference and apply corresponding theme
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // 404 goes here
      errorElement: <div>Nope Home</div>,
    },
    {
      path: "/user",
      element: <div>User</div>,
    },
    {
      path: "character",
      // loader:
      children: [
        {
          path: ":characterName",
          element: <Character />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} fallbackElement={<div>Uh No</div>} />
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
