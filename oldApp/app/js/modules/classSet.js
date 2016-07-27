export const classSet = (obj) =>
	Object.keys(obj).filter(key => obj[key]).join(' ');

