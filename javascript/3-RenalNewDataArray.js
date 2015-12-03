/**
 * Created by Sam on 11/10/2015.
 */
var dataArray = function(){
    var titleArray = [
        "肾细胞癌的新辅助治疗与辅助治疗",
        "目 录",
        "肾细胞癌新辅助治疗的优缺点",
        "新辅助治疗原理：与肿瘤体积之间的关系",
        "舒尼替尼用于肾细胞癌的新辅助治疗",
        "舒尼替尼用于肾细胞癌的新辅助治疗",
        "CARMENA研究：正在进行中的舒尼替尼新辅助治疗III期研究",
        "索拉非尼用于肾细胞癌的新辅助治疗",
        "索拉非尼用于肾细胞癌的新辅助治疗",
        "PANTHER研究：培唑帕尼新辅助治疗研究",
        "患者特征",
        "培唑帕尼新辅助治疗的原发肿瘤最佳反应",
        "66%的患者在新辅助治疗后接受了肾切除术",
        "在手术前2周、手术后至少21日停用了培唑帕尼",
        "阿昔替尼新辅助治疗II期研究",
        "阿昔替尼II期研究：结果",
        "4种TKI用于新辅助治疗比较",
        "调 研",
        "调研结果",
        "目 录",
        "肾细胞癌的辅助治疗原理",
        "RCC辅助治疗方案的选择",
        "细胞因子治疗、激素治疗或放射治疗的辅助治疗均为阴性数据",
        "ASSURE研究：舒尼替尼和索拉非尼辅助治疗III期研究",
        "ASSURE研究：DFS",
        "ASSURE研究：OS",
        "DFS的亚组分析：舒尼替尼对比安慰剂",
        "正在进行的肾癌辅助治疗研究",
        "调 研",
        "调研结果",
        "目 录",
        "未来方向1：新型分子靶点的靶向治疗药物",
        "未来方向2：新型免疫治疗药物的新辅助治疗",
        "未来方向3：新辅助治疗与辅助治疗研究设计的优化",
        "总 结"];

    var imageArray = ["3-RenalNew-0001.png","3-RenalNew-0002.png","3-RenalNew-0003.png","3-RenalNew-0004.png",
                    "3-RenalNew-0005.png","3-RenalNew-0006.png","3-RenalNew-0007.png","3-RenalNew-0008.png",
                    "3-RenalNew-0009.png","3-RenalNew-0010.png","3-RenalNew-0011.png","3-RenalNew-0012.png",
                    "3-RenalNew-0013.png","3-RenalNew-0014.png","3-RenalNew-0015.png","3-RenalNew-0016.png",
                    "3-RenalNew-0017.png","3-RenalNew-0018.png","3-RenalNew-0019.png","3-RenalNew-0020.png",
                    "3-RenalNew-0021.png","3-RenalNew-0022.png","3-RenalNew-0023.png","3-RenalNew-0024.png",
                    "3-RenalNew-0025.png","3-RenalNew-0026.png","3-RenalNew-0027.png","3-RenalNew-0028.png",
                    "3-RenalNew-0029.png","3-RenalNew-0030.png","3-RenalNew-0031.png","3-RenalNew-0032.png",
                    "3-RenalNew-0033.png","3-RenalNew-0034.png","3-RenalNew-0035.png"];

    var timeArray = [0,18,50,78,129,172,252,268,326,352,388,424,467,486,537,585,640,706,752,830,865,915,975,1019,1040,
                    1072,1133,1177,1210,1252,1298,1363,1407,1489,1525,1587,1612,1641,1680,1711,1762];

    var showTimeArray = ["0:00","0:18","0:50","1:18","2:09","2:52","4:12","4:28","5:26","5:52","6:28","7:04","7:47",
                         "8:06","8:57","9:45","10:40","11:46","12:32","13:50","14:25","15:15","16:15","16:59","17:20",
                         "17:52","18:53","19:37","20:10","20:52","21:38","22:43","23:27","24:49","25:25","26:27",
                         "26:52","27:21","28:00","28:31","29:22","30:04","30:15"];

    var sections = new Array();
    for(var i = 0; i < titleArray.length; i ++){
        var section = new Object();
        section.time = timeArray[i];
        section.title = titleArray[i];
        section.image = imageArray[i];
        section.showTime = showTimeArray[i];
        sections.push(section);
        section = null;
    }
    return sections;
};

var dirPath = "course/3-RenalNew/";

// when video or audio time changed, call this function.
var timeUpdate = function(track){
    var currentTime = Math.floor(track.currentTime).toString();
    //var duration = Math.floor(track.duration).toString();
    changeImageSrcPageNumber(currentTime, dirPath);
};