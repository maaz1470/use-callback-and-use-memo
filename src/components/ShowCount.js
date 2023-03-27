import React from 'react'
function ShowCount({title, count}){
	console.log(`Rendering ${title}`)
	return (
		<>
			<p>{title} is {count}</p>
		</>
	)
}

export default React.memo(ShowCount);