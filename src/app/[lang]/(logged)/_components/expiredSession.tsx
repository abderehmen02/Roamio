"use client"


import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from '@/app/i18n/client';
import {useRouter} from 'next/navigation'







export const ExpiredSessionDialog : React.FC<{open : boolean , setOpen : React.Dispatch<React.SetStateAction<boolean>> }> = ({open  , setOpen})=>{

const {t} = useTranslation()
const router = useRouter()

    const navigateHome = () => {
        setOpen(false);
        router.push("/")
      };
    
      const navigateLogIn = () => {
        setOpen(false);
        router.push("/signIn")
      };
    
      return (
        <div>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
            {t("auth.jwtSessionExpiredTitle")}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              {t("auth.jwtSessionExpiredDescreption")}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={navigateLogIn} autoFocus>
                {t("login.title")}
              </Button>
              <Button onClick={navigateHome} autoFocus>
                {t("auth.goToHome")}
              </Button>
            </DialogActions>
          </Dialog>
        </div>)
}