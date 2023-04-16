import {colors} from '@/styles/colors'
import { Course } from '@/types/Course'
import { useRouter } from 'next/router';


export default function Card(course: Course) {
    const router = useRouter()
    const weekdays: string[] = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]

    return (
        // <div 
        //     style={{background: colors.card}}
        //     className={`rounded-sm`}
        // >
            
        // </div>
        <div 
            style={{background: colors.card, borderColor: colors.accent1}} 
            className="border rounded-xl cursor-pointer"
            onClick={() => router.push(`/courses/${course.Id}`)}
        >
            <img className="w-full object-cover object-left-top rounded-t-xl" src={course.Image} alt="" />
            <div className="p-5">
                <h5 
                    style={{color: colors.text}}
                    className="text-3xl font-bold"
                >
                    {course.Title}
                </h5>
                <p 
                    style={{color: colors.grey}}
                    className="mb-3 font-normal text-3xl"
                >
                    Осталось мест: {course.MaxListeners}
                </p>
                <div style={{color: colors.accent1}} className="mt-auto mb-0 flex flex-row text-2xl">
                    <p className="ml-0 mr-auto">
                        {`${course.From.getDate()}.${course.From.getMonth()}-${course.To.getDate()}.${course.To.getMonth()}`}
                    </p>
                    <p className="ml-auto mr-0">
                        {`${course.Timetable.map((item) => weekdays[item.getDay()]).join(", ")} ${course.Timetable[0].getHours()}:${course.Timetable[0].getMinutes()}`}
                    </p>
                </div>
            </div>
        </div>
    )
}