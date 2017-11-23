myObjectType = function(props) {
    // anything defined on props will be private due to the closure

    props.privateVar = "private";

    // anything defined on obj will be public
    obj = {};

    obj.testing = new function() {
        alert(props.privateVar);
    };

    return obj;
};