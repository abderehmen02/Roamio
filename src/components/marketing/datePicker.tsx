"use client"


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PickerChangeHandlerContext } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types';
import { DateValidationError } from '@mui/x-date-pickers';
import { useTranslation } from '@/app/i18n/client';
import { InputLabel } from '@mui/material';
import { UseFormSetValue } from 'react-hook-form';
import { signUpDataType } from '@/utils/validators/auth';
import { format } from 'date-fns';




export const SignUpDatePicker : React.FC<{setValue  : UseFormSetValue<signUpDataType>}>= ({setValue } )=>{
const {t} = useTranslation()
const handleDateChange = (value : any  ) => {
    if(!value) {
        console.log("no value") ;
        return 
    }
    console.log("value" ,value?.$d )
    setValue("birthDate" , format(value?.$d as Date , 'MM/dd/yyyy')  )
        };

return <div>
<InputLabel>{t("signUp.birthDate")}</InputLabel>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker   onChange={handleDateChange} />
</LocalizationProvider>    
</div>
}
