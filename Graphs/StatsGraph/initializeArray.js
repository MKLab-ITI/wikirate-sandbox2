function initSources(){
   var sources =[
     ['http://en.wikipedia.org/',105135,11888],
     ['http://www.forbes.com/',13826,1995],
     ['http://features.peta.org/',8040,1727],
     ['http://www.newsweek.com/',19854,1155],
     ['http://guide.ethical.org.au/',4800,1231],
     ['http://ethisphere.com/',1035,295],
     ['http://www.goodcompanyindex.com/',777,108],
     ['www.peri.umass.edu/',594,99],
     ['http://www.measureup.org.uk/',550,55],
     ['http://www.accesstonutrition.org/',462,21],
     ['http://www.bsr.org/',240,234],
     ['http://www.accesstomedicineindex.org/',140,20],
     ['http://www.eiccoalition.org/',101,101],
     ['http://www.fairlabor.org/',88,44],
     ['http://ww2.epeat.net/CompanyList.aspx',57,57],
     ['https://www.bcorporation.net/community/find-a-b-corp',11934,1280],
     ['http://sustainability-ranking.channelnewsasia.com/top100.html',100,94],
     ['https://www.unglobalcompact.org/',50121,8983],
     ['http://www.epa.gov/greenpower/toplists/partner100.htm',3412,475],
     ['https://www.2020wob.com/company-directory',1866,1830],
     ['http://www.rspo.org/members/all',4810,2176],
     ['http://ec.europa.eu/transparencyregister/public/consultation/listlobbyists.do?',98146,7915]];
  
   return sources;
}

function getDataLine(arrayData, arrayLabels){
   var data = {
      title: "Hey yo",
    labels: arrayLabels,
    datasets: [
        {
            label: "Overlapped Companies",
            fillColor: "rgba(0,0,220,0.8)",
            strokeColor: "rgba(0,0,220,1)",
            pointColor: "rgba(0,0,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: arrayData
        }
    ],
    multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>"
};

return data;
}

