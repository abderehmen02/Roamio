import {parse , isBefore, isAfter } from 'date-fns'


export const validBirthDate  =  (birthDate  : string) : boolean=>{
    const parsedBirthDate = parse(birthDate, 'MM/dd/yyyy', new Date())
    const parsedMinimumBirthDate = parse('01/01/1920', 'MM/dd/yyyy', new Date())

    return isAfter(parsedBirthDate , parsedMinimumBirthDate) && isBefore(parsedBirthDate , new Date()) }
