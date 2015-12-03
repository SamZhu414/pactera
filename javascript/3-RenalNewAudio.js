/**
 * Created by Sam on 10/28/2015.
 */
var audioSections = dataArray();
var totalAudioPage = audioSections.length;
var dirPath = "course/3-RenalNew/";

window.onload=function(){
    document.getElementById("pageNumber").innerHTML = "1 / " + totalAudioPage;
};

var timeUpdate = function(track){
    var currentTime = Math.floor(track.currentTime).toString();
    //var duration = Math.floor(track.duration).toString();
    changeAudioImageSrc(currentTime);
};

var changeAudioImageSrc = function(time){
    for(var i=0;i < totalAudioPage; i ++){
        var firstSection = audioSections[i];
        if(firstSection.time == time){
            var imgUrl = dirPath + firstSection.image;
            document.getElementById("imgView").src = imgUrl;
            document.getElementById("pageNumber").innerHTML = i+1 + " / " + totalAudioPage;
            break;
        }
        if(i < totalAudioPage - 1){
            var tmpNum = i + 1 ;
            var secondSection = audioSections[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = dirPath + firstSection.image;
                document.getElementById("imgView").src = imgUrl;
                document.getElementById("pageNumber").innerHTML = tmpNum + " / " + totalAudioPage;
                break;
            }
        }else if(i == totalAudioPage - 1){
            var secondSection = audioSections[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = dirPath + firstSection.image;
                document.getElementById("imgView").src = imgUrl;
                document.getElementById("pageNumber").innerHTML = tmpNum + " / " + totalAudioPage;
                break;
            }
        }
    }
};
