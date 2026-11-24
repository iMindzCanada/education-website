import { test } from "@playwright/test";

/**
 * TODO: this suite needs a real (or test-project) Supabase instance with a
 * seeded test account — VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not
 * configured in this environment, so these are stubbed rather than faked.
 * Fill in once the test project's credentials are available:
 *   - sign up (OTP) -> member home
 *   - sign in -> member home
 *   - sign out -> redirected to public home
 */
test.describe.skip("auth flow (pending Supabase test project)", () => {
  test("new user can sign up and lands on member home", async () => {
    // TODO
  });

  test("existing user can sign in and lands on member home", async () => {
    // TODO
  });

  test("signed-in user can sign out", async () => {
    // TODO
  });
});
