export function getRedirectPath({type,avatar}){
	// user.type /boss /genius
	let url = '/' + type;
	if (!avatar) {
		url += 'info';
	}
	return url;
}
