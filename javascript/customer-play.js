/**
 * Created by Sam on 12/28/2015.
 */
/**
 * Created by Sam on 12/3/2015.
 */

// init page number
var stringLength = 21;
var dArray = dataArray();
var isPlaying = false;
var currentNumber;
var preCurrentNumber;
var totalVideoPage = dArray.length;

window.onload=function(){
//    browserCheck();
    document.getElementById("pageNumber").innerHTML = "1 / " + totalVideoPage;

    for(var i=0;i < dArray.length; i ++){
        var sectionObject = new Object();
        sectionObject = dArray[i];
        var li = document.createElement('li');

        var strTitle = subString(sectionObject.title,stringLength);
        var liHtml =  "";
        if(sectionObject.isDir == 0){
            liHtml = liHtml + "<div class='title_div_left  no-dir-item'>";
        }else{
            liHtml = liHtml + "<div class='title_div_left'>";
        }
        liHtml = liHtml + "<a title='";
        liHtml = liHtml + sectionObject.title;
        liHtml = liHtml + "' onclick='goPage(";
        liHtml = liHtml + sectionObject.time;
        liHtml = liHtml + ")'>";
        liHtml = liHtml  + strTitle;
        liHtml = liHtml + "</a></div><div class='title_div_right'> ";
        liHtml = liHtml + sectionObject.showTime;
        liHtml = liHtml + " </div><div class='clear'></div>" ;
        li.innerHTML = liHtml;

        document.getElementById("listTitle").appendChild(li);
    }
    currentNumber = 1;

    addStyleToControl("listTitle", "unread-item");

    var firstChild = document.getElementById("listTitle").firstChild;
    var firstChildClassName = firstChild.className;
    firstChild.className = firstChildClassName + " current-item";
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
    currentNumber = pageNum;
    document.getElementById("pptImageView").src = imgUrl;
    document.getElementById("pageNumber").innerHTML = pageNum + " / " + totalVideoPage;
    changeLiColor(currentNumber-1, "current-item");
};

// page redirect when clicked title.
var goPage = function(index){
    var videoPlayer = document.getElementById("audio_player");
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


var changeLiColor = function(liNumber, styleName){
    var liArrays = document.getElementById("listTitle").childNodes;
    for(var i = 0; i < liArrays.length; i ++){
        var tmpName = liArrays[i].className ;
        var t = tmpName.indexOf(styleName);
        if(t != -1){
            tmpName = tmpName.substring(t - 1, styleName.length);
            liArrays[i].className = tmpName;
        }

    }
   var tmpClassName =  liArrays[liNumber].className;
   liArrays[liNumber].className = tmpClassName + " " + styleName;
}

var nextPage = function(){
    if(currentNumber == totalVideoPage){
        alert("已经是最后一页！");
    }else{
        changeImageAndAudio(currentNumber);
    }
};

var prePage = function(){
    if(currentNumber == 1){
        alert("已经是第一页！");
    }else{
        changeImageAndAudio(currentNumber - 2);
    }
};

var changeImageAndAudio = function (index){
    var currentArray = dArray[index];
    var imgUrl = dirPath + currentArray.image;
    goPage(currentArray.time);
};

var addStyleToControl = function(control, className){
    var lis = document.getElementById(control).childNodes;
    for(var i = 0; i < lis.length; i ++){
        lis[i].className = className;
    }
}
//
//var browserCheck = function () {
//    var sUserAgent = navigator.userAgent.toLowerCase();
//    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
//    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
//    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
//    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
//    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
//    var bIsAndroid = sUserAgent.match(/android/i) == "android";
//    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
//    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
//    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
//        document.getElementById("video-container").className="";
//        document.getElementById("video-container").className="video-container";
//        numOfBrowser = 0;
//    }else{
//        document.getElementById("audio-container").className="";
//        document.getElementById("audio-container").className="audio-container";
//        numOfBrowser = 1;
//    }
//};
//
