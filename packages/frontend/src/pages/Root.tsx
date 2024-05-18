import { Outlet } from "react-router-dom";
import { Header } from "../components";

export function Root() {
  return (
    <main className="grid grid-cols-[1fr] md:grid-cols-[320px,1fr] p-5">
        <Header />
        <Outlet />
    </main>
  )
}
