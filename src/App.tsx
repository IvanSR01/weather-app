import { FC, useEffect, useState } from 'react'
import Home from './pages/Home/Home'

const App: FC = () => {
	const [ img, setImg ] = useState<string>('')
	useEffect(() => {
		const data: Date = new Date
		const hour: number = data.getHours()
		if(hour <= 10){
			setImg('public/landscape-nature-rock-horizon-mountain-cloud-sky-sun-sunrise-sunset-sunlight-morning-hill-dawn-valley-mountain-range-dusk-evening-canyon-plateau-afterglow-mountainous-landforms-1392560.jpg')
		}
		else if(hour <= 14){
			setImg('public/beautiful-vertical-shot-of-mountains-surrounded-by-green-pine-trees.jpg')
		}
		else if(hour <= 18){
			setImg('public/breathtaking-shot-of-an-aoraki-mount-cook-at-sunset-canterbury-new-zealand.jpg')
		}
		else{
			setImg('public/imgpreview.jpeg')
		}
	}, [])
	return (
		<div className='body'>
			<Home/>
			<img src={img} alt="" />
		</div>
	)
}

export default App
