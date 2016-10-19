export function load (url) {
	return {
		type : 'LOAD',
		url
	}
}

export function play () {
	return {
		type : 'PLAY'
	}
}

export function stop () {
	return {
		type : 'STOP'
	}
}

export function pause () {
	return {
		type : 'PAUSE'
	}
}
