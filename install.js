import Importer from './src/importer'
import ncp from 'ncp'
import mkdirp from 'mkdirp'

var extensionsDir = process.env.HOME + '/Library/Containers/com.luckymarmot.Paw/Data/Library/Application Support/com.luckymarmot.Paw/Extensions/'
var buildDir = 'build/' + Importer.identifier

mkdirp(extensionsDir, function() {
	ncp(buildDir, extensionsDir)
})
