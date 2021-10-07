function* getListattr(elem, tattr, attr){
	
	//console.log('getListattr');
	var t = document.getElementsByTagName(elem);
	
	for(var i = 0;i < t.length;i++){

		if(t[i].getAttribute(tattr) == attr){
			yield t[i];
		}
	}

	
}

function* getTagattr(elem, tattr){

	var t = document.getElementsByTagName(elem);
	
	for(var i = 0;i < t.length;i++){

		if(t[i].hasAttribute(tattr) == true){
			yield t[i].getAttribute(tattr);
		}
	}

}

function* getTagStyleprop(elem, prop){

	var t = document.getElementsByTagName(elem);
	
	for(var i = 0;i < t.length;i++){
		if(prop in t[i].style === true){
			if(t[i].style[prop] !== '')
				yield t[i].style[prop];
		}
		
	}

}

function* getTagStyleall(elem){

	var t = document.getElementsByTagName(elem);
	
	for(var i = 0;i < t.length;i++){
		for(let prop in t[i].style){
			if(t[i].style[prop] !== '')
				yield prop + ':' + t[i].style[prop];
		}
		
	}

}

function* getTagCStyleprop(elem, prop){

	var t = document.getElementsByTagName(elem);
	yield t.length;
	for(let ti of t){
		var cs =  window.getComputedStyle(ti, null);
		yield cs.getPropertyValue(prop);
		
	}

}

function* getTagCStylepropnot(elem, prop, not){

	var t = document.getElementsByTagName(elem);
	yield t.length;
	for(let ti of t){
		var cs =  window.getComputedStyle(ti, null);
		var pr = cs.getPropertyValue(prop);
		if(pr != not)
			yield cs.getPropertyValue(prop);
		
	}

}

function* getTagCStyleall(elem){

	var t = document.getElementsByTagName(elem);
	
	for(var i = 0;i < t.length;i++){
		var cs =  window.getComputedStyle(t[i], null);
		for(let prop of cs){
			yield prop + ':' + cs.getPropertyValue(prop);
		}
		
	}

}

function getElem(id){
	return document.getElementById(id);
}

function* getList(elem){
	
	//console.log('getList');
	var t = document.getElementsByTagName(elem);
	
	for(var i = 0;i < t.length;i++){

		yield t[i];
		
	}

	
}

function* getListattrinnerrmv(elem, tattr, attr){
	
	//console.log('getListattrinnerrmv');
	var t = document.getElementsByTagName(elem);
	
	for(var i = 0;i < t.length;i++){

		if(t[i].getAttribute(tattr) == attr){
			t[i].innerHTML = '';
			yield t[i];
		}
	}

	
}

function* getListrmv(elem){
	
	//console.log('getListrmv');
	var t = document.getElementsByTagName(elem);
	
	for(var i = 0;i < t.length;i++){
		t[i].innerHTML = '';
		yield t[i];
		
	}

	
}

function* getListclass(classc){
	
	//console.log('getListclass');
	var c = document.getElementsByClassName(classc);
	
	for(var i = 0;i < c.length;i++){

		yield c[i];
		
	}

	
}

function* getListrmvclass(classc){
	
	//console.log('getListrmvclass');
	var c = document.getElementsByClassName(classc);
	
	for(var i = 0;i < c.length;i++){
		c[i].innerHTML = '';
		yield c[i];
		
	}

	
}

function* querySelectAll(qsa){
	var c = document.querySelectorAll(qsa);
	for(let s of c){
		yield s;
	}

}

function* querySelectAllinnerrmv(elem, qsa){
	var c = elem.querySelectorAll(qsa);
	for(let s of c){
		s.innerHTML = '';
		yield s;
	}

}

function* RmvChild(delem, ...qrid){
	if(delem.hasChildNodes()){
		//console.log('rmvchild');
		for(var i = 0;i < qrid.length;i++){
			var child = delem.children;
			delem.removeChild(child[parseInt(qrid[i], 10)]);
			yield qrid[i];
		}		
		
	}
}

function* RmvTagNameChild(delem, tag){
	if(delem.hasChildNodes()){
		//console.log('rmvtagnamechild');
		var child = delem.children;
		for(var i = 0;i < child.length;i++){
			if(child[i].tagName.substr(0, tag.length) == tag){
				yield child[i];
			}

		}
				
		
	}
}

function* applyFunc(elem, ...f){

	//console.log('applyFunc');
	for(var i = 0;i < f.length;i++){
		try{var r =  f[i](elem);}catch(e){console.log('applyfunc:'+e)}
		yield r;
	}

}

function* __$ExEC_FuNC$__(...f){

	for(var i = 0;i < f.length;i++){
		try{var r = f[i]();}catch(e){console.log('__$ExEC_FuNC$__:'+e+':'+f[i].toString())}
		yield r;
	}

}

async function async__$ExEC_FuNC$__(...f){

	for(var i = 0;i < f.length;i++){
		var r = await new Promise(resolve => { setTimeout(()=>{f[i]();resolve('exec_OK');}, 1000); } );
		//console.log('async' + i + ' ' + r);
	}

}

async function async__$ExEC_FuNC$__a(t, ...f){

	for(var i = 0;i < f.length;i++){
		var r = await new Promise(resolve => { setTimeout(()=>{f[i]();resolve('exec_OK');}, parseInt(t, 10)); } );
		//console.log('async' + i + ' ' + r);
	}

}

async function async__$ExEC_FuNC$__2(f){

	for(var i = 0;i < f.length;i++){
		var r = await new Promise(resolve => { setTimeout(()=>{f[i]();resolve('exec_OK');}, 1000); } );
		//console.log('async' + i + ' ' + r);
	}

}

async function async__$ExEC_FuNC$__3(f, n){

	for(var i = 0;i < n;i++){
		var r = await new Promise(resolve => { setTimeout(()=>{f();resolve('exec_OK');}, 1000); } );
		//console.log('async' + i + ' ' + r);
	}

}

async function async__$ExEC_FuNC$__4(v, f){

	for(var i = false;i != true;){
		var r = await new Promise(resolve => { setTimeout(()=>{f();
									if(v.on == true)i = true;
									//else if(v.currentTime == v.duration)i = true;
									resolve('exec_OK');
								     }, v.T); 
							} );
		
	}

}

async function async__$ExEC_FuNC$__5(tt, w, ti, f){

	for(var i = 0;i < tt.length;i++){
		var r = await new Promise(resolve => { setTimeout(()=>{f(tt[i]);resolve('exec_OK');}, parseInt(ti, 10)); } );
		//console.log('async' + i + ' ' + r);
	}
	w.terminate();

}

async function async__$ExEC_FuNC$__6(tt, w, f){

	for(var i = 0;i < tt.length;i++){
		console.log('---'+tt[i]);
		var r = await new Promise(resolve => { setTimeout(()=>{f(tt[i]);resolve('exec_OK');}, parseInt(window.Timg, 10)); } );
		//console.log('async' + i + ' ' + r);
	}
	//w.terminate();

}

async function async__$ExEC_FuNC$__pub(v, ti){

	var t = v.duration;
	for(var i = false;i != true;){
		var r = await new Promise(resolve => { setTimeout(()=>{
										
									if(v.duration == t){
										
										if(v.readyState != 1){ 
											v.currentTime += 10000;
										}

										if(v.readyState == 2){
											v.play();v.pause();v.play();
										}
										

									}
									else
									{
										i = true;
									}

									
									
									resolve('exec_OK');
								     }, ti); 
							} );
		
	}

}

async function async__$ExEC_FuNC$__Time(f, t){

	var r = await new Promise(resolve => { setTimeout(()=>{f();resolve('exec_Time_OK');}, t); } );
		
}

function* fornext(ln, init, pas){

	for(var j = init;j < ln;j+=pas){
		yield j;
	}

}

function tm(t){
	//console.log(t);
	//t = Math.round(t);
	if(t == 0)return '00:00';
	var _h = t / 3600.0;
	var h = Math.trunc(_h);
	var _m = (_h-h) * 60.0;
	var m = Math.trunc(_m);
	var s = Math.trunc((_m-m)*60.0);
	var mm=m, ss=s;
	if(m < 10)mm = '0'+m;
	if(s < 10)ss = '0'+s;
	if(h > 0)return h+':'+mm+':'+ss;
	else return mm+':'+ss;
}

class SFormat{
	constructor(){
		
	}

	static format_number(str, nb){
		var indexof = str.indexOf('.');
		if(indexof == -1)return str;
		return str.substr(0, indexof) + ',' + str.substr(indexof+1, nb);
	}

	static format_network_st(state){
		var str = '';
		switch(state){
			case 0:
				str += 'NETWORK_EMPTY - audio/video has not yet been initialized';
			break;

			case 1:
				str += 'NETWORK_IDLE - audio/video is active and has selected a resource, but is not using the network';
			break;

			case 2:
				str += 'NETWORK_LOADING - browser is downloading data';
			break;

			case 3:
				str += 'NETWORK_NO_SOURCE - no audio/video source found';
			break;

		}
		return str;    

	}

