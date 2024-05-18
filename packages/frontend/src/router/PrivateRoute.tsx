import DashBoardRoute from "./DashBoardRoute";
import { DashBoardPage } from "../pages";

export default function PrivateRoute() {
  return (
          <DashBoardRoute>
            <DashBoardPage />
          </DashBoardRoute>
  )
}
