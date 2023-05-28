import React from 'react'
import Header from '../../components/Header/Header'
import styles from './Home.module.scss'
import DateComponents from '../../components/Date/Date.tsx'
import { dataCity } from '../../components/Header/Data.ts'
import { useAppDispatch, useAppSelector } from '../../redux/hook.ts'
import { fetchFocast } from '../../redux/Slice/GetForcast.ts'


const Home: React.FC = () => {
	const copyright: string = String.fromCodePoint(0x000B0);
	const dispatch = useAppDispatch()
	const date: Date = new Date()
	const hour: number = date.getHours()
	const [cityCount, setCityCount] = React.useState<number>(0)
	const lat: number = dataCity[cityCount].lat
	const lon: number = dataCity[cityCount].lon
	const { temperature_2m } = useAppSelector((state) => state.Forcast)
	console.log(hour)
	console.log(temperature_2m)
	React.useEffect(() => {
		dispatch(fetchFocast({ lat, lon }))
	}, [lat, lon])
	return (
		<div className={styles.wrapper}>
			<Header cityCount={cityCount} setCityCount={(i) => setCityCount(i)} />
			<div className={styles.body}>
				<DateComponents />
				<div className={styles.degrees}>
					<p>{temperature_2m[hour]}{copyright}C</p>
				</div>
			</div>

		</div>
	)
}

export default Home
