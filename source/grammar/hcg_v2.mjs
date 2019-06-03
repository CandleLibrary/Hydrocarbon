let fn = {}; const 
/************** Maps **************/

    /* Symbols To Inject into the Lexer */
    symbols = ["((","))","<>","+>","=>","(*","(+","::","$eof"],

    /* Goto lookup maps */
    gt0 = [0,-1,1,4,3,2,5,7,8,6,9,10,-5,11,12],
gt1 = [0,-44,15,16,-5,17],
gt2 = [0,-2,21,-2,5,7,8,6,9,10,-5,11,12],
gt3 = [0,-19,28,29],
gt4 = [0,-17,35,-27,34,-5,36],
gt5 = [0,-41,38,37,39],
gt6 = [0,-41,41],
gt7 = [0,-43,43],
gt8 = [0,-25,46,45,-4,47,-5,48,49,50],
gt9 = [0,-23,56,55,-2,57,-1,62,61,-6,58,59,60],
gt10 = [0,-32,64,-4,65,66,67],
gt11 = [0,-19,69,29],
gt12 = [0,-43,70],
gt13 = [0,-11,71,74,72],
gt14 = [0,-18,77,-1,78],
gt15 = [0,-31,89,-5,48,49,50],
gt16 = [0,-43,90],
gt17 = [0,-43,91],
gt18 = [0,-27,94,-1,62,61,-6,58,59,60],
gt19 = [0,-28,95],
gt20 = [0,-20,78],
gt21 = [0,-12,74,102],
gt22 = [0,-12,105,-1,104],
gt23 = [0,-34,113,112,111,116,119,120,117,118,-1,123,-2,107,108,109,110,114,-8,115],
gt24 = [0,-34,113,112,111,116,119,120,117,118,-1,123,-2,127,108,109,110,114,-8,115],
gt25 = [0,-34,113,112,111,116,119,120,117,118,-1,123,-2,129,108,109,110,114,-8,115],
gt26 = [0,-43,130],
gt27 = [0,-19,132,29,-39,131,133],
gt28 = [0,-12,105,-1,136],
gt29 = [0,-15,137],
gt30 = [0,-17,142],
gt31 = [0,-34,147,-2,116,119,120,117,118,-1,123,-6,146,-3,144,-3,143,145],
gt32 = [0,-33,151],
gt33 = [0,-34,113,112,111,116,119,120,117,118,-1,123,-2,154,108,109,110,114,-8,115],
gt34 = [0,-19,132,29,-39,161,133],
gt35 = [0,-19,132,29,-39,162,133],
gt36 = [0,-15,163],
gt37 = [0,-34,113,112,111,116,119,120,117,118,-1,123,-3,165,109,110,114,-8,115],
gt38 = [0,-54,166],
gt39 = [0,-52,171,172,-1,168,169,170],
gt40 = [0,-32,179,-4,65,66,67],
gt41 = [0,-21,183,182,-9,184,-4,65,66,67],
gt42 = [0,-21,183,185,-9,184,-4,65,66,67],
gt43 = [0,-21,183,186,-9,184,-4,65,66,67],
gt44 = [0,-19,132,29,-39,187,133],
gt45 = [0,-43,188],
gt46 = [0,-52,171,172],
gt47 = [0,-32,199,-4,65,66,67],
gt48 = [0,-19,132,29,-39,204,133],
gt49 = [0,-43,205],
gt50 = [0,-43,206],
gt51 = [0,-19,132,29,-39,207,133],
gt52 = [0,-43,208],

    // State action lookup maps
    sm0=[0,1,-3,0,-4,0,-4,2,-13,3,-13,1,-1,1,-5,1],
