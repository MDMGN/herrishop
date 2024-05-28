
const dateFormat=(date:number | Date | undefined,locales:string | string[] | undefined,options: Intl.DateTimeFormatOptions | undefined={}):string=>{
    return new Intl.DateTimeFormat(locales, options).format(date)
}
//"Content-Type": "application/x-www-form-urlencoded"
const headersList = {
    "Content-Type": "application/json"
}

type PropsAjax={
    url:string,
    method:string,
    cbSuccess:(response:any)=>void,
    cbError: (error:any)=>void,
    data: any
}

const ajax=({ url, method, cbSuccess, cbError, data }: PropsAjax)=>{
    fetch(url, {
        method: method,
        body: data, // Convertir el objeto user qurystring
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
    ajax
}