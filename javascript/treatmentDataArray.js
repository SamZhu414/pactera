/**
 * Created by Sam on 11/10/2015.
 */
var dataArray = function(){
    var titleArray = [
        "HR+晚期乳腺癌治疗优化管理",
        "内容提要",
        "HR+ ABC的疾病特征",
        "ABC治疗中的生活质量：指导原则如何阐述？",
        "靶向ER通路以外的关键通路，以延缓或逆转内分泌耐药",
        "BOLERO-2：依西美坦±依维莫司 III期研究",
        "BOLERO-2：安全性数据",
        "BOLERO-2：安全性数据",
        "研究随访中观察到的结果？",
        "BALLET： EVE + EXE用于NSAI 进展的局部晚期/转移性BC",
        "EVEREXES 研究：东亚患者中EVE+ EXE治疗ABC的初步安全性结果",
        "BRAWO研究的首次中期分析的结果：EVE + EXE用于ER+女性患者",
        "BRAWO： EVE + EXE 用于ER+ 妇女-临床实践数据",
        "与依维莫司相关的特殊不良事件的管理",
        "依维莫司剂型及给药",
        "血液学和代谢监测",
        "口腔炎的管理",
        "口腔炎：临床表现",
        "临床试验中口腔炎的发生率",
        "区分口腔炎与由化疗引起的粘膜炎",
        "口腔炎早期发生",
        "mTOR抑制剂相关口腔炎：临床管理策略",
        "口腔炎：出现症状后治疗vs从开始进行预防发生率比较",
        "口腔炎管理总结",
        "BOLERO-2：口腔炎 vs 无口腔炎的PFS8周内出现口腔炎患者PFS较长",
        "依维莫司和感染",
        "感染：实践考虑",
        "非感染性肺炎的管理",
        "非感染性肺炎：简介",
        "非感染性肺炎：临床表现",
        "非感染性肺炎：影像学特征",
        "肺炎：病史",
        "BOLERO-2肺炎发生率：亚洲患者 vs 非亚洲患者 ",
        "非感染性肺炎：患者教育",
        "非感染肺炎风险评估",
        "高血糖：管理",
        "高血糖：患者教育",
        "依维莫司：其他不良事件",
        "结论：AE相关依维莫司剂量调整",
        "结论"];

    var imageArray = ["3-Treatment0001.png","3-Treatment0002.png","3-Treatment0003.png","3-Treatment0004.png",
        "3-Treatment0005.png","3-Treatment0006.png","3-Treatment0007.png","3-Treatment0008.png","3-Treatment0009.png",
        "3-Treatment0010.png","3-Treatment0011.png","3-Treatment0012.png","3-Treatment0013.png","3-Treatment0014.png",
        "3-Treatment0015.png","3-Treatment0016.png","3-Treatment0017.png","3-Treatment0018.png","3-Treatment0019.png",
        "3-Treatment0020.png","3-Treatment0021.png","3-Treatment0022.png","3-Treatment0023.png","3-Treatment0024.png",
        "3-Treatment0025.png","3-Treatment0026.png","3-Treatment0027.png","3-Treatment0028.png","3-Treatment0029.png",
        "3-Treatment0030.png","3-Treatment0031.png","3-Treatment0032.png","3-Treatment0033.png","3-Treatment0034.png",
        "3-Treatment0035.png","3-Treatment0036.png","3-Treatment0037.png","3-Treatment0038.png","3-Treatment0039.png",
        "3-Treatment0040.png","3-Treatment0041.png"];

    var timeArray = [0,58,113,153,177,196,233,258,276,309,375,470,554,618,647,681,751,757,763,827,846,868,965,1040,
        1117,1185,1228,1271,1291,1306,1397,1433,1479,1591,1622,1656,1676,1741,1795,1867,1945];

    var showTimeArray = ["0:00","0:58","1:53","2:33","2:57","3:16","3:53","4:18","4:36","5:09","6:15","7:50","9:14",
                         "10:18","10:47","11:21","12:31","12:37","12:43","13:47","14:06","14:28","16:05","17:20",
                         "18:37","19:45","20:28","21:11","21:31","21:46","23:17","23:53","24:39","26:31","27:02",
                         "27:36","27:56","29:01","29:55","31:07","32:25"];

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

var dirPath = "course/3-treatment-ppt/";

// when video or audio time changed, call this function.
var timeUpdate = function(track){
    var currentTime = Math.floor(track.currentTime).toString();
    //var duration = Math.floor(track.duration).toString();
    changeImageSrcPageNumber(currentTime, dirPath);
};