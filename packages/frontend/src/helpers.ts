
const dateFormat=(date:number | Date | undefined,locales:string | string[] | undefined,options: Intl.DateTimeFormatOptions | undefined={}):string=>{
    return new Intl.DateTimeFormat(locales, options).format(date)
}

const headersList = {
    "Content-Type": "application/x-www-form-urlencoded"
}

type PropsAjax={
    url:string,
    method:string,
    cbSuccess:(response:any)=>void,
    cbError: (error:any)=>void,
    data?: any
}

const ajax=({ url, method, cbSuccess, cbError, data }: PropsAjax)=>{
    fetch(url, {
        method: method,
        body: data ? new URLSearchParams(data).toString() : null, // Convertir el objeto user qurystring
        headers: headersList
    })
    .then(response => response.json())
    .then(cbSuccess)
    .catch(cbError)
}

export {/* A */
    dateFormat,
    ajax
}