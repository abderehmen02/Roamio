import {parse , isBefore } from 'date-fns'


export const validBirthDate  =  (birthDate  : string) : boolean=>{
    const parsedBirthDate = parse(birthDate, 'MM/dd/yyyy', new Date())
    const parsedMinimumBirthDate = parse('02/11/2014', 'MM/dd/yyyy', new Date())
    return isBefore(parsedBirthDate , parsedMinimumBirthDate)
}