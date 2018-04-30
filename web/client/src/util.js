export function getRedirectPath({type}){
	// user.type /boss /genius
	console.log(type);
	let url = '/' + type + 'info';
	return url;
}