	static format_ready_st(state){
		var str = '';
		switch(state){
			case 0:
				str += 'HAVE_NOTHING - no information whether or not the audio/video is ready';
			break;

			case 1:
				str += 'HAVE_METADATA - metadata for the audio/video is ready';
			break;

			case 2:
				str += 'HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond';
			break;

			case 3:
				str += 'HAVE_FUTURE_DATA - data for the current and at least the next frame is available';
			break;

			case 4:
				str += 'HAVE_ENOUGH_DATA - enough data available to start playing';
			break;

		}
		return str;    

	}

	static video_stat_all(elem){

		var vstr =  '<br><p><span>Speed = x' + elem.playbackRate + '<br>' + 
				     'Time  = ' + tm(elem.currentTime) + ' / ' + tm(elem.duration) + '--' + Math.round((elem.currentTime / elem.duration) *100.0).toString(10) + '%  reste = ' + tm(elem.duration-elem.currentTime) + '<br>' +
				     'Vol   = ' + SFormat.format_number((elem.volume).toString(10), 2) + '<br>' +
				     'Network state = ' + SFormat.format_network_st(elem.networkState) + '<br>' +
				     'Video state = ' + SFormat.format_ready_st(elem.readyState) + '<br>' +
				      'Buffer = ' ;
				for(var i = 0;i < elem.buffered.length;i++){
					vstr += '[' + elem.buffered.start(i) + '-' + elem.buffered.end(i) + ']';
				}
		vstr += '<br>Hz = ' + elem.T + '<br>' +
			'CO = ' + elem.crossOrigin + '<br>' +
			'Src = ' + decodeURI(window.vfilename) + '<br>' +
			'Num = ' + window.get_I() + '<br>' + 
			/*'Src = ' + decodeURI(elem.src) +*/ '</span></p>';

		return vstr;

	}

	static video_stat(elem){

		var vstr =  '<br><p><span>Speed = x' + elem.playbackRate + '<br>' + 
				     'Time  = ' + tm(elem.currentTime) + ' / ' + tm(elem.duration) + '--' + Math.round((elem.currentTime / elem.duration) *100.0).toString(10) + '% reste = ' + tm(elem.duration-elem.currentTime) + '<br>' +
				     'Vol   = ' + SFormat.format_number((elem.volume).toString(10), 2) + '<br>' +
				     'Src = ' + decodeURI(window.vfilename) + '<br>' +
				     'Num = ' + window.get_I() + '<br>' + '</span></p>';

		return vstr;

	}

	static format_url(url){
		var u = url.split('://');
		return u[0] + '://' + escape(u[1]);

	}

	
}

class _{
	
	constructor(i){
		this.index = i;
	}

	value(){
		return this.index+1;
	}

	
}

class __ extends _{

	constructor(i){
		super(i);
	}
	
	static tattr(i){
		return i+1;
	}

	static attr(i){
		return i+2;
	}

}


class TagText{

	constructor(){
		this.pos = 1;
		this.t = 10;
		this.l = 10;
		this.mxt = 600;
		this.mxl = 600;
		this.time = 10;
		this.speed = 1;
		this.interap = 0;
		this.classbox = 'cdbox';
		this.playb = false;
		this.timervid = 0;

		
	}

	tag(elem, color, fsize){
		//console.log('hey');
		
		for(let el of getList(elem)){
			el.style.backgroundColor = color;
			el.style.fontSize = fsize;
		}

	}

	tagattr(elem, color, fsize, tattr, attr){
		//console.log('hey2');
				
		for(let el of getListattr(elem, tattr, attr)){
			el.style.backgroundColor = color;
			el.style.fontSize = fsize;
		}


	}

	
	tagrmv(classc){
						
		let el = getListrmvclass(classc);[...el];

	}

	tagarrayrmv(...classc){
		
		[...classc].forEach(c => { let el = getListrmvclass(c);[...el]; });

	}

	taginnerrmvattr(elem, tattr, attr){
		//console.log('visattr');
		
		let el = getListattrinnerrmv(elem, tattr, attr);[...el];

	}

	tagarrayinnerrmvattr(...elem){
		//for(var j = 0;j < elem.length;j+=3){
		for(let jnext of fornext(elem.length, 0, 3)){
			
			let el = getListattrinnerrmv(elem[jnext], elem[__.tattr(jnext)], elem[__.attr(jnext)]);[...el];

		}

	}

	tagrmvtag(elem){
						
		let el = getListrmv(elem);[...el];
		//console.log('rmvtag:' + elem);

	}

	tagarrayrmvtag(...elem){
	
		[...elem].forEach(t => { let el = getListrmv(t);[...el]; });

	}

	tagresz(classc, w, h, t, l){
				
		for(let el of getListclass(classc)){
			el.style.width = w;el.style.height = h;el.style.top = t;el.style.left = l;
		}

	}

	tagreszo(classc, w, h){
				
		for(let el of getListclass(classc)){
			el.style.width = w;el.style.height = h;
		}

	}

	static tagmovw(classc, t, l){
				
		for(let el of getListclass(classc)){
			el.style.top = t;el.style.left = l;
		}

	}

	tagvis(classc, vis){
		//console.log('hide');
		
		for(let el of getListclass(classc)){
			el.style.visibility = vis;
		}

	}

	tagvisattr(elem, tattr, attr, vis){
		//console.log('visattr');
		
		for(let el of getListattr(elem, tattr, attr)){
			el.style.visibility = vis;
		}

	}

	tagdis(classc, dis){
		//console.log('display');
		
		for(let el of getListclass(classc)){
			el.style.display = dis; 
		}

	}

	tagdistag(tagd, dis){
		//console.log('display tag');
		
		for(let el of getList(tagd)){
			el.style.display = dis;
		}

	}

	tagarraydistag(...tagd){
		//console.log('display array tag');
		//for(var j = 0;j < tagd.length;j+=2){
		for(let j of fornext(tagd.length, 0, 2)){
			
			for(let el of getList(tagd[j])){
				el.style.display = tagd[new _(j).value()];
				
			}
		}

	}

	tagdisattr(elem, tattr, attr, dis){
		//console.log('disattr');
	
		for(let el of getListattr(elem, tattr, attr)){
			el.style.display = dis;
		}

	}


	tagwidthattr(elem, tattr, attr, w){
		//console.log('widthattr');
		
		for(let el of getListattr(elem, tattr, attr)){
			el.style.width = w;
		}

	}

	
	taglistfuncattr(elem, tattr, attr, ...f){
		//console.log('taglistfuncattr');
		
		for(let el of getListattr(elem, tattr, attr)){
			let fct = applyFunc(el, ...f);[...fct];
			
		}
		

	}

	taglistarrayfuncattr(f, ...elem){
		//console.log('taglistarrayfuncattr');
		
		for(let jnext of fornext(elem.length, 0, 3)){

			for(let el of getListattr(elem[jnext], elem[__.tattr(jnext)], elem[__.attr(jnext)])){
				//let fct = applyFunc(el, f);[...fct];
				f(el);
				
			}
		}
		

	}

	taglistfunc(elem, ...f){
		//console.log('taglistfuncattr');
		
		for(let el of getList(elem)){
			let fct = applyFunc(el, ...f);[...fct];
			
		}
		

	}

	tagfuncattr(elem, tattr, attr, ...f){
		//console.log('funcattr');
		var t = document.getElementsByTagName(elem);
		[...t].forEach(tag => { if(tag.getAttribute(tattr) == attr)[...f].forEach(fct => fct(tag)) } );

	}

	tagfunc(elem, ...f){
		//console.log('func');
		var t = document.getElementsByTagName(elem);
		[...t].forEach(tag => { [...f].forEach(fct => fct(tag)) } );

	}

	
	tagquery(qs, qsa){
		
		for(let m of querySelectAll(qs)){
			let qel = querySelectAllinnerrmv(m, qsa);[...qel];

		}

	}

	tagqueryrmvchild(qid, ...qrid){
		
		for(let delem of querySelectAll(qid)){
			try{
				
				let rm = RmvChild(delem, ...qrid);[...rm];

			}
			catch(error){
				//console.log('tagqueryrmvchild:' + error);
			}
			
		}

	}

	tagnamermv(tag){
		
		var b = document.body;
		for(let rmt of RmvTagNameChild(b, tag)){
			//console.log('rmt:' + rmt.tagName + " = " + rmt.innerHTML );
			rmt.innerHTML = '';
			//console.log('rmt:' + rmt.tagName);
		}
		
		

	}

	tagattrall(elc, elem, tattr){

		for(let t of getTagattr(elem, tattr)){
			elc.value += t + '\n';

		}

	}

	tagstylepropall(elc, elem, prop){

		for(let t of getTagCStyleprop(elem, prop)){
			elc.value += t + '\n';

		}

		

	}

	tagstylepropallnot(elc, elem, prop, not){

		for(let t of getTagCStylepropnot(elem, prop, not)){
			elc.value += t + '\n';

		}

		

	}

