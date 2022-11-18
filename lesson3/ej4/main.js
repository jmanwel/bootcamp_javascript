

function checkLikes(likes){
    if (likes.length == 0){
        console.log('Nobody has like it');
    }
    else if (likes.length == 1){
        console.log(likes[0] + 'has like it');
    }
    else if (likes.length == 2){
        console.log(likes[0] + ' and ' + likes[1] + 'has like it');
    }
    else if (likes.length == 3){
        console.log(likes[0] + ' and ' + likes[1] + ' and ' + likes[2] + 'has like it');
    }
    else if (likes.length > 3){
        nop = likes.length-2;
        console.log(likes[0] + ' and ' + likes[1] + ' and ' + nop + ' more people has like it');
    }
}


checkLikes([]);
checkLikes(['Juan']);
checkLikes(['Juan', 'María']);
checkLikes(['Juan', 'María', 'Pedro']);
checkLikes(['Juan', 'María', 'Pedro', 'Pablo', 'Laura']);

