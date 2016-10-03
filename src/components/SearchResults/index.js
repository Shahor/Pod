import React from 'react'

const Styles = {
	section : {
		display : 'block',
		position: 'absolute',
		top : '35px',
		backgroundColor : 'red',
		maxHeight : '300px',
		overflow: 'auto'
	},
	ul : {
		margin: '0px',
		padding : '10px',
		listStyle : 'none',
		// maxHeight : '300px',
		// overflow: 'auto'
	},
	li : {
		borderBottom: 'black solid 1px',
		cursor : 'pointer',
		height: '40px',
		lineHeight : '40px',

		whiteSpace: 'nowrap',
		overflow : 'hidden',
		textOverflow : 'ellipsis'
	}
}

export default (props) => {
	let sectionStyles = Object.assign({}, Styles.section, {
		display : props.results.length ? 'block' : 'none'
	})

	return <section className="pod-searchresults" style={sectionStyles}>
		<input type="button" onClick={props.onClose} value="Close" />
		<ul style={Styles.ul}>
			{props.results.map((result, index) => {
				return <li key={index} style={Styles.li}>
					{result.trackName}
				</li>
			})}
		</ul>
	</section>
}
