const blue = "#2B303A"
const darkBlue = "#22262E"
const white = "#FAF3DD"
const grey = "#C8C2B1"
const darkerBlue = "#2F343E"
const green = "#6DC593"
const orange = "#FF8552"

export type Colors = "blue" | "darkBlue" | "white" | "grey" | "darkerBlue" | "green" | "orange" |
    "bg" | "darkBg" | "text" | "card" | "accent1" | "accent2"

export const colors: Record<Colors, string> = {
    "blue": blue,
    "darkBlue": darkBlue,
    "white": white,
    "grey": grey,
    "darkerBlue": darkerBlue,
    "green": green,
    "orange": orange,

    "bg": blue,
    "darkBg": darkBlue,
    "text": white,
    "card": darkerBlue,
    "accent1": green,
    "accent2": orange
}