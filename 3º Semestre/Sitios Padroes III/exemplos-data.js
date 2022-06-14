let data = new Date(Date.parse("March 10 , 2018"));
data
Sat Mar 10 2018 00:00:00 GMT-0300 (Horário Padrão de Brasília)
data.getDate();
10
data.getDay();
6
data.getDay()+1;
7
data.getFullYear();
2018
data.getDate()+"/"+ data.getMonth()+ data.getFullYear();
'10/22018'
data.getDate()+"/"+ data.getMonth()+ "/" +data.getFullYear();
'10/2/2018'
data.getDate()+"/"+ (data.getMonth()+1)+ "/" +data.getFullYear();
'10/3/2018'