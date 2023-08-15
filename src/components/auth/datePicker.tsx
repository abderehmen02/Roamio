"use client"


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTranslation } from '@/app/i18n/client';
import { InputLabel  , TextField } from '@mui/material';
import { UseFormSetValue } from 'react-hook-form';
import { signUpDataType } from '@/utils/validators/auth';
import { format } from 'date-fns';
import { P } from '@/ui/typography';
import { useRef } from 'react';



export const SignUpDatePicker : React.FC<{setValue  : UseFormSetValue<signUpDataType> , error?: string }>= ({setValue , error } )=>{
const {t} = useTranslation()
const handleDateChange = (value : any  ) => {
    if(!value) {
        return 
    }
    setValue("birthDate" , format(value?.$d as Date , 'MM/dd/yyyy')  )
        };

return <div>
<InputLabel>{t("signUp.birthDate")}</InputLabel>
<LocalizationProvider  dateAdapter={AdapterDayjs}>
<DatePicker
   onChange={handleDateChange} />
</LocalizationProvider>    
{error && <P className='text-red-500' >{error}</P>}
</div>
}
