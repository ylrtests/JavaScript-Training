var myObject = new Object({
    title: "Hola",
    level: 1,
    views: 0,
    updateviews: function(){
        return ++myObject.views;
    }
});