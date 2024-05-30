
const dateFormat=(date:number | Date | undefined,locales:string | string[] | undefined,options: Intl.DateTimeFormatOptions | undefined={}):string=>{
    return new Intl.DateTimeFormat(locales, options).format(date)
}

const convertDateToISO = (dateStr: string | undefined): string| void => {
    if(!dateStr) return
    // Check if the date is already in ISO format (YYYY-MM-DD)
    const isoFormat = /^\d{4}-\d{2}-\d{2}$/;
    if (isoFormat.test(dateStr)) {
        return dateStr;
    }

    // Convert from DD/MM/YYYY to YYYY-MM-DD
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month}-${day}`;
}
const headersList = {
    "Content-Type": "application/x-www-form-urlencoded"
    /* "Content-Type": "application/json" */
}

type PropsAjax={
    url:string,
    method:string,
    cbSuccess:(response:any)=>void,
    cbError: (error:any)=>void,
    data?: any
}

const ajax=({ url, method, cbSuccess, cbError, data }: PropsAjax)=>{
    console.log(JSON.stringify(data)+"\n\n")
    fetch(url, {
        method: method,
        body: new URLSearchParams(data).toString(), // Convertir el objeto user qurystring
        headers: headersList
    })
    .then(response => response.ok ? response.json() : response.json().then(json=>Promise.reject(json)))
    .then(cbSuccess)
    .catch(cbError)
}

export const debounce = <T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void => {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  

export {
    dateFormat,
    ajax,
    convertDateToISO
}