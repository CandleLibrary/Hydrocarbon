export default ((s,u,g)=>({
         fn : {}, 
/************** Maps **************/
    st:s,
    /* Types */ ty: {1:1,2:1,3:2,4:2,8:3,16:3,32:4,64:4,128:5,256:5,264:6,512:6,1025:7,2049:7,4097:8,8193:8,16385:9,32769:9,number:10,num:10,identifier:11,string:11,white_space:12,open_bracket:12,close_bracket:13,operator:13,symbol:14,new_line:14,data_link:15,number_bin:15,number_oct:16,number_hex:16,number_int:17,number_sci:17,number_flt:18,alpha_numeric:18,white_space_new_line:30,id:19,str:20,ws:20,ob:21,cb:21,op:22,sym:22,nl:23,dl:23,int:24,integer:24,bin:25,binary:25,oct:26,octal:26,hex:27,hexadecimal:27,flt:28,float:28,sci:29,scientific:29,any:31,keyword:32},
    /* Symbols To Inject into the Lexer */ sym : ["((","))","<>","+>","=>","(*","(+","::","τ","θ","ɛ","$eof"],
    /* Symbol Lookup map */ lu : new Map([["num",1],["id",1],["alpha_numeric",2],["str",2],["ws",3],["ob",3],["cb",4],["op",4],["sym",5],["nl",5],["white_space_new_line",6],["dl",6],["binary",7],["octal",7],["hexadecimal",8],["integer",8],["scientific",9],["float",9],[1,10],[2,19],[4,20],[8,20],[16,21],[32,21],[64,22],[128,22],[256,23],[512,23],[1025,25],[2049,26],[4097,27],[8193,24],[16385,29],[32769,28],[3,18],[264,30],[200,31],[201,32],["<>",34],["+>",35],["→",36],[">",37],["│",38],["|",39],["[",40],["]",41],["(",42],["FORK",43],[")",44],["EXC",45],["ERR",46],["IGN",47],["RST",48],["RED",49],["^",50],[null,28],["{",82],["}",53],["err",54],["e",55],["cstr",57],["c",58],["return",59],["r",60],["=>",61],["@",70],["↦",67],["f",68],[":",69],["SYMBOL",71],["PREC",72],["IGNORE",73],["ERROR",74],["NAME",75],["EXT",76],["AS",78],["as",79],["IMPORT",80],["#",81],["(+",83],["(*",84],["?",85],["$eof",86],["ɛ",87],["θ",88],["g",89],["τ",90],["t",91],["\\",92],["::",93],["a",95],["b",96],["d",97],["A",98],["B",99],["C",100],["D",101],["E",102],["F",103],["_",109],["$",110]]),
    /* States */ sts : [0,1,2,3,2,4,2,2,2,2,5,6,7,6,8,9,10,11,12,13,13,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,30,32,33,24,34,34,35,36,37,34,34,38,39,39,34,40,41,42,43,44,44,44,45,46,47,48,49,50,51,52,53,29,54,55,56,57,58,59,60,61,6,6,2,2,62,63,64,6,65,66,66,66,67,68,69,70,69,6,71,72,54,69,73,74,72,75,76,77,78,78,79,80,81,82,83,84,85,86,86,6,87,6,88,88,89,90,91,92,93,94,95,96,97,98,98,99,99,99,99,100,99,99,94,101,102,103,103,104,105,106,107,108,106,106,109,110,111,112,111,113,114,114,115,114,116,114,117,114,118,119,120,121,121,122,123,124,125,126,127,127,106,128,129,130,131,17,132,133,134,94,135,136,134,137,138,139,140,141,142,7,7,7,7,143,144,145,146,147,148,149,150,149,149,149,151,152,152,153,154,155,156,157,158,159,160,161,162,17,17,6,163,94,164,165,166,167,168,94,169,170,171,172,173,174,175,176,106].map(i=>s[i]),
    /* Fork Map */fm: [],
    /*Goto Lookup Functions*/ gt:g[0].map(i=>i>=0?u[i]:[]),
/************ Functions *************/
    /* Environment Functions*/ fns: [(_,$)=>($.productions),(_,$,A,B)=>($.productions.meta={preambles:_[0],pos:B}),(_,$)=>((!(_[0].IMPORT_OVERRIDE||_[0].IMPORT_APPEND))?$.productions.push(_[0]):0),(_,$)=>($.refs.set(_[0].id,_[0]),null),(_,$)=>(_[1].id=$.productions.length,(!(_[1].IMPORT_OVERRIDE||_[1].IMPORT_APPEND))?$.productions.push(_[1]):0,$.productions),(_,$)=>($.refs.set(_[1].id,_[1]),_[0]),function (_,$,A,B){this.name=_[1];this.bodies=_[3];this.id=-1;$.functions.compileProduction(this,$,B);},function (_,$,A,B){this.IMPORT_OVERRIDE=true;this.name=_[1];this.bodies=_[3];this.id=-1;$.functions.compileProduction(this,$,B);},function (_,$,A){$.host_lex=A.copy();$.prod_name=_[_.length-1].name;},function (_,$,A,B){this.IMPORT_APPEND=true;this.name=_[1];this.bodies=_[3];this.id=-1;$.functions.compileProduction(this,$,B);},function (_,$,A){$.host_lex=A.copy();$.prod_name=_[_.length-1];},(_,$)=>($.body_count++,[_[0]]),(_,$)=>($.body_count++,_[0].push(_[2]),_[0]),function (_,$,A){$.host_lex=A.pk.copy();},_=>(_[0]),(_,$,A,B)=>(new $.fn.body([_[1]],$,B,undefined,!!_[0])),(_,$,A,B)=>(new $.fn.body([_[0]],$,B,undefined,!!null)),function (_){this.body=_[0];this.reduce=_[1];this.err=_[2];},function (){this.body=[];this.reduce=null;},function (_){this.reduce=null;this.body=[_[0]];},function (_){this.body=_[0];this.err=_[1];},function (_){this.body=_[0];this.reduce=_[1];},function (_){this.body=_[0];},(_,$)=>($.body_offset=0,[_[0]]),(_,$)=>($.body_offset=_[0].length,_[0].push(_[1]),_[0]),_=>(_[1].map(e=>(e.NO_BLANK=true,e))),()=>(true),function (_){this.IS_CONDITION=true;this.type="exc";this.sym=_[2];this.offset=-1;},function (_){this.IS_CONDITION=true;this.type="err";this.sym=_[2];this.offset=-1;},function (_){this.IS_CONDITION=true;this.type="ign";this.sym=_[2];this.offset=-1;},function (_){this.IS_CONDITION=true;this.type="rst";this.sym=_[2];this.offset=-1;},function (_){this.IS_CONDITION=true;this.type="red";this.sym=_[2];this.offset=-1;},function (_){this.id=_[1];this.name=_[3];this.txt="";this.env=true;this.IS_CONDITION=true;},function (_){this.id=_[1];this.txt=_[3];this.env=false;this.name="";this.IS_CONDITION=true;},function (_){this.type="ERROR";this.txt=_[3];this.name="";this.env=false;this.ref="";this.IS_CONDITION=true;},function (_){this.type="ERROR";this.txt="";this.name=_[3];this.env=true;this.ref="";this.IS_CONDITION=true;},function (_){this.type=(_[1][0]=="c")?"CLASS":"RETURNED";this.txt=_[3];this.name="";this.env=false;this.ref="";this.IS_CONDITION=true;},function (_){this.type=(_[1][0]=="c")?"CLASS":"RETURNED";this.txt="";this.name=_[3];this.env=true;this.ref="";this.IS_CONDITION=true;},function (_,$){this.type=(_[1][0]=="c")?"CLASS":"RETURNED";this.ref=_[3];this.txt="";this.name="";this.env=true;this.IS_CONDITION=true;const ref=$.refs.get(this.ref);if(ref){if(Array.isArray(ref)){ref.push(this);}else {let ref=$.refs.get(this.ref);this.env=ref.env;this.name=ref.name;this.txt=ref.txt;}}else {$.refs.set(this.ref,[this]);}},function (_){this.type="INLINE";this.txt=_[2];this.name="";this.env=false;this.IS_CONDITION=true;},function (_){this.type="INLINE";this.txt="";this.name=_[2];this.env=true;this.IS_CONDITION=true;},_=>(_[0]+_[1]),_=>(_[0]+_[1]+_[2]),_=>(([..._[0],_[1]])),_=>([_[0]]),function (_,$,A){this.type="symbols";this.symbols=_[2];this.symbols.map(sym=>sym.val?sym.val:sym).forEach(A.addSymbol.bind(A));},function (_,$){this.grammar_stamp=$.stamp;this.type="precedence";this.terminal=_[2];this.val=parseInt(_[3]);},function (_,$){this.grammar_stamp=$.stamp;this.type="ignore";this.symbols=_[2];},function (_,$){this.grammar_stamp=$.stamp;this.type="error";this.symbols=_[2];},function (_){this.type="name";this.id=_[2];},function (_){this.type="ext";this.id=_[2];},_=>(_[0]+""),function (_){this.val=_[1];},function (_,$,A,B){this.type="symbol";this.val=_[0];this.pos=B;},_=>(_[0].IS_OPTIONAL=true,_[0]),function (_,$,A,B){this.type="eof";this.val="$eof";this.pos=B;},function (_,$,A,B){this.type="empty";this.pos=B;},function (_,$,A,B){this.type="generated";this.val=_[1];this.pos=B;},function (_,$,A,B){this.type="literal";this.val=""+_[1];this.pos=B;},function (_,$,A,B){this.type="escaped";this.val=_[1];this.pos=B;},function (_,$,A,B){this.type="production";this.name=_[0];this.val=-1;this.pos=B;},_=>({val:parseFloat(_[0]),type:"hex",original_val:_[0]}),_=>({val:parseFloat(_[0]),type:"bin",original_val:_[0]}),_=>({val:parseFloat(_[0]),type:"oct",original_val:_[0]}),_=>({val:parseFloat(_[0]),type:"sci",original_val:_[0]}),_=>({val:parseFloat(_[0]),type:"flt",original_val:_[0]}),_=>({val:parseFloat(_[0]),type:"int",original_val:_[0]})],
    /* State Action Functions */ sa : [e=>42,e=>210,(a,b,c,e,f,g,p)=>(p.rv(g[0],1,0,a,b,c,e,f),9),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),49163),(a,b,c,e,f,g,p)=>(p.rv(g[44],1,0,a,b,c,e,f),47115),e=>522,e=>98,e=>258,e=>346,e=>90,e=>106,e=>146,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),77835),e=>130,e=>178,e=>186,e=>194,e=>218,e=>250,e=>242,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),141323),e=>266,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),169995),e=>274,e=>322,e=>290,e=>306,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),112651),(a,b,c,e,f,g,p)=>(p.rnv(g[53],1,0,a,b,c,e,f),112651),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),122891),e=>314,e=>362,e=>354,e=>394,e=>434,e=>402,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),126987),e=>442,e=>466,e=>450,e=>458,e=>498,(a,b,c,e,f,g,p)=>(p.rnv(g[49],4,0,a,b,c,e,f),61475),e=>602,(a,b,c,e,f,g,p)=>(p.rv(g[51],1,0,a,b,c,e,f),69643),(a,b,c,e,f,g,p)=>(p.rv(g[44],1,0,a,b,c,e,f),65547),e=>530,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),67595),(a,b,c,e,f,g,p)=>(p.rn(2,a,b,c,e,f),122899),e=>538,(a,b,c,e,f,g,p)=>(p.rnv(g[57],2,0,a,b,c,e,f),124947),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),86027),(a,b,c,e,f,g,p)=>(p.rv(g[14],1,0,a,b,c,e,f),83979),e=>562,e=>650,e=>642,e=>626,e=>634,(a,b,c,e,f,g,p)=>(p.rnv(g[58],2,0,a,b,c,e,f),131091),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),129035),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),167947),(a,b,c,e,f,g,p)=>(p.rnv(g[59],2,0,a,b,c,e,f),133139),(a,b,c,e,f,g,p)=>(p.rn(2,a,b,c,e,f),126995),(a,b,c,e,f,g,p)=>(p.rnv(g[50],4,0,a,b,c,e,f),63523),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),110603),(a,b,c,e,f,g,p)=>(p.rnv(g[53],1,0,a,b,c,e,f),110603),(a,b,c,e,f,g,p)=>(p.rv(g[44],1,0,a,b,c,e,f),98315),e=>690,e=>810,e=>770,e=>754,(a,b,c,e,f,g,p)=>(p.rv(g[44],1,0,a,b,c,e,f),71691),(a,b,c,e,f,g,p)=>(p.rv(g[43],2,0,a,b,c,e,f),65555),(a,b,c,e,f,g,p)=>(p.rv(g[41],2,0,a,b,c,e,f),69651),(a,b,c,e,f,g,p)=>(p.rnv(g[52],3,0,a,b,c,e,f),79899),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),81931),e=>786,e=>794,e=>834,(a,b,c,e,f,g,p)=>(p.rv(g[41],2,0,a,b,c,e,f),83987),e=>842,(a,b,c,e,f,g,p)=>(p.rnv(g[46],5,0,a,b,c,e,f),55339),(a,b,c,e,f,g,p)=>(p.rv(g[43],2,0,a,b,c,e,f),47123),(a,b,c,e,f,g,p)=>(p.rv(g[2],1,0,a,b,c,e,f),4107),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),43019),e=>818,(a,b,c,e,f,g,p)=>(p.rv(g[1],2,0,a,b,c,e,f),2067),(a,b,c,e,f,g,p)=>(p.rv(g[3],1,0,a,b,c,e,f),4107),(a,b,c,e,f,g,p)=>(p.rnv(g[47],4,0,a,b,c,e,f),57379),(a,b,c,e,f,g,p)=>(p.rv(g[43],2,0,a,b,c,e,f),98323),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),100363),(a,b,c,e,f,g,p)=>(p.rv(g[44],1,0,a,b,c,e,f),51211),(a,b,c,e,f,g,p)=>(p.rv(g[51],1,0,a,b,c,e,f),108555),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),104459),e=>946,e=>938,(a,b,c,e,f,g,p)=>(p.rv(g[43],2,0,a,b,c,e,f),71699),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),73739),(a,b,c,e,f,g,p)=>(p.rn(2,a,b,c,e,f),43027),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),139275),(a,b,c,e,f,g,p)=>(p.rnv(g[48],4,0,a,b,c,e,f),59427),e=>954,(a,b,c,e,f,g,p)=>(p.s(g[10],a,b,c,e,f),978),(a,b,c,e,f,g,p)=>(p.s(g[10],a,b,c,e,f),986),(a,b,c,e,f,g,p)=>(p.rv(g[4],2,0,a,b,c,e,f),4115),(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),4115),(a,b,c,e,f,g,p)=>(p.rv(g[5],2,0,a,b,c,e,f),4115),e=>994,e=>1010,e=>1034,(a,b,c,e,f,g,p)=>(p.rnv(g[53],2,0,a,b,c,e,f),100371),(a,b,c,e,f,g,p)=>(p.rv(g[41],2,0,a,b,c,e,f),108563),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),102411),e=>1018,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),8203),(a,b,c,e,f,g,p)=>(p.rnv(g[45],4,0,a,b,c,e,f),53283),(a,b,c,e,f,g,p)=>(p.rv(g[43],2,0,a,b,c,e,f),51219),(a,b,c,e,f,g,p)=>(p.rv(b.fn.importData,7,0,a,b,c,e,f),75835),(a,b,c,e,f,g,p)=>(p.rnv(b.fn.importProduction,3,0,a,b,c,e,f),137243),e=>1082,e=>1122,e=>1090,e=>1106,e=>1130,e=>1098,e=>1138,e=>1146,(a,b,c,e,f,g,p)=>(p.rnv(g[32],4,0,a,b,c,e,f),24611),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),143371),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),36875),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),38923),e=>1154,(a,b,c,e,f,g,p)=>(p.rv(b.fn.importData,8,0,a,b,c,e,f),75843),(a,b,c,e,f,g,p)=>(p.rnv(g[33],5,0,a,b,c,e,f),24619),(a,b,c,e,f,g,p)=>(p.rv(g[41],2,0,a,b,c,e,f),36883),e=>1186,(a,b,c,e,f,g,p)=>(p.rv(g[42],3,0,a,b,c,e,f),40987),e=>1354,e=>1298,e=>1418,e=>1474,e=>1394,(a,b,c,e,f,g,p)=>(p.rv(g[11],1,0,a,b,c,e,f),12299),(a,b,c,e,f,g,p)=>(p.rnv(g[7],4,0,a,b,c,e,f),6179),e=>1370,e=>1378,(a,b,c,e,f,g,p)=>(p.rv(g[16],1,0,a,b,c,e,f),14347),(a,b,c,e,f,g,p)=>(p.rnv(g[18],1,0,a,b,c,e,f),16395),(a,b,c,e,f,g,p)=>(p.rv(g[23],1,0,a,b,c,e,f),18443),e=>1426,e=>1434,e=>1458,(a,b,c,e,f,g,p)=>(p.rnv(g[19],1,0,a,b,c,e,f),16395),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),116747),(a,b,c,e,f,g,p)=>(p.rnv(g[53],1,0,a,b,c,e,f),116747),(a,b,c,e,f,g,p)=>(p.rnv(g[60],1,0,a,b,c,e,f),135179),e=>1634,e=>1482,e=>1514,(a,b,c,e,f,g,p)=>(p.rnv(g[55],1,0,a,b,c,e,f),118795),(a,b,c,e,f,g,p)=>(p.rv(g[14],2,0,a,b,c,e,f),12307),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),10251),(a,b,c,e,f,g,p)=>(p.rnv(g[6],4,0,a,b,c,e,f),6179),(a,b,c,e,f,g,p)=>(p.rnv(g[56],1,0,a,b,c,e,f),120843),(a,b,c,e,f,g,p)=>(p.rnv(g[9],4,0,a,b,c,e,f),6179),(a,b,c,e,f,g,p)=>(p.rnv(g[22],1,0,a,b,c,e,f),16395),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),114699),e=>1554,(a,b,c,e,f,g,p)=>(p.rv(g[54],2,0,a,b,c,e,f),116755),(a,b,c,e,f,g,p)=>(p.rv(g[15],2,0,a,b,c,e,f),14355),e=>1570,e=>1602,e=>1610,e=>1594,e=>1618,e=>1626,(a,b,c,e,f,g,p)=>(p.rnv(g[21],2,0,a,b,c,e,f),16403),(a,b,c,e,f,g,p)=>(p.rnv(g[20],2,0,a,b,c,e,f),16403),(a,b,c,e,f,g,p)=>(p.rv(g[24],2,0,a,b,c,e,f),18451),e=>1722,e=>1730,e=>1674,e=>1690,e=>1698,e=>1706,e=>1738,(a,b,c,e,f,g,p)=>(p.rnv(b.fn.listProduction,3,0,a,b,c,e,f),116763),(a,b,c,e,f,g,p)=>(p.rv(g[12],3,0,a,b,c,e,f),12315),e=>1754,e=>1746,e=>1762,e=>1970,(a,b,c,e,f,g,p)=>(p.rnv(g[40],3,0,a,b,c,e,f),34843),(a,b,c,e,f,g,p)=>(p.rnv(g[17],3,0,a,b,c,e,f),16411),e=>1818,e=>1850,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),30731),e=>1826,e=>1834,e=>1898,e=>1842,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),26635),(a,b,c,e,f,g,p)=>(p.rnv(b.fn.listProduction,4,0,a,b,c,e,f),116771),(a,b,c,e,f,g,p)=>(p.rv(g[25],3,0,a,b,c,e,f),18459),(a,b,c,e,f,g,p)=>(p.rv(g[26],3,0,a,b,c,e,f),20507),(a,b,c,e,f,g,p)=>(p.rnv(b.fn.groupProduction,3,0,a,b,c,e,f),116763),(a,b,c,e,f,g,p)=>(p.rv(g[44],1,0,a,b,c,e,f),90123),e=>1858,e=>1874,e=>1890,e=>1882,e=>1906,(a,b,c,e,f,g,p)=>(p.rnv(g[39],4,0,a,b,c,e,f),34851),(a,b,c,e,f,g,p)=>(p.rnv(g[29],4,0,a,b,c,e,f),22563),(a,b,c,e,f,g,p)=>(p.rv(g[43],2,0,a,b,c,e,f),90131),(a,b,c,e,f,g,p)=>(p.rnv(g[27],4,0,a,b,c,e,f),22563),(a,b,c,e,f,g,p)=>(p.rnv(g[30],4,0,a,b,c,e,f),22563),(a,b,c,e,f,g,p)=>(p.rnv(g[28],4,0,a,b,c,e,f),22563),(a,b,c,e,f,g,p)=>(p.rnv(g[31],4,0,a,b,c,e,f),22563),(a,b,c,e,f,g,p)=>(p.rnv(g[37],4,0,a,b,c,e,f),32803),(a,b,c,e,f,g,p)=>(p.rnv(g[38],4,0,a,b,c,e,f),32803),(a,b,c,e,f,g,p)=>(p.rnv(g[35],4,0,a,b,c,e,f),28707),e=>1954,e=>1962,(a,b,c,e,f,g,p)=>(p.rnv(g[34],5,0,a,b,c,e,f),28715),(a,b,c,e,f,g,p)=>(p.rnv(g[36],5,0,a,b,c,e,f),32811)],
    /* Get Token Function  */ gtk:function getToken(l, SYM_LU, IGNORE_KEYWORDS = false) {    if (l.END)        return 0;    if ((l.ty & 1)) {        if (!IGNORE_KEYWORDS && SYM_LU.has(l.tx))            return SYM_LU.get(l.tx);        switch (l.ty) {            case 16385:                return 29;            case 4097:                return 27;            case 2049:                return 26;            case 1025:                return 25;            case 32769:                return 28;            case 8193:                return 24;            default:            case 1:                return 10;        }    }    switch (l.ty) {        case 2:            if (!IGNORE_KEYWORDS && SYM_LU.has(l.tx))                return 32;            return 19;        case 4:            return 20;        case 256:            return 23;        case 8:            return 20;        case 512:            return 23;        default:            return SYM_LU.get(l.tx) || SYM_LU.get(l.ty);    }},
}))(...("-l;0;-3;0;-1b;2;-b;4&6;-k;0;-3;0&8;-k;0;-3;0;-b;8;-x;pah;-2;8;-b;8&a;-k;0;-3;0;-b;a;-x;paj;-2;a;-b;a&-l;0;-3;0;-1c;c;e;g;i;k;m;-4;o&q;-k;0;-3;0;-b;paz;-3;paz;-5;q;-n;paz;-2;q;-b;q&-k;s;0;-3;0&-l;0;-3;0;-8;u;-1l;w;y;10;12;14&16;-a;16;-9;16;0;-2;pbf;-8;16;-3;3igb;-2;pbf;-2;16;-6;16;-h;pbf;-d;2t63;-3;3igb&-l;0;-3;18&1a;-a;1a;-9;1a;0;-2;pbj;-8;1a;-3;3igf;-2;pbj;-2;1a;-6;1a;-h;pbj;-d;2t67;-3;3igf&-b;1c;-a;0;-3;0&-k;1e;1g;-3;0;-8;1i&-b;1k;-a;0;-3;0;-8;1k;-d;1k;-18;2t6h&-b;1m;-a;0;-3;0;-8;1m;-d;1m;-18;2t6j&-k;1o;0;-3;0&-l;0;-3;0;-1a;1q&-k;s;-5&-l;1s;-3;0;-8;1u;-b;1w;-s;1y;-c;20&-b;22;-9;22;0;-3;0&-b;24;-9;s;-5&-l;0;-3;26&-w;28&-l;0;-3;0;-1a;2a&-l;0;-3;0;-8;2c;-1l;w;y;10;12;14&2e;-k;0;-3;0;-b;2e;-x;pcn;-2;2e;-b;2e&-l;0;-3;2g&-k;pcr;-3;0;-8;2i&-k;pct;-3;0;-8;2k&-k;1e;2m;-3;0;-8;1i&-k;pcx;-3;0;-8;2o&-k;2q;0;-3;0&-k;1e;2s;-3;0;-8;1i&2u;-a;2u;-9;2u;0;-2;pd3;-8;2u;-3;pd3;-3;pd3;-2;pd3;-2;2u;-n;pd3;-d;2u;-2;1enb;-3;2t7r&-l;2w;-3;2w;-8;2w;-b;2w;-s;2w;-c;2w&-l;2y;-3;2y;-8;2y;-b;2y;-s;2y;-c;2y&-l;1s;-3;30;-8;1u;-b;1w;-s;1y;-c;20&-l;0;-3;0;-b;32;34;-w;36;38;-2;2;-b;4&3a;-a;3a;-9;3a;0;-2;pdj;-8;3a;-3;pdj;-3;pdj;-2;pdj;-2;3a;-n;pdj;-d;3a;-2;1enr;-3;2t87&3c;-a;3c;-9;3c;0;-2;pdl;-8;3c;-3;pdl;-3;pdl;-2;pdl;-2;3c;-n;pdl;-d;3c;-2;1ent;-3;2t89&3e;-a;3e;-9;3e;0;-2;pdn;-8;3e;-3;pdn;-3;pdn;-2;pdn;-2;3e;-n;pdn;-d;3e;-2;1env;-3;2t8b&3g;-a;3g;-9;3g;0;-2;pdp;-8;3g;-3;pdp;-3;pdp;-2;pdp;-2;3g;-n;pdp;-d;3g;-2;1enx;-3;2t8d&-b;3i;-9;3i;0;-3;0&3k;-k;0;-3;0;-b;3k;-x;pdt;-2;3k;-b;3k&-l;0;-3;3m;-8;3m;-1l;2t8j&-l;0;-3;3o;-8;3o;-1l;2t8l&-l;0;-3;3q;-8;3q;-1l;2t8n&-l;0;-3;3s;-8;2c;-1l;w;y;10;12;14&-k;3u;0;-2;3w;0;-8;3y;-1l;w;y;10;12;14&-l;40;-3;0;-1j;pe9&-k;peb;-3;0;-8;42&-k;ped;-3;0;-8;44&46;-k;0;-3;46;-b;pef;-3;pef;-5;46;-n;pef;-2;46;-b;46&48;-k;0;-3;48;-b;peh;-3;peh;-5;48;-n;peh;-2;48;-b;48&-l;4a;-3;0;-1j;4c;4e&-l;4g;-3;4g;-8;4g;-b;4g;-s;4g;-c;4g&-l;0;-3;4i;-8;2c;-1l;w;y;10;12;14&4k;-k;0;-3;0;-b;4k;-x;pet;-2;4k;-b;4k&4m;-k;0;-3;0;-b;4m;-x;pev;-2;4m;-b;4m&4o;-k;0;-3;0;-b;pex;-w;pex;-d;4o&-k;4q;0;-3;0;-r;4q;-4;pez;-2;23zf;-m;4q&-l;0;-3;0;-1a;4s&4u;-k;0;-3;0;-b;32;34;-w;36;38;-d;4&4w;-k;0;-3;0;-b;pf5;-w;pf5;-d;4w&4y;-k;0;-3;0;-b;4y;-x;pf7;-2;4y;-b;4y&-l;0;-3;50;-8;50;-1l;2t9x&-k;52;0;-2;pfb;-8;52;-1l;2t9z&-k;54;0;-2;pfd;-8;54;-1l;2ta1&-k;pff;-2;pff;-8;56&-k;pfh;-2;pfh;-8;58&-k;3u;5a;-2;3w;5c;-8;3y&-l;5e;-3;0;-1j;pfn&-k;5g;0;-3;0&-k;5i;0;-3;0;-r;5i;-4;pfr;-2;2407;-m;5i&-l;0;-3;0;-d;pft;-1k;5k&5m;-k;0;-3;0;-b;5m;-x;pfv;-2;5m;-b;5m&-l;0;-3;0;-1y;5o&-l;0;-3;0;-d;5q;5s;-1k;5o&-l;0;-3;0;-d;5q;5s&5u;-k;0;-3;0;-b;pg3;-w;pg3;-d;5u&5w;-k;0;-3;0;-b;pg5;-w;pg5;-d;5w&5y;-k;0;-3;0;-b;pg7;-w;pg7;-d;5y&-k;3u;0;-2;3w;60;-8;3y;-1l;w;y;10;12;14&-l;0;-3;0;-r;62;-w;64&-k;66;0;-2;pgf;-8;66;-1l;2tb3&-k;pgh;-2;pgh;-8;68&-k;6a;0;-2;pgj;-8;6a;-1l;2tb7&-l;0;-3;6c&6e;-j;6e;0;-3;0;-8;6e;-9;6e;-2;6e;-p;pgn;-j;3ilj&6g;-k;0;-3;0;-b;6g;-x;pgp;-2;6g;-b;6g&-k;6i;0;-2;pgr;-8;6i;-1l;2tbf&-k;s;-4;0&6k;-k;0;-3;0;-b;6k;-x;pgt;-2;6k;-b;6k&6m;-j;6m;0;-3;0;-8;6m;-3;3ilr;-2;pgv;-2;6m;-n;pgv;-d;6m;-2;1er3;-3;2tbj&-b;6o;-9;6q;6s;-2;6u;0;-9;6w;-12;6y;-c;70&-l;0;-3;72&74;-k;0;-3;0;-b;phd;-w;phd;-d;74&76;-j;76;0;-3;0;-8;76;-3;phf;-3;phf;-2;phf;-2;76;-n;phf;-d;76;-7;2tc3&-b;78;-9;phh;-2;78;0;-9;78;-l;78;-h;78;-c;78&-b;7a;-9;phj;-2;7a;0;-9;7a;-l;7a;-h;7a;-c;7a&-b;6o;-9;6q;6s;-2;6u;0;-9;6w;-l;7c;-h;6y;-c;70&7e;-k;0;-3;0;-b;7e;-x;phn;-2;7e;-b;7e&7g;-k;0;-3;0;-b;php;-w;php;-d;7g&-b;7i;-9;phr;-2;7i;0;-9;7i;-l;7i;-h;7i;-c;7i&-b;6o;-9;6q;6s;-2;6u;0;-9;6w;-l;7k;-h;6y;-c;70&-b;7m;-9;phv;-2;7m;0;-9;7m;-l;7m;-h;7m;-c;7m&7o;-j;s;0;-3;0;-8;7q;-9;7s;-2;7u;-p;36;38;-j;7w;w;y;10;12;14&7y;-k;0;-3;0;-b;pi7;-3;pi7;-5;7y;-n;pi7;-d;7y&80;-k;0;-3;0;-b;pi9;-3;82;84;-s;pi9;-d;4&86;-k;0;-3;0;-b;pif;-3;pif;-5;86;-n;pif;-d;86&88;-k;0;-3;0;-b;pih;-3;pih;-5;88;-n;pih;-d;88&8a;-j;8a;0;-3;0;-8;8a;-3;pij;-3;pij;-2;pij;-2;8a;-n;pij;-d;8a;-7;2td7&8a;-j;8a;0;-3;0;-8;8a;-3;pij;-3;pij;-2;pij;-2;8a;-n;pij;-d;8a;-2;8c;8e;8g;-3;2td7&8i;-k;0;-3;0;-b;pir;-3;pir;-5;8i;-n;pir;-d;8i&8k;-j;8k;0;-3;0;-8;8k;-3;pit;-3;pit;-2;pit;-2;8k;-n;pit;-d;8k;-2;1et1;-3;2tdh&8m;-j;8m;0;-3;0;-8;8m;-3;piv;-3;piv;-2;piv;-2;8m;-n;piv;-d;8m;-2;1et3;-3;2tdj&8o;-j;8o;0;-3;0;-8;8o;-3;pix;-3;pix;-2;pix;-2;8o;-n;pix;-d;8o;-2;1et5;-3;2tdl;5k&7o;-j;s;0;-3;0;-8;7q;-9;7s;-2;8q;-p;36;38;-j;7w;w;y;10;12;14&-l;0;-3;0;-r;8s;-w;8u&8w;-k;0;-3;0;-b;pj5;-3;pj5;-5;8w;-n;pj5;-d;8w&8y;-k;0;-3;0;-b;pj7;-3;pj7;-5;8y;-n;pj7;-d;8y&90;-j;90;0;-3;0;-8;90;-9;90;-2;90;-p;pj9;-j;3io5&92;-k;0;-3;0;-b;pjb;-3;82;84;-s;pjb;-d;4&94;-k;0;-3;0;-b;pjd;-3;pjd;-5;94;-n;pjd;-d;94&96;-k;0;-3;0;-b;pjf;-3;82;84;-s;pjf;-d;4&98;-j;s;0;-3;0;-8;7q;-3;pjh;-3;pjh;-3;8q;-2;98;-n;36;38;-d;98;-7;w;y;10;12;14&-k;s;0;-3;0;-8;7q;-9;7s;-2;8q;-p;36;38;-k;w;y;10;12;14&-l;0;-3;0;-8;9a;-d;9a;-18;2te7&-l;0;-3;0;-8;u;-d;9c;-18;w;y;10;12;14&9e;-j;9e;0;-3;0;-8;9e;-3;pjn;-3;pjn;-2;pjn;-2;9e;-n;pjn;-d;9e;-2;1etv;-3;2teb&9g;-k;0;-3;0;-b;pjp;-3;pjp;-5;9g;-n;pjp;-d;9g&7o;-j;s;0;-3;0;-8;7q;-9;7s;-2;7u;9i;-2;9k;9m;9o;9q;9s;-i;36;38;-j;7w;w;y;10;12;14&9u;-k;0;-3;0;-b;pk3;-3;pk3;-5;9u;-n;36;38;-d;9u&9w;-k;0;-3;0;-b;pk5;-3;pk5;-5;9w;-n;pk5;-d;9w&9y;-j;9y;0;-3;0;-8;9y;-3;pk7;-3;pk7;-2;pk7;-2;9y;-n;pk7;-d;9y;-7;2tev&9y;-j;9y;0;-3;0;-8;9y;-3;pk7;-3;pk7;-2;pk7;-2;9y;-n;pk7;-d;9y;-2;8c;8e;8g;-3;2tev&-l;0;-3;0;-r;8s;-4;a0;a2;-2;a4;a6;a8;aa;-m;8u&-l;0;-3;0;-l;ac&ae;-j;ae;0;-3;0;-8;ae;-3;pkn;-3;pkn;-2;pkn;-2;ae;-n;pkn;-d;ae;-2;1euv;-3;2tfb&ag;-k;0;-3;0;-b;pkp;-3;pkp;-5;ag;-n;pkp;-d;ag&-l;0;-3;0;-l;ai&-k;s;0;-3;0;-8;7q;-a;ak;8q;-p;36;38;-k;w;y;10;12;14&-l;0;-3;0;-f;82;84;-5;am;-11;4&-k;s;0;-3;0;-8;7q;-b;ao;-1a;w;y;10;12;14&7o;-j;s;0;-3;0;-8;7q;-9;7s;-2;7u;-3;9k;9m;9o;9q;9s;-i;36;38;-j;7w;w;y;10;12;14&aq;-j;aq;0;-3;0;-8;aq;-3;pkz;-3;pkz;-2;pkz;-2;aq;-n;pkz;-d;aq;-7;2tfn&as;-k;0;-3;0;-b;pl1;-3;pl1;-5;as;-n;pl1;-d;as&-l;0;-3;0;-v;a0;a2&-l;0;-3;0;-r;au;-w;aw&-l;0;-3;0;-r;ay;-b;ay;-l;ay&-l;0;-3;0;-r;b0;-b;b2;-l;b4&-b;6o;-9;6q;6s;-2;6u;0;-9;6w;-l;b6;-h;6y;-c;70&-l;0;-3;0;-r;b8;-w;b8&ba;-j;ba;0;-3;0;-8;ba;-3;plj;-3;plj;-2;plj;-2;ba;-n;plj;-d;ba;-2;1evr;-3;2tg7&bc;-j;bc;0;-3;0;-8;bc;-3;pll;-3;pll;-2;pll;-2;bc;-n;pll;-d;bc;-7;2tg9&be;-j;be;0;-3;0;-8;be;-9;be;-2;be;-p;pln;-j;3iqj&bg;-j;bg;0;-3;0;-8;bg;-3;plp;-3;plp;-2;plp;-2;bg;-n;plp;-d;bg;-2;1evx;-3;2tgd&-l;0;-3;0;-8;bi;-d;bi;-18;2tgf&-l;0;-3;0;-8;u;-d;bk;-18;w;y;10;12;14&-l;0;-3;0;-8;u;-d;bm;-18;w;y;10;12;14&-l;0;-3;0;-8;u;-d;bo;-18;w;y;10;12;14&-l;0;-3;0;-8;u;-d;bq;-18;w;y;10;12;14&-l;0;-3;0;-l;bs;-13;8c;8e;8g&bu;-j;bu;0;-3;0;-8;bu;-3;pm3;-3;pm3;-2;pm3;-2;bu;-n;pm3;-d;bu;-7;2tgr&bw;-j;bw;0;-3;0;-8;bw;-3;pm5;-3;pm5;-2;pm5;-2;bw;-n;pm5;-d;bw;-7;2tgt&-l;0;-3;0;-8;by;-d;by;-18;2tgv&c0;-j;c0;0;-3;0;-8;c0;-3;pm9;-3;pm9;-2;pm9;-2;c0;-n;pm9;-d;c0;-7;2tgx&c2;-j;c2;0;-3;0;-8;c2;-3;pmb;-3;pmb;-2;pmb;-2;c2;-n;pmb;-d;c2;-7;2tgz&c4;-j;c4;0;-3;0;-8;c4;-3;pmd;-3;pmd;-2;pmd;-2;c4;-n;pmd;-d;c4;-7;2th1&c6;-j;c6;0;-3;0;-8;c6;-3;pmf;-3;pmf;-2;pmf;-2;c6;-n;pmf;-d;c6;-7;2th3&c8;-k;0;-3;0;-b;pmh;-3;pmh;-5;c8;-n;pmh;-d;c8&ca;-k;0;-3;0;-b;pmj;-3;pmj;-5;ca;-n;pmj;-d;ca&cc;-k;0;-3;0;-b;pml;-3;pml;-5;cc;-n;pml;-d;cc&-b;6o;-9;6q;6s;-2;6u;0;-9;6w;-l;ce;-h;6y;-c;70&-b;6o;-9;6q;6s;-2;6u;0;-9;6w;-l;cg;-h;6y;-c;70&ci;-k;0;-3;0;-b;pmr;-3;pmr;-5;ci;-n;pmr;-d;ci&ck;-k;0;-3;0;-b;pmt;-3;pmt;-5;ck;-n;pmt;-d;ck|-2;2;-m;2o;6;-2;8;e;c;4m;g;i;-6;4k;4;k&-1y;u;-e;s&-1k;y;-5;1e;12;1k;-2;14;16&-1y;1m;-e;s&-x;2a;1y;22&-1y;2c;-e;s&-16;2m;2k&-1s;2u;-6;2w;-d;2y;s&-1d;3k;-6;3i;-6;1e;3a;1k;-2;3c;3e&-y;3s;-2;40&-y;1y;3y&-1d;44;-6;3i;-6;1e;3a;1k;-2;3c;3e&-15;3u;-2;42&-3;4o;4a;-9;4q;-9;4u;-3;48;-2;8;e;c;4m;g;i;-6;4k;4;k&-1j;4w;-6;1e;3a;1k;-2;3c;3e&-q;6a;-o;54;-2;56;-2;5a;-7;1e;4y;1k;-2;50;52&-y;3s;-2;5k&-11;5e&-1w;62;5w;5q;-e;s&-1w;60;5y;5q;-e;s&-4;64;-9;68;-9;4u;-h;66;k&-1y;6c;-e;s&-1f;6e;6g&-1y;6o;-e;s&-11;6q&-5;8g&-5;8a&-5;8i&-1e;6y;-2;56;-2;5a;-7;1e;4y;1k;-2;50;52&-1y;74;-e;s&-1y;78;-e;s&-1z;7a;-d;7c&-j;7q;7e;7g&-k;82;84&-j;86;7e;7g&-7;8e;8c;8k;9s;98;8s;-6;8o;-4;9c;-10;8q;8u;8m;1e;8w;1k;-2;9a;92;96;8y;5w;94;-e;s&-6;a0;-x;9g;k&-7;9m;8c;8k;9s;98;8s;-6;8o;-4;9c;-10;8q;8u;8m;1e;8w;1k;-2;9a;92;96;8y;5w;94;-e;s&-7;9q;8c;8k;9s;98;8s;-6;8o;-4;9c;-10;8q;8u;8m;1e;8w;1k;-2;9a;92;96;8y;5w;94;-e;s&-1l;a2&-9;a6;9s;-2;8s;-6;8o;-4;9c;-10;8q;8u;8m;1e;8w;1k;-2;9a;92;96;8y;5w;94;-e;s&-c;ag;-3;ae;-2;ac;ao;-4;am;-10;ak;-3;1e;8w;1k;-2;9a;92;96;8y;5w;94;-e;s&-a;ay;-2;8s;-6;8o;-4;9c;-10;8q;-3;1e;8w;1k;-2;9a;92;96;8y;5w;94;-e;s&-8;au;8k;9s;98;8s;-6;8o;-4;9c;-10;8q;8u;8m;1e;8w;1k;-2;9a;92;96;8y;5w;94;-e;s&-1k;aq;-5;1e;12;1k;-2;14;16&-7;b0;8c;8k;9s;98;8s;-6;8o;-4;9c;-10;8q;8u;8m;1e;8w;1k;-2;9a;92;96;8y;5w;94;-e;s&-1z;be;-d;7c&-f;bg;-7;bi&-j;bw;7e;7g&-e;bk;-2;bo&-c;ag;-6;ao;-4;9c;-10;ak;-3;1e;8w;1k;-2;9a;92;96;8y;5w;94;-e;s&-19;cc;-b;ca;-5;1e;12;1k;-2;14;16&-19;ce;-b;ca;-5;1e;12;1k;-2;14;16&-19;cg;-b;ca;-5;1e;12;1k;-2;14;16&-19;ci;-b;ca;-5;1e;12;1k;-2;14;16&-1m;ck;-3;1e;8w;1k;-2;9a;92;96;8y;5w;94;-e;s&-e;bk&-1k;cy;-5;1e;12;1k;-2;14;16&-1z;de;-d;7c&-1z;da;-d;7c&-1z;dc;-d;7c&-j;dg;7e;7g&-j;di;7e;7g|0;-b;2;4;6;-5;8;-7;a;c;-2;e;-4;g;-5;i;-4;k;-2;m;-4;o;q;-g;s;u;-6;w;y;-2;s;-6;10;12;-3;14;-3;16;-8;18;-2;1a;-3;1c;-7;1e;1g;1i;-4;1k;-6;1m;-2;1o;-5;1q;-3;1s;-a;1u;-3;1w;-5;1u;-2;1y;-2;20;22;24;-4;26;-9;28;-7;20;-2;20;2a;2c;-3;2e;2g;-3;2i;2k;2m;-3;2o;26;2q;-6;2s;20;2u;2w;2y;30;32;2i;-3;34;-7;1u;-8;23xv;26;38;3a;3c;-2;3e;-6;3g;-5;pc3;-3;2i").split("|").map(e=>e.split("&")).map(a => a.map(s => s.split(";").map(s=>parseInt(s,36))).map(s=>s.flatMap(d=>d<0?(new Array(-d-1)).fill(-1):(new Array(((d >>> 15) & 0x3FF) + 1)).fill((d >>> 1) & 0x3FFF)))));