	tagstyleall(elc, elem){

		for(let t of getTagCStyleall(elem)){
			elc.value += t + '\n';

		}
		
	}

	fn2workerURL(fn) {
		var blob = new Blob(['('+fn.toString()+')()'], {type: 'application/javascript'});
		return URL.createObjectURL(blob);
	}

	tagposabs(elem, tattr, attr){
		//console.log('posabsattr');
		
		for(let el of getListattr(elem, tattr, attr)){
			el.style.position = "absolute";
		}
		

	}

	tagpos(elem, tattr, attr, pos){
		//console.log('posabsattr');
		
		for(let el of getListattr(elem, tattr, attr)){
			el.style.position = pos;
		}
		

	}

	

	tagprepos(pos, t, l, mxt, mxl){
		this.pos = pos;
		this.t = t;
		this.l = l;
		this.mxt = mxt;
		this.mxl = mxl;
	}

	
	tagtimeint(t){
		this.time = t;
	}

	
	tagspeedint(t){
		this.speed = t;
	}

	
	taganimpos(classa){

		//var c = document.getElementsByClassName(classc);
		switch(this.pos){
			case 1://droite
				
				this.interap = window.setInterval(r => this.tagrunanim1(classa, this.mxl, this.speed), this.time);
				window.setTimeout(to => clearInterval(this.interap), (this.mxl  * (this.time*2)));
				//console.log('inter=' + this.interap);
				break;

			case 2://bas
				
				this.interap = window.setInterval(r => this.tagrunanim2(classa, this.mxt, this.speed), this.time);
				window.setTimeout(to => clearInterval(this.interap), (this.mxt  * (this.time*2)));
				//console.log('inter2=' + this.interap);
				break;

			case 3://gauche
				
				this.interap = window.setInterval(r => this.tagrunanim3(classa, this.l, this.speed), this.time);
				window.setTimeout(to => clearInterval(this.interap), (this.mxl  * (this.time*2)));
				//console.log('inter3=' + this.interap);
				break;

			case 4://haut
				
				this.interap = window.setInterval(r => this.tagrunanim4(classa, this.t, this.speed), this.time);
				window.setTimeout(to => clearInterval(this.interap), (this.mxt  * (this.time*2)));
				//console.log('inter4=' + this.interap);
				break;

		}

	}

	tagrunanim1(classa, mxl, speed){
		var c = document.getElementsByClassName(classa);
		var cl = parseInt(c[0].style.left, 10);
		if(cl < mxl){
			cl = parseInt(c[0].style.left, 10) + speed;
			c[0].style.left = cl + 'px';
			////console.log('anim ' + cl);
			
		}
		//else
			////console.log('end anim ' + cl);
		

	}

	tagrunanim2(classa, mxt, speed){
		var c = document.getElementsByClassName(classa);
		var ct = parseInt(c[0].style.top, 10);
		if(ct < mxt){
			ct = parseInt(c[0].style.top, 10) + speed;
			c[0].style.top = ct + 'px';
			////console.log('anim ' + cl);
			
		}
		//else
			////console.log('end anim ' + ct);
		

	}

	tagrunanim3(classa, l, speed){
		var c = document.getElementsByClassName(classa);
		var cl = parseInt(c[0].style.left, 10);
		////console.log("cl=" + cl + ", l=" + l + ", c=" + classa);
		if(cl > l){
			cl = parseInt(c[0].style.left, 10) - speed;
			c[0].style.left = cl + 'px';
			////console.log('anim ' + cl);
			
		}
		//else
		//	//console.log('end anim3 ' + cl);
		

	}

	tagrunanim4(classa, t, speed){
		var c = document.getElementsByClassName(classa);
		var ct = parseInt(c[0].style.top, 10);
		if(ct > t){
			ct = parseInt(c[0].style.top, 10) - speed;
			c[0].style.top = ct + 'px';
			////console.log('anim ' + cl);
			
		}
		//else
			////console.log('end anim4 ' + ct);
		

	}

	static integration(classb){
		window.integration = {classname : classb};
	}
//this.style.opacity=1.0;this.className=\'' + this.classbox  + '\';
	//this.style.opacity=this.op;
//onmouseover="TagText.Buttover(this);" onmouseout="TagText.Buttout(this);" class="' + this.classbox + '"
	addbox(classi, classbox){
		this.classbox = classbox;
		var box = document.getElementsByClassName(classi)[0];
		box.innerHTML += '<div onload="this.op=0.75;this.info=false;" class="' + this.classbox + '" onmouseover="this.style.opacity=1.0;this.className=\'' + this.classbox  + '\';TagText.Buttover(\'' + this.classbox + '\');" onmouseout="this.style.opacity=this.op;TagText.Buttout(\'' + this.classbox + '\');" onclick="window.WINMOVE=\'' + this.classbox + '\';"></div>';
		var b = document.getElementsByClassName(this.classbox)[0];
		b.info = false;
		b.on = false;
		b.R = 244;
		b.G = 0;
		b.B = 0;

		//b.onmouseover=()=>{TagText.Buttover(document.getElementsByClassName(classbox)[0]);};
		//b.onmouseout=()=>{TagText.Buttout(document.getElementsByClassName(classbox)[0]);};

	}

	getbox(classb){
		var b = document.getElementsByClassName(classb)[0];
		if(b === undefined)return false;
		return b.info;
	}

	setbox(classb, inf){
		var b = document.getElementsByClassName(classb)[0];
		//if(b === undefined)return;
		b.info = inf;
	}

	static geton(classb){
		var b = document.getElementsByClassName(classb)[0];
		if(b === undefined)return false;
		return b.on;
	}

	static seton(classb, o){
		var b = document.getElementsByClassName(classb)[0];
		//if(b === undefined)return;
		b.on = o;
	}

	addboxtag(elem, classbox){
		this.classbox = classbox;
		var box = document.getElementsByTagName(elem)[0];
		box.innerHTML += '<div class="' + this.classbox + '"></div>';
		

	}

	static settextbox(classb, text){
		var box = document.getElementsByClassName(classb)[0];
		box.innerHTML = text;

	}

	static gettextbox(classb){
		var box = document.getElementsByClassName(classb)[0];
		return box.innerHTML;

	}

	static setR(clw, r){
		var box = document.getElementsByClassName(clw)[0];
		box.R = r;
		box.style.backgroundColor = 'rgb(' + box.R + ',' + box.G + ',' + box.B + ')';
		
	}

	static setG(clw, g){
		var box = document.getElementsByClassName(clw)[0];
		box.G = g;
		box.style.backgroundColor = 'rgb(' + box.R + ',' + box.G + ',' + box.B + ')';
	}

	static setB(clw, b){
		var box = document.getElementsByClassName(clw)[0];
		box.B = b;
		box.style.backgroundColor = 'rgb(' + box.R + ',' + box.G + ',' + box.B + ')';
	}

	static Init_RGB(clw){
		try{
		TagText.setR(clw, getListclass('opacdesr').next().value.value);
		TagText.setG(clw, getListclass('opacdesg').next().value.value);
		TagText.setB(clw, getListclass('opacdesb').next().value.value);
		}
		catch(e){
			if(getListclass(clw).next().value !== undefined){
				TagText.setR(clw, '244');
				TagText.setG(clw, '0');
				TagText.setB(clw, '244');
			}
			console.log('init_rgb:'+clw+':'+e);
		}

	}

	static getRGB(clw){
		var box = document.getElementsByClassName(clw)[0];
		return 'rgb(' + box.R + ',' + box.G + ',' + box.B + ')';

	}

	static Buttover(classb){
		
		
		//var b = document.getElementsByClassName('rmyt-app-app-win1')[0];
		//b.style.opacity=1.0;b.className=b.classbox;
		
		new TagText().taglistfuncattr('input', 'class', classb+'_butt', elem => { 
			//console.log((classb+'_butt') + ' e:' + elem.classname);
			//if(elem.classname == (classb+'_butt')){
				elem.style.display='inline';
				elem.style.opacity = 1.0;
			//}

		});

		try{
		if(window.ytbutt == true){
			new TagText().taglistarrayfuncattr(elem => { 
				
				elem.style.display='inline';
				elem.style.opacity = 1.0;
				

			}, 'input', 'class', 'rmyt-app-app_butt_youtube', 'span', 'class', 'break_youtube');

		}
		}
		catch(e){
				console.log('buttout:' + e);
			}


		try{
		if(window.csbutt == true){
			new TagText().taglistarrayfuncattr(elem => { 
				
				elem.style.display='inline';
				elem.style.opacity = 1.0;
				

			}, 'input', 'class', 'rmyt-app-app-win2_butt_console');

		}
		}
		catch(e){
				console.log('buttout:' + e);
			}

		if(classb == 'rmyt-app-app-win1'){
			try{
			if(window.VSTAT == 'min')
				new TagText().tagreszo('rmyt-app-app-win1', '400px', '425px'); 
			else
				new TagText().tagreszo('rmyt-app-app-win1', '400px', '555px');
			}
			catch(e){
				console.log('buttout:' + e);
			}
		}

	}

