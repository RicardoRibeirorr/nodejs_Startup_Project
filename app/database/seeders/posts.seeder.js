
module.exports = (models) => {
    models.post.create({
        userId: 1, //For user with id: 1
        title: "My first seeded post",
        content: makeRandomLongText(),
    });
    models.post.create({
        userId: 2, //For user with id: 2
        title: "My other second seeded post",
        content: makeRandomLongText(),
    });
}




function makeRandomLongText(){
    var longText = "";
    for(let i=5;i--;){
        longText += ' ' + (Math.random()).toString(36)
    }

    return longText;
}