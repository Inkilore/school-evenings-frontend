import NavBar from "@/components/NavBar/NavBar"
import Card from "@/components/Card/Card"
import { Course } from '@/types/Course'
import { colors } from "@/styles/colors"

import Head from "next/head"
import { InferGetStaticPropsType } from "next"


export default function Home({ courses }: InferGetStaticPropsType<typeof getServerSideProps>) {
  courses = courses.map((item) => {
    item.From = new Date(item.From)
    item.To = new Date(item.To)
    item.Timetable = item.Timetable.map((date) => new Date(date))
    return item
  })

  return (
    <>
      <Head>
        <title>School evenings</title>
      </Head>
      <NavBar/>
      <div style={{background: colors.bg}} className="min-h-screen flex flex-col justify-center">
        {/* <div className="h-[50px] mt-16">
          <div className="ml-16 mr-16 h-full rounded-lg border-2 flex items-center">
            <input type="text" style={{color: colors.text}} className="text-3xl w-full ml-4 bg-transparent outline-none" placeholder="Олимпиадная подготовка..."/>
          </div>
        </div> */}
        <div className="grid ml-16 mr-16 pt-16 grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-y-14 gap-x-[4vw]">
          {courses.map((course, index) => 
            <Card {...course} key={index} />
          )}
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps() {
  let courses: Course[] = await fetch("https://2e00-109-195-105-128.eu.ngrok.io", {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({limit: 25})
  }).then(e => e.json()).then(e => JSON.parse(JSON.stringify(e)))

  return {
    props: {
      courses
    }
  }
}