import {colors} from '@/styles/colors'

import { useRouter } from 'next/router'
import Link from 'next/link'


export default function NavBar() {
    let router = useRouter()

    return (
        <div>
            <div 
            style={{background: colors.darkBg}}
            className="h-[50px] items-center"
        >
            <div className={`h-full flex items-center ml-4 mr-4`}>
                <div className={`flex gap-20 ml-auto`}>
                    <Link style={{color: colors.text}} className={`text-4xl underline-offset-5 ${router.pathname === "/" ? "underline" : ""}`} href="/">
                        КУРСЫ
                    </Link>
                    <Link style={{color: colors.text}} className={`text-4xl underline-offset-5 ${router.pathname === "/orders" ? "underline" : ""}`} href="/orders">
                        ЗАЯВКИ
                    </Link>
                </div>
                <div className="ml-auto mr-0">
                    <Link href="/login">
                        <div style={{background: colors.accent2, borderColor: colors.white}} className={`w-8 h-8 rounded-full ${router.pathname === "/login" ? "border-[3px]" : ""}`}></div>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}