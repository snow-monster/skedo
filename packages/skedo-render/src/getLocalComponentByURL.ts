
const localComponentsMap : {[key:string] : React.ComponentClass} = {}  

// @ts-ignore
require.context('./local', true, /\.tsx$/)
	.keys()
	.forEach( (key : string) => {
		key = key.replace('./', '')
		const [a,] = key.split('.')
		debugger
		localComponentsMap['local.' + a] = require(`./local/${key}`).default
	})


function getLocalComponentByURL(url: string) : React.ComponentClass {
	return localComponentsMap[url] || null
}

export default getLocalComponentByURL
