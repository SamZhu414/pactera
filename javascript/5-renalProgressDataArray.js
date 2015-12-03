/**
 * Created by Sam on 11/10/2015.
 */
var dataArray = function(){
    var titleArray = [
        "晚期肾细胞癌免疫治疗新进展",
        "细胞因子治疗时代： 晚期肾细胞癌患者的生存期",
        "靶向药物治疗时代： 晚期肾细胞癌患者的生存期",
        "调 研",
        "调研结果",
        "调 研",
        "调研结果",
        "目 录",
        "晚期肾细胞癌的免疫治疗：研究兴趣再次高涨",
        "治疗肾癌的在研PD-1通路抑制剂",
        "目 录",
        "阻断PD-1是肿瘤免疫治疗的策略",
        "CheckMate-025 III期研究：Nivolumab单药治疗既往接受过治疗的mRCC患者",
        "CheckMate-025研究：总生存",
        "CheckMate-025研究：无进展生存期",
        "CheckMate-025研究：抗肿瘤活性",
        "CheckMate-025研究：≥10%患者出现的治疗相关AE",
        "CHECKMATE-025研究：结论",
        "目 录",
        "Atezolizumab拮抗PD-L1的免疫抑制作用",
        "PCD4989g研究：Atezolizumab的Ia期临床研究",
        "Atezolizumab Ia期临床研究: 安全性和耐受性",
        "Atezolizumab Ia期临床研究: 研究者评估的疗效(中期分析)",
        "目 录",
        "PD-1抑制剂序贯VEGFR-TKI :研究设计",
        "PD-1抑制剂序贯VEGFR-TKI :疗效和安全性",
        "目 录",
        "CheckMate 016研究：Nivolumab联合舒尼替尼或培唑帕尼的临床研究",
        "Nivolumab联合舒尼替尼或培唑帕尼临床研究: 安全性",
        "Nivolumab联合舒尼替尼或培唑帕尼 临床研究: 抗肿瘤活性",
        "培唑帕尼+Pembrolizumab一线联合治疗mRCC的在研研究",
        "Atezolizumab联合贝伐珠单抗的Ib期研究 (NCT01633970):设计",
        "Atezolizumab联合贝伐珠单抗的Ib期研究：肾癌患者的安全性和疗效的中期分析(n=10)",
        "在研II期研究：Atezolizumab+贝伐珠单抗 vs Atezolizumab vs 舒尼替尼用于mRCC一线治疗",
        "目 录",
        "CheckMate-016研究：Nivolumab-伊匹单抗联合治疗mRCC患者的I期研究",
        "Checkmate-016研究：治疗相关的不良事件",
        "CheckMate 016研究: PFS",
        "正在进行的CheckMate-214 III期研究：Nivolumab+伊匹单抗对比舒尼替尼单药一线治疗mRCC",
        "主要肾癌在研免疫治疗研究的预计完成日期",
        "调 研",
        "调研结果",
        "中国晚期肾癌患者还将长期依赖靶向治疗",
        "总 结"
    ];

    var imageArray = ["5-RenalProgress-0001.png","5-RenalProgress-0002.png","5-RenalProgress-0003.png",
                    "5-RenalProgress-0004.png","5-RenalProgress-0005.png","5-RenalProgress-0006.png",
                    "5-RenalProgress-0007.png","5-RenalProgress-0008.png","5-RenalProgress-0009.png",
                    "5-RenalProgress-0010.png","5-RenalProgress-0011.png","5-RenalProgress-0012.png",
                    "5-RenalProgress-0013.png","5-RenalProgress-0014.png","5-RenalProgress-0015.png",
                    "5-RenalProgress-0016.png","5-RenalProgress-0017.png","5-RenalProgress-0018.png",
                    "5-RenalProgress-0019.png","5-RenalProgress-0020.png","5-RenalProgress-0021.png",
                    "5-RenalProgress-0022.png","5-RenalProgress-0023.png","5-RenalProgress-0024.png",
                    "5-RenalProgress-0025.png","5-RenalProgress-0026.png","5-RenalProgress-0027.png",
                    "5-RenalProgress-0028.png","5-RenalProgress-0029.png","5-RenalProgress-0030.png",
                    "5-RenalProgress-0031.png","5-RenalProgress-0032.png","5-RenalProgress-0033.png",
                    "5-RenalProgress-0034.png","5-RenalProgress-0035.png","5-RenalProgress-0036.png",
                    "5-RenalProgress-0037.png","5-RenalProgress-0038.png","5-RenalProgress-0039.png",
                    "5-RenalProgress-0040.png","5-RenalProgress-0041.png","5-RenalProgress-0042.png",
                    "5-RenalProgress-0043.png","5-RenalProgress-0044.png"];

    var timeArray = [0,18,50,78,129,172,252,268,326,352,388,424,467,486,537,585,640,706,752,830,865,915,975,1019,1040,
                    1072,1133,1177,1210,1252,1298,1363,1407,1489,1525,1587,1612,1641,1680,1711,1762,1804,1815,1833,
                    1917,1989,2062,2100];

    var showTimeArray = ["0:00","0:18","0:50","1:18","2:09","2:52","4:12","4:28","5:26","5:52","6:28","7:04","7:47",
                         "8:06","8:57","9:45","10:40","11:46","12:32","13:50","14:25","15:15","16:15","16:59","17:20",
                         "17:52","18:53","19:37","20:10","20:52","21:38","22:43","23:27","24:49","25:25","26:27",
                         "26:52","27:21","28:00","28:31","29:22","30:04","30:15","30:33","31:57","33:09","34:22",
                         "35:00"];

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

var dirPath = "course/5-RenalProgress/";

// when video or audio time changed, call this function.
var timeUpdate = function(track){
    var currentTime = Math.floor(track.currentTime).toString();
    //var duration = Math.floor(track.duration).toString();
    changeImageSrcPageNumber(currentTime, dirPath);
};