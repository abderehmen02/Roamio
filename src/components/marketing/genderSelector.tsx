"use client"

import { genderType } from "@/types/errors/auth"
import { signUpDataType } from "@/utils/validators/auth"
import { InputLabel , MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { UseFormSetValue } from "react-hook-form"

export const GenderSelector   : React.FC<{setValue  : UseFormSetValue<signUpDataType>}> = ({setValue})=>{
    const [gender , setGender] = useState<genderType>(genderType.male)

    const handleChange = (event: SelectChangeEvent) => {
        setValue("gender" , event.target.value as genderType )
      };



    return <div>
    <InputLabel id="gender-selector-label">Gender</InputLabel>
    <Select
      labelId="gender-selector"
      id="gender-selector"
      value={gender}
      label="Age"
      onChange={handleChange}
    >
      <MenuItem value={genderType.male}>Male</MenuItem>
      <MenuItem value={genderType.female}>Female</MenuItem>
      <MenuItem value={genderType.unknown}  >Prefer not to answer</MenuItem>
    </Select>
    </div>}