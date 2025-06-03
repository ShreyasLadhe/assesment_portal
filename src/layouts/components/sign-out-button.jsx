'use client';

import { useCallback } from 'react';

import Button from '@mui/material/Button';

import { useClerk } from '@clerk/nextjs';

// ----------------------------------------------------------------------

export function SignOutButton({ onClose, sx, ...other }) {
  const { signOut } = useClerk();

  const handleLogout = useCallback(async () => {
    try {
      onClose?.();
      await signOut({ redirectUrl: '/auth/jwt/sign-in' });
    } catch (error) {
      console.error(error);
    }
  }, [onClose, signOut]);

  return (
    <Button
      fullWidth
      variant="soft"
      size="large"
      color="error"
      onClick={handleLogout}
      sx={sx}
      {...other}
    >
      Logout
    </Button>
  );
}
