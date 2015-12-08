/**
 * Created by Sam on 11/10/2015.
 */
var dataArray = function(){
    var titleArray = [
        "晚期肾细胞癌药物治疗中的生物标记物探索",
        "目 录",
        "我们有什么类型的生物标记物?",
        "预后性与预测性生物标志物",
        "生物标志物在其他肿瘤的应用",
        "肾细胞癌生物标记物研究的现状",
        "生物标志物的发展",
        "挑战1：肿瘤的异质性",
        "挑战2：高样本量",
        "目 录",
        "IMDC队列中BMI与疗效相关",
        "外部验证队列同样证实BMI与疗效相关",
        "肿瘤中的中性粒细胞与淋巴细胞比值（NLR）",
        "IMDC队列和外部验证队列中，基线时的中性粒细胞与淋巴细胞比值",
        "COMPARZ研究：PD-L1表达与PFS的相关性",
        "COMPARZ研究：PD-L1的表达与OS的相关性",
        "PD-L1是接受TKI治疗患者OS的独立预后因素",
        "目 录",
        "生物标记物的来源",
        "临床研究中生物标志物分析样本采集的不一致性",
        "预测性生物标志物的研究方向",
        "预测性生物标志物的研究方向",
        "临床特征：血压不能作为阿昔替尼疗效的替代标志物",
        "临床特征：血压也不是舒尼替尼疗效的替代标志物",
        "预测性生物标志物研究方向",
        "RECORD-3研究：依维莫司和舒尼替尼序贯的前瞻性、随机、开放临床研究",
        "RECORD-3研究：在依维莫司和舒尼替尼间，预测循环生物标志物的获益",
        "mTOR通路中的S6RP磷酸化",
        "mTOR和S6RP的磷酸化：依维莫司应答的潜在预测标记物",
        "预测性生物标志物研究方向",
        "预测性生物标志物研究方向",
        "培唑帕尼治疗患者中IL-8多态性与PFS相关",
        "培唑帕尼治疗患者中的SNP:IL-8与OS相关",
        "COMPARZ研究:TKI治疗的患者中不同IL8 2767A>T(rs1126647)基因型的PFS和OS",
        "IL-8单核苷酸多样性可能预测对培唑帕尼和舒尼替尼的应答",
        "全基因组关联研究（GWAS）",
        "使TKI获益的生物标志物的SNPs的GWAS分析",
        "预测性生物标志物研究方向",
        "miRNA能否作为预测性生物标志物?",
        "调 研",
        "调研结果",
        "总 结"
    ];

    var imageArray = ["4-LateRenal-0001.png","4-LateRenal-0002.png","4-LateRenal-0003.png","4-LateRenal-0004.png",
                    "4-LateRenal-0005.png","4-LateRenal-0006.png","4-LateRenal-0007.png","4-LateRenal-0008.png",
                    "4-LateRenal-0009.png","4-LateRenal-0010.png","4-LateRenal-0011.png","4-LateRenal-0012.png",
                    "4-LateRenal-0013.png","4-LateRenal-0014.png","4-LateRenal-0015.png","4-LateRenal-0016.png",
                    "4-LateRenal-0017.png","4-LateRenal-0018.png","4-LateRenal-0019.png","4-LateRenal-0020.png",
                    "4-LateRenal-0021.png","4-LateRenal-0022.png","4-LateRenal-0023.png","4-LateRenal-0024.png",
                    "4-LateRenal-0025.png","4-LateRenal-0026.png","4-LateRenal-0027.png","4-LateRenal-0028.png",
                    "4-LateRenal-0029.png","4-LateRenal-0030.png","4-LateRenal-0031.png","4-LateRenal-0032.png",
                    "4-LateRenal-0033.png","4-LateRenal-0034.png","4-LateRenal-0035.png","4-LateRenal-0036.png",
                    "4-LateRenal-0037.png","4-LateRenal-0038.png","4-LateRenal-0039.png","4-LateRenal-0040.png",
                    "4-LateRenal-0041.png","4-LateRenal-0042.png"];

    var timeArray = [0,6,21,72,94,172,248,306,338,382,398,435,460,476,508,556,583,616,627,692,738,780,783,818,845,
                    849,872,908,930,965,979,989,1012,1050,1100,1140,1208,1261,1275,1310,1388,1409];

    var showTimeArray = ["0:00","0:06","0:21","1:12","1:34","2:52","4:08","5:06","5:38","6:22","6:38","7:15","7:40",
                        "7:56","8:28","9:16","9:43","10:16","10:27","11:32","12:18","13:00","13:03","13:38","14:05",
                        "14:09","14:32","15:08","15:30","16:05","16:19","16:29","16:52","17:30","18:20","19:00",
                        "20:08","21:01","21:15","21:50","23:08","23:29"];

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


var dirPath = "course/4-LateRenal/";

// when video or audio time changed, call this function.
var timeUpdate = function(track){
    var currentTime = Math.floor(track.currentTime).toString();
    //var duration = Math.floor(track.duration).toString();
    changeImageSrcPageNumber(currentTime, dirPath);
};