function initLabels(){
   var labels = [];
   labels[0] = ["Forbes", "UN Global Compact", "Newsweek", "2020wob", "EUtransparency", "Ethical Guide", "Ethisphere", "BSR", "RSPO", "Good Company Index", "Peri", "EICC", "Peta", "Sustainability Ranking Asia", "EPA", "EPEAT", "Nutrition Index", "Medicine Index", "BCorporations", "Measure UP", "Fairlabor"];
   labels[1] = ["Wikipedia", "Newsweek", "2020wob", "UN Global Compact", "EUtransparency", "Ethisphere", "BSR", "Ethical Guide", "Good Company Index", "RSPO", "Peri", "Sustainability Ranking Asia", "EICC", "Peta", "EPEAT", "Medicine Index", "EPA", "Nutrition Index", "Fairlabor", "Measure UP", "BCorporations"];
   labels[2] = ["Ethical Guide", "Wikipedia", "Newsweek", "2020wob", "Forbes", "BCorporations", "UN Global Compact", "RSPO", "Ethisphere", "EUtransparency", "BSR", "Good Company Index", "EPA", "Medicine Index", "Fairlabor", "Peri", "Measure UP", "Nutrition Index", "EPEAT", "EICC", "Sustainability Ranking Asia"];
   labels[3] = ["Forbes", "Wikipedia", "2020wob", "UN Global Compact", "EUtransparency", "Ethisphere", "BSR", "Ethical Guide", "Good Company Index", "Peri", "RSPO", "EICC", "Peta", "Sustainability Ranking Asia", "Medicine Index", "EPA", "EPEAT", "Nutrition Index", "Fairlabor", "Measure UP", "BCorporations"];
   labels[4] = ["Wikipedia", "Forbes", "Newsweek", "2020wob", "UN Global Compact", "RSPO", "Peta", "EUtransparency", "BSR", "Ethisphere", "EICC", "Good Company Index", "Peri", "EPEAT", "Fairlabor", "Nutrition Index", "BCorporations", "EPA", "Measure UP", "Sustainability Ranking Asia", "Medicine Index"];
   labels[5] = ["Wikipedia", "Forbes", "Newsweek", "2020wob", "UN Global Compact", "EUtransparency", "BSR", "Ethical Guide", "Good Company Index", "RSPO", "Peri", "EICC", "Peta", "EPA", "Nutrition Index", "EPEAT", "Fairlabor", "BCorporations", "Sustainability Ranking Asia", "Medicine Index", "Measure UP"];
   labels[6] = ["Newsweek", "Forbes", "2020wob", "Wikipedia", "EUtransparency", "Ethisphere", "BSR", "Ethical Guide", "Peri", "UN Global Compact", "EICC", "Peta", "RSPO", "EPEAT", "Nutrition Index", "Medicine Index", "EPA", "Fairlabor", "BCorporations", "Sustainability Ranking Asia", "Measure UP"];
   labels[7] = ["Wikipedia", "Newsweek", "Forbes", "2020wob", "EUtransparency", "Good Company Index", "Ethisphere", "UN Global Compact", "Ethical Guide", "BSR", "RSPO", "EICC", "Peta", "EPEAT", "Sustainability Ranking Asia", "Fairlabor", "BCorporations", "EPA", "Measure UP", "Nutrition Index", "Medicine Index"];
   labels[8] = ["Wikipedia", "Ethical Guide", "Forbes", "Newsweek", "BSR", "UN Global Compact", "EUtransparency", "Ethisphere", "Peta", "Fairlabor", "RSPO", "EPA", "2020wob", "Good Company Index", "EPEAT", "BCorporations", "Peri", "EICC", "Sustainability Ranking Asia", "Nutrition Index", "Medicine Index"];
   labels[9] = ["Wikipedia", "Forbes", "Newsweek", "RSPO", "Ethical Guide", "UN Global Compact", "Ethisphere", "2020wob", "EUtransparency", "BSR", "Good Company Index", "Peta", "EPA", "Fairlabor", "EPEAT", "BCorporations", "Peri", "EICC", "Sustainability Ranking Asia", "Measure UP", "Medicine Index"];
   labels[10] = ["Wikipedia", "Newsweek", "Forbes", "2020wob", "UN Global Compact", "EUtransparency", "Ethical Guide", "Ethisphere", "Good Company Index", "EICC", "RSPO", "Peri", "Medicine Index", "Peta", "EPA", "EPEAT", "Nutrition Index", "Sustainability Ranking Asia", "Measure UP", "Fairlabor", "BCorporations"];
   labels[11] = ["Forbes", "Newsweek", "Wikipedia", "BSR", "UN Global Compact", "EUtransparency", "2020wob", "Ethical Guide", "Peta", "Ethisphere", "Good Company Index", "RSPO", "Fairlabor", "EPEAT", "BCorporations", "Peri", "EICC", "Sustainability Ranking Asia", "EPA", "Measure UP", "Nutrition Index"];
   labels[12] = ["Wikipedia", "Forbes", "Newsweek", "2020wob", "Ethical Guide", "BSR", "EUtransparency", "UN Global Compact", "Ethisphere", "EPEAT", "Good Company Index", "Sustainability Ranking Asia", "Peri", "EPA", "Fairlabor", "RSPO", "Peta", "BCorporations", "Measure UP", "Nutrition Index", "Medicine Index"];
   labels[13] = ["Ethical Guide", "Wikipedia", "Newsweek", "Forbes", "2020wob", "UN Global Compact", "Ethisphere", "EUtransparency", "BSR", "RSPO", "Peta", "Good Company Index", "EPEAT", "BCorporations", "EICC", "Sustainability Ranking Asia", "EPA", "Measure UP", "Peri", "Nutrition Index", "Medicine Index"];
   labels[14] = ["Forbes", "Wikipedia", "Ethical Guide", "Newsweek", "EICC", "UN Global Compact", "Ethisphere", "BSR", "2020wob", "Sustainability Ranking Asia", "Good Company Index", "EUtransparency", "Fairlabor", "Peri", "EPA", "Peta", "BCorporations", "RSPO", "Measure UP", "Nutrition Index", "Medicine Index"];
   labels[15] = ["Peta", "UN Global Compact", "Wikipedia", "EPA", "Ethical Guide", "Ethisphere", "RSPO", "EUtransparency", "2020wob", "Forbes", "Newsweek", "Good Company Index", "Fairlabor", "EPEAT", "Peri", "EICC", "Sustainability Ranking Asia", "Measure UP", "Nutrition Index", "Medicine Index", "BSR"];
   labels[16] = ["Forbes", "Wikipedia", "UN Global Compact", "Newsweek", "EICC", "Ethical Guide", "EPEAT", "EUtransparency", "Ethisphere", "BSR", "RSPO", "Fairlabor", "Peri", "EPA", "2020wob", "Peta", "Good Company Index", "BCorporations", "Measure UP", "Nutrition Index", "Medicine Index"];
   labels[17] = ["Wikipedia", "Forbes", "EUtransparency", "Newsweek", "RSPO", "2020wob", "Ethisphere", "BSR", "Ethical Guide", "Sustainability Ranking Asia", "Good Company Index", "BCorporations", "Peri", "EICC", "Peta", "EPA", "Medicine Index", "EPEAT", "Nutrition Index", "Fairlabor", "Measure UP"];
   labels[18] = ["Wikipedia", "Newsweek", "UN Global Compact", "2020wob", "Forbes", "BCorporations", "Ethisphere", "EUtransparency", "Ethical Guide", "Peta", "BSR", "RSPO", "Good Company Index", "EICC", "Fairlabor", "EPEAT", "Sustainability Ranking Asia", "Measure UP", "Nutrition Index", "Peri", "Medicine Index"];
   labels[19] = ["Wikipedia", "Newsweek", "Forbes", "Ethisphere", "EUtransparency", "BSR", "UN Global Compact", "Good Company Index", "Ethical Guide", "Peri", "EICC", "RSPO", "Peta", "EPA", "Medicine Index", "Nutrition Index", "Fairlabor", "EPEAT", "BCorporations", "Sustainability Ranking Asia", "Measure UP"];
   labels[20] = ["Wikipedia", "UN Global Compact", "Forbes", "Ethical Guide", "EUtransparency", "Newsweek", "2020wob", "Ethisphere", "BSR", "Peta", "Nutrition Index", "Good Company Index", "EPA", "BCorporations", "Peri", "Fairlabor", "Sustainability Ranking Asia", "EICC", "Measure UP", "Medicine Index", "EPEAT"];
   labels[21] = ["Wikipedia", "UN Global Compact", "Forbes", "Newsweek", "2020wob", "BSR", "Ethisphere", "RSPO", "Ethical Guide", "Good Company Index", "Peri", "EICC", "Peta", "Medicine Index", "EPA", "Nutrition Index", "Sustainability Ranking Asia", "EPEAT", "BCorporations", "Fairlabor", "Measure UP"];
   return labels;
}

