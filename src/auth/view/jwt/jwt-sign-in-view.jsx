'use client';

import Box from '@mui/material/Box';
import { SignIn } from '@clerk/nextjs';

// ----------------------------------------------------------------------

export function JwtSignInView() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
      <SignIn
        routing="hash"
        afterSignInUrl="/dashboard"
        appearance={{
          elements: {
            formButtonPrimary: {
              backgroundColor: '#1976d2',
              '&:hover': { backgroundColor: '#1565c0' }
            }
          }
        }}
      />
    </Box>
  );
}
