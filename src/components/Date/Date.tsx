import React from 'react'
import { DateMouth, DateDay } from './Date'
import styles from './Date.module.scss'
const DateComponents: React.FC = () => {
	const date: any = new Date()
	const day: string = date.getDate()
	const weekDaty: number = date.getDay() 
 	const mouth: number = date.getUTCMonth()
	return (
		<div className={styles.date}>
				<p>{DateDay[weekDaty]}</p>,
				<p>{day}</p>
				<p>{DateMouth[mouth]}</p>
			</div>
	)
}

export default DateComponents
