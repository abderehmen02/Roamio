"use client"

import { genderType } from "@/types/errors/auth"
import { InputLabel , MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"

export const GenderSelector = ()=>{
    const [gender , setGender] = useState<genderType>(genderType.male)

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as genderType);
      };



    return <div>
    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={gender}
      label="Age"
      onChange={handleChange}
    >
      <MenuItem value={genderType.male}>Male</MenuItem>
      <MenuItem value={genderType.female}>Female</MenuItem>
      <MenuItem value={genderType.unknown}  >Prefer not to answer</MenuItem>
    </Select>
    </div>}