	static Buttout(classb){
	

		//var b = document.getElementsByClassName('rmyt-app-app-win1')[0];
		//b.style.opacity=b.op;
		new TagText().taglistfuncattr('input', 'class', classb+'_butt', elem => { 
			//if(elem.parentNode.classname == (classb+'_butt')){
				elem.style.display='none';
				elem.style.opacity = 0.0;
			//}

		});

		try{
		if(window.ytbutt == true){
			new TagText().taglistarrayfuncattr(elem => { 
				
				elem.style.display='none';
				elem.style.opacity = 0.0;
				

			}, 'input', 'class', 'rmyt-app-app_butt_youtube', 'span', 'class', 'break_youtube');

		}
		}
		catch(e){
				console.log('ybuttout:' + e);
			}

		try{
		if(window.csbutt == true){
			new TagText().taglistarrayfuncattr(elem => { 
				
				elem.style.display='none';
				elem.style.opacity = 0.0;
				

			}, 'input', 'class', 'rmyt-app-app-win2_butt_console');

		}
		}
		catch(e){
				console.log('buttout:' + e);
			}

		if(classb == 'rmyt-app-app-win1'){
			try{
			if(window.VSTAT == 'min')
				new TagText().tagreszo('rmyt-app-app-win1', '400px', '305px'); 
			else
				new TagText().tagreszo('rmyt-app-app-win1', '400px', '460px');
			}
			catch(e){
				console.log('buttout:' + e);
			}
		}


	}


	static Init_BACK(clw){
		try{
		
		var box = document.getElementsByClassName(clw)[0];
		box.style.backgroundImage = 'url(\'' + window['backurl'] +'\')';
		box.style.backgroundSize = 'contain';
		box.style.backgroundColor = 'rgba(140, 140, 140, 1.0)';
		box.style.borderRadius = '15px';box.style.fontSize='15px';box.style.color = 'black';
		if(clw.indexOf('z') != -1){box.style.border = 'solid 2px black';
			box.style.width = parseInt(box.parentNode.style.width, 10) - 5;
		}
		else box.style.border = 'solid 1px white';

		if(clw == 'rmyt-app-app-win1-z1'){
			box.style.backgroundColor = 'rgba(250,20,80, 0.4)';
			box.style.backgroundImage = '';
		}

		if(clw == 'rmyt-app-app-wint-z1'){
			box.style.backgroundColor = 'rgba(250,250,70, 0.4)';
			box.style.backgroundImage = '';
		}

		//if(document.getElementsByClassName('rmyt-app-app-win1')[0] !== undefined){

			//"onmouseover="this.style.opacity=1.0;this.className=\'' + this.classbox  + '\';" onmouseout="this.style.opacity=this.op;" class="' + this.classbox + '"


			/*box.onmouseover = () =>{ 
				var b = document.getElementsByClassName(clw)[0];
				b.style.opacity=1.0;b.className=b.classbox;
				new TagText().taglistfuncattr('input', 'type', 'button', elem => { 
					
					elem.style.opacity = 1.0;

				});

			 };

			box.onmouseout = () =>{ 
				var b = document.getElementsByClassName(clw)[0];
				b.style.opacity=b.op;
				new TagText().taglistfuncattr('input', 'type', 'button', elem => { 
					
					elem.style.opacity = 0.0;

				});

			 };*/
		//}*/

		}
		catch(e){
			if(getListclass(clw).next().value !== undefined){
				var box = document.getElementsByClassName(clw)[0];
				box.style.backgroundColor = 'rgba(140, 140, 140, 1.0)';
			}
			console.log('init_back:'+clw+':'+e);
		}

	}

