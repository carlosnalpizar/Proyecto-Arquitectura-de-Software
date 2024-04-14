import axios from 'axios'

export const getHabitaciones = async()=>
    await axios.get('http://localhost:4000/habitaciones')