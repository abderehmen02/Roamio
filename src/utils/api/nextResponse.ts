

export const apiResponse = (  status : number ,  data? : Object  ) : Response =>{
    const dataSringfied = data &&  JSON.stringify(data)
    return new Response(dataSringfied , {status  })
}