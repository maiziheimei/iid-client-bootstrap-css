(function(){var n=this,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)};var u=(new Date).getTime();var w=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ca=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},x=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},da=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ea=function(a,b){if(!a)return b;var c=a.match(da);return c?c[0]:b};var fa=w("0.15"),ga=w("0.01"),ha=w("0.001"),ra=ca("101",-1),sa=ca("10",0),ta=w("0.05"),ua=w("0.001"),va=w("0.0"),wa=w("0.001"),xa=x("true",!0),ya=w("0.01"),
za=w("0.03"),Aa=w("0.001"),Ba=w("0.01"),Ca=w("");var Da=function(){return"r20151014"},Ea=x("false",!1),Fa=x("false",!1),Ga=x("true",!1),Ha=Ga||!Fa;var Ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ja=/&/g,Ka=/</g,eb=/>/g,fb=/"/g,gb=/'/g,hb=/\x00/g,ib={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},A={"'":"\\'"},jb=function(a,b){return a<b?-1:a>b?1:0};var F=function(a){F[" "](a);return a};F[" "]=function(){};var G;a:{var kb=n.navigator;if(kb){var lb=kb.userAgent;if(lb){G=lb;break a}}G=""};var mb=-1!=G.indexOf("Opera")||-1!=G.indexOf("OPR"),H=-1!=G.indexOf("Trident")||-1!=G.indexOf("MSIE"),nb=-1!=G.indexOf("Edge"),I=-1!=G.indexOf("Gecko")&&!(-1!=G.toLowerCase().indexOf("webkit")&&-1==G.indexOf("Edge"))&&!(-1!=G.indexOf("Trident")||-1!=G.indexOf("MSIE"))&&-1==G.indexOf("Edge"),ob=-1!=G.toLowerCase().indexOf("webkit")&&-1==G.indexOf("Edge"),pb=function(){var a=G;if(I)return/rv\:([^\);]+)(\)|;)/.exec(a);if(nb)return/Edge\/([\d\.]+)/.exec(a);if(H)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
if(ob)return/WebKit\/(\S+)/.exec(a)},qb=function(){var a=n.document;return a?a.documentMode:void 0},rb=function(){if(mb&&n.opera){var a;var b=n.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=pb())&&(a=b?b[1]:"");return H&&(b=qb(),b>parseFloat(a))?String(b):a}(),sb={},tb=function(a){if(!sb[a]){for(var b=0,c=Ia(String(rb)).split("."),d=Ia(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",l=RegExp("(\\d*)(\\D*)","g"),r=RegExp("(\\d*)(\\D*)","g");
do{var t=l.exec(g)||["","",""],m=r.exec(h)||["","",""];if(0==t[0].length&&0==m[0].length)break;b=jb(0==t[1].length?0:parseInt(t[1],10),0==m[1].length?0:parseInt(m[1],10))||jb(0==t[2].length,0==m[2].length)||jb(t[2],m[2])}while(0==b)}sb[a]=0<=b}},ub=n.document,vb=ub&&H?qb()||("CSS1Compat"==ub.compatMode?parseInt(rb,10):5):void 0;var wb;if(!(wb=!I&&!H)){var xb;if(xb=H)xb=9<=vb;wb=xb}wb||I&&tb("1.9.1");H&&tb("9");var N=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)};var yb=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{F(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},O=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return c=zb(window),a[Math.floor(c*a.length)]}return null},zb=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Ab=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var Db=function(a,b,c,d,f,e){try{if((d?a.X:Math.random())<(f||a.N)){var g=a.M+b+Bb(c),g=g.substring(0,2E3);"undefined"===typeof e?Cb(g):Cb(g,e)}}catch(h){}},Bb=function(a){var b="";Ab(a,function(a,d){if(0===a||a)b+="&"+d+"="+encodeURIComponent(String(a))});return b},Cb=function(a,b){n.google_image_requests||(n.google_image_requests=[]);var c=n.document.createElement("img");if(b){var d=function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",
a);a=d;c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};N(c,"load",d,void 0);N(c,"error",d,void 0)}c.src=a;n.google_image_requests.push(c)};var Eb=document,P=window,Fb,Gb=null,Hb=Eb.getElementsByTagName("script");Hb&&Hb.length&&(Gb=Hb[Hb.length-1]);Fb=Gb;var Ib=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},Jb=function(a){return!!a&&"function"==typeof a&&!!a.call},Kb=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},Lb=function(a,b){if(a.indexOf){var c=a.indexOf(b);return 0<c||0===c}for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},Mb=function(a,b){N(a,"load",b)},Nb=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,Mb(a,function(){a.google_onload_fired=
!0}))},Ob=function(){var a=P.google_unique_id;return"number"==typeof a?a:0},Pb=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},Qb=!!window.google_async_iframe_id;var Rb=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},Sb=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var Tb=function(a,b,c){this.U=a;this.P=b;this.w=c;this.v=null;this.O=this.o;this.ca=!1},Ub=function(a,b,c){this.message=a;this.fileName=b||"";this.lineNumber=c||-1},Wb=function(a,b,c,d){var f;try{f=c()}catch(h){var e=a.w;try{var g=Vb(h),e=(d||a.O).call(a,b,g,void 0,void 0)}catch(l){a.o("pAR",l)}if(!e)throw h;}finally{}return f},Xb=function(a,b){var c=Q;return function(){var d=arguments;return Wb(c,a,function(){return b.apply(void 0,d)})}};
Tb.prototype.o=function(a,b,c,d,f){var e={};e.context=a;b instanceof Ub||(b=Vb(b));e.msg=b.message.substring(0,512);b.fileName&&(e.file=b.fileName);0<b.lineNumber&&(e.line=b.lineNumber.toString());a=n.document;e.url=a.URL.substring(0,512);e.ref=a.referrer.substring(0,512);if(this.v)try{this.v(e)}catch(g){}if(d)try{d(e)}catch(g){}Db(this.U,f||this.P,e,this.ca,c);return this.w};
var Vb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){var c=a.stack,d=b;try{-1==c.indexOf(d)&&(c=d+"\n"+c);for(var f;c!=f;)f=c,c=c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=c.replace(/\n */g,"\n")}catch(e){b=d}}return new Ub(b,a.fileName,a.lineNumber)};var Yb,Q,Zb="http"+("http:"==P.location.protocol?"":"s")+"://pagead2.googlesyndication.com/pagead/gen_204?id=";Yb=new function(){this.M=Zb;this.N=.01;this.X=Math.random()};Q=new Tb(Yb,"jserror",!0);var Hc=function(a,b){Wb(Q,a,b,Gc)},Gc=Q.o,Ic=function(a,b){return Xb(a,b)};var Jc={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};Q.w=!Ea;Q.v=function(a){a.shv=Da();Ab(Jc,function(b,c){try{null!=n[b]&&(a[c]=n[b])}catch(d){}})};var Kc=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};var Lc=function(a){var b;try{b=parseInt(a.localStorage.getItem("google_experiment_mod"),10)}catch(c){return null}if(0<=b&&1E3>b)return b;b=Math.floor(1E3*zb(a));try{return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){return null}};var Mc=null,Nc=function(){if(!Mc){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,yb(a))b=a;else break;Mc=b}return Mc};var V={za:{j:"453848100",i:"453848101"},ma:{j:"828064124",i:"828064125"},la:{j:"828064127",i:"828064128"},na:{j:"828064170",i:"828064171"},fa:{j:"453848130",i:"453848131",xa:"453848132",ya:"453848133"},pa:{j:"24819308",i:"24819309",ea:"24819320"},oa:{j:"24819330",i:"24819331"},ra:{j:"828064162",i:"828064163"},qa:{j:"828064164",i:"828064165",ha:"828064166"},ja:{j:"86724438",i:"86724439"},ka:{j:"828064190",i:"828064191"},ta:{j:"10573505",i:"10573506"},J:{j:"10573595",i:"10573596"},wa:{j:"10573511",
i:"10573512"},L:{j:"10573581",i:"10573582"},ua:{j:"10573531",i:"10573532"},K:{j:"10573561",i:"10573562"},va:{j:"10573551",i:"10573552"},sa:{j:"312815000",i:"312815001"},I:{j:"312815100",i:"312815101"},ga:{j:"26835101",i:"26835102"},ia:{j:"35923720",i:"35923721"},A:{j:"35923760",i:"35923761"},Aa:{j:"27415001",i:"27415002"},H:{j:"20040000",i:"20040001"}};var Oc=new function(){this.V=new Kc(100,199)};var W=function(a,b,c,d){return a.location&&a.location.hash=="#google_plle_"+d?d:O([c,d],b)};var Pc=function(a,b,c){Hc("files::getSrc",function(){if("https:"==P.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Qc=function(a,b,c){c||(c=Ha?"https":"http");return Pc(a,b,c)};var Rc=function(){},Tc=function(a,b,c){switch(typeof b){case "string":Sc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var f="",e=0;e<d;e++)c.push(f),Tc(a,b[e],c),f=",";c.push("]");break}c.push("{");d="";for(f in b)b.hasOwnProperty(f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Sc(f,
c),c.push(":"),Tc(a,e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Uc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Vc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Sc=function(a,b){b.push('"');b.push(a.replace(Vc,function(a){if(a in Uc)return Uc[a];var b=a.charCodeAt(0),f="\\u";16>b?f+="000":256>b?f+="00":4096>b&&(f+="0");return Uc[a]=f+b.toString(16)}));
b.push('"')};var Wc=null,Xc=I||ob||mb||"function"==typeof n.atob;var Yc="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_ember_h google_ember_w google_enable_content_recommendations google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Zc={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},$c=function(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null},ad=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0],(a=a.match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?\s*$/i))&&/google_ad_client/.test(a[1]))return a[1];return null},
bd=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];return null},ed=function(a,b){var c;try{a:{var d=a.document.getElementsByTagName("script"),f=$c,e;"undefined"!=typeof a.google_pubvars_recovery_regexp_experiment?e=a.google_pubvars_recovery_regexp_experiment:(e=O(["C","E","EM"],za),a.google_pubvars_recovery_regexp_experiment=
e);b.google_pubvars_recovery_regexp_experiment=e;switch(e){case "E":f=ad;break;case "EM":f=bd}for(var g=d.length-1;0<=g;g--){var h=d[g];if(!h.google_parsed_script){h.google_parsed_script=!0;var l=f(h);if(l){c=l;break a}}}c=null}}catch(t){return!1}if(!c)return!1;try{for(var d=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,f={},r;r=d.exec(c);)f[r[1]]=cd(r[2]);dd(f,a)}catch(t){return!1}return!!a.google_ad_client},fd=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=
[];Ib(a,function(a,d){if(null!=a){var f;try{var e=[];Tc(new Rc,a,e);f=e.join("")}catch(g){}f&&(f=f.replace(/\//g,"\\$&"),Kb(b,d,"=",f,";"))}});return b.join("")},gd=function(a){for(var b=0,c=Yc.length;b<c;b++){var d=Yc[b];Zc[d]||(a[d]=null)}},cd=function(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:
void 0}}catch(d){}}},dd=function(a,b){for(var c=0;c<Yc.length;c++){var d=Yc[c];null==b[d]&&null!=a[d]&&(b[d]=a[d])}};var hd=null;var id=function(a){this.m=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:p(this.ba,this)});this.Z=a.google_iframe_oncopy},jd;var X="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(X)&&(-1!=X.indexOf("&")&&(X=X.replace(Ja,"&amp;")),-1!=X.indexOf("<")&&(X=X.replace(Ka,"&lt;")),-1!=X.indexOf(">")&&(X=X.replace(eb,"&gt;")),-1!=X.indexOf('"')&&(X=X.replace(fb,"&quot;")),-1!=X.indexOf("'")&&(X=X.replace(gb,"&#39;")),-1!=X.indexOf("\x00")&&(X=X.replace(hb,"&#0;")));jd=X;id.prototype.set=function(a,b){this.Z.handlers[a]=b;this.m.addEventListener&&this.m.addEventListener("load",p(this.R,this,a),!1)};
id.prototype.R=function(a){a=this.m.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};id.prototype.ba=function(a,b){var c=kd("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var kd=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var ld=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,md=/Android/,nd=!1;var od=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var pd={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var qd="google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "),rd=function(a){try{var b=a.top.google_ads_params_store;if(b)return b;b=a.top.google_ads_params_store={};if(b===a.top.google_ads_params_store)return b}catch(c){}return null};var Y,Z=function(a){this.u=[];this.m=a||window;this.l=0;this.s=null;this.G=0},sd=function(a,b){this.S=a;this.da=b};Z.prototype.enqueue=function(a,b){0!=this.l||0!=this.u.length||b&&b!=window?this.C(a,b):(this.l=2,this.F(new sd(a,window)))};Z.prototype.C=function(a,b){this.u.push(new sd(a,b||this.m));td(this)};Z.prototype.T=function(a){this.l=1;if(a){var b=Ic("sjr::timeout",p(this.D,this,!0));this.s=this.m.setTimeout(b,a)}};
Z.prototype.D=function(a){a&&++this.G;1==this.l&&(null!=this.s&&(this.m.clearTimeout(this.s),this.s=null),this.l=0);td(this)};Z.prototype.Y=function(){return!(!window||!Array)};Z.prototype.$=function(){return this.G};Z.prototype.nq=Z.prototype.enqueue;Z.prototype.nqa=Z.prototype.C;Z.prototype.al=Z.prototype.T;Z.prototype.rl=Z.prototype.D;Z.prototype.sz=Z.prototype.Y;Z.prototype.tc=Z.prototype.$;var td=function(a){var b=Ic("sjr::tryrun",p(a.aa,a));a.m.setTimeout(b,0)};
Z.prototype.aa=function(){if(0==this.l&&this.u.length){var a=this.u.shift();this.l=2;var b=Ic("sjr::run",p(this.F,this,a));a.da.setTimeout(b,0);td(this)}};Z.prototype.F=function(a){this.l=0;a.S()};
var ud=function(a){try{return a.sz()}catch(b){return!1}},vd=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&ud(a)&&Jb(a.nq)&&Jb(a.nqa)&&Jb(a.al)&&Jb(a.rl)},wd=function(){if(Y&&ud(Y))return Y;var a=Nc(),b=a.google_jobrunner;return vd(b)?Y=b:a.google_jobrunner=Y=new Z(a)},xd=function(a,b){wd().nq(a,b)},yd=function(a,b){wd().nqa(a,b)};var zd=Qb?1==Ob():!Ob(),Ad=function(){var a=Ga?"https":"http",b=F("script"),c;c=ea("","pagead2.googlesyndication.com");return["<",b,' src="',Qc(c,["/pagead/js/",Da(),"/r20151006/show_ads_impl.js"].join(""),a),'"></',b,">"].join("")},Bd=function(a,b,c,d){return function(){var f=!1;d&&wd().al(3E4);var e=a.document.getElementById(b);e&&!yb(e.contentWindow)&&
3==a.google_top_js_status&&(a.google_top_js_status=6);try{var g=a.document.getElementById(b).contentWindow;if(yb(g)){var h=a.document.getElementById(b).contentWindow,l=h.document;l.body&&l.body.firstChild||(l.open(),h.google_async_iframe_close=!0,l.write(c))}else{var r=a.document.getElementById(b).contentWindow,t;e=c;e=String(e);if(e.quote)t=e.quote();else{g=['"'];for(h=0;h<e.length;h++){var m=e.charAt(h),B=m.charCodeAt(0),l=g,R=h+1,J;if(!(J=ib[m])){var C;if(31<B&&127>B)C=m;else{var y=m;if(y in A)C=
A[y];else if(y in ib)C=A[y]=ib[y];else{var v=y,z=y.charCodeAt(0);if(31<z&&127>z)v=y;else{if(256>z){if(v="\\x",16>z||256<z)v+="0"}else v="\\u",4096>z&&(v+="0");v+=z.toString(16).toUpperCase()}C=A[y]=v}}J=C}l[R]=J}g.push('"');t=g.join("")}r.location.replace("javascript:"+t)}f=!0}catch(K){r=Nc().google_jobrunner,vd(r)&&r.rl()}f&&(f=kd("google_async_rrc",c),(new id(a)).set(b,Bd(a,b,f,!1)))}},Cd=function(a){var b=["<iframe"];Ib(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},
Dd=function(a){var b;if(b=zd){if(!hd)a:{var c=[P.top];b=[];for(var d=0,f;f=c[d++];){b.push(f);try{if(f.frames)for(var e=f.frames.length,g=0;g<e&&1024>c.length;++g)c.push(f.frames[g])}catch(l){}}for(e=0;e<b.length;e++)try{var h=b[e].frames.google_esf;if(h){hd=h;break a}}catch(l){}hd=null}b=!hd}return b?(h={style:"display:none"},h["data-ad-client"]=od(a),h.id="google_esf",h.name="google_esf",a=Qc(ea("","googleads.g.doubleclick.net"),["/pagead/html/",Da(),"/r20151006/zrt_lookup.html"].join("")),
h.src=a,Cd(h)):""},Ed=function(a,b){var c=b.google_ad_output,d=b.google_ad_format;d||"html"!=c&&null!=c||(d=b.google_ad_width+"x"+b.google_ad_height,b.google_ad_format_suffix&&(d+=b.google_ad_format_suffix));c=!b.google_ad_slot||b.google_override_format||!pd[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;d=d&&c?d.toLowerCase():"";b.google_ad_format=d;for(var d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],c=[],f=0,e=Fb.parentElement;e&&
25>f;e=e.parentNode,++f)c.push(9!=e.nodeType&&e.id||"");(c=c.join())&&d.push(c);b.google_ad_unit_key=Pb(d.join(":")).toString();d=a.google_adk2_experiment=a.google_adk2_experiment||O(["C","E"],wa)||"N";if("E"==d){d=Fb;c=[];for(f=0;d&&25>f;++f){var e="",e=(e=9!=d.nodeType&&d.id)?"/"+e:"",g;a:{if(d&&d.nodeName&&d.parentElement){g=d.nodeName.toString().toLowerCase();for(var h=d.parentElement.childNodes,l=0,r=0;r<h.length;++r){var t=h[r];if(t.nodeName&&t.nodeName.toString().toLowerCase()==g){if(d==t){g=
"."+l;break a}++l}}}g=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+e+g);d=d.parentElement}d=c.join()+":";c=a;f=[];if(c)try{for(var m=c.parent,e=0;m&&m!=c&&25>e;++e){var B=m.frames;for(g=0;g<B.length;++g)if(c==B[g]){f.push(g);break}c=m;m=c.parent}}catch(R){}b.google_ad_unit_key_2=Pb(d+f.join()).toString()}else"C"==d&&(b.google_ad_unit_key_2="ctrl")},Fd=Math.floor(1E6*Math.random()),Gd=function(a){var b;try{b={};for(var c=a.data.split("\n"),d=0;d<c.length;d++){var f=c[d].indexOf("=");
-1!=f&&(b[c[d].substr(0,f)]=c[d].substr(f+1))}}catch(e){}c=b[3];if(b[1]==Fd&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}};Hc("sa::main",function(){var a=window,b=a.google_ad_modifications=a.google_ad_modifications||{};if(!b.plle){b.plle=!0;var c=b.loeids=b.loeids||[];Ia("")&&c.push("");var d=V.J,f,e=d.i,g;if(a.location&&a.location.hash=="#google_plle_"+e)g=e;else{var h=[d.j,e],l=new Kc(ra,ra+sa-1),r;if(!(r=0>=sa||sa%h.length)){var t=Oc.V;r=!(t.start<=l.start&&t.end>=l.end)}if(r)g=null;else{var m=Lc(a);g=null!==m&&l.start<=m&&l.end>=m?h[(m-ra)%h.length]:
null}}(f=g)&&c.push(f);var d=V.I,B=W(a,ta,d.j,d.i);B&&c.push(B);var d=V.L,R=W(a,ua,d.j,d.i);R&&c.push(R);var d=V.K,J=W(a,va,d.j,d.i);J&&c.push(J);var d=V.A,C=W(a,Ba,d.j,d.i);C&&c.push(C);if(!Eb.body){var d=V.H,y=W(a,Ca,d.j,d.i);y&&c.push(y)}}var v;var z=a.google_ad_slot,K=a.google_ad_modifications;if(!K||Sb(K.ad_whitelist,z,void 0))v=null;else{var $b=K.space_collapsing||"none",ac=Sb(K.ad_blacklist,z);v=ac?{B:!0,W:ac.space_collapsing||$b}:K.remove_ads_by_default?{B:!0,W:$b}:null}if(v&&v.B)gd(a);else{Nb(a);
if(!window.google_top_experiment&&!window.google_top_js_status){var La=window;if(2!==(La.top==La?0:yb(La.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var Ma;try{Ma=P.top.frames.google_top_static_frame?!0:!1}catch(Na){Ma=!1}if(Ma){if(window.google_top_experiment=O(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],fa),"jp_c"!==window.google_top_experiment){N(window,"message",Gd,void 0);window.google_top_js_status=3;var bc={0:"google_loc_request",1:Fd},cc=[],Oa;for(Oa in bc)cc.push(Oa+
"="+bc[Oa]);top.postMessage(cc.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}var dc=window.google_ad_output;void 0!==window.google_always_use_delayed_impressions_experiment||dc&&"html"!=dc||(window.google_always_use_delayed_impressions_experiment=O(["C","E"],ha));var Pa;if(!(Pa=!1===window.google_enable_async)){var Qa;var ec=navigator.userAgent;ld.test(ec)?Qa=!1:(void 0!==window.google_async_for_oa_experiment||!md.test(navigator.userAgent)||ld.test(navigator.userAgent)||
(window.google_async_for_oa_experiment=O(["E","C"],ga)),Qa=md.test(ec)?"E"===window.google_async_for_oa_experiment:!0);Pa=!Qa||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output}if(Pa)a.google_loader_used="sb",a.google_start_time=u,Ed(a,a),document.write(Dd(a.google_ad_client)+Ad());else{if(zd){var fc=a.google_ad_client,Hd=navigator;if(xa&&a&&fc&&Hd){var gc=a.document,ia=gc.createElement("script"),Id=od(fc);ia.async=!0;ia.type="text/javascript";ia.src=Qc("pagead2.googlesyndication.com",
"/pub-config/"+Id+".js");var hc=gc.getElementsByTagName("script")[0];hc.parentNode.insertBefore(ia,hc)}}a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;var k={};null==a.google_ad_client&&ed(a,k)&&(k.google_loader_features_used=2048);dd(a,k);k.google_loader_used="sa";gd(a);var ic=F("script"),Ra,ja;a:{try{var L=a.top.google_pubvars_reuse_experiment;if("undefined"!==typeof L){ja=L;break a}L=O(["C","E"],ya)||null;a.top.google_pubvars_reuse_experiment=L;if(a.top.google_pubvars_reuse_experiment===
L){ja=L;break a}}catch(Na){}ja=null}if("E"===ja){var Jd=null!=k.google_ad_client,Kd=null!=k.google_ad_width,Ld=null!=k.google_ad_height,jc=rd(a);if(jc){for(var Sa=0;Sa<qd.length;Sa++){var Ta=qd[Sa];null!=k[Ta]&&(jc[Ta]=k[Ta])}var S=rd(a);if(S){var kc=S.google_ad_width,lc=S.google_ad_height,Ua=S.google_ad_format;if(kc&&lc&&Ua){var ka,Va=Ua&&Ua.match(/(\d+)x(\d+)/);ka=Va?{width:Va[1],height:Va[2]}:null;!ka||ka.width==kc&&ka.height==lc||delete S.google_ad_format}}}var Wa=rd(a);if(Wa)for(var Xa=0;Xa<
qd.length;Xa++){var la=qd[Xa];null==k[la]&&null!=Wa[la]&&(k[la]=Wa[la])}var Md=null!=k.google_ad_client,Nd=null!=k.google_ad_width,Od=null!=k.google_ad_height;Ra=[Jd?"c2":Md?"c1":"c0",Kd?"w2":Nd?"w1":"w0",Ld?"h2":Od?"h1":"h0"].join()}var q={},Pd=k.google_ad_height;q.width='"'+k.google_ad_width+'"';q.height='"'+Pd+'"';q.frameborder='"0"';q.marginwidth='"0"';q.marginheight='"0"';q.vspace='"0"';q.hspace='"0"';q.allowtransparency='"true"';q.scrolling='"no"';q.allowfullscreen='"true"';q.onload='"'+jd+
'"';for(var ma,mc=a.document,T=q.id,Qd=0;!T||mc.getElementById(T);)T="aswift_"+Qd++;q.id=T;q.name=T;var nc=k.google_ad_width,oc=k.google_ad_height,Ya=V.A,pc=Ya.j,qc=Ya.i,rc=k.google_active_plles=k.google_active_plles||[];Lb(Rb(a),pc)?rc.push(pc):Lb(Rb(a),qc)&&rc.push(qc);nd=Lb(Rb(a),Ya.i);var na=["<iframe"],oa;for(oa in q)q.hasOwnProperty(oa)&&Kb(na,oa+"="+q[oa]);var Za="left:0;position:absolute;top:0;";nd&&(Za=Za+"width:"+nc+"px;height:"+oc+"px;");na.push('style="'+Za+'"');na.push("></iframe>");
var sc=q.id,tc="border:none;height:"+oc+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+nc+"px;background-color:transparent";mc.write(['<ins id="',sc+"_expand",'" style="display:inline-table;',tc,'"><ins id="',sc+"_anchor",'" style="display:block;',tc,'">',na.join(" "),"</ins></ins>"].join(""));ma=q.id;Ed(a,k);var Rd=fd(k),M=null,$a=O(["C","E"],Aa);if("E"==$a){a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var ab=encodeURIComponent(window.JSON.stringify(k)),
bb;if(Xc)bb=n.btoa(ab);else{for(var D=[],uc=0,cb=0;cb<ab.length;cb++){for(var U=ab.charCodeAt(cb);255<U;)D[uc++]=U&255,U>>=8;D[uc++]=U}if(!Wc){Wc={};for(var pa=0;65>pa;pa++)Wc[pa]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(pa)}for(var qa=Wc,vc=[],E=0;E<D.length;E+=3){var wc=D[E],xc=E+1<D.length,yc=xc?D[E+1]:0,zc=E+2<D.length,Ac=zc?D[E+2]:0,Sd=wc>>2,Td=(wc&3)<<4|yc>>4,Bc=(yc&15)<<2|Ac>>6,Cc=Ac&63;zc||(Cc=64,xc||(Bc=64));vc.push(qa[Sd],qa[Td],qa[Bc],qa[Cc])}bb=vc.join("")}M=
bb;break a}Db(Yb,"sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0},!0,void 0,void 0)}catch(Na){Q.o("sblob",Na,void 0,void 0)}M=""}M||(M="{X}")}else"C"==$a&&(M="{C}");var Ud=Dd(k.google_ad_client),Dc=(new Date).getTime(),Ec=a.google_top_experiment,db=a.google_async_for_oa_experiment;db&&(a.google_async_for_oa_experiment=void 0);var Fc=a.google_always_use_delayed_impressions_experiment,Vd=["<!doctype html><html><body>",Ud,"<",ic,">",Rd,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,
';google_async_iframe_id="',ma,'";google_start_time=',u,";",$a?'google_pub_vars = "'+M+'";':"",Ra?'google_pubvars_reuse_experiment_result = "'+Ra+'";':"",Ec?'google_top_experiment="'+Ec+'";':"",db?'google_async_for_oa_experiment="'+db+'";':"",Fc?'google_always_use_delayed_impressions_experiment="'+Fc+'";':"","google_bpp=",Dc>u?Dc-u:1,";google_async_rrc=0;</",ic,">",Ad(),"</body></html>"].join("");(a.document.getElementById(ma)?xd:yd)(Bd(a,ma,Vd,!0))}}});}).call(this);
