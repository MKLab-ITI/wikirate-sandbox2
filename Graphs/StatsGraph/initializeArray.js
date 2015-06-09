function initSources(){
   var sources =[
     ['http://en.wikipedia.org/',21951,1602],
     ['http://www.forbes.com/',13826,1995],
     ['http://features.peta.org/',
     8040,
     1727],
     ['http://www.newsweek.com/',
     4854,
     493],
     ['http://guide.ethical.org.au/',
     4265,
     1162],
     ['http://ethisphere.com/',
     1035,
     295],
     ['http://www.goodcompanyindex.com/',
     777,
     108],
     ['www.peri.umass.edu/',
     594,
     99],
     ['http://www.measureup.org.uk/',
     462,
     55],
     ['http://www.accesstonutrition.org/',
     462,
     21],
     ['http://www.bsr.org/',
     234,
     234],
     ['http://www.accesstomedicineindex.org/',
     140,
     20],
     ['http://www.eiccoalition.org/',
     101,
     101],
     ['http://www.fairlabor.org/',
     88,
     44],
     ['http://ww2.epeat.net/CompanyList.aspx',
     57,
     57]];
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
   labels[0] = ["forbes", "Newsweek", "in Ethispere List", "BSR", "Ethical Guide", "Good Company Index", "EICC", "in Peri List", "Peta", "measure UP", "EPEAT", "Medicine Index", "Nutrition Index", "Fairlabor"];
   labels[1] = ["Wikipedia","Newsweek","in Ethispere List","BSR","Ethical Guide","Good Company Index","in Peri List","EICC","Peta","Medicine Index","EPEAT","Nutrition Index","Fairlabor","measure UP"];
   labels[2] = ["Ethical Guide","Wikipedia","forbes","Newsweek","in Ethisphere List","BSR","Good Company Index","Medicine Index","Nutrition Index","Fairlabor","measure UP","in Peri List","EPEAT","EICC"];
   labels[3] = ["forbes","Wikipedia","BSR","in Ethispere List","Good Company Index","Ethical Guide","in Peri List","EICC","Peta","Medicine Index","EPEAT","Nutrition Index","Fairlabor","measure UP"];
   labels[4] = ["forbes","Wikipedia","Peta","Newsweek","BSR","in Ethisphere List","Good Company Index","in Peri List","Nutrition Index","Fairlabor","measure UP","Medicine Index","EICC","EPEAT"];
   labels[5] = ["Wikipedia","forbes","Newsweek","BSR","Ethical Guide","Good Company Index","in Peri List","EICC","Peta","Nutrition Index","EPEAT","Fairlabor","Medicine Index","measure UP"];
   labels[6] = ["forbes","Wikipedia","Newsweek","in Ethisphere List","BSR","in Peri List","Ethical Guide","EICC","Peta","EPEAT","Medicine Index","Nutrition Index","Fairlabor","measure UP"];
   labels[7] = ["forbes","Wikipedia","Newsweek","Good Company Index","in Ethisphere List","Ethical Guide","BSR","EICC","Peta","EPEAT","measure UP","Fairlabor","Medicine Index","Nutrition Index"];
   labels[8] = ["Wikipedia","Ethical Guide","forbes","BSR","Newsweek","in Ethisphere List","Peta","EPEAT","Fairlabor","Good Company Index","EICC","in Peri List","Medicine Index","Nutrition Index"];
   labels[9] = ["Wikipedia","forbes","Ethical Guide","in Ethisphere List","Newsweek","BSR","Good Company Index","Peta","EPEAT","in Peri list","Fairlabor","measure UP","Medicine Index","EICC"];
   labels[10] = ["Wikipedia","forbes","newsweek","in Ethispere List","Ethical Guide","Good Company Index","EICC","in Peri List","Medicine Index","Peta","EPEAT","Nutrition Index","measure UP","Fairlabor"];
   labels[11] = ["forbes","Wikipedia","Newsweek","BSR","Ethical Guide","Peta","in Ethisphere List","Good Company Index","EPEAT","Nutrition Index","Fairlabor","in Peri List","EICC","measure UP"];
   labels[12] = ["Wikipedia","forbes","BSR","Newsweek","in Ethisphere List","EPEAT","Good Company Index","Ethical Guide","in Peri list","Fairlabor","Peta","measure UP","Medicine Index","Nutrition Index"];
   labels[13] = ["Wikipedia","Ethical Guide","forbes","Newsweek","in Ethisphere List","BSR","measure UP","Good Company Index","Peta","EICC","in Peri List","Nutrition Index","Medicine Index","EPEAT"];
   labels[14] =  ["Wikipedia","forbes","EICC","in Ethisphere List","Newsweek","BSR","Good Company Index","Ethical Guide","measure UP","in Peri List","Peta","Medicine Index","Nutrition Index","Fairlabor"];
   return labels;
}

function initData(){
   var data=[];
   data[0] = ["1376","398","195","156","100","90","73","57","50","21","20","16","15","12"];
   data[1] = ["1376","451","163","142","108","101","76","50","24","19","19","11","6","5"];
   data[2] = ["66","50","24","16","13","10","9","5","1","1","1","1","0","0"];
   data[3] = ["451","398","90","87","80","59","44","19","16","16","6","6","4","2"];
   data[4] = ["108","100","66","59","43","32","17","16","10","10","7","6","3","2"];
   data[5] = ["195","163","87","53","32","29","20","14","13","8","7","4","3","2"];
   data[6] = ["101","90","80","29","28","22","17","11","9","4","3","3","1","0"];
   data[7] = ["72","57","44","22","20","16","14","2","1","1","0","0","0","0"];
   data[8] = ["21","7","5","4","2","2","1","1","1","0","0","0","0","0"];
   data[9] = ["15","11","10","8","6","5","3","1","0","0","0","0","0","0"];
   data[10] = ["156","142","90","53","43","28","21","14","13","10","6","5","4","3"];
   data[11] = ["19","16","16","13","6","5","3","3","0","0","0","0","0","0"];
   data[12] = ["73","50","21","19","14","14","11","3","2","1","0","0","0","0"];
   data[13] = ["12","10","6","4","4","3","1","1","1","1","0","0","0","0"];
   data[14] = ["20","19","14","7","6","6","4","2","1","1","0","0","0","0"];   
   return data;
}