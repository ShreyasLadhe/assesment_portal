'use client';

import { SignUp } from '@clerk/nextjs';
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

export function JwtSignUpView() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <SignUp 
        routing="hash"
        appearance={{
          elements: {
            formButtonPrimary: {
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0'
              }
            }
          }
        }}
      />
    </Box>
  );
}
