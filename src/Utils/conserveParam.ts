import { SettingsParams } from '../Shared/constants';

export function converseParamTypeToString(
	paramValue: string | boolean,
): string {
	switch (typeof paramValue) {
		case 'string':
			return paramValue;
		case 'boolean':
			return paramValue ? '1' : '0';
		default:
			return String(paramValue);
	}
}
export function converseParamTypeFromString(
	storageParamValue: string | null,
): string | boolean {
	switch (storageParamValue) {
		case '1':
			return true;
		case '0':
			return false;
		case null:
			return '';
		default:
			return storageParamValue;
	}
}
export function conserveParam(
	paramName: SettingsParams,
	paramValue: string | boolean,
) {
	const conversedParamValue: string = converseParamTypeToString(paramValue);
	localStorage.setItem(paramName, conversedParamValue);
}

export function recoverParam(paramName: SettingsParams): string | boolean {
	const storageParamValue = localStorage.getItem(paramName);
	const conversedStorageParamValue: boolean | string =
		converseParamTypeFromString(storageParamValue);

	if (conversedStorageParamValue) {
		return conversedStorageParamValue;
	}

	return '';
}

export default {};
