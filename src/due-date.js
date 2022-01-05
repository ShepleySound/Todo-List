import { format, formatDistance, addDays } from 'date-fns'
const dueDistance = (dueDate) => {
    const dateGap = formatDistance(dueDate, new Date(), {addSuffix: true})
    return `Due ${dateGap}`
}
const dueFormat = (dueDate) => {
    return format(dueDate, "MMMM dd, yyyy")
}

export {dueFormat, dueDistance}