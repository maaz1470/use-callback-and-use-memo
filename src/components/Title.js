import React from 'react'
function Title({title}){
	console.log('Rendering Title')
	return (
		<>
			<h1>{title}</h1>
		</>
	)
}
export default React.memo(Title);