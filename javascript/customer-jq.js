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
var totalVideoPage = dArray.length;

$(document).ready(function(){
    $("#pageNumber").html("1 / " + totalVideoPage);
    initTitle();
    setLiStyle();
});

var initTitle = function(){
    for(var i=0;i < dArray.length; i ++){
        var sectionObject = new Object();
        sectionObject = dArray[i];
        var li = document.createElement('li');
        var strTitle = subString(sectionObject.title,stringLength);
        var liHtml = "";
        if(sectionObject.isDir == 0){
            liHtml = liHtml + "<div class='title_div_left no-dir-item'>";
        }else{
            liHtml = liHtml + "<div class='title_div_left'>";
        }
        liHtml = liHtml + "<a title='"  + sectionObject.title + "' ";
        liHtml = liHtml + " onclick='goPage(" + sectionObject.time + ")'>";
        liHtml = liHtml  + strTitle;
        liHtml = liHtml + "</a></div><div class='title_div_right'> " + sectionObject.showTime + " </div>";
        liHtml = liHtml + "<div class='clear'></div>" ;
        li.innerHTML = liHtml;
        $("#listTitle").append(li);
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
    currentNumber = pageNum;
    $("#pptImageView").attr("src", imgUrl);
    $("#pageNumber").html( pageNum + " / " + totalVideoPage);
    changeLiColor(currentNumber-1, "current-item");
};

// page redirect when clicked title.
var goPage = function(index){
    var videoPlayer = $("#audio_player")[0];
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
    $("#listTitle li").each(function(index){
        if($(this).hasClass("current-item")){
            $(this).removeClass("current-item");
        }
        if(liNumber == index){
            $(this).removeClass();
            $(this).addClass("current-item");
        }
    });
};

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

var setLiStyle = function(){
    $("#listTitle li").each(function(index){
        $(this).addClass(" unread-item ");
    });
};