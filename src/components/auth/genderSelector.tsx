"use client"

import { useTranslation } from "@/app/i18n/client"
import { genderType } from "@/types/errors/auth"
import { P } from "@/ui/typography"
import { signUpDataType } from "@/utils/validators/auth"
import { InputLabel , MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { UseFormSetValue } from "react-hook-form"

export enum genderClientValues {
  select = "SELECT"
}
export type genderPickerValues = genderType | genderClientValues

export const GenderSelector   : React.FC<{setValue  : UseFormSetValue<signUpDataType> , error?:string }> = ({setValue , error })=>{
    const [gender , setGender] = useState<genderPickerValues >(genderClientValues.select)
    const {t}  =  useTranslation()
    
    const handleChange = (event: SelectChangeEvent) => {
      if(event.target.value !== genderClientValues.select){
        setValue("gender" , event.target.value as genderType ) ;
        setGender(event.target.value as genderType) }
      };



    return <div>
    <InputLabel id="gender-selector-label">{t("gender.title")}</InputLabel>
    <Select
      labelId="gender-selector"
      id="gender-selector"
      value={gender}
      label="Age"
      required
      onChange={handleChange}
    >
      <MenuItem value={genderClientValues.select}  >{t("gender.select")}</MenuItem>
      <MenuItem value={genderType.male}>{t("gender.male")}</MenuItem>
      <MenuItem value={genderType.female}>{t("gender.female")}</MenuItem>
      <MenuItem value={genderType.unknown}  >{t("gender.noAnswer")}</MenuItem>
    </Select>
    {error && <P className="text-red-600" >{error}</P>}
    </div>}