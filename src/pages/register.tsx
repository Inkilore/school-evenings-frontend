import NavBar from "@/components/NavBar/NavBar"
import { colors } from "@/styles/colors"

import Head from "next/head"
import { useRouter } from 'next/router'
import { useState } from 'react'


export default function Register() {
    const router = useRouter()
    var [email, setEmail] = useState("")
    var [pwd, setPwd] = useState("")
    var [secondPwd, setSecondPwd] = useState("")
    var [msg, setMsg] = useState("")

  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>
      <NavBar/>
      <div style={{background: colors.bg}} className="min-h-[calc(100vh-50px)] flex flex-col items-center justify-center">
        <p style={{color: colors.text}} className="text-6xl font-bold ml-auto mr-auto">Регистрация</p>
        <div className="h-[50px] w-[50vw] mt-16">
          <div className="ml-16 mr-16 h-full rounded-lg border-2 flex items-center">
            <input onChange={e => { setEmail(e.currentTarget.value); }} type="text" style={{color: colors.text}} className="text-3xl w-full ml-4 bg-transparent outline-none" placeholder="email"/>
          </div>
        </div>
        <div className="h-[50px] w-[50vw] mt-16">
          <div className="ml-16 mr-16 h-full rounded-lg border-2 flex items-center">
            <input onChange={e => { setPwd(e.currentTarget.value); }} type="text" style={{color: colors.text}} className="text-3xl w-full ml-4 bg-transparent outline-none" placeholder="Пароль"/>
          </div>
        </div>
        <div className="h-[50px] w-[50vw] mt-16">
          <div className="ml-16 mr-16 h-full rounded-lg border-2 flex items-center">
            <input onChange={e => { setSecondPwd(e.currentTarget.value); }} type="text" style={{color: colors.text}} className="text-3xl w-full ml-4 bg-transparent outline-none" placeholder="Повторите пароль"/>
          </div>
        </div>
        <div onClick={() => {
            setMsg("")
            if (email.length > 0 && pwd.length >= 8 && pwd === secondPwd) {
                router.push("/")
            } 
            else {
                setMsg("Неправильные данные регистрации") 
            }
        }} style={{color: colors.accent2, borderColor: colors.accent2}} className="cursor-pointer h-[50px] w-[20vw] mt-16 flex border-[3px] items-center justify-center rounded-2xl">
          Зарегистрироваться
        </div>
        <div style={{color: colors.text}} className="h-[50px] w-[50vw] mt-16 text-center">
          Есть аккаунт? <a href="/login" style={{color: colors.accent2}}>Войти</a>
        </div>
        <div style={{color: colors.orange}} className="h-[50px] w-[50vw] text-center">
          {msg}
        </div>
      </div>
    </>
  )
}