sm1=[0,4,-3,0,-4,0],
sm2=[0,5,-3,0,-4,0,-18,5,-13,6,-1,7,-5,8],
sm3=[0,9,-3,0,-4,0,-4,2,-13,3,-13,9,-1,9,-5,9],
sm4=[0,10,-3,0,-4,0,-4,10,-13,10,-13,10,-1,10,-5,10],
sm5=[0,11,-3,0,-4,0,-4,11,-13,11,-13,11,-1,11,-5,11],
sm6=[0,12,-3,0,-4,0,-4,12,-13,12,-13,12,-1,12,-5,12],
sm7=[0,-4,-1,-4,0,-5,13,-2,14,-1,15,16,17,-4,18],
sm8=[0,-1,19,20,-1,21,-4,0,-3,22],
sm9=[0,23,-3,0,-4,0,-18,3,-13,6,-1,7,-5,8],
sm10=[0,24,-3,0,-4,0,-18,24,-13,24,-1,24,-5,24],
sm11=[0,25,-3,0,-4,0,-18,25,-13,25,-1,25,-5,25],
sm12=[0,-2,26,-1,0,-4,0],
sm13=[0,-2,27,-1,0,-4,0],
sm14=[0,-2,28,-1,0,-4,0],
sm15=[0,29,-3,0,-4,0,-4,29,-13,29,-13,29,-1,29,-5,29],
sm16=[0,-4,0,-4,0,-3,30,-24,31,32,33],
sm17=[0,-4,0,-4,0,-3,34,-24,31,32,33],
sm18=[0,-4,0,-4,0,-3,35,-24,31,32,33],
sm19=[0,-2,36,-1,37,-4,0,-3,38],
sm20=[0,39,19,20,-1,21,-4,40,-3,22,-16,41],
sm21=[0,42,42,42,-1,42,-4,42,-3,42,-16,42,-21,42,42],
sm22=[0,43,43,43,-1,43,-4,43,-3,43,-16,43,-21,43,43],
sm23=[0,44,-3,0,-4,0,-18,44,-13,44,-1,44,-5,44],
sm24=[0,45,-3,0,-4,0,-18,45,-13,45,-1,45,-5,45],
sm25=[0,46,-3,0,-4,0,-18,46,-13,46,-1,46,-5,46],
sm26=[0,-4,0,-4,0,-33,47],
sm27=[0,-4,0,-4,0,-33,48],
sm28=[0,-4,0,-4,0,-33,49],
sm29=[0,50,-1,50,-1,0,-4,0,-3,50,-14,50,-2,50,50,50,50,50,-2,50,50,50,51,50,50,50,50,50,-3,50],
sm30=[0,-4,0,-4,0,-33,52],
sm31=[0,-4,0,-4,0,-31,51],
sm32=[0,-4,0,-4,0,-41,53,54],
sm33=[0,50,50,50,-1,0,-4,50,-3,50,-14,50,-2,50,50,50,50,50,-2,50,50,50,-1,50,-1,50,50,50,-3,50,50,50],
sm34=[0,-4,0,-4,55],
sm35=[0,-4,0,-4,56,-3,30,-24,31,32,33],
sm36=[0,-4,0,-4,57,-3,57,-24,57,57,57],
sm37=[0,-4,0,-4,58,-3,58,-24,58,58,58],
sm38=[0,-2,28,-1,-1,-4,-1],
sm39=[0,-4,-1,-4,-1,-3,59],
sm40=[0,-4,0,-4,60],
sm41=[0,-4,0,-4,61,-3,34,-24,31,32,33],
sm42=[0,-4,0,-4,62,-3,62,-24,62,62,62],
sm43=[0,-4,0,-4,63,-3,63,-24,63,63,63],
sm44=[0,-4,64,-4,65],
sm45=[0,-4,66,-4,66,-3,67],
sm46=[0,-4,68,-4,68,-3,68],
sm47=[0,-1,69,-2,0,-4,0],
sm48=[0,-1,70,-2,0,-4,0,-3,70,-20,70,-3,70,70,70],
sm49=[0,-1,71,-2,0,-4,0,-3,71,-20,71,-3,71,71,71],
sm50=[0,-1,19,20,-1,21,-4,72,-3,22],
sm51=[0,-4,0,-4,73],
sm52=[0,-2,36,-1,74,-4,0,-3,38],
sm53=[0,-2,36,-1,75,-4,0,-3,38],
sm54=[0,-2,76,-1,76,-4,0,-3,76],
sm55=[0,-2,77,-1,77,-4,0,-3,77],
sm56=[0,-2,78,-1,78,-4,0,-3,78],
sm57=[0,79,-3,0,-4,0,-4,79,-13,79,-5,79,-7,79,-1,79,79,-4,79],
sm58=[0,80,80,80,-1,80,-4,80,-3,80,-16,80,-21,80,80],
sm59=[0,81,-3,0,-4,0,-4,81,-13,81,-5,81,-7,81,-1,81,81,-4,81],
sm60=[0,82,-1,26,-1,0,-4,0,-3,83,-19,84,-3,85,31,32,33,-9,86],
sm61=[0,-2,87,-1,0,-4,0],
sm62=[0,-2,28,-1,-1,-4,0],
sm63=[0,-1,19,20,-1,21,-4,0,-3,22,-38,88,89],
sm64=[0,90,-3,0,-4,0,-4,90,-13,90,-13,90,-1,90,-5,90],
sm65=[0,-4,0,-4,91,-3,91,-24,91,91,91],
sm66=[0,92,92,92,-1,0,-4,92,-3,92,-14,92,-2,92,92,92,92,92,-2,92,92,92,-1,92,-1,92,92,92,-3,92],
sm67=[0,93,93,93,-1,0,-4,93,-3,93,-14,93,-2,93,93,93,93,93,-2,93,93,93,-1,93,-1,93,93,93,-3,93],
sm68=[0,94,94,94,-1,0,-4,94,-3,94,-14,94,-2,94,94,94,94,94,-2,94,94,94,-1,94,-1,94,94,94,-3,94],
sm69=[0,95,-3,0,-4,0,-4,95,-13,95,-13,95,-1,95,-5,95],
sm70=[0,-4,0,-4,96,-3,96,-24,96,96,96],
sm71=[0,-4,0,-4,97,-3,97,-24,97,97,97],
sm72=[0,-4,0,-4,98,-3,98,-24,98,98,98],
sm73=[0,-4,99,-4,99,-3,99],
sm74=[0,-4,0,-4,100],
sm75=[0,101,-3,0,-4,0,-4,101,-13,101,-13,101,-1,101,-5,101],
sm76=[0,102,-3,0,-4,0,-4,102,-13,102,-13,102,-1,102,-5,102],
sm77=[0,-2,103,-1,103,-4,0,-3,103],
sm78=[0,-4,104,-4,0,-15,105,106],
sm79=[0,-2,107,-1,107,-4,0,-3,107],
sm80=[0,-4,108,-4,0,-15,108,108],
sm81=[0,109,-3,0,-4,0,-18,3,-13,109,-1,109,110,-4,109],
sm82=[0,111,-3,0,-4,0,-18,111,-5,111,-7,111,-1,111,111,-4,111],
sm83=[0,112,-3,0,-4,0,-18,112,-5,112,-7,112,-1,112,112,-4,112],
sm84=[0,113,-1,26,-1,0,-4,0,-3,83,-14,113,-4,84,113,-3,31,32,33,-1,113,-1,113,113,114,-3,115],
sm85=[0,116,-3,0,-4,0,-18,116,-5,116,-7,116,-1,116,116,-4,116],
sm86=[0,117,-3,0,-4,0,-18,117,-5,117,-7,117,-1,117,117,-4,117],
sm87=[0,118,-1,118,-1,0,-4,0,-3,118,-14,118,-2,119,120,118,118,121,-2,118,118,118,-1,118,-1,118,118,118,-3,118],
sm88=[0,118,-1,118,-1,0,-4,0,-3,118,-14,118,-4,118,118,-3,118,118,118,-1,118,-1,118,118,118,-3,118],
sm89=[0,122,-1,122,-1,0,-4,0,-3,122,-14,122,-2,122,122,122,122,122,-2,122,122,122,-1,122,-1,122,122,122,-3,122],
sm90=[0,82,-1,26,-1,0,-4,0,-3,83,-19,84,-3,85,31,32,33,-6,123,124,125,86],
sm91=[0,126,-1,126,-1,0,-4,0,-3,126,-14,126,-2,126,126,126,126,126,-2,126,126,126,-1,126,-1,126,126,126,-3,126],
sm92=[0,127,-1,127,-1,0,-4,0,-3,127,-14,127,-2,127,127,127,127,127,-2,127,127,127,-1,127,-1,127,127,127,-3,127],
sm93=[0,-4,0,-4,0,-41,128,129],
sm94=[0,130,-3,0,-4,0,-18,130,-5,130,-7,130,-1,130,130,-4,130],
sm95=[0,131,-3,0,-4,0,-18,131,-5,131,-7,131,-1,131,131,-4,131],
sm96=[0,132,-3,0,-4,0,-18,3,-13,132,-1,132,110,-4,132],
sm97=[0,133,-1,133,-1,0,-4,0,-3,133,-14,133,-2,133,133,133,133,133,-2,133,133,133,-1,133,133,133,133,133,-3,133],
sm98=[0,134,-3,0,-4,0,-18,3,-13,134,-1,134,110,-4,134],
sm99=[0,135,-3,0,-4,0,-18,135,-13,135,-1,135,-5,135],
sm100=[0,-1,19,20,-1,21,-4,0,-3,22,-38,88,136],
sm101=[0,-1,19,20,-1,21,-4,0,-3,22,-38,137,137],
sm102=[0,-1,137,137,-1,137,-4,0,-3,137,-38,137,137],
sm103=[0,138,-3,0,-4,0,-4,138,-13,138,-13,138,-1,138,-5,138],
sm104=[0,-2,139,-1,0,-4,0],
sm105=[0,-4,140,-4,0,-15,140,140],
sm106=[0,-2,141,-1,0,-4,0],
sm107=[0,142,-3,0,-4,0,-18,142,-5,142,-7,142,-1,142,142,-4,142],
sm108=[0,143,-3,0,-4,0,-18,143,-5,143,-7,143,-1,143,143,-4,144],
sm109=[0,145,-3,0,-4,0,-18,145,-5,145,-7,145,-1,145,145,-4,145],
sm110=[0,146,-1,146,-1,0,-4,0,-3,146,-14,146,-4,146,146,-3,146,146,146,-1,146,-1,146,146,146,-3,146],
sm111=[0,146,-1,146,-1,0,-4,0,-3,146,-14,146,-2,119,120,146,146,121,-2,146,146,146,-1,146,-1,146,146,146,-3,146],
sm112=[0,147,-1,147,-1,0,-4,0,-3,147,-14,147,-4,147,147,-3,147,147,147,-1,147,-1,147,147,147,-3,147],
sm113=[0,-4,0,-4,0,-41,128,129,-1,148,149,150,151,152,153],
sm114=[0,154,-1,154,-1,0,-4,0,-3,154,-14,154,-2,154,154,154,154,154,-2,154,154,154,-1,154,-1,154,154,154,-3,154],
sm115=[0,-4,0,-4,0,-3,35,-20,155,-3,31,32,33],
sm116=[0,-4,0,-4,0,-3,156,-20,156,-3,156,156,156],
sm117=[0,-4,0,-4,0,-18,3,-5,157,-10,110],
sm118=[0,158,-3,0,-4,0,-18,158,-13,158,-1,158,-5,158],
sm119=[0,-1,19,20,-1,21,-4,0,-3,22,-38,88,159],
sm120=[0,-1,19,20,-1,21,-4,0,-3,22,-38,88,160],
sm121=[0,-2,161,-1,0,-4,0],
sm122=[0,-4,0,-4,162],
sm123=[0,163,-3,0,-4,0,-18,163,-5,163,-7,163,-1,163,163,-4,163],
sm124=[0,164,-3,0,-4,0,-18,164,-5,164,-7,164,-1,164,164,-4,164],
sm125=[0,-4,0,-4,0,-44,148,149],
sm126=[0,-4,0,-4,0,-42,165],
sm127=[0,-4,0,-4,0,-41,166],
sm128=[0,-4,0,-4,0,-50,167],
sm129=[0,-4,0,-4,0,-42,168],
sm130=[0,-4,0,-4,0,-41,169],
sm131=[0,-4,0,-4,0,-41,170,171,-7,172],
sm132=[0,-4,0,-4,0,-41,173,174],
sm133=[0,-4,0,-4,0,-24,175],
sm134=[0,176,-1,176,-1,0,-4,0,-3,176,-14,176,-2,176,176,176,176,176,-2,176,176,176,-1,176,-1,176,176,176,-3,176],
sm135=[0,177,-1,177,-1,0,-4,0,-3,177,-14,177,-2,177,177,177,177,177,-2,177,177,177,-1,177,-1,177,177,177,-3,177],
sm136=[0,-4,0,-4,0,-24,178],
sm137=[0,-4,0,-4,0,-3,35,-20,179,-3,31,32,33],
sm138=[0,-4,0,-4,0,-3,180,-20,180,-3,180,180,180],
sm139=[0,-4,0,-4,0,-24,181],
sm140=[0,-4,0,-4,0,-24,182],
sm141=[0,-1,19,20,-1,21,-4,0,-3,22,-38,88,183],
sm142=[0,184,-1,184,-1,0,-4,0,-3,184,-14,184,-4,184,184,-3,184,184,184,-1,184,-1,184,184,184,-3,184],
sm143=[0,-1,185,185,-1,185,-4,0,-3,185,-38,185,185],
sm144=[0,-4,0,-4,186],
sm145=[0,187,-3,0,-4,0,-4,187,-13,187,-13,187,-1,187,-5,187],
sm146=[0,188,-1,188,-1,0,-4,0,-3,188,-14,188,-2,188,188,188,188,188,-2,188,188,188,-1,188,-1,188,188,188,-3,188],
sm147=[0,189,-1,189,-1,0,-4,0,-3,189,-14,189,-4,189,189,-3,189,189,189,-1,189,-1,189,189,189,-3,189],
sm148=[0,-4,0,-4,0,-3,190,-20,190,-3,190,190,190],
sm149=[0,191,-1,191,-1,0,-4,0,-3,191,-14,191,-4,191,191,-3,191,191,191,-1,191,-1,191,191,191,-3,191],
sm150=[0,192,-1,192,-1,0,-4,0,-3,192,-14,192,-4,192,192,-3,192,192,192,-1,192,-1,192,192,192,-3,192],
sm151=[0,193,-1,193,-1,0,-4,0,-3,193,-14,193,-4,193,193,-3,193,193,193,-1,193,-1,193,193,193,-3,193],
sm152=[0,194,-3,0,-4,0,-4,194,-13,194,-13,194,-1,194,-5,194],
sm153=[0,-1,19,20,-1,21,-4,0,-3,22,-38,88,195],
sm154=[0,196,-3,0,-4,0,-18,196,-5,196,-7,196,-1,196,196,-4,196],
sm155=[0,197,-3,0,-4,0,-18,197,-5,197,-7,197,-1,197,197,-4,197],
sm156=[0,-1,19,20,-1,21,-4,0,-3,22,-38,88,198],
sm157=[0,199,-3,0,-4,0,-18,199,-5,199,-7,199,-1,199,199,-4,199],
sm158=[0,200,-3,0,-4,0,-18,200,-5,200,-7,200,-1,200,200,-4,200],
sm159=[0,201,-3,0,-4,0,-18,201,-5,201,-7,201,-1,201,201,-4,201],

    // Symbol Lookup map
    lu = new Map([[1,1],[2,2],[4,3],[8,4],[16,5],[32,6],[64,7],[128,8],[256,9],[512,10],[3,11],[264,11],[200,13],["@",14],["SYMBOL",15],[null,13],["PREC",18],["IGNORE",20],["NAME",21],["EXT",22],["AS",25],["as",26],["IMPORT",27],["#",28],["$eof",36],[";",30],["(+",31],["(*",32],["(",33],[")",34],["?",35],["ɛ",37],["θ",38],["τ",39],["\\",40],["::",41],["<>",42],["→",43],["+>",44],["│",45],["!",46],["EXC",47],["ERR",48],["IGN",49],["↦",50],["^",51],["{",52],["}",53],["err",54],["e",55],["cstr",56],["c",57],["return",58],["r",59],["=>",60]]),

    //Reverse Symbol Lookup map
    rlu = new Map([[1,1],[2,2],[3,4],[4,8],[5,16],[6,32],[7,64],[8,128],[9,256],[10,512],[11,3],[11,264],[13,200],[14,"@"],[15,"SYMBOL"],[13,null],[18,"PREC"],[20,"IGNORE"],[21,"NAME"],[22,"EXT"],[25,"AS"],[26,"as"],[27,"IMPORT"],[28,"#"],[36,"$eof"],[30,";"],[31,"(+"],[32,"(*"],[33,"("],[34,")"],[35,"?"],[37,"ɛ"],[38,"θ"],[39,"τ"],[40,"\\"],[41,"::"],[42,"<>"],[43,"→"],[44,"+>"],[45,"│"],[46,"!"],[47,"EXC"],[48,"ERR"],[49,"IGN"],[50,"↦"],[51,"^"],[52,"{"],[53,"}"],[54,"err"],[55,"e"],[56,"cstr"],[57,"c"],[58,"return"],[59,"r"],[60,"=>"]]),

    // States 
    state = [sm0,
sm1,
sm2,
sm3,
sm4,
sm5,
sm6,
sm6,
sm6,
sm6,
sm6,
sm6,
sm6,
sm7,
sm8,
sm9,
sm10,
sm11,
sm12,
sm13,
sm14,
sm15,
sm16,
sm17,
sm18,
sm8,
sm14,
sm19,
sm20,
sm21,
sm22,
sm22,
sm22,
sm22,
sm23,
sm24,
sm25,
sm26,
sm27,
sm28,
sm29,
sm30,
sm31,
sm32,
sm33,
sm34,
sm35,
sm36,
sm37,
sm37,
sm37,
sm37,
sm38,
sm38,
sm39,
sm40,
sm41,
sm42,
sm43,
sm43,
sm43,
sm44,
sm45,
sm46,
sm47,
sm48,
sm48,
sm48,
sm49,
sm50,
sm51,
sm52,
sm53,
sm54,
sm55,
sm56,
sm56,
sm57,
sm58,
sm59,
sm59,
sm59,
sm60,
sm60,
sm61,
sm60,
sm62,
sm63,
sm64,
sm65,
sm66,
sm67,
sm68,
sm69,
sm70,
sm71,
sm72,
sm72,
sm73,
sm74,
sm75,
sm76,
sm53,
sm77,
sm78,
sm79,
sm80,
sm81,
sm82,
sm83,
sm84,
sm85,
sm86,
sm87,
sm88,
sm88,
sm89,
sm89,
sm89,
sm89,
sm89,
sm90,
sm91,
sm92,
sm93,
sm94,
sm95,
sm96,
sm97,
sm98,
sm99,
sm100,
sm101,
sm102,
sm63,
sm103,
sm78,
sm104,
sm105,
sm106,
sm106,
sm60,
sm107,
sm108,
sm109,
sm110,
sm110,
sm111,
sm112,
sm113,
sm114,
sm115,
sm116,
sm116,
sm117,
sm18,
sm18,
sm18,
sm63,
sm38,
sm118,
sm119,
sm120,
sm121,
sm122,
sm123,
sm124,
sm125,
sm126,
sm127,
sm128,
sm129,
sm130,
sm131,
sm131,
sm131,
sm131,
sm132,
sm132,
sm133,
sm134,
sm135,
sm136,
sm137,
sm138,
sm139,
sm140,
sm141,
sm142,
sm143,
sm144,
sm145,
sm63,
sm38,
sm14,
sm63,
sm38,
sm146,
sm147,
sm148,
sm149,
sm150,
sm151,
sm152,
sm153,
sm154,
sm155,
sm156,
sm157,
sm158,
sm159],

