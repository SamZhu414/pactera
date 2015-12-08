/**
 * Created by Sam on 11/10/2015.
 */
var dataArray = function(){
    var titleArray = [
        "晚期肾细胞癌患者生活质量",
        "目 录",
        "一线TKI作用靶点的细微差异",
        "一线TKI作用强度的差异",
        "培唑帕尼与舒尼替尼对VEGFR-2和Flt-3的作用差异",
        "COMPARZ研究：培唑帕尼与舒尼替尼一线的头对头研究",
        "COMPARZ研究:任一组中≥30%的患者发生AE1",
        "COMPARZ研究:任一治疗组≥35%的患者发生的实验室异常",
        "COMPARZ研究:培唑帕尼血液学检查的波动幅度小于舒尼替尼",
        "目 录",
        "患者报告的结局: 生活质量",
        "调 查",
        "调查结果",
        "mRCC的治疗决策基于标准的临床评估",
        "mRCC的治疗决策基于标准的临床评估",
        "不良事件的分级无法真实反映患者的感受",
        "肿瘤研究中关注于患者的研究终点",
        "评估mRCC患者治疗经验的验证量表",
        "肾癌靶向治疗的III期研究中，关注患者的研究终点",
        "FDA认可临床终点应包含患者报告的结果",
        "COMPARZ研究:治疗最初6个月的生活质量测量值",
        "COMPARZ研究:FACIT-F评分较基线变化",
        "COMPARZ研究:前12个月中SQLQ中足部疼痛的变化",
        "无症状或毒副反应的质量调整时间(Q-TWiST)",
        "COMPARZ研究：质量调整生存分析 (Q-TWIST)",
        "COMPARZ研究:培唑帕尼组的电话咨询和急诊室访视数量更少",
        "RECORD-1研究: 二线使用依维莫司后，患者的生活质量未受明显影响",
        "AXIS研究：二线使用阿昔替尼后，对生活质量有负面影响",
        "目 录",
        "肿瘤研究中关注于患者的研究终点",
        "肿瘤学领域中患者的报告结果",
        "肿瘤学领域中关于患者偏好的研究",
        "调 研",
        "调研结果",
        "PISCES研究：培唑帕尼和舒尼替尼在晚期RCC患者中偏爱的比较研究",
        "医生偏好培唑帕尼多于舒尼替尼",
        "无论何种治疗顺序，培唑帕尼优于舒尼替尼",
        "哪个因素对你的治疗选择有所影响?",
        "PISCES研究和COMPARZ研究：关于生活质量的结论一致",
        "总 结"];

    var imageArray = ["2-WQRenal001.png","2-WQRenal002.png","2-WQRenal003.png","2-WQRenal004.png",
                      "2-WQRenal005.png","2-WQRenal006.png","2-WQRenal007.png","2-WQRenal008.png",
                      "2-WQRenal009.png","2-WQRenal0010.png","2-WQRenal0011.png","2-WQRenal0012.png",
                      "2-WQRenal0013.png","2-WQRenal0014.png","2-WQRenal0015.png","2-WQRenal0016.png",
                      "2-WQRenal0017.png","2-WQRenal0018.png","2-WQRenal0019.png","2-WQRenal0020.png",
                      "2-WQRenal0021.png","2-WQRenal0022.png","2-WQRenal0023.png","2-WQRenal0024.png",
                      "2-WQRenal0025.png","2-WQRenal0026.png","2-WQRenal0027.png","2-WQRenal0028.png",
                      "2-WQRenal0029.png","2-WQRenal0030.png","2-WQRenal0031.png","2-WQRenal0032.png",
                      "2-WQRenal0033.png","2-WQRenal0034.png","2-WQRenal0035.png","2-WQRenal0036.png",
                      "2-WQRenal0037.png","2-WQRenal0038.png","2-WQRenal0039.png","2-WQRenal0040.png"];

    var timeArray = [0,2,26,102,122,173,196,232,254,302,315,351,386,429,462,511,547,563,612,449,729,764,775,785,838,
                    868,923,982,1034,1038,1060,1086,1108,1142,1209,1265,1303,1334,1349,1367];

    var showTimeArray = ["0:00","0:02","0:26","1:42","2:02","2:53","3:16","3:52","4:14","5:02","5:15","5:51","6:26","7:09",
                        "7:42","8:31","9:07","9:23","10:12","10:49","12:09","12:44","12:55","13:05","13:58","14:28",
                        "15:23","16:22","17:14","17:18","17:40","18:06","18:28","19:02","20:09","21:05","21:43",
                        "22:14","22:29","22:47"];

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


var dirPath = "course/2-WQRenal/";

// when video or audio time changed, call this function.
var timeUpdate = function(track){
    var currentTime = Math.floor(track.currentTime).toString();
    //var duration = Math.floor(track.duration).toString();
    changeImageSrcPageNumber(currentTime, dirPath);
};