	static SetAllRGBWin(...w){

		if(window.backurl === undefined){

		var back = new Uint8Array([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,1,0,0,0,100,8,2,0,0,0,200,78,205,55,0,0,0,9,112,72,89,115,0,0,11,19,0,0,11,19,1,0,154,156,24,0,0,0,7,116,73,77,69,7,227,8,10,10,44,13,73,222,250,236,0,0,0,29,105,84,88,116,67,111,109,109,101,110,116,0,0,0,0,0,67,114,101,97,116,101,100,32,119,105,116,104,32,71,73,77,80,100,46,101,7,0,0,0,180,73,68,65,84,24,211,69,143,81,110,5,49,8,3,55,99,120,199,232,61,123,145,222,117,179,152,244,35,217,86,8,97,107,36,192,215,207,247,23,132,200,0,165,136,128,8,145,159,32,34,200,79,144,25,68,38,153,218,58,130,200,32,82,167,183,70,34,51,81,138,49,6,131,235,204,93,140,193,37,96,192,208,133,221,116,153,118,99,155,182,113,53,238,166,171,168,151,151,241,97,93,166,158,162,202,248,41,252,212,230,135,185,23,221,103,71,95,244,122,253,133,87,35,118,198,140,32,66,72,39,179,244,231,9,64,48,36,20,3,36,16,16,155,173,110,122,45,150,155,181,22,171,251,244,190,245,254,227,55,91,213,127,182,167,153,79,49,167,153,119,113,79,115,223,102,78,115,207,250,5,133,144,155,226,129,211,31,10,0,0,0,0,73,69,78,68,174,66,96,130]);

		//var back = new Uint8Array([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,1,0,0,0,100,8,6,0,0,0,71,44,90,96,0,0,0,6,98,75,71,68,0,255,0,255,0,255,160,189,167,147,0,0,0,9,112,72,89,115,0,0,11,19,0,0,11,19,1,0,154,156,24,0,0,0,7,116,73,77,69,7,227,8,1,19,1,12,218,5,143,107,0,0,0,29,105,84,88,116,67,111,109,109,101,110,116,0,0,0,0,0,67,114,101,97,116,101,100,32,119,105,116,104,32,71,73,77,80,100,46,101,7,0,0,0,149,73,68,65,84,24,211,117,143,203,17,195,48,16,66,9,139,186,114,250,47,74,16,231,32,201,159,113,114,3,193,190,65,216,182,247,78,85,129,213,132,161,36,129,85,2,165,2,107,188,181,105,85,2,75,171,55,110,165,117,118,169,8,108,67,113,1,254,149,79,232,149,124,82,10,100,9,108,237,54,109,46,125,110,158,248,243,71,117,164,122,216,146,128,124,178,19,251,11,76,12,218,6,99,131,78,166,29,170,119,48,201,74,29,208,89,105,236,5,232,247,116,4,57,212,74,79,117,169,244,131,151,14,186,231,192,247,199,160,220,201,254,97,29,131,113,0,0,248,2,112,190,139,197,245,244,254,100,0,0,0,0,73,69,78,68,174,66,96,130]);

		var backrm = new Uint8Array([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,1,0,0,0,100,8,6,0,0,0,71,44,90,96,0,0,0,9,112,72,89,115,0,0,11,19,0,0,11,19,1,0,154,156,24,0,0,0,7,116,73,77,69,7,227,8,10,11,7,15,208,98,12,158,0,0,0,29,105,84,88,116,67,111,109,109,101,110,116,0,0,0,0,0,67,114,101,97,116,101,100,32,119,105,116,104,32,71,73,77,80,100,46,101,7,0,0,0,108,73,68,65,84,24,211,117,139,73,18,132,48,12,3,27,57,249,255,147,230,192,179,156,133,203,96,32,229,92,186,212,150,204,60,127,83,24,136,10,255,84,2,143,102,109,178,155,6,234,128,28,80,227,214,182,67,223,169,135,14,14,4,21,129,125,83,73,96,137,38,191,227,64,56,136,22,232,137,122,210,46,187,64,225,134,241,209,231,86,119,109,54,49,38,130,142,160,5,60,210,8,93,38,11,250,107,119,1,221,120,56,69,84,218,6,157,0,0,0,0,73,69,78,68,174,66,96,130]);

		//goldneon var backrm = new Uint8Array([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,1,0,0,0,100,8,2,0,0,0,200,78,205,55,0,0,0,9,112,72,89,115,0,0,11,19,0,0,11,19,1,0,154,156,24,0,0,0,7,116,73,77,69,7,227,8,10,10,53,20,182,181,251,52,0,0,0,29,105,84,88,116,67,111,109,109,101,110,116,0,0,0,0,0,67,114,101,97,116,101,100,32,119,105,116,104,32,71,73,77,80,100,46,101,7,0,0,1,26,73,68,65,84,24,211,61,207,177,74,156,65,20,197,241,153,255,220,249,204,22,42,34,98,33,217,116,105,68,176,176,241,29,172,125,144,64,10,223,194,198,46,207,96,19,82,216,134,96,41,196,58,146,88,168,136,176,205,162,232,55,247,158,177,216,104,119,78,117,126,39,157,28,125,194,42,148,2,86,193,12,204,12,171,198,80,13,27,140,90,13,51,163,190,229,106,88,45,152,25,165,26,190,244,129,63,203,211,180,211,254,165,203,238,105,215,175,249,250,112,202,222,120,195,70,127,36,151,76,206,144,201,64,38,231,76,46,153,136,32,66,200,133,34,80,4,238,66,18,114,39,92,68,136,136,64,30,132,251,162,55,199,91,160,230,68,11,158,122,73,199,62,67,103,95,216,190,189,36,212,233,234,132,132,122,34,162,163,46,66,157,82,160,152,81,134,1,13,19,158,39,43,220,173,125,228,124,186,159,118,159,255,114,96,203,233,162,55,206,98,206,119,205,249,124,251,147,157,199,107,182,218,140,77,159,179,158,158,88,242,17,73,164,190,176,246,232,244,46,244,182,235,255,189,17,200,245,238,86,91,124,28,199,224,101,12,238,235,106,250,165,23,126,124,59,100,235,234,55,109,244,87,135,71,184,239,108,89,75,107,0,0,0,0,73,69,78,68,174,66,96,130]);

		//var backrm = new Uint8Array([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,1,0,0,0,100,8,6,0,0,0,71,44,90,96,0,0,0,6,98,75,71,68,0,255,0,255,0,255,160,189,167,147,0,0,0,9,112,72,89,115,0,0,11,19,0,0,11,19,1,0,154,156,24,0,0,0,7,116,73,77,69,7,227,8,1,20,25,49,5,57,77,166,0,0,0,29,105,84,88,116,67,111,109,109,101,110,116,0,0,0,0,0,67,114,101,97,116,101,100,32,119,105,116,104,32,71,73,77,80,100,46,101,7,0,0,0,220,73,68,65,84,24,211,109,141,205,106,195,48,16,132,63,141,108,131,3,54,20,122,138,75,251,254,111,145,167,233,143,125,41,113,172,4,106,105,115,168,228,24,218,203,50,187,51,243,45,166,39,19,174,66,166,50,144,16,174,70,38,143,216,221,170,178,254,54,60,66,126,11,43,187,153,178,117,157,47,55,87,80,166,250,159,136,223,227,31,110,230,213,200,124,141,240,117,6,100,74,133,240,77,142,228,220,163,209,32,124,181,53,154,12,200,228,109,221,69,202,143,115,90,209,184,94,208,24,23,244,181,94,208,180,46,104,140,1,77,49,160,241,103,65,83,92,208,183,187,33,235,12,89,111,40,117,32,235,203,72,93,66,233,5,20,223,18,138,175,160,99,74,104,48,208,144,64,131,25,58,38,251,163,158,87,143,220,173,69,132,3,114,215,22,17,90,228,194,161,24,231,14,185,185,71,110,46,106,94,26,244,30,64,159,129,172,78,31,112,7,84,79,100,108,63,92,66,201,0,0,0,0,73,69,78,68,174,66,96,130]);

		var blob = new Blob([back], {type: 'application/octet-binary'}); 
		window.backurl = URL.createObjectURL(blob);
		var blobrm = new Blob([backrm], {type: 'application/octet-binary'}); 
		window.backrmurl = URL.createObjectURL(blobrm);

		}

		[...w].forEach(wrgb => TagText.Init_BACK(wrgb));

	/*for(let x of document.getElementsByClassName('butt')){
x.style.backgroundImage = 'url(\'' + backurl +'\')';
x.style.backgroundSize = 'contain';
x.onmouseover = ()=> {x.style.backgroundImage = 'url(\'' + backrmurl +'\')';};
x.onmouseout = ()=> { x.style.backgroundImage = 'url(\'' + backurl +'\')'; };
}*/

		
		new TagText().taglistarrayfuncattr( elem => {elem.style.width = '33%';elem.style.height = '25px';/*elem.style.backgroundColor = TagText.getRGB(w[0]);*/
							  elem.style.fontWeight = 'bold';
							  elem.style.border = '0px';/*elem.style.opacity = 0.75;*/elem.style.fontOpticalSizing = 'auto';
							  elem.style.backgroundImage = 'url(\'' + window['backurl'] +'\')';elem.style.backgroundSize = 'contain';
							  elem.style.borderRadius = '5px';elem.style.fontSize='18px';elem.style.color = 'black';
							  elem.style.border = 'solid 1px rgba(242,222,0)';
							  elem.onmouseover = () => {elem.style.backgroundImage ='url(\'' + window['backrmurl'] +'\')'; /*'radial-gradient(rgb(255, 170, 0), rgb(240, 0, 0), rgb(244, 0, 0))';*/elem.style.backgroundColor = 'rgb(255, 170, 0)';/*elem.style.opacity = 0.64;*/elem.style.color = 'black';elem.style.textShadow = '2px 2px 4px rgb(244, 0, 244)'; };
							  elem.onmouseout = () => {elem.style.backgroundImage = 'url(\'' + window['backurl'] +'\')';/*elem.style.backgroundColor = TagText.getRGB(w[0]);elem.style.opacity = 0.75;*/elem.style.color = 'black';elem.style.textShadow = '';elem.style.fontOpticalSizing = 'auto'; };}, 'input', 'type', 'button', 'input', 'type', 'color');
		
		new TagText().taglistfunc('progress', (elem) => { elem.style.width='97%';elem.style.backgroundImage = 'url(\'' + window['backurl'] +'\')'; } );
		
		new TagText().taglistfuncattr('input', 'type', 'text',  elem => { elem.style.border='1px solid black';elem.style.height = '22px';
							  elem.style.backgroundColor = 'rgba(250,20,80, 0.2)';elem.style.borderRadius = '15px';
							  elem.style.margin='-1px 0px 1px 0px';
								} );

		new TagText().taglistfuncattr('textarea', 'class', 'textstat',  elem => { elem.style.border='1px solid black';elem.style.width = '497px';
							  elem.style.backgroundColor = 'rgba(250,20,80, 0.4)';elem.style.borderRadius = '15px'
								} );

		new TagText().taglistarrayfuncattr( (elem) => {elem.style.width = '100%';elem.style.height = '25px';//elem.style.backgroundColor = TagText.getRGB(w[0]);
							  elem.style.fontSize = '15px';elem.style.color = 'white';/*elem.style.fontWeight = 'bold';*/
							  elem.style.border = '0px';/*elem.style.opacity = 0.75;*/elem.style.fontOpticalSizing = 'auto';
							   elem.style.backgroundImage = 'url(\'' + window['backurl'] +'\')';elem.style.backgroundSize = 'contain';
							  elem.style.borderRadius = '25px';elem.style.fontSize='18px';elem.style.color = 'black';
							  elem.style.margin='0px 0px 1px 0px';
							  elem.onmouseover = () => {elem.style.backgroundImage = 'url(\'' + window['backrmurl'] +'\')';elem.style.backgroundColor = 'rgb(255, 170, 0)';/*elem.style.opacity = 0.64;*/elem.style.color = 'black';elem.style.textShadow = '2px 2px 4px rgb(244, 0, 244)'; };
							  elem.onmouseout = () => {elem.style.backgroundImage = 'url(\'' + window['backurl'] +'\')';elem.style.backgroundColor = 'rgba(140, 140, 140, 1.0)';
							  /*elem.style.opacity = 0.75;*/elem.style.color = 'black';elem.style.textShadow = '';elem.style.fontOpticalSizing = 'auto'; };}, 'div', 'class', 'dvolc', 'div', 'class', 'dopac', 'div', 'class', 'dspeed', 'div', 'class', 'dtime', 'div', 'class', 'dhertz', 'div', 'class', 'linkviddiv', 'div', 'class', 'dopacst', 'div', 'class', 'dstat', 'div', 'class', 'dopacpl', 'div', 'class', 'dtimeimg', 'div', 'class', 'linkstylediv');
		
		//new TagText().taglistfuncattr('input', 'type', 'text',  elem => { elem.style.height = '15px';elem.style.backgroundColor = TagText.getRGB(w[0]); } );

		/*new TagText().taglistarrayfuncattr( (elem) => {elem.style.width = '100%';elem.style.height = '25px';elem.style.backgroundColor = TagText.getRGB(w[0]);
							  elem.style.fontSize = '15px';elem.style.color = 'white';elem.style.fontWeight = 'bold';
							  elem.style.border = '0px';elem.style.opacity = 0.75;elem.style.fontOpticalSizing = 'auto';
							  elem.onmouseover = () => {elem.style.backgroundImage = 'radial-gradient(rgb(255, 170, 0), rgb(240, 0, 0), rgb(244, 0, 0))';elem.style.backgroundColor = 'rgb(255, 170, 0)';elem.style.opacity = 0.64;elem.style.color = 'white';elem.style.textShadow = '2px 2px 4px rgb(244, 0, 244)'; };
							  elem.onmouseout = () => {elem.style.backgroundImage = '';elem.style.backgroundColor = TagText.getRGB(w[0]);elem.style.opacity = 0.75;elem.style.color = 'white';elem.style.textShadow = '';elem.style.fontOpticalSizing = 'auto'; };}, 'div', 'class', 'dvolc', 'div', 'class', 'dopac', 'div', 'class', 'dspeed', 'div', 'class', 'dtime', 'div', 'class', 'dhertz', 'div', 'class', 'linkviddiv', 'div', 'class', 'dopacst', 'div', 'class', 'dstat', 'div', 'class', 'dopacpl', 'div', 'class', 'dtimeimg', 'div', 'class', 'linkstylediv');*/

	}

