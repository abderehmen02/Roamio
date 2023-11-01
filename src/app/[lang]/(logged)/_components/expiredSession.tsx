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
import { logout } from '@/functions/api/auth';
import { useDispatch } from 'react-redux';
import { ButtonsSizes, PrimaryBtn, SecondaryBtn } from '@/ui/buttons';







export const ExpiredSessionDialog : React.FC<{open : boolean , setOpen : React.Dispatch<React.SetStateAction<boolean>> }> = ({open  , setOpen})=>{
const {t} = useTranslation()
const router = useRouter()
const dispatch = useDispatch()
    const navigateHome = async () => {
      await logout(dispatch , router )
      setOpen(false);
      };
    
      const navigateLogIn = async  () => {
          await logout(dispatch , router, "/login")
          setOpen(false);
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
              <PrimaryBtn onClick={navigateLogIn} size={ButtonsSizes.medium} autoFocus>
                {t("login.title")}
              </PrimaryBtn>
              <SecondaryBtn size={ButtonsSizes.medium} onClick={navigateHome} autoFocus>
                {t("auth.goToHome")}
              </SecondaryBtn>
            </DialogActions>
          </Dialog>
        </div>)
}