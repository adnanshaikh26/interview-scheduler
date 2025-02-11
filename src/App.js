import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddInterview from "./pages/AddInterview";
import { ConfigProvider } from "antd";
import RootElement from "./pages/RootElement";
import Calendar from "./pages/Calendar";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/add-edit-interview", element: <AddInterview /> },
        { path: "/calendar", element: <Calendar /> },
      ],
    },
  ]);
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
