export default ((s,u,g)=>({fn:{},st:s,ty:{1:0,2:1,3:2,4:3,8:4,16:5,32:6,64:7,128:8,256:9,512:10,776:11,1025:12,2049:13,4097:14,8193:15,16385:16,32769:17,number:18,num:18,identifier:19,string:20,white_space:21,open_bracket:22,close_bracket:23,operator:24,symbol:25,new_line:26,tab:27,number_bin:28,number_oct:29,number_hex:30,number_int:31,number_sci:32,number_flt:33,alpha_numeric:34,white_space_new_line:38,id:19,str:20,ws:21,ob:22,cb:23,op:24,sym:25,nl:26,tb:27,int:31,integer:31,bin:28,binary:28,oct:29,octal:29,hex:30,hexadecimal:30,flt:33,float:33,sci:32,scientific:32,any:39,keyword:40},sym:["+","*"],
    lu:new Map([["num",0],["id",1],["alpha_numeric",2],["str",3],["ws",4],["ob",5],["cb",6],["op",7],["sym",8],["nl",9],["tb",10],["white_space_new_line",11],["binary",12],["octal",13],["hexadecimal",14],["integer",15],["scientific",16],["float",17],[1,18],[2,19],[4,20],[8,21],[16,22],[32,23],[64,24],[128,25],[256,26],[512,27],[1025,28],[2049,29],[4097,30],[8193,31],[16385,32],[32769,33],[3,34],[776,38],[200,39],[201,40],["*",42],["+",43],[null,18]]),sts:[0,1,2,3,4,0,0,5,6,7].map(i=>s[i]),fm:[],
    gt:g[0].map(i=>i>=0?u[i]:[]),fns:[_=>({sym:"*",a:_[0],b:_[2]}),_=>({sym:"+",a:_[0],b:_[2]})],sa:[e=>34,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),9),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),4107),e=>42,e=>50,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),2059),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),6155),(a,b,c,e,f,g,p)=>(p.rv(g[1],3,0,a,b,c,e,f),4123),(a,b,c,e,f,g,p)=>(p.rv(g[0],3,0,a,b,c,e,f),2075)],
    gtk:function getToken(l, SYM_LU, IGNORE_GRAMMAR_SYMBOLS = false) {    if (l.END)        return 0;    if (!IGNORE_GRAMMAR_SYMBOLS)        if (SYM_LU.has(l.tx) || SYM_LU.has(l.ty))            return SYM_LU.get(l.tx) || SYM_LU.get(l.ty);    if ((l.ty & 1)) {        switch (l.ty) {            case 16385:                return 32;            case 4097:                return 30;            case 2049:                return 29;            case 1025:                return 28;            case 32769:                return 33;            case 8193:                return 31;            default:            case 1:                return 18;        }    }    switch (l.ty) {        case 2:            return 19;        case 4:            return 20;        case 256:            return 26;        case 8:            return 21;        case 512:            return 27;    }    return 39;},}))(...("-j;2;-3;0;-5;0&4;-l;0;-5;0&6;-l;0;-5;0;-g;8;a&c;-l;0;-5;0&e;-l;0;-5;0;-g;pan&6;-l;0;-5;0;-h;a&g;-l;0;-5;0&i;-l;0;-5;0|-2;2;6;4&-3;i;e&-2;g;6;4|0;-5;2;4;-4").split("|").map(e=>e.split("&")).map(a => a.map(s => s.split(";").map(s=>parseInt(s,36))).map(s=>s.flatMap(d=>d<0?(new Array(-d-1)).fill(-1):(new Array(((d >>> 15) & 0x3FF) + 1)).fill((d >>> 1) & 0x3FFF)))));