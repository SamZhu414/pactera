/**
 * Created by Sam on 12/28/2015.
 */
var dataArray = function(){
    var titleArray = [
        "dir - 1 ",
        "dir - 1 - details - 144333333333",
        "dir - 1 - details - 14433333333333",
        "dir - 1 - details - 3df3333asdfasdfsa",
        "dir - 2 ",
        "dir - 2 - details - 3df3333asdfasdfsa",
        "dir - 2 - details - ddasdf",
        "dir - 2 - details - 33df3333asdfasdfsas",
        "dir - 3 ",
        "dir - 3 - details - 1sadf",
        "dir - 3 - details - das2",
        "dir - 3 - details - 33df3333asdfasdfsa"];

    var imageArray = ["img01.jpg","img02.jpg","img03.jpg","img04.jpg","img05.jpg","img06.jpg",
        "img07.jpg","img08.jpg","img09.jpg","img10.jpg","img01.jpg","img02.jpg"];

    var timeArray = [0,15,30,45,60,75,90,105,120,135,150,165];
    var showTimeArray = ["0:00","0:15","0:30","0:45","1:00","1:15","1:30","1:45","2:00","2:15","2:30","2:45"];
    var dirArray = [1,0,0,0,1,0,0,0,1,0,0,0];

    var sections = new Array();
    for(var i = 0; i < titleArray.length; i ++){
        var section = new Object();
        section.time = timeArray[i];
        section.title = titleArray[i];
        section.image = imageArray[i];
        section.showTime = showTimeArray[i];
        section.isDir = dirArray[i];
        sections.push(section);
        section = null;
    }
    return sections;
};


var dirPath = "course/test/";

// when video or audio time changed, call this function.
var timeUpdate = function(track){
    var currentTime = Math.floor(track.currentTime).toString();
    //var duration = Math.floor(track.duration).toString();
    changeImageSrcPageNumber(currentTime, dirPath);

};