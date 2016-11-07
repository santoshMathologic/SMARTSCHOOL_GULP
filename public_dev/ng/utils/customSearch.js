String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
    //return this.toUpperCase();
}