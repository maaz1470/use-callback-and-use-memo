import React from 'react'
function Button({increment, title}){
	console.log(`Rendering Button ${title}`)
	return (
		<>
			<button onClick={increment}>{title}</button>
		</>
	);
}
export default React.memo(Button);