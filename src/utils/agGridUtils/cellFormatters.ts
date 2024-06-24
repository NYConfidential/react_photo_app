import { format } from "date-fns"

export const cellDateTimeFormatter = (params: any, dateFormat = "MM-dd-yyyy HH:mm:ss a"): string => {
    try {
        return format(new Date(params.value), dateFormat) // For
    } catch (e) {
        return `Invalid Date: [${params?.value ?? "NULL"}] `
    }
}