	static getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	static getRandomIntMin(max, min) {
		return min + Math.floor(Math.random() * Math.floor(max-min));
		
	}

	static getRandomInter(max, inter) {
		var mi = max-inter;if(mi < 0)mi = 0;
		var ra = (mi) + Math.floor(Math.random() * Math.floor(inter*2));
		if(ra > 255)return 255;
		return ra;
		
	}

	static getCookieHTML(){

		var cc = document.cookie;var s = cc.split(';');
		var html = '<html><head></head><body>' + 
		'<style>.var{color:blue;font-optical-sizing:auto;}.val{color:red;font-optical-sizing:auto;}</style>';
		for(let c of s){
			var a = c.split('=');
			try{console.log(a[1].indexOf('%3D'));console.log(a[1]);
				var a1 = a[1].replace(/(%22+)/g, '').replace(/(%2N+)/g, '');
				if(a[1].indexOf('%3D')!=-1){
					html += '<span class=\\\\\\\'var\\\\\\\'>' + a[0] +  '</span>'  + '=' + '<span class=\\\\\\\'val\\\\\\\'>' + 'ATB' + window.atob(decodeURIComponent(a1)) + '</span>' + '<br>';
				} else {
					html += '<span class=\\\\\\\'var\\\\\\\'>' + a[0] +  '</span>'  + '=' + '<span class=\\\\\\\'val\\\\\\\'>' +  'ATB1' + decodeURIComponent(a1) + '</span>' + '<br>';
				}
			}catch(e){
				html += '<span class=\\\\\\\'var\\\\\\\'>' + a[0] +  '</span>'  + '-=' + '<span class=\\\\\\\'val\\\\\\\'>' + 'ATB2' + decodeURIComponent(a1) + '</span>' + '<br>';
			} 
		}
		html += '</body></html>';

		return html;

	}

	static getCookieHTMLyt(){

		var cc = document.cookie;var s = cc.split(';');
		var html = '<html><head></head><body>' + 
		'<style>.var{color:blue;font-optical-sizing:auto;}.val{color:red;font-optical-sizing:auto;}</style>';
		for(let c of s){
			var a = c.split('=');
			try{//console.log(a[1].indexOf('%3D'));console.log(a[1]);
				var a1 = a[1].replace(/(%22+)/g, '').replace(/(%2N+)/g, '');
				//if(a[1].indexOf('%3D')!=-1){
					html += '<span class=\\\\\\\'var\\\\\\\'>' + a[0] +  '</span>'  + '=' + '<span class=\\\\\\\'val\\\\\\\'>' + 'ATB' + window.atob(decodeURIComponent(a1)) + '</span>' + '<br>';
				/*} else {
					html += '<span class=\\\\\\\'var\\\\\\\'>' + a[0] +  '</span>'  + '=' + '<span class=\\\\\\\'val\\\\\\\'>' +  'ATB1' + decodeURIComponent(a1) + '</span>' + '<br>';
				}*/
			}catch(e){
				html += '<span class=\\\\\\\'var\\\\\\\'>' + a[0] +  '</span>'  + '-=' + '<span class=\\\\\\\'val\\\\\\\'>' + 'ATB2' + (a1) + '</span>' + '<br>';
			} 
		}
		html += '</body></html>';

		return html;

	}

	static AllWindowDisplay(){
		
		var wnd = ['time', 'design', 'playlist', 'stat', 'info'];
		var wna = ['rmyt-app-app-wintime', 'rmyt-app-app-windesign', 'rmyt-app-app-win3', 'rmyt-app-app-win2', 'rmyt-app-app-win1'];

		if(window.WIN_VIS === undefined){
			window.WIN_VIS = true;
		}

		var i = 0;
		for(let w of wnd){
			try{
				if(getListclass(wna[i]).next().value !== undefined)
					TagText.seton(wna[i], window.WIN_VIS);
				i++;
				window.WINDOWS[w]();
				console.log(w);
			}catch(e){console.log('all_display_win:'+w+'-'+e);}
		}

		TagText.Init_Opac(0.1);TagText.Set_Opac('app', 0.0);
		try{
		window.updateAllBackWin();
		}catch(e){console.log('all_display_win_update:'+w+'-'+e);}
		window.WIN_VIS = !window.WIN_VIS;		

	}

	static Init_Opac(opac){

		if(window.OPAC === undefined){ window.OPAC = []; 
		
		try{window.OPAC['time'] = (opac) => { getListclass('opactim').next().value.value = (opac*100).toString(); getListclass('rmyt-app-app-wintime').next().value.style.opacity = opac;getListclass('rmyt-app-app-wintime').next().value.op = opac; }; }catch(e){console.log(e);}
		try{window.OPAC['design'] =(opac) => { getListclass('opacdes').next().value.value = (opac*100).toString(); getListclass('rmyt-app-app-windesign').next().value.style.opacity = opac;getListclass('rmyt-app-app-windesign').next().value.op = opac; }; }catch(e){console.log(e);}
		try{window.OPAC['playlist'] = (opac) => { getListclass('opacplay').next().value.value = (opac*100).toString(); getListclass('rmyt-app-app-win3').next().value.style.opacity = opac;getListclass('rmyt-app-app-win3').next().value.op = opac; }; }catch(e){console.log(e);}
		try{window.OPAC['stat'] = (opac) => { getListclass('opacstat').next().value.value = (opac*100).toString(); getListclass('rmyt-app-app-win2').next().value.style.opacity = opac;getListclass('rmyt-app-app-win2').next().value.op = opac; }; }catch(e){console.log(e);}
		try{window.OPAC['info'] =(opac) => { getListclass('opacinfo').next().value.value = (opac*100).toString(); getListclass('rmyt-app-app-win1').next().value.style.opacity = opac;getListclass('rmyt-app-app-win1').next().value.op = opac; }; }catch(e){console.log(e);}
		try{window.OPAC['app'] = (opac) => { getListclass('opac').next().value.value = (opac*100).toString(); getListclass('rmyt-app-app').next().value.style.opacity = opac;getListclass('rmyt-app-app').next().value.op = opac; }; }catch(e){console.log(e);}

		}

		
		var op = ['time', 'design', 'playlist', 'stat', 'info', 'app'];
		for(let w of op){
			try{
				window.OPAC[w](opac);
			
				console.log(w);
			}catch(e){console.log(e);}
		}
		
		
		

	}

	static Set_Opac(win, opac){
		window.OPAC[win](opac);

	}

	static getVideo(ind){
		//console.log(ind);
		var tt=[];
		var W = window['playlist'];
		var ipl = 0;
		for( let x of W){
					
			try{
				var find = false;
				for(let i of ind){
					//console.log('i=' + i + "x=" + x +" " + W[x]);
					if(x.indexOf(i, window.path_video2.length) != -1){
						find = true;
						break;
					}
						

				}
				//console.log(find);
				if(find){
					try{
						tt.push(ipl);
						//console.log( x.toString() + '=--' + W[x] + '\n'); 

					}catch(e){console.log( e);}
				}
			}catch(e){console.log( e + ' ' +x);}
			ipl++;
			

		}
		//console.log( '\n\n');

		return tt;


	}
	
	static Anim_Text(){

		var A1 = ['\\', '|','/','-', ' '];
		var A2 = 'WELCOME';

		var text = document.getElementsByClassName('textstat')[0];
		var t = 0;
		var i = 0;
		var barre = '/* ';

		while(t < 10){
			
			for(let a of A1){
				setTimeout((i,t) => { text.value = barre + a;
				if((i >= 10)&&(i < (10+A2.length))){
					barre += A2[i-10];
				}
				else if(i == (20+A2.length)){
					//barre += '                        ';
					//console.log(A1);
				}
				else if(i > (20+A2.length)){

				}
				else{
					barre += '-';
				} 
				if(t == 9)text.value += '*/';

				}, i*50, i, t);
				i++;
				
				
				//console.log('i'+i);
			}
			t++;
			//console.log(t);
			
		}

		text.value = barre + '*/';

	}

	static getmouseevent(){
		document.body.onclick=(event)=>{

			if(window.XCoord === undefined){
				window.XCoord = 0;
			}
			if(window.YCoord === undefined){
				window.YCoord = 0;
			}
			window.XCoord = event.clientX;
			window.YCoord = event.clientY;

			console.log('x='+window.XCoord+', y='+window.YCoord);


		}
	}

	static getmousemoveevent(){
		document.body.onmousemove=(event)=>{

			if(window.XCoord === undefined){
				window.XCoord = 0;
			}
			if(window.YCoord === undefined){
				window.YCoord = 0;
			}
			if(window.KEYSTATE === undefined){
				window.KEYSTATE = false;
			}

			window.XCoord = event.clientX;
			window.YCoord = event.clientY;

			if(window.KEYSTATE == true){
				TagText.tagmovw(window.WINMOVE, window.YCoord+'px', window.XCoord+'px');
			}

			//console.log('x='+window.XCoord+', y='+window.YCoord);


		}
	}
	
