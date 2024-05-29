import { useState } from "react"
import { ajax, convertDateToISO } from "../helpers"
import { URL_REGISTER } from "../api/API_HERRISHOP"

const headersList = {
  "Content-Type": "application/x-www-form-urlencoded"
}

export default function useRegister() {
  const [user, setUser] = useState({} as User)
  const [message, setMessage] = useState('')

  const [error, setError] = useState(false)
  const resgistrar = () => {
    ajax({
      url: URL_REGISTER,
      data: { ...user, birthdate: convertDateToISO(user.birthdate) },
      method: 'POST',
      cbSuccess: (response: ReponseApiRegister) => {
        setMessage(() => response.message)
        setError(false)
      },
      cbError: (res: ResponseError) => {
        console.log(res)
        setMessage(() => res.message instanceof Array ?
          res.message.reduce((acc, current) => acc += current + '\n\n', '') : res.message
        )
        setError(true)
      }
    })
  }

  const onChange = (key: string, value: string): void => {
    setUser((current: User) => ({ ...current, [key]: value.trim() }))
  }

  return {
    onChange,
    resgistrar,
    message,
    error
  }
}
