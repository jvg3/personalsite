ipsum = function () {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt gravida est et rhoncus. Pellentesque et gravida leo. Curabitur sed semper quam. Vestibulum eu ligula porta, suscipit est commodo, tempus tortor. Donec est tortor, iaculis eget sodales et, dignissim sit amet risus. Nunc id mi lorem. Ut sit amet sagittis nibh, ut consectetur dui. Nunc fermentum quam nisi, finibus elementum velit malesuada consectetur."
}

clone = function (object) {
    return Object.assign({}, object)
}

redirect = function(path) {
    document.location.href = '/' + path.downcase()
}

String.prototype.upcase = function() {
    return this.split( /[\s]|[_]/ ).join( " " ).toUpperCase();
}

String.prototype.downcase = function() {
    return this.split( /[\s]|[_]/ ).join( " " ).toLowerCase();
}

String.prototype.capitalize = function() {
    return this.charAt( 0 ).toUpperCase() + this.slice( 1 );
}

String.prototype.titleize = function() {
    var strArray = this.split( /[\s]|[_]/ );
    strArray = strArray.map(function( str ) {
       return str.capitalize();
    });

    return strArray.join( " " );
}
