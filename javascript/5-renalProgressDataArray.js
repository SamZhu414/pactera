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

    var timeArray = [0,17,49,103,146,190,229,268,272,335,353,363,481,521,540,586,605,630,688,694,705,757,820,896,908,
                    997,1135,1150,1202,1227,1252,1310,1333,1377,1429,1434,1494,1550,1612,1659,1706,1745,1761,1774];

    var showTimeArray = ["0:00","0:17","0:49","1:43","2:26","3:10","3:49","4:28","4:32","5:35","5:53","6:03","8:01",
                        "8:41","9:00","9:46","10:05","10:30","11:28","11:34","11:45","12:37","13:40","14:56","15:08",
                        "16:37","18:55","19:10","20:02","20:52","20:27","21:50","22:13","22:57","23:49","23:54",
                        "24:54","25:50","26:52","27:39","28:26","29:05","29:21","29:34"];

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