function initData(){
   var data=[];
   data[0] = ["1236", "913", "803", "745", "479", "283", "178", "169", "153", "96", "76", "57", "43", "41", "27", "17", "17", "16", "14", "12", "10"];
   data[1] = ["1236", "900", "558", "428", "281", "163", "142", "133", "101", "75", "72", "51", "50", "24", "19", "19", "12", "11", "6", "5", "3"];
   data[2] = ["63", "43", "30", "25", "24", "23", "15", "15", "13", "12", "10", "9", "8", "5", "1", "1", "1", "1", "0", "0", "0"];
   data[3] = ["900", "803", "591", "267", "231", "153", "150", "128", "105", "75", "56", "45", "30", "19", "17", "15", "14", "11", "9", "5", "3"];
   data[4] = ["283", "133", "128", "87", "75", "68", "63", "60", "57", "40", "25", "22", "16", "15", "11", "9", "8", "8", "7", "6", "5"];
   data[5] = ["178", "163", "153", "131", "92", "68", "53", "40", "29", "22", "20", "14", "13", "10", "8", "7", "4", "4", "4", "3", "2"];
   data[6] = ["105", "101", "99", "96", "37", "29", "28", "22", "22", "19", "11", "9", "8", "4", "3", "3", "2", "1", "1", "0", "0"];
   data[7] = ["76", "75", "72", "69", "27", "22", "20", "17", "16", "14", "3", "2", "1", "1", "1", "0", "0", "0", "0", "0", "0"];
   data[8] = ["12", "7", "5", "5", "4", "3", "3", "2", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0"];
   data[9] = ["17", "11", "11", "11", "9", "8", "8", "8", "7", "5", "3", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0"];
   data[10] = ["169", "150", "142", "109", "88", "71", "57", "53", "28", "21", "20", "14", "13", "10", "8", "6", "5", "4", "4", "3", "0"];
   data[11] = ["19", "17", "16", "13", "12", "11", "9", "5", "5", "3", "3", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
   data[12] = ["57", "50", "45", "44", "25", "21", "17", "16", "14", "14", "11", "10", "2", "2", "1", "1", "0", "0", "0", "0", "0"];
   data[13] = ["11", "10", "9", "6", "6", "4", "4", "3", "3", "2", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0"];
   data[14] = ["19", "17", "15", "14", "14", "10", "7", "6", "6", "5", "4", "4", "1", "1", "1", "0", "0", "0", "0", "0", "0"];
   data[15] = ["23", "17", "14", "11", "8", "4", "4", "4", "4", "3", "3", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0"];
   data[16] = ["51", "41", "35", "19", "10", "6", "5", "5", "4", "4", "2", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0"];
   data[17] = ["913", "428", "329", "267", "111", "99", "92", "88", "75", "35", "19", "17", "17", "16", "15", "14", "12", "10", "8", "4", "3"];
   data[18] = ["27", "15", "14", "14", "12", "11", "10", "10", "8", "8", "8", "5", "2", "2", "1", "1", "1", "1", "1", "0", "0"];
   data[19] = ["745", "591", "558", "131", "125", "109", "99", "99", "87", "69", "44", "27", "25", "14", "9", "8", "6", "6", "4", "1", "1"];
   data[20] = ["153", "111", "75", "68", "67", "56", "27", "22", "20", "15", "11", "8", "5", "4", "3", "2", "2", "1", "1", "1", "0"];
   data[21] = ["479", "329", "281", "231", "125", "71", "68", "67", "60", "37", "27", "17", "12", "11", "10", "7", "5", "4", "4", "3", "3"];
   return data;
}