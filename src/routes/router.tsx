import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "../components/layout/PublicLayout";
import { HomePage } from "./public/HomePage";
import { MeetJarvisPage } from "./public/MeetJarvisPage";
import { CurriculumPage } from "./public/CurriculumPage";
import { PricingPage } from "./public/PricingPage";
import { MemberHomePage } from "./member/MemberHomePage";
import { MathStartPage } from "./subject/MathStartPage";
import { ScienceComingSoonPage } from "./subject/ScienceComingSoonPage";
import { PlaceholderPage } from "./PlaceholderPage";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [{ path: "/pricing", element: <PricingPage /> }],
  },
  // 7A frozen pages: screenshots already contain the full page (nav +
  // footer baked in from the original site), so these render standalone,
  // not inside PublicLayout — see each page component's note.
  { path: "/", element: <HomePage /> },
  { path: "/jarvis", element: <MeetJarvisPage /> },
  { path: "/curriculum", element: <CurriculumPage /> },

  { path: "/about", element: <PlaceholderPage title="About" /> },
  { path: "/math", element: <MathStartPage /> },
  { path: "/science", element: <ScienceComingSoonPage /> },
  { path: "/member", element: <MemberHomePage /> },
  { path: "/terms", element: <PlaceholderPage title="Terms" /> },
  { path: "/privacy", element: <PlaceholderPage title="Privacy" /> },
]);