/************ Functions *************/

    max = Math.max, min = Math.min,

    //Error Functions
    e = (tk,r,o,l,p)=>{if(l.END)l.throw("Unexpected end of input");else if(l.ty & (264)) l.throw(`Unexpected space character within input "${1}" `) ; else l.throw(`Unexpected token ${l.tx} within input "${111}" `)}, 
    eh = [e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e],

    //Empty Function
    nf = ()=>-1, 

    //Environment Functions
    
redv = (ret, fn, plen, ln, t, e, o, l, s) => {        ln = max(o.length - plen, 0);        o[ln] = fn(o.slice(-plen), e, l, s, o, plen);        o.length = ln + 1;        return ret;    },
rednv = (ret, Fn, plen, ln, t, e, o, l, s) => {        ln = max(o.length - plen, 0);        o[ln] = new Fn(o.slice(-plen), e, l, s, o, plen);        o.length = ln + 1;        return ret;    },
redn = (ret, plen, t, e, o, l, s) => {        if(plen > 0){            let ln = max(o.length - plen, 0);            o[ln] = o[o.length -1];            o.length = ln + 1;        }        return ret;    },
shftf = (ret, fn, t, e, o, l, s) => (fn(o, e, l, s), ret),
R0_hydrocarbon=function (sym,env,lex,state,output,len) {return env.productions},
R0_head=function (sym,env,lex,state,output,len) {return env.productions.meta = sym[0]},
R0_pre$preamble101_group_list=function (sym,env,lex,state,output,len) {return (sym[0].push(sym[1]),sym[0])},
R1_pre$preamble101_group_list=function (sym,env,lex,state,output,len) {return [sym[0]]},
C0_pre$symbols_preamble=function (sym,env,lex,state,output,len) {this.type = "symbols";this.symbols = sym[2];this.symbols.forEach(lex.addSymbol.bind(lex));},
C0_pre$precedence_preamble=function (sym,env,lex,state,output,len) {this.grammar_stamp = env.stamp;this.type = "precedence";this.terminal = sym[2];this.val = parseInt(sym[3]);},
C0_pre$ignore_preamble=function (sym,env,lex,state,output,len) {this.grammar_stamp = env.stamp;this.type = "ignore";this.symbols = sym[2];},
C0_pre$name_preamble=function (sym,env,lex,state,output,len) {this.type = "name";this.id = sym[2];},
C0_pre$ext_preamble=function (sym,env,lex,state,output,len) {this.type = "ext";this.id = sym[2];},
R0_pre$import_preamble1602_group_list=function (sym,env,lex,state,output,len) {return sym[0] + sym[1]},
R1_pre$import_preamble1602_group_list=function (sym,env,lex,state,output,len) {return sym[0] + ""},
C0_cm$comment=function (sym,env,lex,state,output,len) {this.val = sym[1];},
R0_cm$comment_data=function (sym,env,lex,state,output,len) {return sym[0]},
C0_sym$terminal_symbol=function (sym,env,lex,state,output,len) {this.type = "symbol";this.val = sym[0];},
R0_sym$symbol=function (sym,env,lex,state,output,len) {return (sym[0].IS_OPTIONAL = true,sym[0])},
C0_sym$EOF_symbol=function (sym,env,lex,state,output,len) {this.type = "eof";this.val = "$eof";},
C0_sym$empty_symbol=function (sym,env,lex,state,output,len) {this.type = "empty";},
C0_sym$generated_symbol=function (sym,env,lex,state,output,len) {this.type = "generated";this.val = sym[1];},
C0_sym$literal_symbol=function (sym,env,lex,state,output,len) {this.type = "literal";this.val = sym[1];},
C0_sym$escaped_symbol=function (sym,env,lex,state,output,len) {this.type = "escaped";this.val = sym[1];},
C0_sym$production_symbol=function (sym,env,lex,state,output,len) {this.type = "production";this.name = sym[0];this.val = -1;},
R0_prd$productions=function (sym,env,lex,state,output,len) {return !sym[0].IMPORT_OVERRIDE || sym[0].IMPORT_APPEND ? env.productions.push(sym[0]) : 0},
R1_prd$productions=function (sym,env,lex,state,output,len) {return (env.refs.set(sym[0].id,sym[0]),null)},
R2_prd$productions=function (sym,env,lex,state,output,len) {return (sym[1].id = env.productions.length,!sym[1].IMPORT_OVERRIDE || sym[1].IMPORT_APPEND ? env.productions.push(sym[1]) : 0,env.productions)},
R3_prd$productions=function (sym,env,lex,state,output,len) {return (env.refs.set(sym[1].id,sym[1]),sym[0])},
C0_prd$production=function (sym,env,lex,state,output,len) {this.name = sym[1];this.bodies = sym[3];this.id = -1;env.functions.compileProduction(this);},
I1_prd$production=function (sym,env,lex,state,output,len) {env.host_lex = lex.copy(); env.prod_name = sym[sym.length - 1];},
C2_prd$production=function (sym,env,lex,state,output,len) {this.IMPORT_OVERRIDE = true;this.name = sym[1];this.bodies = sym[3];this.id = -1;env.functions.compileProduction(this);},
I3_prd$production=function (sym,env,lex,state,output,len) {env.host_lex = lex.copy(); env.prod_name = sym[sym.length - 1].name;},
C4_prd$production=function (sym,env,lex,state,output,len) {this.IMPORT_APPEND = true;this.name = sym[1];this.bodies = sym[3];this.id = -1;env.functions.compileProduction(this);},
R0_pb$production_bodies=function (sym,env,lex,state,output,len) {return (env.body_count++,[sym[0]])},
R1_pb$production_bodies=function (sym,env,lex,state,output,len) {return (env.body_count++,sym[0].push(sym[2]),sym[0])},
I2_pb$production_bodies=function (sym,env,lex,state,output,len) {env.host_lex = lex.copy()},
C0_pb$entries=function (sym,env,lex,state,output,len) {this.body = sym[0];this.reduce = sym[1];this.err = sym[2];},
C1_pb$entries=function (sym,env,lex,state,output,len) {this.body = [];this.reduce = null;},
C2_pb$entries=function (sym,env,lex,state,output,len) {this.reduce = null;this.body = [sym[0]];},
C3_pb$entries=function (sym,env,lex,state,output,len) {this.body = sym[0];this.err = sym[1];},
C4_pb$entries=function (sym,env,lex,state,output,len) {this.body = sym[0];this.reduce = sym[1];},
C5_pb$entries=function (sym,env,lex,state,output,len) {this.body = sym[0];},
R0_pb$body_entries=function (sym,env,lex,state,output,len) {return (env.body_offset = 0,[sym[0]])},
R1_pb$body_entries=function (sym,env,lex,state,output,len) {return (env.body_offset = sym[0].length,sym[0].push(sym[1]),sym[0])},
R2_pb$body_entries=function (sym,env,lex,state,output,len) {return sym[0].map(e => (e.NO_BLANK = true,e))},
C0_pb$condition_clause=function (sym,env,lex,state,output,len) {this.type = "exc";this.sym = sym[2];this.offset = -1;},
C1_pb$condition_clause=function (sym,env,lex,state,output,len) {this.type = "err";this.sym = sym[2];this.offset = -1;},
C2_pb$condition_clause=function (sym,env,lex,state,output,len) {this.type = "ign";this.sym = sym[2];this.offset = -1;},
C0_fn$referenced_function=function (sym,env,lex,state,output,len) {this.id = sym[1];this.name = sym[3];this.txt = "";this.env = true;},
C1_fn$referenced_function=function (sym,env,lex,state,output,len) {this.id = sym[1];this.txt = sym[3];this.env = false;this.name = "";},
C0_fn$error_function=function (sym,env,lex,state,output,len) {this.type = "ERROR";this.txt = sym[3];this.name = "";this.env = false;this.ref = "";},
C1_fn$error_function=function (sym,env,lex,state,output,len) {this.type = "ERROR";this.txt = "";this.name = sym[3];this.env = true;this.ref = "";},
C0_fn$reduce_function=function (sym,env,lex,state,output,len) {this.type = sym[1][0] == "c" ? "CLASS" : "RETURNED";this.txt = sym[3];this.name = "";this.env = false;this.ref = "";},
C1_fn$reduce_function=function (sym,env,lex,state,output,len) {this.type = sym[1][0] == "c" ? "CLASS" : "RETURNED";this.txt = "";this.name = sym[3];this.env = true;this.ref = "";},
C2_fn$reduce_function=function (sym,env,lex,state,output,len) {this.type = sym[1][0] == "c" ? "CLASS" : "RETURNED";this.ref = sym[3];this.txt = "";this.name = "";this.env = true;const ref = env.refs.get(this.ref);if(ref)if(Array.isArray(ref))ref.push(this); else {let ref = env.refs.get(this.ref);this.env = ref.env;this.name = ref.name;this.txt = ref.txt;} else env.refs.set(this.ref,[this]);},
C0_fn$function_clause=function (sym,env,lex,state,output,len) {this.type = "INLINE";this.txt = sym[2];this.name = "";this.env = false;},
C1_fn$function_clause=function (sym,env,lex,state,output,len) {this.type = "INLINE";this.txt = "";this.name = sym[2];this.env = true;},
R0_fn$js_data_block=function (sym,env,lex,state,output,len) {return sym[0] + sym[1] + sym[2]},

    //Sparse Map Lookup
    lsm = (index, map) => {    if (map[0] == 0xFFFFFFFF) return map[index+1];    for (let i = 1, ind = 0, l = map.length, n = 0; i < l && ind <= index; i++) {        if (ind !== index) {            if ((n = map[i]) > -1) ind++;            else ind += -n;        } else return map[i];    }    return -1;},

    //State Action Functions
    state_funct = [(...v)=>((redn(4099,0,...v))),
()=>(54),
()=>(58),
(...v)=>(redv(5,R0_hydrocarbon,1,0,...v)),
(...v)=>((redn(45059,0,...v))),
()=>(74),
()=>(78),
()=>(82),
(...v)=>(redn(4103,1,...v)),
(...v)=>(redv(3079,R1_pre$preamble101_group_list,1,0,...v)),
(...v)=>(redn(2055,1,...v)),
(...v)=>(redn(5127,1,...v)),
()=>(94),
()=>(98),
()=>(90),
()=>(102),
()=>(106),
()=>(110),
()=>(126),
()=>(122),
()=>(130),
()=>(134),
(...v)=>(redv(1035,R0_head,2,0,...v)),
(...v)=>(redv(45063,R0_prd$productions,1,0,...v)),
(...v)=>(redv(45063,R1_prd$productions,1,0,...v)),
()=>(162),
()=>(170),
()=>(178),
(...v)=>(redv(3083,R0_pre$preamble101_group_list,2,0,...v)),
()=>(206),
()=>(210),
()=>(214),
()=>(218),
()=>(254),
()=>(274),
()=>(302),
()=>(294),
()=>(306),
()=>(322),
()=>(318),
()=>(326),
(...v)=>(redv(19463,R0_cm$comment_data,1,0,...v)),
(...v)=>(redn(20487,1,...v)),
(...v)=>(redv(45067,R2_prd$productions,2,0,...v)),
(...v)=>(redv(45067,R0_hydrocarbon,2,0,...v)),
(...v)=>(redv(45067,R3_prd$productions,2,0,...v)),
(...v)=>(shftf(330,I1_prd$production,...v)),
(...v)=>(shftf(334,I3_prd$production,...v)),
(...v)=>(redn(43015,1,...v)),
(...v)=>(redn(44039,1,...v)),
()=>(338),
(...v)=>(shftf(342,I3_prd$production,...v)),
()=>(346),
()=>(350),
()=>(354),
(...v)=>(redn(26631,1,...v)),
(...v)=>(redv(25607,R1_pre$preamble101_group_list,1,0,...v)),
(...v)=>(redn(31751,1,...v)),
()=>(370),
()=>(374),
(...v)=>(redn(24583,1,...v)),
(...v)=>(redv(23559,R1_pre$preamble101_group_list,1,0,...v)),
(...v)=>(redn(27655,1,...v)),
()=>(390),
()=>(386),
(...v)=>(redn(30727,1,...v)),
()=>(394),
(...v)=>(redv(29703,R1_pre$import_preamble1602_group_list,1,0,...v)),
()=>(398),
(...v)=>(redn(32775,1,...v)),
(...v)=>(rednv(32775,C0_sym$terminal_symbol,1,0,...v)),
()=>(402),
()=>(406),
()=>(414),
()=>(426),
(...v)=>(redv(11271,R1_pre$preamble101_group_list,1,0,...v)),
(...v)=>(redv(13319,R1_pre$import_preamble1602_group_list,1,0,...v)),
(...v)=>(redn(12295,1,...v)),
(...v)=>(rednv(17423,C0_cm$comment,3,0,...v)),
(...v)=>(redv(19467,R0_pre$import_preamble1602_group_list,2,0,...v)),
(...v)=>(redn(18439,1,...v)),
()=>(506),
()=>(490),
()=>(486),
()=>(502),
()=>(498),
()=>(514),
()=>(538),
(...v)=>((redn(61443,0,...v))),
(...v)=>(rednv(8211,C0_pre$ignore_preamble,4,0,...v)),
(...v)=>(redv(25611,R0_pre$preamble101_group_list,2,0,...v)),
(...v)=>(rednv(37899,C0_sym$generated_symbol,2,0,...v)),
(...v)=>(rednv(38923,C0_sym$literal_symbol,2,0,...v)),
(...v)=>(rednv(39947,C0_sym$escaped_symbol,2,0,...v)),
(...v)=>(rednv(6163,C0_pre$symbols_preamble,4,0,...v)),
(...v)=>(redv(23563,R0_pre$preamble101_group_list,2,0,...v)),
(...v)=>(redv(27659,R0_cm$comment_data,2,0,...v)),
(...v)=>(redn(28679,1,...v)),
(...v)=>(redv(29707,R0_pre$import_preamble1602_group_list,2,0,...v)),
()=>(542),
(...v)=>(rednv(9235,C0_pre$name_preamble,4,0,...v)),
(...v)=>(rednv(10259,C0_pre$ext_preamble,4,0,...v)),
(...v)=>(redv(11275,R0_pre$preamble101_group_list,2,0,...v)),
()=>(554),
()=>(558),
()=>(562),
(...v)=>(redv(13323,R0_pre$import_preamble1602_group_list,2,0,...v)),
(...v)=>(redv(14343,R1_pre$preamble101_group_list,1,0,...v)),
(...v)=>(rednv(46099,C0_prd$production,4,0,...v)),
(...v)=>(shftf(566,I2_pb$production_bodies,...v)),
(...v)=>(redv(47111,R0_pb$production_bodies,1,0,...v)),
(...v)=>(rednv(48135,fn.body,1,0,...v)),
(...v)=>(rednv(49159,C5_pb$entries,1,0,...v)),
()=>(594),
()=>(598),
(...v)=>(rednv(49159,C1_pb$entries,1,0,...v)),
(...v)=>(rednv(49159,C2_pb$entries,1,0,...v)),
(...v)=>(redv(50183,R0_pb$body_entries,1,0,...v)),
()=>(610),
()=>(614),
()=>(602),
(...v)=>(redn(34823,1,...v)),
()=>(622),
()=>(626),
()=>(630),
(...v)=>(rednv(34823,C0_sym$terminal_symbol,1,0,...v)),
(...v)=>(rednv(40967,C0_sym$production_symbol,1,0,...v)),
()=>(638),
()=>(634),
(...v)=>(rednv(36871,C0_sym$empty_symbol,1,0,...v)),
(...v)=>(rednv(35847,C0_sym$EOF_symbol,1,0,...v)),
(...v)=>(rednv(46099,C2_prd$production,4,0,...v)),
(...v)=>(rednv(41999,fn.importProduction,3,0,...v)),
(...v)=>(rednv(46099,C4_prd$production,4,0,...v)),
(...v)=>(rednv(52243,C0_fn$referenced_function,4,0,...v)),
()=>(642),
(...v)=>(redn(61447,1,...v)),
(...v)=>(rednv(7191,C0_pre$precedence_preamble,5,0,...v)),
()=>(658),
(...v)=>(redv(14347,R0_pre$preamble101_group_list,2,0,...v)),
(...v)=>(redn(15367,1,...v)),
(...v)=>(redv(47115,R0_cm$comment_data,2,0,...v)),
(...v)=>(rednv(49163,C4_pb$entries,2,0,...v)),
()=>(670),
(...v)=>(rednv(49163,C3_pb$entries,2,0,...v)),
(...v)=>(redv(50187,R1_pb$body_entries,2,0,...v)),
(...v)=>(redv(50187,R2_pb$body_entries,2,0,...v)),
()=>(710),
()=>(714),
()=>(694),
()=>(698),
()=>(702),
()=>(706),
(...v)=>(redv(34827,R0_sym$symbol,2,0,...v)),
()=>(722),
(...v)=>(redn(33799,1,...v)),
()=>(726),
(...v)=>(rednv(52247,C1_fn$referenced_function,5,0,...v)),
(...v)=>(redv(61451,R0_pre$import_preamble1602_group_list,2,0,...v)),
()=>(758),
()=>(762),
()=>(766),
(...v)=>(redv(47119,R1_pb$production_bodies,3,0,...v)),
(...v)=>(rednv(49167,C0_pb$entries,3,0,...v)),
()=>(770),
()=>(774),
()=>(778),
()=>(782),
()=>(786),
(...v)=>(redn(57351,1,...v)),
(...v)=>(redn(56327,1,...v)),
(...v)=>(redn(58375,1,...v)),
(...v)=>(redn(54279,1,...v)),
(...v)=>(redn(53255,1,...v)),
()=>(790),
(...v)=>(rednv(34831,fn.listProduction,3,0,...v)),
(...v)=>(rednv(34831,fn.groupProduction,3,0,...v)),
()=>(794),
(...v)=>(redn(22535,1,...v)),
(...v)=>(redv(21511,R1_pre$preamble101_group_list,1,0,...v)),
()=>(802),
()=>(806),
()=>(810),
(...v)=>(rednv(60431,C1_fn$function_clause,3,0,...v)),
(...v)=>(redv(62479,R0_fn$js_data_block,3,0,...v)),
()=>(814),
(...v)=>(redv(16415,fn.importData,7,0,...v)),
(...v)=>(rednv(34835,fn.listProduction,4,0,...v)),
(...v)=>(rednv(51219,C0_pb$condition_clause,4,0,...v)),
(...v)=>(redv(21515,R0_pre$preamble101_group_list,2,0,...v)),
(...v)=>(rednv(51219,C1_pb$condition_clause,4,0,...v)),
(...v)=>(rednv(51219,C2_pb$condition_clause,4,0,...v)),
(...v)=>(rednv(60435,C0_fn$function_clause,4,0,...v)),
(...v)=>(redv(16419,fn.importData,8,0,...v)),
()=>(838),
(...v)=>(rednv(59411,C1_fn$reduce_function,4,0,...v)),
(...v)=>(rednv(59411,C2_fn$reduce_function,4,0,...v)),
()=>(842),
(...v)=>(rednv(55315,C1_fn$error_function,4,0,...v)),
(...v)=>(rednv(59415,C0_fn$reduce_function,5,0,...v)),
(...v)=>(rednv(55319,C0_fn$error_function,5,0,...v))],

    //Goto Lookup Functions
    goto = [v=>lsm(v,gt0),
nf,
v=>lsm(v,gt1),
v=>lsm(v,gt2),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt3),
v=>lsm(v,gt4),
nf,
nf,
v=>lsm(v,gt5),
v=>lsm(v,gt6),
v=>lsm(v,gt7),
nf,
v=>lsm(v,gt8),
v=>lsm(v,gt9),
v=>lsm(v,gt10),
v=>lsm(v,gt11),
v=>lsm(v,gt12),
v=>lsm(v,gt13),
v=>lsm(v,gt14),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt15),
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt16),
v=>lsm(v,gt17),
nf,
nf,
v=>lsm(v,gt18),
nf,
nf,
nf,
nf,
v=>lsm(v,gt19),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt20),
nf,
v=>lsm(v,gt21),
v=>lsm(v,gt22),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt23),
v=>lsm(v,gt24),
nf,
v=>lsm(v,gt25),
v=>lsm(v,gt26),
v=>lsm(v,gt27),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt28),
nf,
v=>lsm(v,gt29),
nf,
nf,
v=>lsm(v,gt30),
nf,
nf,
v=>lsm(v,gt31),
nf,
nf,
v=>lsm(v,gt32),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt33),
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt30),
nf,
v=>lsm(v,gt30),
nf,
v=>lsm(v,gt34),
v=>lsm(v,gt20),
nf,
v=>lsm(v,gt35),
nf,
v=>lsm(v,gt36),
nf,
nf,
nf,
nf,
v=>lsm(v,gt37),
nf,
v=>lsm(v,gt38),
nf,
nf,
nf,
v=>lsm(v,gt32),
nf,
v=>lsm(v,gt39),
nf,
v=>lsm(v,gt40),
nf,
nf,
v=>lsm(v,gt30),
v=>lsm(v,gt41),
v=>lsm(v,gt42),
v=>lsm(v,gt43),
v=>lsm(v,gt44),
v=>lsm(v,gt45),
nf,
v=>lsm(v,gt34),
v=>lsm(v,gt34),
nf,
nf,
nf,
nf,
v=>lsm(v,gt46),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt47),
nf,
nf,
nf,
v=>lsm(v,gt34),
nf,
nf,
nf,
nf,
v=>lsm(v,gt48),
v=>lsm(v,gt49),
v=>lsm(v,gt50),
v=>lsm(v,gt51),
v=>lsm(v,gt52),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt34),
nf,
nf,
v=>lsm(v,gt34),
nf,
nf,
nf];

