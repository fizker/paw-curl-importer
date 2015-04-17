export default class cURLImporter {
	static identifier = 'dk.fizkerinc.cURLImporter'
	static title = 'cURL Importer'

	importString(context, stringToImport) {
		var request = context.createRequest('Imported cURL request', 'first param', stringToImport)
		return true
	}
}
