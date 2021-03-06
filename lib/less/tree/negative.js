(function (tree) {

tree.Negative = function (node) {
    this.value = node;
};
tree.Negative.prototype = {
    toCSS: function (env) {
        return '-' + this.value.toCSS(env);
    },
    eval: function (env) {
        if (env.isMathsOn()) {
            return (new(tree.Operation)('*', [new(tree.Dimension)(-1), this.value])).eval(env);
        }
        return new(tree.Negative)(this.value.eval(env));
    }
};

})(require('../tree'));
