import { CONFIG } from 'src/global-config';
import { DashboardLayout } from 'src/layouts/dashboard';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  if (CONFIG.auth.skip) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return (
    <>
      <SignedIn>
        <DashboardLayout>{children}</DashboardLayout>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
