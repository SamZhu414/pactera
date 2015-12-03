/**
 * Created by Sam on 12/3/2015.
 */

// init page number
var stringLength = 8;
var dArray = dataArray();
var isPlaying = false;

window.onload=function(){
    document.getElementById("pageNumber").innerHTML = "1 / " + dArray.length;
    for(var i=0;i < dArray.length; i ++){
        var sectionObject = new Object();
        sectionObject = dArray[i];
        var li = document.createElement('li');
        var strTitle;
        if(sectionObject.title.length > stringLength){
            strTitle = sectionObject.title.substring(0,stringLength)+"...";
        }else{
            strTitle = sectionObject.title;
        }
        var listNum = i +1;
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
            changeImgSrcPageNum(imgUrl,  i+1 + " / " + totalPage);
            break;
        }
        if(i < totalPage - 1){
            var tmpNum = i + 1 ;
            var secondSection = dArray[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = dirPath + firstSection.image;
                changeImgSrcPageNum(imgUrl,  tmpNum + " / " + totalPage);
                break;
            }
        }else if(i == totalPage - 1){
            var secondSection = dArray[tmpNum];
            if(firstSection.time < time   && secondSection.time > time ){
                var imgUrl = dirPath + firstSection.image;
                changeImgSrcPageNum(imgUrl,  tmpNum + " / " + totalPage);
                break;
            }
        }
    }
};

// implementation change function
var changeImgSrcPageNum = function(imgUrl, pageNum){
    document.getElementById("imgView").src = imgUrl;
    document.getElementById("pageNumber").innerHTML = pageNum;
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


