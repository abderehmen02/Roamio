"use client"

import { useTranslation } from "@/app/i18n/client"
import { genderType } from "@/types/errors/auth"
import { signUpDataType } from "@/utils/validators/auth"
import { InputLabel , MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { UseFormSetValue } from "react-hook-form"

enum genderClientValues {
  select = "SELECT"
}
type genderPickerValues = genderType | genderClientValues

export const GenderSelector   : React.FC<{setValue  : UseFormSetValue<signUpDataType>}> = ({setValue})=>{
    const [gender , setGender] = useState<genderPickerValues >(genderClientValues.select)
    const {t}  =  useTranslation()

    const handleChange = (event: SelectChangeEvent) => {
        setValue("gender" , event.target.value as genderType ) ;
        setGender(event.target.value as genderType)
      };



    return <div>
    <InputLabel id="gender-selector-label">{t("gender.title")}</InputLabel>
    <Select
      labelId="gender-selector"
      id="gender-selector"
      value={gender}
      label="Age"
      onChange={handleChange}
    >
      <MenuItem value={genderClientValues.select}  >{t("gender.select")}</MenuItem>
      <MenuItem value={genderType.male}>{t("gender.male")}</MenuItem>
      <MenuItem value={genderType.female}>{t("gender.female")}</MenuItem>
      <MenuItem value={genderType.unknown}  >{t("gender.noAnswer")}</MenuItem>
    </Select>
    </div>}