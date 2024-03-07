document.title = 'Software Dev.';//all HTML
import { glide } from './js/glide.js'
import { date, reloj, weekDay,dayDate, obtenerUbicacion } from "./js/service/date.js";

date()
reloj()
const dayDates = dayDate()
weekDay(dayDates)
obtenerUbicacion()
glide


