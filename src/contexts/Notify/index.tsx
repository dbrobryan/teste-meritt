import { useRef, useCallback } from 'react';

import { IconButton, Icon } from '@mui/material';
import { SnackbarProvider } from 'notistack';

interface NotifyProviderProps {
  children: React.ReactNode;
}

export function NotifyProvider({ children }: NotifyProviderProps): JSX.Element {
  const notistackRef = useRef<any>();

  const onClickDismiss = useCallback(
    (key: React.ReactText) => () => {
      if (notistackRef && notistackRef.current) {
        notistackRef.current.closeSnackbar(key);
      }
    },
    [],
  );

  return (
    <SnackbarProvider
      ref={notistackRef}
      preventDuplicate
      maxSnack={3}
      domRoot={document.querySelector<HTMLBodyElement>('body') ?? undefined}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      variant="success"
      hideIconVariant
      action={key => (
        <IconButton color="inherit" onClick={onClickDismiss(key)}>
          <Icon>close</Icon>
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
}