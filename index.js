var loaderUtils = require('loader-utils');
var process = require('process')
var colors = require('colors')
/**
 *
 * @param {[String]} toCheck
 * @param {String} originalString
 */
module.exports = function svgChecker (content,  map, meta)
{
    // var filename = this.request.split("!")[1]
    this.cacheable && this.cacheable();

    var query = loaderUtils.getOptions(this) || {};

    const context =
    query.context ||
    this.rootContext ||
    (this.options && this.options.context);

    query.encoding = query.encoding || 'none';

    var limit = query.limit ? parseInt(query.limit, 10) : 0;

    if (limit <= 0 || content.length < limit) {
        var newContent = content.toString('utf8');

        var hasRootElement = /<svg[\s\S]*?>[\s\S]*?<\/svg>/i.test(newContent)
        var checked = this.resource + '\n';
        var toCheck = query.toCheck || ['viewBox', 'width', 'height'];

        toCheck.forEach(needle => {
            var found = newContent.includes(needle)
            checked += needle + ': ' + ((found) ? found.toString().green : found.toString().red) + '\n'
        })

        //lets write to the standard out.
        process.stdout.write(checked);

    }

    return content;
}

module.exports.raw = true;