	static getkeyevent(){
		document.body.addEventListener('keyup', (e) => {
			console.log('key:'+e.key);

			if(window.KEYSTATE === undefined){
				window.KEYSTATE = false;
				window.Ctrl = false;
				window.Shift = false;
			}

			if(e.key === 'Control'){
				window.Ctrl = true;
				console.log('CTRL');
				
			}
			if(window.Ctrl == true){
				if(e.key === 'Shift'){
					window.Shift = true;
					window.KEYSTATE = !window.KEYSTATE;
					console.log('ONMOVEYES');
				}
				else if(e.key !== 'Control')
				{
					window.Ctrl = false;
				}
			}

			console.log('KEYSTATE='+ window.KEYSTATE);
			

		});
	}

	addtextbox(text){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<br>'+text;

	}

	addzonebox(classbox, classz){
		var box = document.getElementsByClassName(classbox)[0];
		box.innerHTML += '<div onmouseover="this.className=\'' + classz  + '\';" class="' + classz + '"></div>';
		var boxz = document.getElementsByClassName(classz)[0];
		boxz.R = 244;
		boxz.G = 0;
		boxz.B = 0;
		
	}

	addbuttrmv(textb, gr, classrmv){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt_' + gr + '" value="' + textb + '" onclick="new TagText().tagrmv(\'' + classrmv + '\');"/>';
		//console.log('addbuttrmv');

	}

	addarraybuttrmv(textb, gr, ...classrmv){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt_' + gr + '" value="' + textb + '" onclick="new TagText().tagarrayrmv(\'' + classrmv.join('\',\'') + '\');"/>';
		//console.log(classrmv);
	}

	addbuttrmvtag(textb, gr, tagrmv){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt_' + gr + '" value="' + textb + '" onclick="new TagText().tagrmvtag(\'' + tagrmv + '\');"/>';

	}

	addbuttarrayrmvtag(textb, gr, ...tagrmv){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt_' + gr + '" value="' + textb + '" onclick="new TagText().tagarrayrmvtag(\'' + tagrmv.join('\',\'') + '\');"/>';

	}

	tagrmvattr(elem, tattr){
		
		for(let el of getList(elem)){
			//console.log(el.getAttribute(tattr));
			el.setAttribute(tattr, '');
		}

	}

	addbuttrmvtagattr(textb, gr, tagrmv, tattr){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt_' + gr + '" value="' + textb + '" onclick="new TagText().tagrmvattr(\'' + tagrmv + "','" + tattr + '\');"/>';

	}

	tagarrayrmvattr(...elem){
		
		for(let j of fornext(elem.length, 0, 2)){
		//for(var j = 0;j < elem.length;j+=2){
			try{
				for(let el of getList(elem[j])){
					//console.log(el.getAttribute(elem[__.tattr(j)]));
					el.setAttribute(elem[__.tattr(j)], '');
				}

			}
			catch(error){
				//console.error('tagarrayrmvattr: ' + error);
			}
		}

	}

	addbuttarrayrmvtagattr(textb, gr, ...tagrmv){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt_' + gr + '" value="' + textb + '" onclick="new TagText().tagarrayrmvattr(\'' + tagrmv.join('\',\'') + '\');"/>';

	}

	addbuttdistag(textb, gr, tagdis, dis){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt_' + gr + '" value="' + textb + '" onclick="new TagText().tagdistag(\'' + tagdis + "','" + dis +  '\');"/>';

	}

	addbuttarraydistag(textb, gr, ...tagdis){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt_' + gr + '" value="' + textb + '" onclick="new TagText().tagarraydistag(\'' + tagdis.join('\',\'') +  '\');"/>';

	}

	addbuttconv(textb, classc){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().conv(\'' + classc + '\');"/>';

	}

	addbutttag(textb, elem, color, size){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().tag(\'' + elem + "','" + color + "','" + size + '\');"/>';

	}

	playvid(elem){
		var v = document.getElementsByTagName(elem)[0];
		v.play();
		
	}

	addbuttplayvid(textb, elem){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().playvid(\'' + elem + '\');"/>';

	}

	pausevid(elem){
		var v = document.getElementsByTagName(elem)[0];
		v.pause();
		
	}

	addbuttpausevid(textb, elem){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().pausevid(\'' + elem + '\');"/>';

	}

	addbutttoggleplayvid(textb, elem){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onload="this.tog=false;" onclick="this.tog=!this.tog;(this.tog==true)?new TagText().playvid(\'' + elem + '\'):new TagText().pausevid(\'' + elem + '\');"/>';

	}


	loadvid(elem){
		var v = document.getElementsByTagName(elem)[0];
		v.load();
		
	}

	addbuttloadvid(textb, elem){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().loadvid(\'' + elem + '\');"/>';

	}

	widthvidclass(classv, sign){
		var v = document.getElementsByClassName(classv)[0];
		var cw = (sign == '+') ? parseInt(v.style.width, 10) + 100 : parseInt(v.style.width, 10) - 75;
		v.style.width = cw + 'px';
		
	}

	widthvid(elem, sign){
		var v = document.getElementsByTagName(elem)[0];
		var cw = (sign == '+') ? parseInt(v.style.width, 10) + 100 : parseInt(v.style.width, 10) - 75;
		v.style.width = cw + 'px';
		
	}

	addbuttwidthvid(textb, elem, sign){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().widthvid(\'' + elem + "','" + sign + '\');"/>';

	}

	heightvid(elem, sign){
		var v = document.getElementsByTagName(elem)[0];
		var ch = (sign == '+') ? parseInt(v.style.height, 10) + 100 : parseInt(v.style.height, 10) - 75;
		v.style.height = ch + 'px';
		
	}

	heightvidclass(classc, sign){
		var v = document.getElementsByClassName(classc)[0];
		var ch = (sign == '+') ? parseInt(v.style.height, 10) + 100 : parseInt(v.style.height, 10) - 75;
		v.style.height = ch + 'px';
		
	}

	addbuttheightvid(textb, elem, sign){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().heightvid(\'' + elem + "','" + sign + '\');"/>';

	}

	Init_Screen(elem, w, h){
		var v = document.getElementsByTagName(elem)[0];
		v.style.width = w+'px';
		v.style.height = h+'px';
		v.style.margin='-9px 0px 0px -8px';
		v.width="1920";
		v.height="1080";
		v.controls=true;
				
	}

	fullscreen(elem){
		var v = document.getElementsByTagName(elem)[0];
		v.style.width = '1920px';
		v.style.height = '1080px';
		v.style.margin='-9px 0px 0px -8px';
		v.width="1920";
		v.height="1080";
		v.controls=false;
				
	}

	fullscreenclass(elem, ...size){
		var v = document.getElementsByClassName(elem)[0];

		if(size.length == 2){
			v.style.width = size[0];
			v.style.height = size[1];
		}
		else
		{
			v.style.width = '1920px';
			v.style.height = '1080px';
			v.style.margin='-9px 0px 0px -8px';
			v.width="1920";
			v.height="1080";
			v.controls=false;
		
		}
		
				
	}

	addbuttfullscreen(textb, elem){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().fullscreen(\'' + elem + '\');"/>';

	}


	currtimevid(elem, time, sign){
		var v = document.getElementsByTagName(elem)[0];
		(sign == '+') ? v.currentTime += parseFloat(time, 10) : v.currentTime -= parseFloat(time, 10);
				

	}

	addbuttcurrtime(textb, elem, time, sign){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().currtimevid(\'' + elem + "','" + time + "','" + sign + '\');"/>';

	}

	
	playbacktimer(elem, timg, inter){
		var v = document.getElementsByTagName(elem)[0];
		this.playb = !this.playb;
		if(this.playb == true){
			this.timervid = window.setInterval(r => this.playbackwardvid(elem, timg), parseInt(inter, 10));
			//v.play();
		}
		else{
			clearInterval(this.timervid);
			//v.pause();
		}
		

	}

	playbacktimer2a(elem, timg, inter){
		var v = document.getElementsByTagName(elem)[0];
		
		return window.setInterval(r => this.playbackwardvid(elem, timg), parseInt(inter, 10));
		
				

	}


	playbacktimer2b(timervid){
	
		clearInterval(timervid);
		
	}

	playbackwardvid(elem, timg){
		var v = document.getElementsByTagName(elem)[0];
		var time = v.currentTime;
		if(time > 0){
			v.currentTime -= parseFloat(timg, 10);
			
		}
		
	}

	exec_ALL(...exe){

		//[...exe].forEach(__exe => __exe());
		let ExeFunc = __$ExEC_FuNC$__(...exe);[...ExeFunc];
		
	}

	async_exec_ALL(...exe){

		//[...exe].forEach(__exe => __exe());
		let ExeFunc = async__$ExEC_FuNC$__(...exe);//[...ExeFunc];
		
	}

	addbuttexecall(textb, ...exe){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().exec_ALL(' + exe.join(',') + ');"/>';

	}

	addbuttcolorexecall(textb, id, ...exe){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="color" id="' + id + '" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().exec_ALL(' + exe.join(',') + ');"/>';

	}

	addprogress(val, id){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<progress id="' + id + '" class="' + this.classbox + '_prog" value="' + val + '" max="100"></progress>';

	}

	static updateprogress(id, val){
		getElem(id).value = val;
	}

	static showprogress(id){
		getElem(id).style.display = 'inline';
	}

	static hideprogress(id){
		getElem(id).style.display = 'none';
	}

	addbuttexecallgroup(textb, gr, ...exe){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt_' + gr + '" value="' + textb + '" onclick="new TagText().exec_ALL(' + exe.join(',') + ');"/>';

	}

	addbuttexecallAddWin(nWin, textb, exe){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().exec_ALL(' + exe + ');"/>';
		if(window.WINDOWS === undefined){
			window.WINDOWS = [];
			console.log('windows');
			
		}
		window.WINDOWS[nWin] = exe;

	}

	addbuttasyncexecall(textb, ...exe){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="new TagText().async_exec_ALL(' + exe.join(',') + ');"/>';

	}

	addbutt2execall(textb, exe1, exe2){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" class="' + this.classbox + '_butt" value="' + textb + '" onclick="this.active=!this.active;(this.active == true)?new TagText().exec_ALL(' + exe1 + '):new TagText().exec_ALL(' + exe2 + ');"/>';

	}
	
//+ 'onmousedown="this.down=false;" onmouseup="this.down=false;"  onmousemove="if(this.down == false)new TagText().exec_ALL(' + exe.join(',') + ');"'
	addrangeexecall(textb, classd, classc, val, step, _min, _max, ...exe){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<div class="' + classd + '">' + textb + '<input type="range" class="' + classc +'" value="' + val +'" step="' + step + '" min="' + _min +'" max="' + _max + '"' + 'onmousedown="this.down=true;" onmouseup="this.down=false;"  onmousemove="if(this.down == true)new TagText().exec_ALL(' + exe.join(',') + ');"' + ' onclick="new TagText().exec_ALL(' + exe.join(',') + ');"/></div>';

	}

	addselect(textb, classs, sel){
		var box = document.getElementsByClassName(this.classbox)[0];
		var select =  textb + '<select class="' + classs + '">';
		for(let x of sel){
			select += '<option value="' + x + '">[--' + x + '--]</option>';
		
		}
		select += '</select>';
		
		box.innerHTML += select;

	}

	static Update_select(classs, sel){
		var select_b = document.getElementsByClassName(classs)[0];
		var select = '';
		for(let x of sel){
			select += '<option value="' + x + '">[--' + x + '--]</option>';
		
		}
				
		select_b.innerHTML = select;

	}

	addinputtextbuttexecall(textb, classd, classc, val, classb, textbu, ...exe){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<div class="' + classd + '">' + textb + '<input type="text" class="' + classc +'" value="' + val +'"><input type="button" class="' + this.classbox + '_butt" value="' + textbu + '" onclick="new TagText().exec_ALL(' + exe.join(',') + ');"/></div>';

	}

	addtextarea(classd, classt, row, col){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<div class=' + classd + '"><textarea class="' + classt + '" cols="' + col + '" rows="' + row + '" ondragover="TagText.addvidplaylistallowdrop(event);" ondrop="TagText.addvidplaylistdrop(event, \'drtext\');" ondragstart="TagText.addvidplaylistdrag(event, \'drim\', this.value.substring(this.selectionStart, this.selectionEnd));"></textarea></div>';
	}

	addvidplaylist(classpl, link, img){
		var box = document.getElementsByClassName(classpl)[0];
		box.innerHTML += '<br><div><a id="thumbnail" class="yt-simple-endpoint inline-block style-scope ytd-thumbnail" aria-hidden="true" tabindex="-1" rel="null" href="' + link + '"><img src="' + img + '"></a></div>';
	} 

	
	addvidplaylistsz(classpl, link, img, wi, hi){
		var box = document.getElementsByClassName(classpl)[0];
		box.innerHTML += '<br><div><div id="thumbnail" class="yt-simple-endpoint inline-block style-scope ytd-thumbnail"   onclick="' + link + '"><img src="' + img + '" width="' + wi + '" height="' + hi + '" draggable="true" ondragstart="TagText.addvidplaylistdrag(event, \'drtext\', this.src);" ondragover="TagText.addvidplaylistallowdrop(event);" ondrop="TagText.addvidplaylistdropim(event, \'drim\');"></div></div>';
	} 

	addvidplaylistszt(classpl, link, img, wi, hi, title){
		var box = document.getElementsByClassName(classpl)[0];
		box.innerHTML += '<br><div><div id="thumbnail" class="yt-simple-endpoint inline-block style-scope ytd-thumbnail"   onclick="' + link + '"><img src="' + img + '" width="' + wi + '" height="' + hi + '" draggable="true" ondragstart="TagText.addvidplaylistdrag(event, \'drtext\', this.src);" ondragover="TagText.addvidplaylistallowdrop(event);" ondrop="TagText.addvidplaylistdropim(event, \'drim\');"><br>' + title + '</div></div>';
	} 

	static addvidplaylistallowdrop(ev) {
		ev.preventDefault();
	}

	static addvidplaylistdrag(ev, data, str) {
		ev.dataTransfer.setData(data, str);
		window.dragChannel = data;
	}

	static addvidplaylistdrop(ev, data) {
		ev.preventDefault();
		var adata = ev.dataTransfer.getData(window.dragChannel);
		ev.target.value += adata;
	}

	static addvidplaylistdropim(ev, data) {
		ev.preventDefault();
		var adata = ev.dataTransfer.getData(window.dragChannel);
		ev.target.src = adata;
				
	}

//onload="this.play=false;this.timervid=0;"
	addbutttogplayback(textb, elem, timg, inter){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<input type="button" value="' + textb + '"  onclick="this.play=!this.play;(this.play == true)?this.timervid = new TagText().playbacktimer2a(\'' + elem + '\', ' + timg +',' + inter + '):new TagText().playbacktimer2b(this.timervid);"/>';

	}
		
	addzindex(index){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.style.zIndex = index;
	}

	addopacity(opa){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.op = parseFloat(opa, 10);
	}

	addbreak(){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<br>';

	}

	addbreakgroup(gr){
		var box = document.getElementsByClassName(this.classbox)[0];
		box.innerHTML += '<span class="break_' + gr + '"><br></span>';

	}

	iframedoc(elem, tag){
		var doc = document.getElementsByTagName(elem)[0].contentDocument;
				
		var t = doc.getElementsByTagName(tag);
		[...t].forEach(ti => {
			ti.outerHTML = "";
		});		
			
	}

	iframedocall(elem, tag){
		var doc = document.getElementsByTagName(elem);

		for(let ifr of doc){
			try{
				var doci = ifr.contentDocument;
						
				var t = doci.getElementsByTagName(tag);
				[...t].forEach(ti => {
					ti.outerHTML = "";
				});
			}	
			catch(e)
			{}

		}	
			
	}

	conv(classc){
						
		for(let ci of getListclass(classc)){
			ci.style.Color = "yellow";
			var ch0 = ci.innerText.split(',');
			var ch01 = ch0[0].split(" ");
			var ch02 = ch01[0] + ch01[1];
			var ch = ch02 + '.' + ch0[1];
		
			//console.log(ch);
			var r = parseFloat(ch, 10) * 6.55957;
			//console.log(r);
			var rd = parseFloat(ch, 10) * 1.12;
			//console.log(r);
			ci.innerHTML = ci.innerHTML + ' <br>' + SFormat.format_number(r.toString(10),2) + ' francs<br>'+ SFormat.format_number(rd.toString(10),2) + ' $';
		
		}

	}

	yearcaf(classc){
						
		for(let ci of getListclass(classc)){
			ci.style.Color = "yellow";
			var ch0 = ci.innerText.split(',');
			var ch01 = ch0[0].split(" ");
			var ch02 = ch01[0] + ch01[1];
			var ch = ch02 + '.' + ch0[1];
		
			//console.log(ch);
			var r = parseFloat(ch, 10) * 12;
			//console.log(r);
			ci.innerHTML = ci.innerHTML + ' <br>' + SFormat.format_number(r.toString(10),2) + ' € / an';
		
		}

	}

}

/******************************************/
window.VSTAT = 'min';
window.path_video = 'file:///media/root/SAVERM/Videos/video/video6/';
window.path_video2 = '/media/root/SAVERM/Videos/video/video6/';
if(window.I === undefined){
window.I = 0;
window.lI = 0;
}
window.get_I = () => {
	return window.I-1;
}

if(document.location.hostname == "")TagText.integration('rmapp_video');
else if(document.location.hostname.indexOf('youtube')!=-1)TagText.integration('style-scope ytd-app');
else if(document.location.hostname.indexOf('orange')!=-1)TagText.integration('header');


