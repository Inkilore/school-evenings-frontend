import NavBar from "@/components/NavBar/NavBar"
import { colors } from "@/styles/colors"

import Head from "next/head"
import { useRouter } from 'next/router'

export default function CoursePage() {
    const router = useRouter()
    const { id } = router.query

    return (
      <>
        <Head>
          <title>Курс</title>
        </Head>
        <NavBar/>
        <div 
            className="h-[200px] relative"
        >
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-no-repeat bg-cover bg-center brightness-[20%]" style={{backgroundImage: "url(https://zsfond.ru/get-image/?img-id=summer-kids-science-1.jpg:8196fa10-666a-424f-aa97-e851fa16cd2e)"}}/>
            <p style={{color: colors.text}} className="absolute top-0 right-0 left-0 bottom-0 text-4xl font-bold p-8">Информахахахатика</p>
        </div>
        <div style={{backgroundColor: colors.bg}} className="min-h-screen p-8 gap-x-4 grid grid-cols-[2fr_1fr]">
            <div style={{color: colors.text}} className="text-2xl">
                Интенсивный образовательный курс «Предпринимательство» ориентирован на комплексное развитие у школьников предпринимательской компетенции, как одной из ключевых в текущей экономической действительности, а также приобретение смежных навыков: ораторское мастерство, работа в команде, тайм-менеджмент, проектирование и проектное управление, лидерство, работа с мышлением и восприятием и т.д.
Таким образом, школьники смогут не только узнать полезную информацию, но и сформировать базовые навыки для успешного взаимодействия, самопрезентации и самоорганизации.
            </div>
            <div>
                <div style={{borderColor: colors.accent1, color: colors.accent1}} className="p-4 border-2 rounded-lg text-3xl">
                    {`Даты: 20.04 - 21.05`}<br/>{`Вт, Чт. Сб`}<br/>{`13:00 - 17:00`}
                </div>
            </div>
        </div>
      </>
    )
}