function getToken(l, SYM_LU) {
    if (l.END) return 0; /*13*/

    switch (l.ty) {
        case 2:
            if (SYM_LU.has(l.tx)) return SYM_LU.get(l.tx);
            return 2;
        case 1:
            return 1;
        case 4:
            return 3;
        case 256:
            return 9;
        case 8:
            return 4;
        case 512:
            return 10;
        default:
            return SYM_LU.get(l.tx) || SYM_LU.get(l.ty);
    }
}

/************ Parser *************/

function parser(l, e = {}) {
    
    fn = e.functions;

    l.IWS = false;
    l.PARSE_STRING = true;

    if (symbols.length > 0) {
        symbols.forEach(s => { l.addSymbol(s) });
        l.tl = 0;
        l.next();
    }

    const o = [],
        ss = [0, 0];

    let time = 1000000,
        RECOVERING = 100,
        tk = getToken(l, lu),
        p = l.copy(),
        sp = 1,
        len = 0,
        off = 0;

    outer:

        while (time-- > 0) {

            const fn = lsm(tk, state[ss[sp]]) || 0;

            /*@*/// console.log({end:l.END, state:ss[sp], tx:l.tx, ty:l.ty, tk:tk, rev:rlu.get(tk), s_map:state[ss[sp]], res:lsm(tk, state[ss[sp]])});

            let r,
                gt = -1;

            if (fn == 0) {
                /*Ignore the token*/
                l.next();
                tk = getToken(l, lu);
                continue;
            }

            if (fn > 0) {
                r = state_funct[fn - 1](tk, e, o, l, ss[sp - 1]);
            } else {
                if (RECOVERING > 1 && !l.END) {
                    if (tk !== lu.get(l.ty)) {
                        //console.log("ABLE", rlu.get(tk), l.tx, tk )
                        tk = lu.get(l.ty);
                        continue;
                    }

                    if (tk !== 13) {
                        //console.log("MABLE")
                        tk = 13;
                        RECOVERING = 1;
                        continue;
                    }
                }

                tk = getToken(l, lu);

                const recovery_token = eh[ss[sp]](tk, e, o, l, p, ss[sp], lu);

                if (RECOVERING > 0 && recovery_token) {
                    RECOVERING = -1; /* To prevent infinite recursion */
                    tk = recovery_token;
                    l.tl = 0; /*reset current token */
                    continue;
                }
            }

            switch (r & 3) {
                case 0:
                    /* ERROR */

                    if (tk == "$eof")
                        l.throw("Unexpected end of input");
                    l.throw(`Unexpected token [${RECOVERING ? l.next().tx : l.tx}]`);
                    return [null];

                case 1:
                    /* ACCEPT */
                    break outer;

                case 2:
                    /*SHIFT */
                    o.push(l.tx);
                    ss.push(off, r >> 2);
                    sp += 2;
                    p.sync(l);
                    l.next();
                    off = l.off;
                    tk = getToken(l, lu);
                    RECOVERING++;
                    break;

                case 3:
                    /* REDUCE */

                    len = (r & 0x3FC) >> 1;

                    ss.length -= len;
                    sp -= len;
                    gt = goto[ss[sp]](r >> 10);

                    if (gt < 0)
                        l.throw("Invalid state reached!");

                    ss.push(off, gt);
                    sp += 2;
                    break;
            }
        }
    return o[0];
}; export default parser;