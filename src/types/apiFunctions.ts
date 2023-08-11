export type returnedApiFunctionData<DataType= unknown>  = {
    data? : DataType ,
    error? : unknown ,
    succuss  : boolean
}