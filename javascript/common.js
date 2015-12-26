/**
 * Created by Sam on 12/3/2015.
 */

// init page number
var stringLength = 8;
var dArray = dataArray();
var isPlaying = false;
var numOfBrowser;
var totalVideoPage = dArray.length;

window.onload=function(){
    browserCheck();

    document.getElementsByClassName("pageNumber")[numOfBrowser].innerHTML = "1 / " + totalVideoPage;
    for(var i=0;i < dArray.length; i ++){
        var sectionObject = new Object();
        sectionObject = dArray[i];
        var li = document.createElement('li');
        var strTitle = subString(sectionObject.title,12);
        var listNum = i + 1;
        listNum = listNum + ". ";
        var liHtml =  "<div class='title_div_left'>";
        liHtml = liHtml + "<a title='";
        liHtml = liHtml + sectionObject.title;
        liHtml = liHtml + "' onclick='goPage(";
        liHtml = liHtml + sectionObject.time;
        liHtml = liHtml + ")'>";
        liHtml = liHtml + listNum + strTitle;
        liHtml = liHtml + "</a></div><div class='title_div_right'> ";
        liHtml = liHtml + sectionObject.showTime;
        liHtml = liHtml + " </div><div class='clear'></div>" ;
        li.innerHTML = liHtml;
        document.getElementById("listTitle").appendChild(li);
    }
};

// change image url and page number when time update.
var changeImageSrcPageNumber = function(time, dirPath){
    var totalPage = dArray.length;
    for(var i=0;i < totalPage; i ++){
        var firstSection = dArray[i];
        if(firstSection.time == time){
            var imgUrl = dirPath + firstSection.image;
            changeImgSrcPageNum(imgUrl,  i+1);
            break;
        }
        if(i < totalPage - 1){
            var tmpNum = i + 1 ;
            var secondSection = dArray[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = dirPath + firstSection.image;
                changeImgSrcPageNum(imgUrl,  tmpNum);
                break;
            }
        }else if(i == totalPage - 1){
            var secondSection = dArray[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = dirPath + firstSection.image;
                changeImgSrcPageNum(imgUrl,  tmpNum);
                break;
            }
        }
    }
};

// implementation change function
var changeImgSrcPageNum = function(imgUrl, pageNum){
    document.getElementsByClassName("pptImageView")[numOfBrowser].src = imgUrl;
    document.getElementsByClassName("pageNumber")[numOfBrowser].innerHTML = pageNum + " / " + totalVideoPage;
};

// page redirect when clicked title.
var goPage = function(index){
    var videoPlayer = document.getElementsByTagName("video")[0];
    if(!isPlaying){
        videoPlayer.play();
        videoPlayer.currentTime = index;
    }else{
        videoPlayer.currentTime = index;
    }
};

// process string
var subString = function(str, n){
    var r = /[^\x00-\xff]/g;
    if(str.replace(r,"mm").length <= n){return str;}
    var m = Math.floor(n/2);
    for(var i = m; i < str.length; i++){
        if(str.substr(0,i).replace(r,"mm").length >= n){
            return str.substr(0, i) + "...";
        }
    }
    return str;
};


var browserCheck = function () {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
        document.getElementById("audio-container").className="";
        document.getElementById("audio-container").className="audio-container";

        //document.getElementById("video-container").className="";
        //document.getElementById("video-container").className="video-container";
        numOfBrowser = 1;
    }else{
        document.getElementById("audio-container").className="";
        document.getElementById("audio-container").className="audio-container";
        numOfBrowser = 1;
    }
};

