/* From: https://github.com/aadsm/JavaScript-ID3-Reader */
function A(h,g,b){var e=g||0,c=0;"string"==typeof h?(c=b||h.length,this.a=function(a){return h.charCodeAt(a+e)&255}):"unknown"==typeof h&&(c=b||IEBinary_getLength(h),this.a=function(a){return IEBinary_getByteAt(h,a+e)});this.l=function(a,f){for(var v=Array(f),b=0;b<f;b++)v[b]=this.a(a+b);return v};this.h=function(){return c};this.d=function(a,f){return 0!=(this.a(a)&1<<f)};this.w=function(a){a=(this.a(a+1)<<8)+this.a(a);0>a&&(a+=65536);return a};this.i=function(a){var f=this.a(a),b=this.a(a+1),c=
this.a(a+2);a=this.a(a+3);f=(((f<<8)+b<<8)+c<<8)+a;0>f&&(f+=4294967296);return f};this.o=function(a){var f=this.a(a),b=this.a(a+1);a=this.a(a+2);f=((f<<8)+b<<8)+a;0>f&&(f+=16777216);return f};this.c=function(a,f){for(var b=[],c=a,d=0;c<a+f;c++,d++)b[d]=String.fromCharCode(this.a(c));return b.join("")};this.e=function(a,b,c){a=this.l(a,b);switch(c.toLowerCase()){case "utf-16":case "utf-16le":case "utf-16be":b=c;var k,d=0,e=1;c=0;k=Math.min(k||a.length,a.length);254==a[0]&&255==a[1]?(b=!0,d=2):255==
a[0]&&254==a[1]&&(b=!1,d=2);b&&(e=0,c=1);b=[];for(var m=0;d<k;m++){var g=a[d+e],l=(g<<8)+a[d+c],d=d+2;if(0==l)break;else 216>g||224<=g?b[m]=String.fromCharCode(l):(g=(a[d+e]<<8)+a[d+c],d+=2,b[m]=String.fromCharCode(l,g))}a=new String(b.join(""));a.g=d;break;case "utf-8":k=0;d=Math.min(d||a.length,a.length);239==a[0]&&187==a[1]&&191==a[2]&&(k=3);e=[];for(c=0;k<d&&(b=a[k++],0!=b);c++)128>b?e[c]=String.fromCharCode(b):194<=b&&224>b?(m=a[k++],e[c]=String.fromCharCode(((b&31)<<6)+(m&63))):224<=b&&240>
b?(m=a[k++],l=a[k++],e[c]=String.fromCharCode(((b&255)<<12)+((m&63)<<6)+(l&63))):240<=b&&245>b&&(m=a[k++],l=a[k++],g=a[k++],b=((b&7)<<18)+((m&63)<<12)+((l&63)<<6)+(g&63)-65536,e[c]=String.fromCharCode((b>>10)+55296,(b&1023)+56320));a=new String(e.join(""));a.g=k;break;default:d=[];e=e||a.length;for(k=0;k<e;){c=a[k++];if(0==c)break;d[k-1]=String.fromCharCode(c)}a=new String(d.join(""));a.g=k}return a};this.f=function(a,b){b()}}document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n\tIEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n\tIEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n\x3c/script>\r\n");function B(h,g,b){function e(a,b,d,e,f,g){var l=c();l?("undefined"===typeof g&&(g=!0),b&&("undefined"!=typeof l.onload?l.onload=function(){"200"==l.status||"206"==l.status?(l.fileSize=f||l.getResponseHeader("Content-Length"),b(l)):d&&d();l=null}:l.onreadystatechange=function(){4==l.readyState&&("200"==l.status||"206"==l.status?(l.fileSize=f||l.getResponseHeader("Content-Length"),b(l)):d&&d(),l=null)}),l.open("GET",a,g),l.overrideMimeType&&l.overrideMimeType("text/plain; charset=x-user-defined"),e&&
l.setRequestHeader("Range","bytes="+e[0]+"-"+e[1]),l.setRequestHeader("If-Modified-Since","Sat, 1 Jan 1970 00:00:00 GMT"),l.send(null)):d&&d()}function c(){var a=null;window.XMLHttpRequest?a=new XMLHttpRequest:window.ActiveXObject&&(a=new ActiveXObject("Microsoft.XMLHTTP"));return a}function a(a,b){var d=c();d&&(b&&("undefined"!=typeof d.onload?d.onload=function(){"200"==d.status&&b(this);d=null}:d.onreadystatechange=function(){4==d.readyState&&("200"==d.status&&b(this),d=null)}),d.open("HEAD",a,
!0),d.send(null))}function f(a,c){var d,f;function g(a){var b=~~(a[0]/d)-f;a=~~(a[1]/d)+1+f;0>b&&(b=0);a>=blockTotal&&(a=blockTotal-1);return[b,a]}function h(f,g){for(;n[f[0]];)if(f[0]++,f[0]>f[1]){g&&g();return}for(;n[f[1]];)if(f[1]--,f[0]>f[1]){g&&g();return}var m=[f[0]*d,(f[1]+1)*d-1];e(a,function(a){parseInt(a.getResponseHeader("Content-Length"),10)==c&&(f[0]=0,f[1]=blockTotal-1,m[0]=0,m[1]=c-1);a={data:a.N||a.responseText,offset:m[0]};for(var b=f[0];b<=f[1];b++)n[b]=a;g&&g()},b,m,l,!!g)}var l,
r=new A("",0,c),n=[];d=d||2048;f="undefined"===typeof f?0:f;blockTotal=~~((c-1)/d)+1;for(var q in r)r.hasOwnProperty(q)&&"function"===typeof r[q]&&(this[q]=r[q]);this.a=function(a){var b;h(g([a,a]));b=n[~~(a/d)];if("string"==typeof b.data)return b.data.charCodeAt(a-b.offset)&255;if("unknown"==typeof b.data)return IEBinary_getByteAt(b.data,a-b.offset)};this.f=function(a,b){h(g(a),b)}}(function(){a(h,function(a){a=parseInt(a.getResponseHeader("Content-Length"),10)||-1;g(new f(h,a))})})()};(function(h){h.FileAPIReader=function(g,b){return function(e,c){var a=b||new FileReader;a.onload=function(a){c(new A(a.target.result))};a.readAsBinaryString(g)}}})(this);(function(h){var g=h.p={},b={},e=[0,7];g.t=function(c){delete b[c]};g.s=function(){b={}};g.B=function(c,a,f){f=f||{};(f.dataReader||B)(c,function(g){g.f(e,function(){var e="ftypM4A"==g.c(4,7)?ID4:"ID3"==g.c(0,3)?ID3v2:ID3v1;e.m(g,function(){var d=f.tags,h=e.n(g,d),d=b[c]||{},m;for(m in h)h.hasOwnProperty(m)&&(d[m]=h[m]);b[c]=d;a&&a()})})})};g.v=function(c){if(!b[c])return null;var a={},f;for(f in b[c])b[c].hasOwnProperty(f)&&(a[f]=b[c][f]);return a};g.A=function(c,a){return b[c]?b[c][a]:null};h.ID3=
h.p;g.loadTags=g.B;g.getAllTags=g.v;g.getTag=g.A;g.clearTags=g.t;g.clearAll=g.s})(this);(function(h){var g=h.q={},b="Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(";");
g.m=function(b,c){var a=b.h();b.f([a-128-1,a],c)};g.n=function(e){var c=e.h()-128;if("TAG"==e.c(c,3)){var a=e.c(c+3,30).replace(/\0/g,""),f=e.c(c+33,30).replace(/\0/g,""),g=e.c(c+63,30).replace(/\0/g,""),k=e.c(c+93,4).replace(/\0/g,"");if(0==e.a(c+97+28))var d=e.c(c+97,28).replace(/\0/g,""),h=e.a(c+97+29);else d="",h=0;e=e.a(c+97+30);return{version:"1.1",title:a,artist:f,album:g,year:k,comment:d,track:h,genre:255>e?b[e]:""}}return{}};h.ID3v1=h.q})(this);(function(h){function g(a,b){var c=b.a(a),e=b.a(a+1),d=b.a(a+2);return b.a(a+3)&127|(d&127)<<7|(e&127)<<14|(c&127)<<21}var b=h.D={};b.b={};b.frames={BUF:"Recommended buffer size",CNT:"Play counter",COM:"Comments",CRA:"Audio encryption",CRM:"Encrypted meta frame",ETC:"Event timing codes",EQU:"Equalization",GEO:"General encapsulated object",IPL:"Involved people list",LNK:"Linked information",MCI:"Music CD Identifier",MLL:"MPEG location lookup table",PIC:"Attached picture",POP:"Popularimeter",REV:"Reverb",
RVA:"Relative volume adjustment",SLT:"Synchronized lyric/text",STC:"Synced tempo codes",TAL:"Album/Movie/Show title",TBP:"BPM (Beats Per Minute)",TCM:"Composer",TCO:"Content type",TCR:"Copyright message",TDA:"Date",TDY:"Playlist delay",TEN:"Encoded by",TFT:"File type",TIM:"Time",TKE:"Initial key",TLA:"Language(s)",TLE:"Length",TMT:"Media type",TOA:"Original artist(s)/performer(s)",TOF:"Original filename",TOL:"Original Lyricist(s)/text writer(s)",TOR:"Original release year",TOT:"Original album/Movie/Show title",
TP1:"Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",TP2:"Band/Orchestra/Accompaniment",TP3:"Conductor/Performer refinement",TP4:"Interpreted, remixed, or otherwise modified by",TPA:"Part of a set",TPB:"Publisher",TRC:"ISRC (International Standard Recording Code)",TRD:"Recording dates",TRK:"Track number/Position in set",TSI:"Size",TSS:"Software/hardware and settings used for encoding",TT1:"Content group description",TT2:"Title/Songname/Content description",TT3:"Subtitle/Description refinement",
TXT:"Lyricist/text writer",TXX:"User defined text information frame",TYE:"Year",UFI:"Unique file identifier",ULT:"Unsychronized lyric/text transcription",WAF:"Official audio file webpage",WAR:"Official artist/performer webpage",WAS:"Official audio source webpage",WCM:"Commercial information",WCP:"Copyright/Legal information",WPB:"Publishers official webpage",WXX:"User defined URL link frame",AENC:"Audio encryption",APIC:"Attached picture",COMM:"Comments",COMR:"Commercial frame",ENCR:"Encryption method registration",
EQUA:"Equalization",ETCO:"Event timing codes",GEOB:"General encapsulated object",GRID:"Group identification registration",IPLS:"Involved people list",LINK:"Linked information",MCDI:"Music CD identifier",MLLT:"MPEG location lookup table",OWNE:"Ownership frame",PRIV:"Private frame",PCNT:"Play counter",POPM:"Popularimeter",POSS:"Position synchronisation frame",RBUF:"Recommended buffer size",RVAD:"Relative volume adjustment",RVRB:"Reverb",SYLT:"Synchronized lyric/text",SYTC:"Synchronized tempo codes",
TALB:"Album/Movie/Show title",TBPM:"BPM (beats per minute)",TCOM:"Composer",TCON:"Content type",TCOP:"Copyright message",TDAT:"Date",TDLY:"Playlist delay",TENC:"Encoded by",TEXT:"Lyricist/Text writer",TFLT:"File type",TIME:"Time",TIT1:"Content group description",TIT2:"Title/songname/content description",TIT3:"Subtitle/Description refinement",TKEY:"Initial key",TLAN:"Language(s)",TLEN:"Length",TMED:"Media type",TOAL:"Original album/movie/show title",TOFN:"Original filename",TOLY:"Original lyricist(s)/text writer(s)",
TOPE:"Original artist(s)/performer(s)",TORY:"Original release year",TOWN:"File owner/licensee",TPE1:"Lead performer(s)/Soloist(s)",TPE2:"Band/orchestra/accompaniment",TPE3:"Conductor/performer refinement",TPE4:"Interpreted, remixed, or otherwise modified by",TPOS:"Part of a set",TPUB:"Publisher",TRCK:"Track number/Position in set",TRDA:"Recording dates",TRSN:"Internet radio station name",TRSO:"Internet radio station owner",TSIZ:"Size",TSRC:"ISRC (international standard recording code)",TSSE:"Software/Hardware and settings used for encoding",
TYER:"Year",TXXX:"User defined text information frame",UFID:"Unique file identifier",USER:"Terms of use",USLT:"Unsychronized lyric/text transcription",WCOM:"Commercial information",WCOP:"Copyright/Legal information",WOAF:"Official audio file webpage",WOAR:"Official artist/performer webpage",WOAS:"Official audio source webpage",WORS:"Official internet radio station homepage",WPAY:"Payment",WPUB:"Publishers official webpage",WXXX:"User defined URL link frame"};var e={title:["TIT2","TT2"],artist:["TPE1",
"TP1"],album:["TALB","TAL"],year:["TYER","TYE"],comment:["COMM","COM"],track:["TRCK","TRK"],genre:["TCON","TCO"],picture:["APIC","PIC"],lyrics:["USLT","ULT"]},c=["title","artist","album","track"];b.m=function(a,b){a.f([0,g(6,a)],b)};b.n=function(a,f){var h=0,k=a.a(h+3);if(4<k)return{version:">2.4"};var d=a.a(h+4),t=a.d(h+5,7),m=a.d(h+5,6),u=a.d(h+5,5),l=g(h+6,a),h=h+10;if(m)var r=a.i(h),h=h+(r+4);var k={version:"2."+k+"."+d,major:k,revision:d,flags:{unsynchronisation:t,extended_header:m,experimental_indicator:u},
size:l},n;if(t)n={};else{for(var l=l-10,t=a,d=f,m={},u=k.major,r=[],q=0,p;p=(d||c)[q];q++)r=r.concat(e[p]||[p]);for(d=r;h<l;){r=null;q=t;p=h;var x=null;switch(u){case 2:n=q.c(p,3);var s=q.o(p+3),w=6;break;case 3:n=q.c(p,4);s=q.i(p+4);w=10;break;case 4:n=q.c(p,4),s=g(p+4,q),w=10}if(""==n)break;h+=w+s;0>d.indexOf(n)||(2<u&&(x={message:{P:q.d(p+8,6),I:q.d(p+8,5),M:q.d(p+8,4)},k:{K:q.d(p+8+1,7),F:q.d(p+8+1,3),H:q.d(p+8+1,2),C:q.d(p+8+1,1),u:q.d(p+8+1,0)}}),p+=w,x&&x.k.u&&(g(p,q),p+=4,s-=4),x&&x.k.C||
(n in b.b?r=b.b[n]:"T"==n[0]&&(r=b.b["T*"]),r=r?r(p,s,q,x):void 0,r={id:n,size:s,description:n in b.frames?b.frames[n]:"Unknown",data:r},n in m?(m[n].id&&(m[n]=[m[n]]),m[n].push(r)):m[n]=r))}n=m}for(var y in e)if(e.hasOwnProperty(y)){a:{s=e[y];"string"==typeof s&&(s=[s]);w=0;for(h=void 0;h=s[w];w++)if(h in n){a=n[h].data;break a}a=void 0}a&&(k[y]=a)}for(var z in n)n.hasOwnProperty(z)&&(k[z]=n[z]);return k};h.ID3v2=b})(this);(function(){function h(b){var e;switch(b){case 0:e="iso-8859-1";break;case 1:e="utf-16";break;case 2:e="utf-16be";break;case 3:e="utf-8"}return e}var g="32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. lable side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
ID3v2.b.APIC=function(b,e,c,a,f){f=f||"3";a=b;var v=h(c.a(b));switch(f){case "2":var k=c.c(b+1,3);b+=4;break;case "3":case "4":k=c.e(b+1,e-(b-a),""),b+=1+k.g}f=c.a(b,1);f=g[f];v=c.e(b+1,e-(b-a),v);b+=1+v.g;return{format:k.toString(),type:f,description:v.toString(),data:c.l(b,a+e-b)}};ID3v2.b.COMM=function(b,e,c){var a=b,f=h(c.a(b)),g=c.c(b+1,3),k=c.e(b+4,e-4,f);b+=4+k.g;b=c.e(b,a+e-b,f);return{language:g,O:k.toString(),text:b.toString()}};ID3v2.b.COM=ID3v2.b.COMM;ID3v2.b.PIC=function(b,e,c,a){return ID3v2.b.APIC(b,
e,c,a,"2")};ID3v2.b.PCNT=function(b,e,c){return c.J(b)};ID3v2.b.CNT=ID3v2.b.PCNT;ID3v2.b["T*"]=function(b,e,c){var a=h(c.a(b));return c.e(b+1,e-1,a).toString()};ID3v2.b.TCON=function(b,e,c){return ID3v2.b["T*"].apply(this,arguments).replace(/^\(\d+\)/,"")};ID3v2.b.TCO=ID3v2.b.TCON;ID3v2.b.USLT=function(b,e,c){var a=b,f=h(c.a(b)),g=c.c(b+1,3),k=c.e(b+4,e-4,f);b+=4+k.g;b=c.e(b,a+e-b,f);return{language:g,G:k.toString(),L:b.toString()}};ID3v2.b.ULT=ID3v2.b.USLT})();(function(h){function g(b,a,f,h){var k=b.i(a);if(0==k)h();else{var d=b.c(a+4,4);-1<["moov","udta","meta","ilst"].indexOf(d)?("meta"==d&&(a+=4),b.f([a+8,a+8+8],function(){g(b,a+8,k-8,h)})):b.f([a+(d in e.j?0:k),a+k+8],function(){g(b,a+k,f,h)})}}function b(c,a,f,g,h){h=void 0===h?"":h+"  ";for(var d=f;d<f+g;){var t=a.i(d);if(0==t)break;var m=a.c(d+4,4);if(-1<["moov","udta","meta","ilst"].indexOf(m)){"meta"==m&&(d+=4);b(c,a,d+8,t-8,h);break}if(e.j[m]){var u=a.o(d+16+1),l=e.j[m],u=e.types[u];if("trkn"==
m)c[l[0]]=a.a(d+16+11),c.count=a.a(d+16+13);else{var m=d+16+4+4,r=t-16-4-4,n;switch(u){case "text":n=a.e(m,r,"UTF-8");break;case "uint8":n=a.w(m);break;case "jpeg":case "png":n={k:"image/"+u,data:a.l(m,r)}}c[l[0]]="comment"===l[0]?{text:n}:n}}d+=t}}var e=h.r={};e.types={0:"uint8",1:"text",13:"jpeg",14:"png",21:"uint8"};e.j={"\u00a9alb":["album"],"\u00a9art":["artist"],"\u00a9ART":["artist"],aART:["artist"],"\u00a9day":["year"],"\u00a9nam":["title"],"\u00a9gen":["genre"],trkn:["track"],"\u00a9wrt":["composer"],
"\u00a9too":["encoder"],cprt:["copyright"],covr:["picture"],"\u00a9grp":["grouping"],keyw:["keyword"],"\u00a9lyr":["lyrics"],"\u00a9cmt":["comment"],tmpo:["tempo"],cpil:["compilation"],disk:["disc"]};e.m=function(b,a){b.f([0,7],function(){g(b,0,b.h(),a)})};e.n=function(c){var a={};b(a,c,0,c.h());return a};h.ID4=h.r})(this);
