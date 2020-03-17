export default ((e,s,u,g)=>({
         fn : {}, 
/************** Maps **************/
    st:s,
    /* Types */ ty: {1:1,2:1,3:2,4:2,8:3,16:3,32:4,64:4,128:5,256:5,264:6,512:6,1025:7,2049:7,4097:8,8193:8,16385:9,32769:9,number:10,num:10,identifier:11,string:11,white_space:12,open_bracket:12,close_bracket:13,operator:13,symbol:14,new_line:14,data_link:15,number_bin:15,number_oct:16,number_hex:16,number_int:17,number_sci:17,number_flt:18,alpha_numeric:18,white_space_new_line:30,id:19,str:20,ws:20,ob:21,cb:21,op:22,sym:22,nl:23,dl:23,int:24,integer:24,bin:25,binary:25,oct:26,octal:26,hex:27,hexadecimal:27,flt:28,float:28,sci:29,scientific:29,any:31,keyword:32},
    /* Symbols To Inject into the Lexer */ sym : ["((","))","<>","+>","=>","(*","(+","::","τ","θ","ɛ","$eof"],
    /* Symbol Lookup map */ lu : new Map([["num",1],["id",1],["alpha_numeric",2],["str",2],["ws",3],["ob",3],["cb",4],["op",4],["sym",5],["nl",5],["white_space_new_line",6],["dl",6],["binary",7],["octal",7],["hexadecimal",8],["integer",8],["scientific",9],["float",9],[1,10],[2,19],[4,20],[8,20],[16,21],[32,21],[64,22],[128,22],[256,23],[512,23],[1025,25],[2049,26],[4097,27],[8193,24],[16385,29],[32769,28],[3,18],[264,30],[200,31],[201,32],["<>",34],["→",35],["+>",36],["│",37],["[",38],["]",39],["(",40],["EXC",41],[")",42],["ERR",43],["IGN",44],["RST",45],["RED",46],["↦",47],["^",48],[null,28],["{",77],["}",51],["err",52],["e",53],["cstr",55],["c",56],["return",57],["r",58],["=>",59],["@",65],["SYMBOL",66],["PREC",67],["IGNORE",68],["ERROR",69],["NAME",70],["EXT",71],["AS",73],["as",74],["IMPORT",75],["#",76],["(+",78],["(*",79],["?",80],["$eof",81],["ɛ",82],["θ",83],["τ",84],["\\",85],["::",86],["a",88],["b",89],["d",90],["f",91],["A",92],["B",93],["C",94],["D",95],["E",96],["F",97],["_",103],["$",104]]),
    /* Reverse Symbol Lookup map */ rlu : new Map([[1,"num"],[1,"id"],[2,"alpha_numeric"],[2,"str"],[3,"ws"],[3,"ob"],[4,"cb"],[4,"op"],[5,"sym"],[5,"nl"],[6,"white_space_new_line"],[6,"dl"],[7,"binary"],[7,"octal"],[8,"hexadecimal"],[8,"integer"],[9,"scientific"],[9,"float"],[10,1],[19,2],[20,4],[20,8],[21,16],[21,32],[22,64],[22,128],[23,256],[23,512],[25,1025],[26,2049],[27,4097],[24,8193],[29,16385],[28,32769],[18,3],[30,264],[31,200],[32,201],[34,"<>"],[35,"→"],[36,"+>"],[37,"│"],[38,"["],[39,"]"],[40,"("],[41,"EXC"],[42,")"],[43,"ERR"],[44,"IGN"],[45,"RST"],[46,"RED"],[47,"↦"],[48,"^"],[28,null],[77,"{"],[51,"}"],[52,"err"],[53,"e"],[55,"cstr"],[56,"c"],[57,"return"],[58,"r"],[59,"=>"],[65,"@"],[66,"SYMBOL"],[67,"PREC"],[68,"IGNORE"],[69,"ERROR"],[70,"NAME"],[71,"EXT"],[73,"AS"],[74,"as"],[75,"IMPORT"],[76,"#"],[78,"(+"],[79,"(*"],[80,"?"],[81,"$eof"],[82,"ɛ"],[83,"θ"],[84,"τ"],[85,"\\"],[86,"::"],[88,"a"],[89,"b"],[90,"d"],[91,"f"],[92,"A"],[93,"B"],[94,"C"],[95,"D"],[96,"E"],[97,"F"],[103,"_"],[104,"$"]]),
    /* States */ sts : [0,1,2,3,4,5,6,7,8,2,9,9,10,7,11,12,13,14,15,15,15,15,15,16,17,17,18,19,17,20,21,22,23,24,24,24,2,25,26,27,28,29,30,31,32,33,34,33,35,2,2,36,37,38,39,9,2,2,9,9,2,40,41,42,43,44,44,44,45,46,47,48,49,50,51,52,53,54,54,55,56,57,58,59,60,61,62,32,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,77,78,9,79,79,9,62,80,81,82,9,83,84,85,86,87,88,89,88,89,90,89,89,89,89,91,83,92,93,93,94,95,96,97,98,99,100,101,102,96,103,104,104,96,104,103,104,105,106,104,107,108,109,110,111,112,113,114,112,115,96,116,117,118,22,119,120,83,121,122,8,8,123,8,124,8,125,126,127,128,129,130,131,126,132,133,134,135,136,137,138,139,140,141,142,143,144,145,145,145,145,146,147,147,148,149,150,151,152,153,22,22,9,96,83,83,154,155,156,157,158,159,160].map(i=>s[i]),
    /* Fork Map */fm: [],
    /*Goto Lookup Functions*/ gt:g[0].map(i=>i>=0?u[i]:[]),
/************ Functions *************/
    /* Error Functions */ eh : [e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e],
    /* Environment Functions*/ fns: [(A,B) => (B.productions),(A,B) => (B.productions.meta = { preambles:A[0] }),(A,B) => ((!(A[0].IMPORT_OVERRIDE || A[0].IMPORT_APPEND)) ? B.productions.push(A[0]) : 0),(A,B) => (B.refs.set(A[0].id,A[0]),null),(A,B) => (A[1].id = B.productions.length,(!(A[1].IMPORT_OVERRIDE || A[1].IMPORT_APPEND)) ? B.productions.push(A[1]) : 0,B.productions),(A,B) => (B.refs.set(A[1].id,A[1]),A[0]),function  (A,B,C,D){this.name = A[1]; this.bodies = A[3]; this.id = -1; B.functions.compileProduction(this,B,D);} ,function  (A,B,C){B.host_lex = C.copy(); B.prod_name = A[A.length - 1];} ,function  (A,B,C,D){this.IMPORT_OVERRIDE = true; this.name = A[1]; this.bodies = A[3]; this.id = -1; B.functions.compileProduction(this,B,D);} ,function  (A,B,C){B.host_lex = C.copy(); B.prod_name = A[A.length - 1].name;} ,function  (A,B,C,D){this.IMPORT_APPEND = true; this.name = A[1]; this.bodies = A[3]; this.id = -1; B.functions.compileProduction(this,B,D);} ,(A,B) => (B.body_count++,[A[0]]),(A,B) => (B.body_count++,A[0].push(A[2]),A[0]),function  (A,B,C){B.host_lex = C.pk.copy();} ,A => (A[0]),(A,B,C) => (new B.fn.body([A[0]],B,(B.host_lex.fence(C),B.host_lex))),function  (A){this.body = A[0]; this.reduce = A[1]; this.err = A[2];} ,function  (){this.body = []; this.reduce = null;} ,function  (A){this.reduce = null; this.body = [A[0]];} ,function  (A){this.body = A[0]; this.err = A[1];} ,function  (A){this.body = A[0]; this.reduce = A[1];} ,function  (A){this.body = A[0];} ,(A,B) => (B.body_offset = 0,[A[0]]),(A,B) => (B.body_offset = A[0].length,A[0].push(A[1]),A[0]),A => (A[1].map(e => (e.NO_BLANK = true,e))),function  (A){this.IS_CONDITION = true; this.type = "exc"; this.sym = A[2]; this.offset = -1;} ,function  (A){this.IS_CONDITION = true; this.type = "err"; this.sym = A[2]; this.offset = -1;} ,function  (A){this.IS_CONDITION = true; this.type = "ign"; this.sym = A[2]; this.offset = -1;} ,function  (A){this.IS_CONDITION = true; this.type = "rst"; this.sym = A[2]; this.offset = -1;} ,function  (A){this.IS_CONDITION = true; this.type = "red"; this.sym = A[2]; this.offset = -1;} ,function  (A){this.id = A[1]; this.name = A[3]; this.txt = ""; this.env = true; this.IS_CONDITION = true;} ,function  (A){this.id = A[1]; this.txt = A[3]; this.env = false; this.name = ""; this.IS_CONDITION = true;} ,function  (A){this.type = "ERROR"; this.txt = A[3]; this.name = ""; this.env = false; this.ref = ""; this.IS_CONDITION = true;} ,function  (A){this.type = "ERROR"; this.txt = ""; this.name = A[3]; this.env = true; this.ref = ""; this.IS_CONDITION = true;} ,function  (A){this.type = (A[1][0] == "c") ? "CLASS" : "RETURNED"; this.txt = A[3]; this.name = ""; this.env = false; this.ref = ""; this.IS_CONDITION = true;} ,function  (A){this.type = (A[1][0] == "c") ? "CLASS" : "RETURNED"; this.txt = ""; this.name = A[3]; this.env = true; this.ref = ""; this.IS_CONDITION = true;} ,function  (A,B){this.type = (A[1][0] == "c") ? "CLASS" : "RETURNED"; this.ref = A[3]; this.txt = ""; this.name = ""; this.env = true; this.IS_CONDITION = true; const ref = B.refs.get(this.ref); if (ref) {if (Array.isArray(ref)) {ref.push(this);} else {let ref = B.refs.get(this.ref); this.env = ref.env; this.name = ref.name; this.txt = ref.txt;}} else {B.refs.set(this.ref,[this]);}} ,function  (A){this.type = "INLINE"; this.txt = A[2]; this.name = ""; this.env = false; this.IS_CONDITION = true;} ,function  (A){this.type = "INLINE"; this.txt = ""; this.name = A[2]; this.env = true; this.IS_CONDITION = true;} ,A => (A[0] + A[1]),A => (A[0] + A[1] + A[2]),function  (A){const b = A.length - 1,a = b - 1; if (A[b] !== null) A[a].push(A[b]);  A[b] = A[a];} ,function  (A){const b = A.length - 1; A[b] = ((A[b] !== null) ? [A[b]] : []);} ,function  (A,B,C){this.type = "symbols"; this.symbols = A[2]; this.symbols.map(A => A.val ? A.val : A).forEach(C.addSymbol.bind(C));} ,function  (A,B){this.grammar_stamp = B.stamp; this.type = "precedence"; this.terminal = A[2]; this.val = parseInt(A[3]);} ,function  (A,B){this.grammar_stamp = B.stamp; this.type = "ignore"; this.symbols = A[2];} ,function  (A,B){this.grammar_stamp = B.stamp; this.type = "error"; this.symbols = A[2];} ,function  (A){this.type = "name"; this.id = A[2];} ,function  (A){this.type = "ext"; this.id = A[2];} ,function  (A){const b = A.length - 1,a = b - 1; A[a] = A[a] + A[b]; A[b] = A[a];} ,function  (A){const b = A.length - 1; A[b] = A[b] + "";} ,function  (A){this.val = A[1];} ,function  (A){this.type = "symbol"; this.val = A[0];} ,A => (A[0].IS_OPTIONAL = true,A[0]),function  (){this.type = "eof"; this.val = "$eof";} ,function  (){this.type = "empty";} ,function  (A){this.type = "generated"; this.val = A[1];} ,function  (A){this.type = "literal"; this.val = "" + A[1];} ,function  (A){this.type = "escaped"; this.val = A[1];} ,function  (A){this.type = "production"; this.name = A[0]; this.val = -1;} ,A => ({ val:parseFloat(A[0]),type:"hex",original_val:A[0] }),A => ({ val:parseFloat(A[0]),type:"bin",original_val:A[0] }),A => ({ val:parseFloat(A[0]),type:"oct",original_val:A[0] }),A => ({ val:parseFloat(A[0]),type:"sci",original_val:A[0] }),A => ({ val:parseFloat(A[0]),type:"flt",original_val:A[0] }),A => ({ val:parseFloat(A[0]),type:"int",original_val:A[0] })],
    /* State Action Functions */ sa : [e=>26,e=>50,(a,b,c,e,f,g,p)=>(p.rv(g[0],1,0,a,b,c,e,f),9),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),40971),e=>138,e=>66,e=>58,e=>106,e=>82,e=>90,e=>98,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),67595),(a,b,c,e,f,g,p)=>(p.s(g[42],a,b,c,e,f),p.rn(1,a,b,c,e,f),38923),e=>162,e=>146,e=>170,e=>178,e=>154,e=>210,e=>250,e=>258,e=>242,e=>298,e=>322,e=>362,e=>338,e=>378,e=>442,e=>466,e=>474,(a,b,c,e,f,g,p)=>(p.rv(g[14],1,0,a,b,c,e,f),73739),e=>506,e=>546,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),75787),(a,b,c,e,f,g,p)=>(p.s(g[42],a,b,c,e,f),p.rn(1,a,b,c,e,f),88075),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),98315),(a,b,c,e,f,g,p)=>(p.rnv(g[52],1,0,a,b,c,e,f),98315),e=>554,e=>578,e=>562,e=>634,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),100363),(a,b,c,e,f,g,p)=>(p.rnv(g[52],1,0,a,b,c,e,f),100363),e=>650,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),124939),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),153611),e=>642,(a,b,c,e,f,g,p)=>(p.s(g[42],a,b,c,e,f),p.rn(1,a,b,c,e,f),55307),(a,b,c,e,f,g,p)=>(p.s(g[50],a,b,c,e,f),p.rn(1,a,b,c,e,f),59403),e=>666,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),57355),e=>674,e=>682,(a,b,c,e,f,g,p)=>(p.rv(g[2],1,0,a,b,c,e,f),4107),(a,b,c,e,f,g,p)=>(p.rv(g[3],1,0,a,b,c,e,f),4107),(a,b,c,e,f,g,p)=>(p.s(g[41],a,b,c,e,f),p.rn(2,a,b,c,e,f),38931),(a,b,c,e,f,g,p)=>(p.rv(g[1],2,0,a,b,c,e,f),2067),(a,b,c,e,f,g,p)=>(p.rnv(g[51],3,0,a,b,c,e,f),69659),(a,b,c,e,f,g,p)=>(p.rv(g[39],2,0,a,b,c,e,f),73747),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),71691),(a,b,c,e,f,g,p)=>(p.s(g[42],a,b,c,e,f),p.rn(1,a,b,c,e,f),83979),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),90123),(a,b,c,e,f,g,p)=>(p.s(g[50],a,b,c,e,f),p.rn(1,a,b,c,e,f),96267),(a,b,c,e,f,g,p)=>(p.rnv(g[45],4,0,a,b,c,e,f),47139),(a,b,c,e,f,g,p)=>(p.rnv(g[58],2,0,a,b,c,e,f),116755),(a,b,c,e,f,g,p)=>(p.s(g[41],a,b,c,e,f),p.rn(2,a,b,c,e,f),88083),e=>794,e=>786,e=>826,e=>818,e=>810,(a,b,c,e,f,g,p)=>(p.rnv(g[56],2,0,a,b,c,e,f),110611),(a,b,c,e,f,g,p)=>(p.rnv(g[57],2,0,a,b,c,e,f),114707),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),112651),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),151563),(a,b,c,e,f,g,p)=>(p.rnv(g[48],4,0,a,b,c,e,f),53283),(a,b,c,e,f,g,p)=>(p.rnv(g[47],4,0,a,b,c,e,f),51235),(a,b,c,e,f,g,p)=>(p.s(g[49],a,b,c,e,f),p.rn(2,a,b,c,e,f),59411),(a,b,c,e,f,g,p)=>(p.s(g[42],a,b,c,e,f),p.rn(1,a,b,c,e,f),61451),(a,b,c,e,f,g,p)=>(p.s(g[41],a,b,c,e,f),p.rn(2,a,b,c,e,f),55315),(a,b,c,e,f,g,p)=>(p.rnv(g[46],4,0,a,b,c,e,f),49187),e=>834,e=>850,e=>858,(a,b,c,e,f,g,p)=>(p.rv(g[4],2,0,a,b,c,e,f),4115),(a,b,c,e,f,g,p)=>(p.rv(g[0],2,0,a,b,c,e,f),4115),(a,b,c,e,f,g,p)=>(p.rv(g[5],2,0,a,b,c,e,f),4115),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),122891),(a,b,c,e,f,g,p)=>(p.s(g[7],a,b,c,e,f),1138),e=>866,(a,b,c,e,f,g,p)=>(p.s(g[9],a,b,c,e,f),1082),(a,b,c,e,f,g,p)=>(p.s(g[9],a,b,c,e,f),1170),e=>882,e=>914,(a,b,c,e,f,g,p)=>(p.s(g[41],a,b,c,e,f),p.rn(2,a,b,c,e,f),83987),(a,b,c,e,f,g,p)=>(p.rnv(g[43],4,0,a,b,c,e,f),43043),(a,b,c,e,f,g,p)=>(p.rnv(g[44],5,0,a,b,c,e,f),45099),(a,b,c,e,f,g,p)=>(p.rv(g[14],2,0,a,b,c,e,f),90131),(a,b,c,e,f,g,p)=>(p.s(g[49],a,b,c,e,f),p.rn(2,a,b,c,e,f),96275),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),92171),(a,b,c,e,f,g,p)=>(p.s(g[41],a,b,c,e,f),p.rn(2,a,b,c,e,f),61459),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),63499),e=>938,(a,b,c,e,f,g,p)=>(p.rnv(b.fn.importProduction,3,0,a,b,c,e,f),120859),e=>978,e=>962,e=>1010,e=>1002,e=>1018,e=>994,e=>1034,(a,b,c,e,f,g,p)=>(p.rnv(g[30],4,0,a,b,c,e,f),18467),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),126987),(a,b,c,e,f,g,p)=>(p.rv(b.fn.importData,7,0,a,b,c,e,f),65595),e=>1026,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),30731),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),32779),e=>1042,(a,b,c,e,f,g,p)=>(p.rv(b.fn.importData,8,0,a,b,c,e,f),65603),(a,b,c,e,f,g,p)=>(p.rnv(g[31],5,0,a,b,c,e,f),18475),(a,b,c,e,f,g,p)=>(p.rv(g[39],2,0,a,b,c,e,f),30739),e=>1074,(a,b,c,e,f,g,p)=>(p.rv(g[40],3,0,a,b,c,e,f),34843),e=>1226,e=>1234,e=>1298,e=>1322,e=>1210,e=>1242,(a,b,c,e,f,g,p)=>(p.rnv(g[8],4,0,a,b,c,e,f),6179),(a,b,c,e,f,g,p)=>(p.s(g[13],a,b,c,e,f),1306),(a,b,c,e,f,g,p)=>(p.rv(g[11],1,0,a,b,c,e,f),8203),(a,b,c,e,f,g,p)=>(p.rv(g[15],1,0,a,b,c,e,f),10251),(a,b,c,e,f,g,p)=>(p.rnv(g[17],1,0,a,b,c,e,f),12299),(a,b,c,e,f,g,p)=>(p.rnv(g[18],1,0,a,b,c,e,f),12299),(a,b,c,e,f,g,p)=>(p.rv(g[22],1,0,a,b,c,e,f),14347),e=>1290,e=>1266,e=>1258,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),104459),(a,b,c,e,f,g,p)=>(p.rnv(g[59],1,0,a,b,c,e,f),118795),e=>1338,e=>1362,(a,b,c,e,f,g,p)=>(p.rnv(g[54],1,0,a,b,c,e,f),106507),(a,b,c,e,f,g,p)=>(p.rnv(g[52],1,0,a,b,c,e,f),104459),(a,b,c,e,f,g,p)=>(p.rnv(g[55],1,0,a,b,c,e,f),108555),(a,b,c,e,f,g,p)=>(p.rv(g[14],2,0,a,b,c,e,f),8211),(a,b,c,e,f,g,p)=>(p.rv(g[53],2,0,a,b,c,e,f),104467),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),102411),(a,b,c,e,f,g,p)=>(p.rnv(g[6],4,0,a,b,c,e,f),6179),e=>1354,(a,b,c,e,f,g,p)=>(p.rnv(g[10],4,0,a,b,c,e,f),6179),e=>1386,e=>1394,e=>1426,e=>1410,e=>1418,(a,b,c,e,f,g,p)=>(p.rnv(g[21],1,0,a,b,c,e,f),12299),e=>1474,e=>1482,(a,b,c,e,f,g,p)=>(p.rnv(b.fn.listProduction,3,0,a,b,c,e,f),104475),(a,b,c,e,f,g,p)=>(p.rv(g[12],3,0,a,b,c,e,f),8219),e=>1530,e=>1522,e=>1730,(a,b,c,e,f,g,p)=>(p.rnv(g[19],2,0,a,b,c,e,f),12307),(a,b,c,e,f,g,p)=>(p.rv(g[23],2,0,a,b,c,e,f),14355),(a,b,c,e,f,g,p)=>(p.rnv(g[20],2,0,a,b,c,e,f),12307),e=>1570,(a,b,c,e,f,g,p)=>(p.rnv(g[38],3,0,a,b,c,e,f),28699),e=>1642,e=>1650,e=>1602,e=>1618,e=>1610,e=>1626,(a,b,c,e,f,g,p)=>(p.rnv(b.fn.listProduction,4,0,a,b,c,e,f),104483),e=>1634,e=>1658,(a,b,c,e,f,g,p)=>(p.s(g[42],a,b,c,e,f),p.rn(1,a,b,c,e,f),79883),(a,b,c,e,f,g,p)=>(p.rv(g[24],3,0,a,b,c,e,f),14363),(a,b,c,e,f,g,p)=>(p.rnv(b.fn.groupProduction,3,0,a,b,c,e,f),104475),e=>1674,e=>1682,e=>1690,e=>1698,(a,b,c,e,f,g,p)=>(p.rnv(g[16],3,0,a,b,c,e,f),12315),e=>1706,e=>1746,e=>1714,e=>1722,e=>1738,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),24587),(a,b,c,e,f,g,p)=>(p.rnv(g[37],4,0,a,b,c,e,f),28707),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),20491),(a,b,c,e,f,g,p)=>(p.rnv(g[26],4,0,a,b,c,e,f),16419),(a,b,c,e,f,g,p)=>(p.s(g[41],a,b,c,e,f),p.rn(2,a,b,c,e,f),79891),(a,b,c,e,f,g,p)=>(p.rnv(g[25],4,0,a,b,c,e,f),16419),(a,b,c,e,f,g,p)=>(p.rnv(g[28],4,0,a,b,c,e,f),16419),(a,b,c,e,f,g,p)=>(p.rnv(g[29],4,0,a,b,c,e,f),16419),(a,b,c,e,f,g,p)=>(p.rnv(g[27],4,0,a,b,c,e,f),16419),(a,b,c,e,f,g,p)=>(p.rnv(g[33],4,0,a,b,c,e,f),22563),(a,b,c,e,f,g,p)=>(p.rnv(g[35],4,0,a,b,c,e,f),26659),(a,b,c,e,f,g,p)=>(p.rnv(g[36],4,0,a,b,c,e,f),26659),e=>1794,e=>1802,(a,b,c,e,f,g,p)=>(p.rnv(g[34],5,0,a,b,c,e,f),26667),(a,b,c,e,f,g,p)=>(p.rnv(g[32],5,0,a,b,c,e,f),22571)],
    /* Get Token Function  */ gtk:function getToken(l, SYM_LU, IGNORE_KEYWORDS = false) {    if (l.END)        return 0;    if ((l.ty & 1)) {        if (!IGNORE_KEYWORDS && SYM_LU.has(l.tx))            return SYM_LU.get(l.tx);        switch (l.ty) {            case 16385:                return 29;            case 4097:                return 27;            case 2049:                return 26;            case 1025:                return 25;            case 32769:                return 28;            case 8193:                return 24;            default:            case 1:                return 10;        }    }    switch (l.ty) {        case 2:            if (!IGNORE_KEYWORDS && SYM_LU.has(l.tx))                return 32;            return 19;        case 4:            return 20;        case 256:            return 23;        case 8:            return 20;        case 512:            return 23;        default:            return SYM_LU.get(l.tx) || SYM_LU.get(l.ty);    }},
}))((tk,r,o,l,p)=>{if(l.END)l.throw("Unexpected end of input");else if(l.ty & (264)) l.throw(`Unexpected space character within input "${p.slice(l)}" `) ; else l.throw(`Unexpected token [${l.tx}]`)},...([
    [[-20,0,-2,0,-41,1,-10,2],[3,-19,0,-2,0],[4,-19,0,-2,0,-10,4,-12,4,-17,4,-10,4],[-23,0,-42,5,6,7,8,9,10,-3,11],[12,-19,0,-2,0,-10,12,-1,12,12,-4,12,-4,12,-17,12,-10,12],[13,-19,0,-2,0,-10,13,-12,13,-17,13,-10,13],[-20,14,-2,0,-7,15,-8,16,-24,17,-11,18],[-20,0,-2,0,-7,19,-51,20,21,22],[-20,0,-2,0,-7,23,-51,20,21,22],[-19,24,0,-2,0],[-19,25,26,-2,0,-7,27],[-20,0,-2,0,-10,28,-1,29,-10,30,-17,1,-10,2],[-20,31,-2,31,-7,31,-8,31,-24,31,-11,31],[-20,14,-2,32,-7,15,-8,16,-24,17,-11,18],[-20,0,-2,0,-7,33,-51,20,21,22],[-20,34,-2,34,-7,34,-8,34,-24,34,-11,34],[-20,0,-2,35,-7,35,-51,35,35,35],[-20,0,-2,36,-7,36,-51,36,36,36],[-20,0,-2,37,-7,37,-51,37,37,37],[-20,0,-2,38,-7,19,-51,20,21,22],[-10,39,-9,0,-2,0],[-31,40],[-19,24,-4],[-10,41,-8,24,-4],[-10,42,-9,0,-2,0,-7,42,-10,42,-40,42,42,42],[-10,43,-9,0,-2,0,-7,43,-10,43,-40,43,43,43],[-20,0,-2,44],[45,-9,45,-8,45,0,-2,45,-7,45,-2,45,45,45,45,-1,45,45,-1,45,-4,45,45,-27,45,45,45,45,45,-2,45,45,45,45],[46,-9,46,-8,46,0,-2,46,-7,46,-2,46,46,46,46,-1,46,46,-1,46,-4,46,46,-27,46,46,46,46,46,-2,46,46,46,46],[-20,0,-2,47],[-19,48,48,-2,0,-7,48],[-19,49,49,-2,0,-7,49],[-19,25,50,-2,0,-7,27],[-19,51,51,-2,0,-7,51],[-19,25,52,-2,0,-7,27],[-20,0,-2,53,-7,19,-51,20,21,22],[54,-19,0,-2,0,-10,54,-1,54,-10,54,-28,54],[55,-19,0,-2,0,-10,55,-1,55,-10,55,-28,55],[56,-19,0,-2,0,-10,56,-12,56,-17,56,-10,56],[57,-19,0,-2,0,-10,28,-1,29,-10,30,-28,2],[58,-19,0,-2,58,-4,58,-5,58,-1,58,58,-4,58,-4,58,-17,58,-10,58],[-20,59,-2,59,-7,59,-8,59,-24,59,-11,59],[60,-19,0,-2,60,-4,60,-5,60,-1,60,60,-4,60,-4,60,-17,60,-10,60],[-20,0,-2,61,-7,61,-51,61,61,61],[-20,0,-2,62,-7,62,-51,62,62,62],[-20,63,-2,63,-7,63],[64,-19,0,-2,0,-10,64,-12,64,-17,64,-10,64],[65,-9,65,-8,65,0,-2,65,-7,65,-2,65,-1,65,65,-1,65,65,-1,65,-4,65,-28,65,-1,65,65,65,-2,65,65,65],[-20,0,-2,66,-7,66,-51,66,66,66],[-20,0,-2,67],[-20,0,-2,68,-7,33,-51,20,21,22],[-20,69,-2,70,-7,71],[72,-9,72,-8,72,0,-2,72,-7,72,-2,72,-1,72,72,-1,72,72,-1,72,-4,72,-28,72,-1,72,72,72,-2,72,72,72],[73,-9,73,-8,73,0,-2,73,-7,73,-2,73,-1,73,73,-1,73,73,-1,73,-4,73,-28,73,-1,73,73,73,-2,73,73,73],[74,-9,74,-8,74,0,-2,74,-7,74,-2,74,-1,74,74,-1,74,74,-1,74,-4,74,-28,74,-1,74,74,74,-2,74,74,74],[75,-9,75,-8,75,0,-2,75,-7,75,-2,75,-1,75,75,-1,75,75,-1,75,-4,75,-28,75,-1,75,75,75,-2,75,75,75],[76,-19,0,-2,0,-10,76,-12,76,-17,76,-10,76],[77,-19,0,-2,0,-10,77,-12,77,-17,77,-10,77],[-19,78,78,-2,0,-7,78],[-20,79,-2,0,-49,79,79],[-19,80,80,-2,0,-7,80],[81,-19,0,-2,0,-10,81,-12,81,-17,81,-10,81],[-20,82,-2,0,-49,83,84],[85,-19,0,-2,0,-10,85,-1,85,-10,85,-28,85],[86,-19,0,-2,0,-10,86,-1,86,-10,86,-28,86],[87,-19,0,-2,0,-10,87,-1,87,-10,87,-28,87],[-20,0,-2,0,-11,88,-50,88],[-20,0,-2,0,-11,89,-50,90],[-20,0,-2,0,-11,91],[-20,0,-2,0,-62,90],[-20,0,-2,0,-11,92],[-20,0,-2,0,-24,93,-28,94],[-20,0,-2,95,-7,95,-51,95,95,95],[96,-19,0,-2,0,-10,96,-12,96,-17,96,-10,96],[97,-19,0,-2,0,-10,97,-12,97,-17,97,-10,97],[-20,0,-2,98,-7,98,-51,98,98,98],[-20,99,-2,99,-7,99],[-20,0,-2,100,-7,100,-51,100,100,100],[-20,101,-2,0,-49,101,101],[-19,102,0,-2,0],[-19,24,-3,0],[-20,0,-2,103],[104,-18,104,0,-2,0,-7,104,-2,104,104,104,104,-1,104,104,-1,104,-4,104,-28,104,-1,104,104,104,-2,104,104,104],[-10,105,-8,106,107,-1,108,0,-8,109,-32,110,-11,111],[112,-19,0,-2,0,-10,112,-1,112,-10,112,-28,112],[113,-18,113,0,-2,0,-7,113,-2,113,-1,113,113,-1,113,113,-1,113,-4,113,-28,113,-6,113,113,113],[114,-19,0,-2,0,-10,114,-12,114,-17,114,-10,114],[-20,0,-2,115],[-10,116,-8,116,116,-1,116,0,-8,116,-18,116,-13,116,-11,116],[-10,117,-8,117,117,-1,117,0,-8,117,-18,117,-13,117,-11,117],[-10,105,-8,106,107,-1,108,0,-8,109,-18,118,-13,110,-11,111],[119,-19,0,-2,0,-10,119,-12,119,-17,119,-10,119],[120,-19,0,-2,0,-10,120,-1,120,-10,120,-28,120],[-10,121,-8,121,121,-1,121,0,-8,121,-18,121,-13,121,-11,121],[-10,105,-8,106,107,-1,108,0,-8,109,-18,122,-13,110,-11,111],[-10,123,-8,123,123,-1,123,0,-8,123,-18,123,-13,123,-11,123],[124,-18,24,0,-2,0,-7,125,-6,126,-1,127,-6,128,-34,129,20,21,22],[130,-19,0,-2,0,-10,130,-1,130,131,-9,130,-28,2],[132,-19,0,-2,0,-10,132,-1,132,132,-4,132,-4,132,-28,132],[133,-19,0,-2,0,-10,133,-1,133,133,-4,133,-4,133,-28,133],[134,-19,0,-2,0,-10,134,-1,134,134,-4,134,-4,134,-28,134],[135,-19,0,-2,0,-10,135,-1,135,135,-4,135,-4,135,-28,135],[136,-18,136,0,-2,0,-7,136,-2,136,-1,136,136,-1,136,136,-1,136,-4,136,-28,136,-1,137,138,139,-2,136,136,136],[136,-18,136,0,-2,0,-7,136,-2,136,-1,136,136,-1,136,136,-1,136,-4,136,-28,136,-6,136,136,136],[140,-18,140,0,-2,0,-7,140,-2,140,-1,140,140,-1,140,140,-1,140,-4,140,-28,140,-1,140,140,140,-2,140,140,140],[141,-18,141,0,-2,0,-7,141,-2,141,-1,141,141,-1,141,141,-1,141,-4,141,-28,141,-1,141,141,141,-2,141,141,141,88],[-20,0,-2,0,-24,142,-28,143],[144,-19,0,-2,0,-10,144,-1,144,144,-4,144,-4,144,-28,144],[145,-18,145,0,-2,0,-7,145,-2,145,-1,145,145,-1,145,145,-1,145,-4,145,-28,145,-1,145,145,145,-2,145,145,145],[146,-19,0,-2,0,-10,146,-1,146,146,-4,146,-4,146,-28,146],[147,-19,0,-2,0,-10,147,-1,147,147,-4,147,-4,147,-28,147],[148,-18,148,0,-2,0,-7,148,-2,148,-1,148,148,-1,148,148,-1,148,-4,148,-28,148,-1,148,148,148,-2,148,148,148],[-20,0,-2,0,-7,149,-10,149,-40,149,149,149],[150,-19,0,-2,0,-10,150,-1,150,131,-9,150,-28,2],[-20,0,-2,0,-7,23,-10,151,-40,20,21,22],[-19,24,0,-2,0,-7,125,-6,126,-1,127,-6,128,-35,20,21,22],[152,-19,0,-2,0,-10,152,-1,152,131,-9,152,-28,2],[124,-18,24,0,-2,0,-7,125,-6,126,-1,127,153,-1,154,155,156,157,128,-34,129,20,21,22],[158,-18,24,0,-2,0,-7,125,-2,158,-1,158,158,-2,127,-1,158,-4,159,-28,158,-6,20,21,22],[-20,0,-2,0,-18,160],[161,-18,161,0,-2,0,-7,161,-2,161,-1,161,161,-1,161,161,-1,161,-4,161,-28,161,-1,161,161,161,-2,161,161,161],[162,-19,0,-2,0,-10,162,-1,162,162,-4,162,-4,162,-28,162],[-20,0,-2,0,-13,131,-4,163,-33,2],[-19,24,0,-2,0,-7,125,-7,164,127,-6,128,-35,20,21,22],[-19,24,0,-2,0,-7,125,-8,165,-42,20,21,22],[166,-19,0,-2,0,-10,166,-1,166,166,-4,166,-4,166,-28,166],[167,-18,167,0,-2,0,-7,167,-2,167,-1,167,167,-1,167,167,-1,167,-4,167,-28,167,-6,167,167,167],[168,-19,0,-2,0,-10,168,-1,168,168,-4,168,-4,169,-28,168],[167,-18,167,0,-2,0,-7,167,-2,167,-1,167,167,-1,167,167,-1,167,-4,167,-28,167,-1,137,138,139,-2,167,167,167],[170,-18,170,0,-2,0,-7,170,-2,170,-1,170,170,-1,170,170,-1,170,-4,170,-28,170,-6,170,170,170],[-20,0,-2,0,-24,142,-3,171,172,-1,173,174,175,176,-18,143],[177,-18,177,0,-2,0,-7,177,-2,177,-1,177,177,-1,177,177,-1,177,-4,177,-28,177,-1,177,177,177,-2,177,177,177],[-10,105,-8,106,107,-1,108,0,-8,109,-18,178,-13,110,-11,111],[-20,0,-2,0,-7,23,-10,179,-40,20,21,22],[-20,0,-2,0,-7,180,-10,180,-40,180,180,180],[181,-18,181,0,-2,0,-7,181,-2,181,-1,181,181,-1,181,181,-1,181,-4,181,-28,181,-6,181,181,181],[182,-18,182,0,-2,0,-7,182,-2,182,-1,182,182,-1,182,182,-1,182,-4,182,-28,182,-1,182,182,182,-2,182,182,182],[-20,0,-2,0,-7,23,-10,183,-40,20,21,22],[-20,0,-2,0,-7,23,-10,184,-40,20,21,22],[-20,0,-2,0,-18,185,-35,137,138,139],[-20,0,-2,0,-7,23,-10,186,-40,20,21,22],[-20,0,-2,0,-28,171,172],[187,-19,0,-2,0,-10,187,-1,187,187,-4,187,-4,187,-28,187],[-20,0,-2,0,-24,188,-28,189],[-20,0,-2,0,-24,190,-10,191,-17,192],[-20,0,-2,0,-24,193,-10,193,-17,193],[194,-18,194,0,-2,0,-7,194,-2,194,-1,194,194,-1,194,194,-1,194,-4,194,-28,194,-6,194,194,194],[-20,0,-2,0,-24,195,-28,195],[196,-18,196,0,-2,0,-7,196,-2,196,-1,196,196,-1,196,196,-1,196,-4,196,-28,196,-6,196,196,196],[-20,0,-2,0,-7,197,-10,197,-40,197,197,197],[198,-18,198,0,-2,0,-7,198,-2,198,-1,198,198,-1,198,198,-1,198,-4,198,-28,198,-6,198,198,198],[199,-18,199,0,-2,0,-7,199,-2,199,-1,199,199,-1,199,199,-1,199,-4,199,-28,199,-6,199,199,199],[200,-18,200,0,-2,0,-7,200,-2,200,-1,200,200,-1,200,200,-1,200,-4,200,-28,200,-6,200,200,200],[201,-18,201,0,-2,0,-7,201,-2,201,-1,201,201,-1,201,201,-1,201,-4,201,-28,201,-6,201,201,201],[202,-19,0,-2,0,-10,202,-1,202,202,-4,202,-4,202,-28,202],[203,-19,0,-2,0,-10,203,-1,203,203,-4,203,-4,203,-28,203],[204,-19,0,-2,0,-10,204,-1,204,204,-4,204,-4,204,-28,204],[-10,105,-8,106,107,-1,108,0,-8,109,-18,205,-13,110,-11,111],[-10,105,-8,106,107,-1,108,0,-8,109,-18,206,-13,110,-11,111],[207,-19,0,-2,0,-10,207,-1,207,207,-4,207,-4,207,-28,207],[208,-19,0,-2,0,-10,208,-1,208,208,-4,208,-4,208,-28,208]],
    [[-1,1,-17,14,5,36,56,9,60,57,49,-5,50,2,4],[-36,16,15],[-43,27,-4,23,-5,24,-1,28,25],[-49,29,-4,35,-1,33,34],[-61,38,-13,39],[-61,41,-13,39],[-27,46,43,44],[-43,48,-4,23,-5,24,-1,28,25],[-2,54,51,-5,52,-10,53,36,56,9,60,57,49,-5,50,2,4],[-35,61,-1,62],[-41,73,-2,64,-2,74,-6,65,-1,66,67],[-48,71,-5,24,-1,28,25],[-61,75,-13,39],[-55,76,-5,77,-12,78,39],[-28,82,-1,86],[-28,43,87],[-3,88,-5,90,-23,89,4],[-59,93,92,91,-13,39],[-59,95,94,91,-13,39],[-61,96,-13,39],[-44,97,-2,74,-6,65,-1,66,67],[-45,100],[-31,105],[-28,82,-1,109],[-61,111,-13,39],[-61,112,-13,39],[-31,113],[-62,115,-12,116],[-61,118,-13,39],[-15,123,121,119],[-16,131,132],[-15,133,121,119],[-4,136,137,138,166,143,-5,148,-36,141,140,139,144,-1,149,152,145,147,94,150,-13,39],[-33,156,4],[-50,160],[-4,159,137,138,166,143,-5,148,-36,141,140,139,144,-1,149,152,145,147,94,150,-13,39],[-4,164,137,138,166,143,-5,148,-36,141,140,139,144,-1,149,152,145,147,94,150,-13,39],[-49,168,-4,35,-1,33,34],[-7,175,143,-5,148,-36,141,-2,144,-1,149,152,145,147,94,150,-13,39],[-5,171,138,166,143,-5,148,-36,141,140,139,144,-1,149,152,145,147,94,150,-13,39],[-4,172,137,138,166,143,-5,148,-36,141,140,139,144,-1,149,152,145,147,94,150,-13,39],[-8,180,-2,179,-1,181,186,-36,182,-2,144,-1,149,152,145,147,94,150,-13,39],[-62,183,-12,116],[-15,187,121,119],[-39,192,-9,189,-4,35,-1,33,34],[-39,188,-9,189,-4,35,-1,33,34],[-8,180,-5,186,-36,182,-2,144,-1,149,152,145,147,94,150,-13,39],[-39,193,-9,189,-4,35,-1,33,34],[-51,194,-2,144,-1,149,152,145,147,94,150,-13,39],[-39,195,-9,189,-4,35,-1,33,34],[-11,197],[-10,198,-1,199],[-49,208,-4,35,-1,33,34],[-10,198],[-62,219,-12,116],[-62,220,-12,116],[-62,221,-12,116],[-15,222,121,119],[-15,223,121,119]],
    [[0,-5,1,2,3,-1,4,5,6,7,8,-1,9,10,-9,11,-3,12,13,-11,14,-1,15,-1,11,-5,16,17,-2,18,19,-13,20,21,-11,22,23,-17,24,-2,25,26,27,-2,28,29,-8,30,-5,31,-3,30,-1,32,33,-4,34,35,-3,36,-12,33,37,-1,38,39,33,40,41,42,-2,43,-1,33,44,45,46,47,48,49,-2,50,34,-1,51,-2,30,52,-3,52,52,34,52,53,-16,54,55,56,40,57,58,-3,30,30,-2]]
    ]).map(e=>e.map(s=>s.flatMap(d=> d < 0 ? (new Array(-d)).fill(-1) : d)))
);