import React from 'react'
import styles from './Header.module.scss'
import { dataCity } from './Data'

interface IHeader {
	cityCount: number,
	setCityCount: (i:number) => void,
}

const Header: React.FC<IHeader> = ({cityCount, setCityCount}) => {
	const [isOpen , setIsOpen] = React.useState(false)
	const onCliCk = (i: number) => {
		setCityCount(i)
		setIsOpen(false)
	}
	return (
		<div className={styles.wrapper}>
			<p onClick={() => setIsOpen(!isOpen)}>{dataCity[cityCount].title}</p>
			<div className={`${styles.modal} ${isOpen ? '' : styles.hidden}`}>
					{dataCity.map((item,i) => (
						<p onClick={() => onCliCk(i)} className={i === cityCount ? styles.active : ''}>{item.title}</p>
					))}
			</div>
		</div>
	)
}

export default Header
