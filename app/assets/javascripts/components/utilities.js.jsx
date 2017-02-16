clone = function (object) {
    return Object.assign({}, object)
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