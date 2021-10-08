const SDK = {};
window.__INT__ = window.integration.classname;

Object.defineProperty(SDK, 'SDK_TOOLTIP_ffff_dead_f01e_d01e_dead_beef', {
  value: function SDK_TOOLTIP_ffff_dead_f01e_d01e_dead_beef(){
let c1 = new TagText();
c1.addbox(window.__INT__, 'rmyt-app-app');
c1.addtextbox('RM ®©');
c1.addzindex(10000);
c1.addopacity(0.04);

c1.addbuttexecallAddWin('youtubeB', 'Youtube B', ()=>{if(window.ytbutt === undefined){ window.ytbutt = false; }else{window.ytbutt=!window.ytbutt;} 
new TagText().taglistarrayfuncattr(elem => { 
			if(window.ytbutt == true){
				elem.style.display='inline';
				elem.style.opacity = 1.0;
			}
			else
			{
				elem.style.display='none';
				elem.style.opacity = 0.0;
			}

		}, 'input', 'class', 'rmyt-app-app_butt_youtube', 'span', 'class', 'break_youtube');

});
c1.addarraybuttrmv('Remove Youtube', 'youtube', 'style-scope ytd-watch-next-secondary-results-renderer', 'style-scope ytd-companion-slot-renderer', 'style-scope ytd-comments',
						'style-scope ytd-video-primary-info-renderer', 'ytd-video-secondary-info-renderer', 'caption-window ytp-caption-window-bottom',
						'yt-simple-endpoint inline-block style-scope ytd-thumbnail');
c1.addbuttarrayrmvtag('Remove tag', 'youtube', 'script', 'style', 'link', 'button', 'ytd-topbar-logo-renderer', 'ytd-thumbnail', 'yt-icon');
c1.addbuttarrayrmvtagattr('Remove attr', 'youtube', 'script', 'src', 'link', 'href', 'div', 'id', 'div', 'class', 'button', 'class', 'img', 'src');
c1.addbuttarraydistag('NO Display Butt/SVG', 'youtube', 'button', 'none', 'svg', 'none');
c1.addbuttfullscreen('Fullscreen', 'video');
c1.addbuttexecall('Init', () => { new TagText().Init_Screen('video', 800, 600) });
c1.addbuttexecallgroup('Annonce', 'youtube', an => {new TagText().tagarrayinnerrmvattr('div', 'id', 'top-container')});
c1.addbuttexecallgroup('Description', 'youtube', de => {new TagText().tagarrayinnerrmvattr('div', 'id', 'description')});

c1.addbuttexecallgroup('ALL', 'youtube',
armv => {new TagText().tagarrayrmv('style-scope ytd-watch-next-secondary-results-renderer', 'style-scope ytd-companion-slot-renderer', 'style-scope ytd-comments',
						'style-scope ytd-video-primary-info-renderer', 'ytd-video-secondary-info-renderer', 'caption-window ytp-caption-window-bottom',
						'yt-simple-endpoint inline-block style-scope ytd-thumbnail', 'ytp-ce-top-right-quad ytp-ce-size-640', 
						'ytp-ce-top-left-quad ytp-ce-size-640')},

armvt => {new TagText().tagarrayrmvtag('script', 'style', 'link', 'button', 'ytd-topbar-logo-renderer', 'ytd-thumbnail', 'yt-icon', 'ytd-guide-renderer', 'paper-tooltip', 'ytd-button-renderer', 'ytd-merch-shelf-renderer', 'iron-a11y-announcer', 'iframe')},

arnvta => {new TagText().tagarrayrmvattr('script', 'src', 'script', 'class', 'link', 'href', 'div', 'id', 'div', 'class', 'button', 'class', 'img', 'src')},

adt => {new TagText().tagarraydistag('button', 'none', 'svg', 'none')},

aita => {new TagText().tagarrayinnerrmvattr('div', 'id', 'caption-window-_0')},

af => {new TagText().fullscreen('video')});

c1.addbuttasyncexecall('ALL2', pri => {new TagText().tagqueryrmvchild('#primary-inner', 1, 1, 1, 1, 1, 1, 1, 1, 1)},
				 aita => {new TagText().tagarrayinnerrmvattr('div', 'id', 'secondary')},
				 rmch => { new TagText().tagqueryrmvchild('#movie_player', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1) },
				 armvt => {new TagText().tagarrayrmvtag('iron-media-query', 'ytd-third-party-manager')} );

c1.addbuttexecall('Opac', () =>{ TagText.Init_Opac(0.44);TagText.Set_Opac('app', 0.0); });

c1.addbuttexecallAddWin('info', 'Info',  () => { 
	
	if(new TagText().getbox('rmyt-app-app-win1') == false){
		let ci = new TagText();
		ci.addbox(window.__INT__, 'rmyt-app-app-win1');
		ci.addtextbox('Info');
		ci.addzindex(100000);
		ci.addopacity(0.04);
		new TagText().tagattr('div', 'rgb(244, 0, 0)', '15px', 'class', 'rmyt-app-app-win1');
		new TagText().tagpos('div', 'class', 'rmyt-app-app-win1', 'fixed');
		new TagText().tagresz('rmyt-app-app-win1', '400px', '575px', '20px', '900px'); 
		new TagText().setbox('rmyt-app-app-win1', true);

		TagText.seton('rmyt-app-app-win1', true);
		
		ci.addzonebox('rmyt-app-app-win1','rmyt-app-app-win1-z1');

		var elem = getList('video').next().value;elem.on = true;elem.T = 990;
		TagText.settextbox( 'rmyt-app-app-win1-z1', SFormat.video_stat(elem));

		ci.addbuttexecall('Update', upd => {var elem = getList('video').next().value;TagText.settextbox( 'rmyt-app-app-win1-z1', 'Info' + SFormat.video_stat(elem)); });

		ci.addbuttexecall('Update All', updv => {new TagText().taglistfunc('video', speed = (elem) => {getListclass('volc').next().value.value = (elem.volume*100.0).toString(10); })}, updt => {new TagText().taglistfunc('video', speed = (elem) => {getListclass('timer').next().value.value = ((elem.currentTime / elem.duration) *100.0).toString(10); })},   upds => {new TagText().taglistfunc('video', speed = (elem) => {getListclass('speed').next().value.value = (elem.playbackRate*100.0).toString(10); })}  );

		ci.addbuttexecall('UpdateZ', update => {
				     var elem = getList('video').next().value;var l = 15;
					var f = [];
					for(var i = 0;i < l;i++){
					f[i] = upd => {var elem = getList('video').next().value;TagText.settextbox( 'rmyt-app-app-win1-z1', 'Info' + SFormat.video_stat(elem)); };

					}

					async__$ExEC_FuNC$__2(f); });

		ci.addbuttexecall('UpdateS', update => {

				     async__$ExEC_FuNC$__3(upd => {var elem = getList('video').next().value;TagText.settextbox( 'rmyt-app-app-win1-z1', 'Info' + SFormat.video_stat(elem)); }, 44); 
					});

		ci.addbuttexecall('UpdateT', update => {
					var v = getList('video').next().value;
					v.on = !v.on;v.T = parseInt(getListclass('hertz').next().value.value,10);
					if(v.on == false){
				     //async__$ExEC_FuNC$__4(v, upd => {var elem = getList('video').next().value;TagText.settextbox( 'rmyt-app-app-win1-z1', 'Info' + SFormat.video_stat(elem)); }); 

						var myWorker;
						window.WorkerUpdT = myWorker = new Worker(new TagText().fn2workerURL(wk => {
																					
						onmessage = function(oEvent) {
							postMessage(oEvent.data);
						};

							
						}));

						myWorker.onmessage = function(oEvent) {
							TagText.settextbox( 'rmyt-app-app-win1-z1', 'Info' + oEvent.data);
						};

						if(window.VSTAT === undefined){
							window.VSTAT = 'min';
						}
						
						if(window.VSTAT == 'max'){
							async__$ExEC_FuNC$__4(v, upd => {myWorker.postMessage( SFormat.video_stat_all(getList('video').next().value) )} );
						}
						else if(window.VSTAT == 'min')
						{
							async__$ExEC_FuNC$__4(v, upd => {myWorker.postMessage( SFormat.video_stat(getList('video').next().value) )} );
						}

					}
					else
					{
						window.WorkerUpdT.terminate();
					}
					
					
				});

		ci.addbuttexecall('0Pub', update => {
											
						async__$ExEC_FuNC$__pub(getList('video').next().value, 50);
											
				});


		ci.addbuttexecall('MAX 2.0', max2 => { getListclass('speed').next().value.value = '200';getList('video').next().value.playbackRate = 2.0; 
						   getListclass('volc').next().value.value = '100';getList('video').next().value.volume = 1.0;
						});

		ci.addbuttexecall('INIT', init => { var v = getList('video').next().value;
							v.on = false;
							v.T = parseInt(getListclass('hertz').next().value.value,10);
							getListclass('speed').next().value.value = '100';getList('video').next().value.playbackRate = 1.0; 
						   	getListclass('volc').next().value.value = '50';getList('video').next().value.volume = 1.0;
							getListclass('timer').next().value.value = ((v.currentTime / v.duration) *100.0).toString(10);
							getListclass('opacinfo').next().value.value = '50';
							var opac = parseFloat(getListclass('opacinfo').next().value.value, 10)/100.0; 
							getListclass('rmyt-app-app-win1').next().value.style.opacity = opac;
							getListclass('rmyt-app-app-win1').next().value.op = opac;
						});

		/*ci.addbuttexecall('SSX', ssx => { 
							var source = new EventSource(getListclass('linkvidtxt').next().value.value);
							source.onopen = function() {
								getListclass('textstat').next().value.value += 'OPENSSX=OK\n';
							};
							source.onmessage = function(event) {
								getListclass('textstat').next().value.value += new String(event.data) + '\n';
							};
							source.onerror = function() {
								getListclass('textstat').next().value.value += 'ERRORSSX\n';
							};
						});*/

		ci.addbuttexecall('MEGA', mega => { getListclass('speed').next().value.value = '200';getList('video').next().value.playbackRate = 4.0; 
						   getListclass('volc').next().value.value = '100';getList('video').next().value.volume = 1.0;
						});

		ci.addbuttexecall('HYPER', mega => { getListclass('speed').next().value.value = '200';getList('video').next().value.playbackRate = 444444444444444444444444444.0; 
						   getListclass('volc').next().value.value = '100';getList('video').next().value.volume = 1.0;
						});
					
		ci.addinputtextbuttexecall('Link:', 'linkviddiv', 'linkvidtxt', 'enter new link video', 'linkvidbutt', 'Src video', 
		link => { var v = getList('video').next().value;
				var blob = new Blob([getListclass('linkvidtxt').next().value.value], {type: 'video/mp4'});
				v.src = window.URL.createObjectURL(blob);
				v.on=true;v.T = 444; } );

		ci.addrangeexecall('Hertz:', 'dhertz', 'hertz', 1000, 10, 100, 1000, op => { getList('video').next().value.T = parseInt(getListclass('hertz').next().value.value,10); }   );

		ci.addrangeexecall('Opacity:', 'dopac', 'opacinfo', 50, 1, 0, 100, op => { var opac = parseFloat(getListclass('opacinfo').next().value.value, 10)/100.0; getListclass('rmyt-app-app-win1').next().value.style.opacity = opac;getListclass('rmyt-app-app-win1').next().value.op = opac; }   );
	
		new TagText().taglistfuncattr('div', 'class', 'rmyt-app-app-win1-z1', cl = (elem) => {elem.style.width = '100%';elem.style.backgroundColor = 'rgb(244, 0, 0)'; elem.style.fontSize = '15px';elem.style.color = 'white';elem.style.fontWeight = 'bold'; elem.style.fontOpticalSizing = 'auto';});
			
		window.updateAllBackWin();	
		//TagText.SetAllRGBWin('rmyt-app-app', 'rmyt-app-app-win1', 'rmyt-app-app-win2', 'rmyt-app-app-win3', 'rmyt-app-app-windesign', 'rmyt-app-app-wintime', 'rmyt-app-app-win1-z1', 'rmyt-app-app-win3-z1', 'rmyt-app-app-wint-z1');

		console.log('info start');
	}
	else
	{
		if(TagText.geton('rmyt-app-app-win1') == false){
			new TagText().tagvis('rmyt-app-app-win1', 'visible');console.log('info visible');
			TagText.seton('rmyt-app-app-win1', true);
		}
		else if(TagText.geton('rmyt-app-app-win1') == true)
		{
			TagText.seton('rmyt-app-app-win1', false);
			new TagText().tagvis('rmyt-app-app-win1', 'hidden');console.log('info hidden11');
			
		}
		else
		{
			new TagText().tagvis('rmyt-app-app-win1', 'visible');console.log('info undef visible');
			TagText.seton('rmyt-app-app-win1', true);
			console.log('on : offline');
		}

	}

	console.log('info-on:' + TagText.geton('rmyt-app-app-win1'));
	console.log('info-info:' + new TagText().getbox('rmyt-app-app-win1'));

});

c1.addbuttexecallAddWin('stat', 'Stat',  () => { 
	
	if(new TagText().getbox('rmyt-app-app-win2') == false){
		let ci = new TagText();
		ci.addbox(window.__INT__, 'rmyt-app-app-win2');
		ci.addtextbox('Stat');
		ci.addzindex(1000000);
		ci.addopacity(0.04);
		new TagText().tagattr('div', 'rgb(244, 0, 0)', '15px', 'class', 'rmyt-app-app-win2');
		new TagText().tagpos('div', 'class', 'rmyt-app-app-win2', 'fixed');
		new TagText().tagresz('rmyt-app-app-win2', '500px', '450px', '620px', '330px'); 
		new TagText().setbox('rmyt-app-app-win2', true);

		TagText.seton('rmyt-app-app-win2', true);

		ci.addbuttexecallAddWin('consoleB', 'Option', ()=>{if(window.csbutt === undefined){ window.csbutt = false; }else{window.csbutt=!window.csbutt;} 
new TagText().taglistarrayfuncattr(elem => { 
			if(window.csbutt == true){
				elem.style.display='inline';
				elem.style.opacity = 1.0;
			}
			else
			{
				elem.style.display='none';
				elem.style.opacity = 0.0;
			}

		}, 'input', 'class', 'rmyt-app-app-win2_butt_console');

});

		ci.addbuttexecallgroup('StatA', 'console', stat => {   
						async__$ExEC_FuNC$__a(4, st=>{new TagText().tagattrall(getListclass('textstat').next().value, 'a', 'href')});

						} );
		ci.addbuttexecallgroup('Img', 'console', stat => {   
						async__$ExEC_FuNC$__a(4, st=>{new TagText().tagattrall(getListclass('textstat').next().value, 'img', 'src')});

						} );
		ci.addbuttexecallgroup('Link', 'console', stat => {   
						async__$ExEC_FuNC$__a(4, st=>{new TagText().tagattrall(getListclass('textstat').next().value, 'link', 'href')});

						} );
		ci.addbuttexecallgroup('Script', 'console', stat => {   
						async__$ExEC_FuNC$__a(4, st=>{new TagText().tagattrall(getListclass('textstat').next().value, 'script', 'src')});

						} );

		ci.addbuttexecallgroup('Video', 'console', stat => {   
						async__$ExEC_FuNC$__a(4, st=>{new TagText().tagattrall(getListclass('textstat').next().value, 'video', 'src')});

						} );

		ci.addbuttexecallgroup('Iframe', 'console', stat => {   
						async__$ExEC_FuNC$__a(4, st=>{new TagText().tagattrall(getListclass('textstat').next().value, 'iframe', 'src')});

						} );

		ci.addbuttexecallgroup('Object', 'console', stat => {   
						async__$ExEC_FuNC$__a(4, st=>{new TagText().tagattrall(getListclass('textstat').next().value, 'object', 'src')});

						} );

		ci.addbuttexecallgroup('Form', 'console', stat => {   
						async__$ExEC_FuNC$__a(4, st=>{new TagText().tagattrall(getListclass('textstat').next().value, 'form', 'action')});

						} );

		ci.addbuttexecallgroup('Canvas', 'console', stat => {   
						async__$ExEC_FuNC$__a(4, st=>{new TagText().tagattrall(getListclass('textstat').next().value, 'canvas', 'id')});

						} );

		ci.addbuttexecallgroup('St Wdiv', 'console', stat => {   
						async__$ExEC_FuNC$__a(4, st=>{new TagText().tagstylepropallnot(getListclass('textstat').next().value, 'div', 'background-image', 'none')});

						} );

		ci.addinputtextbuttexecall('Style:', 'linkstylediv', 'linkstyletxt', 'enter new style property', 'linkstylebutt', 'Src style', 
		link => { var v = getListclass('linkstyletxt').next().value.value; 
				var tt = [];var ct = 0;var gen;
				switch(v.split('|').length){ 
					case 1:
						gen = getTagCStyleall(v);											

						break;
					case 2:
						gen = getTagCStyleprop(v.split('|')[0], v.split('|')[1]);
						
						break;	

			  		case 3:	
						gen = getTagCStylepropnot(v.split('|')[0], v.split('|')[1], v.split('|')[2]);
												
						break;
			

				}

				for(let t of gen){
					tt.push(t);
					ct++;
					if(ct > 1000)break;
				}

				var myWorker = new Worker(new TagText().fn2workerURL(wk => {
								
				onmessage = function(oEvent) {
					postMessage(oEvent.data);
				};

					
				}));

				myWorker.onmessage = function(oEvent) {
					getListclass('textstat').next().value.value += oEvent.data + '\n';
				};

				async__$ExEC_FuNC$__5(tt, myWorker, 2, st = (m) =>{ myWorker.postMessage(m) });


		} );

		ci.addbuttexecall('Clear', stat => {   
						getListclass('textstat').next().value.value = '';

						} );

		ci.addbuttexecall('LOAD', stat => {  
						var v = getListclass('linkstyletxt').next().value.value;
						if(localStorage[v]){
							
							getListclass('textstat').next().value.value += localStorage[v];

						}
						else
						{
							getListclass('textstat').next().value.value += 'NO LOCAL STORAGE SET\n';
						}

						} );		

		ci.addbuttexecall('SAVE', stat => {   
						
							var v = getListclass('linkstyletxt').next().value.value;
							localStorage[v] = getListclass('textstat').next().value.value;
						

						} );

		ci.addbuttexecall('MEMDISP', stat => {  
						var v = getListclass('linkstyletxt').next().value.value;
						if(sessionStorage[v]){
							
							getListclass('textstat').next().value.value += sessionStorage[v];

						}
						else
						{
							getListclass('textstat').next().value.value += 'NO MEMORY STORAGE SET\n';
						}

						} );

		ci.addbuttexecall('MEM', stat => {   
						
							var v = getListclass('linkstyletxt').next().value.value;
							sessionStorage[v] = getListclass('textstat').next().value.value;
						

						} );

		ci.addbuttexecall('STORE', stor => {   
							var v = getListclass('linkstyletxt').next().value.value;	
							var st = {};
							
							if(v[0] == 'l')st = Object.assign({}, localStorage);		
							else if(v[0] == 's')st = Object.assign({}, sessionStorage);
							else if(v[0] == 'v')st = Object.assign({}, getList('video').next().value);
							else if(v[0] == 'i')st = Object.assign({}, getList('img').next().value);
							else if(v[0] == 'f')st = Object.assign({}, getList('form').next().value);
							else if(v[0] == 'r')st = Object.assign({}, getList('iframe').next().value);
							else if(v[0] == 'w')st = Object.assign({}, window);
							else if(v[0] == 'd')st = Object.assign({}, document);

							if(v.length == 1){
								for(let l in st){
									getListclass('textstat').next().value.value += l + '=' + st[l] + '\n';
								}	
								return;
							}

							if(v[1] == 'a'){
								for(let l in st){
									if(v[0] == 'l')localStorage[l]='';		
									else if(v[0] == 's')sessionStorage[l]='';
								}

								return;
							}

							if((v == 'eval')||(v=='neval')){

								if(window.OFF === undefined){
									window.OFF = [];
									window['OFF']['val'] = '';
									window['OFF']['init'] = 0;

								}
								else{
									if(window['OFF']['init'] == 1){
										window['OFF']['init'] = 0;
									}
								}	

								var cd = getListclass('textstat').next().value.value;

								var str0 = cd.replace(/(\w+)\((.+)\)/g, (correspondance, p1, p2, decalage, chaine) => {
								 
								 	if(p1.indexOf('func') != -1){
										var f = 'for( let x in ';
										var g = '';
										if(p1[0] == 'w'){f += 'window){ \n';g = 'window';}
										else if(p1[0] == 'd'){f += 'document){ \n';g = 'document';}
										else if(p1[0] == 'l'){f += 'localStorage){ \n';g = 'localStorage';}
										else if(p1[0] == 's'){f += 'sessionStorage){ \n';g = 'sessionStorage';}
										else if(p1[0] == 'v'){f += 'document.getElementsByTagName(\'video\')[0]){ \n';g = 'document.getElementsByTagName(\'video\')[0]';}
										else return correspondance;
	
										   f += '	if(';
										   var s = p2.match(/(\w+)/g);
										   var i = 0, cond='||';
										   if(p1.indexOf('and') != -1)cond='&&';
										   for(let p of s){
											if(i > 0)f += cond;
											f += '(x.indexOf(\'' + p + '\') != -1)';
											i++;
										   }
										   f += '){\n';
							if(p1.indexOf('off') != -1)f += '		' + g + '[x]=\'undefined\';\n';
							if(p1.indexOf('val') != -1)f += '		getListclass(\'textstat\').next().value.value += x.toString() + \'=\' + ' + g + '[x] + \'\\n\'; \n';
									      else f += '		getListclass(\'textstat\').next().value.value += x.toString() + \'\\n\'; \n';
										   f += '	}\n';
										   f += '}\n';

										console.log('chaine:' + chaine + ']');
										console.log('corres:' + correspondance + ']');
										console.log(f);
										return f;
									}
									else if((p1 == 'search')||(p1 == 'nosearch')){
										var s = p2.match(/([a-zA-Z0-9\._\$\(\)\[\]']+)/g);
										var f = '', si;
										
										var wp = s[0], mx = s.length-1;
										if(p1 == 'nosearch')mx = s.length;
										for(var i = 1;i < mx;i++){
											wp += '[\'' + s[i] + '\']';
										}
										f = 'var W = ' + wp + ';\n';
										if(p1 == 'search')si = s[mx];
										
										f+='for( let x in W){\n'; 
							     if(p1 == 'search')f+='	if((x.indexOf(\'' + si + '\') != -1)){\n';
										f+='		try{\n';
										f+='		getListclass(\'textstat\').next().value.value += x.toString() + \'=\' + W[x] + \'\\n\'; \n'; 
										f+='		for(let xx in W[x]){\n';
										f+='			try{\n';
						   if(window['OFF']['init'] > 0)f+='				W[x][xx] = ' + window['OFF']['val'] + ';\n';
										f+='				getListclass(\'textstat\').next().value.value += \'---\' + xx.toString() + \'=\' + W[x][xx] + \'\\n\'; \n';
										f+='			}catch(e){getListclass(\'textstat\').next().value.value += \'---\' + e + \' \' + xx.toString() + \'=\' + W[x].xx + \'\\n\';}\n'; 
										f+='		}\n';
										f+='		}catch(e){getListclass(\'textstat\').next().value.value += e;}\n';
							      if(p1 == 'search')f+='	}\n';
										f+='}';

										return f;
			
									}
									else if((p1 == 'nosearchm')||(p1 == 'searchm')){
										var s = p2.match(/([a-zA-Z0-9\._\$\(\)\[\]']+)/g);
										var f = '', si;
										
										var wp = s[0], mx = s.length-1;
										if(p1 == 'nosearchm')mx = s.length;
										for(var i = 1;i < mx;i++){
											wp += '[\'' + s[i] + '\']';
										}
										f = 'var W = ' + wp + ';\n';
										if(p1 == 'searchm')si = s[mx];
										
										f+='for( let x in W){\n'; 
							     if(p1 == 'searchm')f+='	if((x.indexOf(\'' + si + '\') != -1)){\n';
										f+='		try{\n';
						   				f+='		getListclass(\'textstat\').next().value.value += x.toString() + \'=\' + W[x] + \'\\n\'; \n'; 
										f+='		for(var j = 0;j < W[x].length;j++){\n';
						f+='			for(let xx in W[x][j]){\n';
						f+='				try{\n';
		   if(window['OFF']['init'] > 0)f+='					W[x][j][xx] = ' + window['OFF']['val'] + ';\n';
						f+='					getListclass(\'textstat\').next().value.value += \'---\' + xx.toString() + \'=\' + W[x][j][xx] + \'\\n\'; \n'; 
						f+='				}catch(e){getListclass(\'textstat\').next().value.value += \'---\' + e + \' \' + xx.toString() + \'=\' + W[x][j].xx + \'\\n\';}\n';
						f+='			}\n';
										f+='		}\n';
										f+='		}catch(e){getListclass(\'textstat\').next().value.value += e;}\n';
							     if(p1 == 'searchm')f+='	}\n';
										f+='}';

										return f;
			
									}
									else if(p1 == 'off1'){
										var s = p2.match(/([a-zA-Z0-9\._\$\(\)\[\]']+)/g);
										window['OFF']['val'] = s[0];
										window['OFF']['init'] = 1;
										return '//' + correspondance + '\n';

									}
									else if(p1 == 'off2'){
										var s = p2.match(/([a-zA-Z0-9\._\$\(\)\[\]']+)/g);
										window['OFF']['val'] = s[0];
										window['OFF']['init'] = 2;
										return '//' + correspondance + '\n';

									}
									else if(p1 == 'fst'){
										var s = p2.match(/([a-z0-9\.]+)/g);
										getListclass('textstat').next().value.style.fontSize=s[0];
										return '//fontSize ' + s[0] + '\n';

									}
									else if(p1.indexOf('gte') != -1){
										var f = 'getListclass(\'textstat\').next().value.value ';
										if(p2.indexOf('add') != -1)f += '+= \'' + p2.substring(4, p2.length) + '\';';
										else f += '= \'' + p2 + '\';';
										return f;
									}
									else if(p1.indexOf('gat') != -1){
										var f = 'getListclass(\'textstat\').next().value.value += window.atob(\'' + p2 + '\');';
										return f;
									}
									
									else return correspondance;
								});

								var str = str0.replace(/(\w+)\./g, (correspondance, p1, decalage, chaine) => {
								 
								 	if(p1 == 'v')return 'document.getElementsByTagName(\'video\')[0].';
									else if(p1 == 'w')return 'window.';
									else if(p1 == 'd')return 'document.';
									else if(p1 == 'l')return 'localStorage.';
									else if(p1 == 's')return 'sessionStorage.';
									else if(p1 == 'i')return 'document.getElementsByTagName(\'img\')[0].';
									else if(p1 == 'r')return 'document.getElementsByTagName(\'iframe\')[0].';
									else if(p1 == 'f')return 'document.getElementsByTagName(\'form\')[0].';
									else if(p1 == 'o')return 'document.getElementsByTagName(\'object\')[0].';
									else if(p1 == 'g')return 'getListclass(\'textstat\').next().value.';
									else return correspondance;
								});
								
								getListclass('textstat').next().value.value = str;
								try{if(v == 'eval')eval(str);}catch(e){getListclass('textstat').next().value.value += '\nERROR\n' + e;}
								return;

							}

							if(v.indexOf('.') > 0){
								var prop = v.substring(v.indexOf('.')+1, v.length);
								console.log('prop:' + prop);
								if(getListclass('textstat').next().value.value.indexOf('function') != -1){
									var s = getListclass('textstat').next().value.value;
									var f = s.substring(s.indexOf('function')+9, s.length);
									if(v[0] == 'v')getList('video').next().value[prop] = new Function(f);
									else if(v[0] == 'i')getList('img').next().value[prop] = new Function(f);
									else if(v[0] == 'f')getList('form').next().value[prop] = new Function(f);
									else if(v[0] == 'r')getList('iframe').next().value[prop] = new Function(f);
									else if(v[0] == 'w')window[prop] = new Function(f);
									else if(v[0] == 'd')document[prop] = new Function(f);
									else if(v[0] == 'l')localStorage[prop] = new Function(f);		
									else if(v[0] == 's')sessionStorage[prop] = new Function(f);
								}
								else{
									if(v[0] == 'v')getList('video').next().value[prop] = getListclass('textstat').next().value.value;
									else if(v[0] == 'i')getList('img').next().value[prop] = getListclass('textstat').next().value.value;
									else if(v[0] == 'f')getList('form').next().value[prop] = getListclass('textstat').next().value.value;
									else if(v[0] == 'r')getList('iframe').next().value[prop] = getListclass('textstat').next().value.value;
									else if(v[0] == 'w')window[prop] = getListclass('textstat').next().value.value;
									else if(v[0] == 'd')document[prop] = getListclass('textstat').next().value.value;
									else if(v[0] == 'l')localStorage[prop] = getListclass('textstat').next().value.value;		
									else if(v[0] == 's')sessionStorage[prop] = getListclass('textstat').next().value.value;
								}
								
								return;
								
							}

							if(v == 'init_size'){
								new TagText().tagresz('rmyt-app-app-win2', '500px', '450px', '620px', '330px');
								getListclass('textstat').next().value.style.height='200px';
								return;
							}

							if(v == 'set_dim'){
								var s = getListclass('textstat').next().value.value;
								var c = s.match(/(\w+)/g);
								new TagText().tagresz('rmyt-app-app-win2', c[0]+'px', c[1]+'px', c[2]+'px', c[3]+'px');
								getListclass('textstat').next().value.style.width=c[0]+'px';
								getListclass('textstat').next().value.style.height=(c[1]>200)?(c[1]-200)+'px':c[1]+'px';
								return;
							}

							if((v == 'fullsc') ||(v == 'fullscreen')){
								new TagText().tagresz('rmyt-app-app-win2', '1000px', '800px', '20px', '100px');
								getListclass('textstat').next().value.style.height='600px';
								getListclass('textstat').next().value.style.width='1000px';
								getListclass('linkstyletxt').next().value.value = 'eval';
								return;
							}

							if(v == 'welcome'){
								TagText.Anim_Text();return;
							}		

							if(v == 'coo'){

								var page = 'javascript:window.open(\'' + 
									   'javascript:document.write(\\\'' + TagText.getCookieHTMLyt() + '\\\');' +
									   '\',\'COOKIES\',\'resizable=yes,scrollbars=yes,status=yes\');return false;';
									   		

								var img = 'https://img-3.journaldesfemmes.fr/yWGwX9NZacClqzNE1Ng5Xh32mBk=/750x/smart/image-icu/10027543_1217914170.jpg'; 

								
								new TagText().addvidplaylistsz('rmyt-app-app-win3-z1', page, img, 200, 100);
								return;

							}

							if(v == 'cook'){

								var page = 'javascript:window.open(\'' + 'javascript:var c = document.cookie.split(\\\';\\\');' +
									   'document.write(\\\'<html><head></head><body>\\\');' + 
									   'document.write(\\\'<style>.var{color:blue;font-optical-sizing:auto;}.val{color:red;font-optical-sizing:auto;}</style>\\\');' +
									   'c.forEach(co => document.write(\\\'<span class=\\\\\\\'var\\\\\\\'>\\\' + co.substring(0,co.indexOf(\\\'=\\\')) +  \\\'</span>\\\'  + \\\'=\\\' + \\\'<span class=\\\\\\\'val\\\\\\\'>\\\' + co.substring(co.indexOf(\\\'=\\\')+1, co.length) + \\\'</span>\\\' + \\\'<br>\\\'));' + 'document.write(\\\'</body></html>\\\');' +
									    '\',\'COOKIES\',\'resizable=yes,scrollbars=yes,status=yes\');return false;';


								var img = 'https://img-3.journaldesfemmes.fr/yWGwX9NZacClqzNE1Ng5Xh32mBk=/750x/smart/image-icu/10027543_1217914170.jpg'; 

								
								new TagText().addvidplaylistsz('rmyt-app-app-win3-z1', page, img, 200, 100);
								return;
							}

							if(v == 'cookie1'){
								getListclass('textstat').next().value.value += TagText.getCookieHTMLyt();return;
							}
							if(v == 'cookie2'){
								getListclass('textstat').next().value.value += TagText.getCookieHTML();return;
							}
							

						} );

		
		ci.addbreak();
		ci.addtextarea('dstat', 'textstat', 10, 40);

		ci.addrangeexecall('Opacity:', 'dopacst', 'opacstat', 50, 1, 0, 100, op => { var opac = parseFloat(getListclass('opacstat').next().value.value, 10)/100.0; getListclass('rmyt-app-app-win2').next().value.style.opacity = opac;getListclass('rmyt-app-app-win2').next().value.op = opac; }   );

		ci.taglistfuncattr('textarea', 'class', 'textstat', cl = (elem) => { elem.style.fontSize = '11px';elem.style.color = 'red';elem.style.fontWeight = 'bold';elem.style.fontOpticalSizing = 'auto'; } );

		async__$ExEC_FuNC$__Time(() => { TagText.Anim_Text(); }, 1500);
		
		window.updateAllBackWin();
		window.WINDOWS['consoleB']();
		
	}
	else
	{
		if(TagText.geton('rmyt-app-app-win2') == false){
			new TagText().tagvis('rmyt-app-app-win2', 'visible');//console.log('visible');
			TagText.seton('rmyt-app-app-win2', true);
		}
		else if(TagText.geton('rmyt-app-app-win2') == true)
		{
			new TagText().tagvis('rmyt-app-app-win2', 'hidden');//console.log('hidden11');
			TagText.seton('rmyt-app-app-win2', false);
		}
		else{
			new TagText().tagvis('rmyt-app-app-win2', 'visible');//console.log('visible');
			TagText.seton('rmyt-app-app-win2', true);
		}

	}

});

c1.addbuttexecallAddWin('playlist', 'Playlist',  () => { 
	
	if(new TagText().getbox('rmyt-app-app-win3') == false){
		let ci = new TagText();
		ci.addbox(window.__INT__, 'rmyt-app-app-win3');
		ci.addtextbox('Playlist');
		ci.addzindex(100000);
		ci.addopacity(0.04);
		new TagText().tagattr('div', 'rgb(244, 0, 0)', '15px', 'class', 'rmyt-app-app-win3');
		new TagText().tagpos('div', 'class', 'rmyt-app-app-win3', 'fixed');
		new TagText().tagresz('rmyt-app-app-win3', '300px', '750px', '50px', '20px'); 
		new TagText().setbox('rmyt-app-app-win3', true);

		TagText.seton('rmyt-app-app-win3', true);
		
		ci.addinputtextbuttexecall('Link:', 'linkviddivpl', 'linkvidtxtpl', '', 'linkvidbuttpl', 'New video', 
		link => { 	
			var o = JSON.parse(getListclass('linkvidtxtpl').next().value.value); 
			var str = o.url;
			if('sz' in o === true){
				if(o.sz == 1){
					str = 'javascript:window.open(\'' + o.url + '\',\'' + o.url + '\',\'resizable=yes,scrollbars=yes,status=yes\');return false;';
				}
				
			} 
			new TagText().addvidplaylistsz('rmyt-app-app-win3-z1', str, o.img, 200, 100);
			} );

		ci.addbuttexecall('All img', 
		addallimg => { async__$ExEC_FuNC$__a(4, as => {
					
					var tt = [];
						
					for(let t of getTagattr('img', 'src')){
					
						tt.push( t );
						
					}
					var ct = 0;
					for(let tc of getTagCStylepropnot('div', 'background-image', 'none')){
						if(ct > 0){
							var str = new String(tc);
							tt.push( str.substr(5, str.length-7) );
						}
						ct++;
					}
					
					try{
					getListclass('textstat').next().value.value += tt.length + '\n';
					}catch(e){}

					window.MAXIMGPL = tt.length;
					window.I_IMGPL = 1;
					TagText.showprogress('prog_pl');

					var myWorker = new Worker(new TagText().fn2workerURL(wk => {

								
					onmessage = function(oEvent) {
					  postMessage(oEvent.data);
					};

						
					}));

					myWorker.onmessage = function(oEvent) {
						var o = new String(oEvent.data);
						var str = 'javascript:window.open(\'' + o + '\',\'' + o + '\',\'resizable=yes,scrollbars=yes,status=yes,location=yes\');return false;';
						new TagText().addvidplaylistsz('rmyt-app-app-win3-z1', str, o, 200, 100);
						window.I_IMGPL++;
						TagText.updateprogress('prog_pl', Math.trunc((window.I_IMGPL / window.MAXIMGPL)*100.0).toString());
						if(window.I_IMGPL == window.MAXIMGPL-1)TagText.hideprogress('prog_pl');
					};

					window.Timg = parseInt(getListclass('opactimg').next().value.value,10);
					async__$ExEC_FuNC$__6(tt, myWorker, as = (e) => {myWorker.postMessage(e)});


			       }) 
			     });

		ci.addbuttexecall('Video', 
		addallimg => { async__$ExEC_FuNC$__a(2, () => {
					
					var f = getListclass('linkvidtxtpl').next().value.value;
					var tt = [];
					var pl = window.playlist;
					if(f.length != 0){
						var ff = [...f.matchAll(/(\w):(.+)/g)];
						var type = ff[0][1];
						var mf = ff[0][2].match(/([a-zA-Z0-9\._]+)/g);

						var ipl = mf[0];
						if(isNaN(ipl)==false)ipl = 'pl' + ipl;

						if(type == 'f'){
							pl=[];
							var _pl = TagText.getVideo(mf);
							window.playlist[ipl] = [];
							for(let p of _pl){
								window.playlist[ipl].push(p);
							}
							var i = 0;
							for(let p of _pl){
								tt.push(i +':'+window.playlist[p].substring(39, window.playlist[p].length));
								i++;
							}

							
							try{
							var is_in = false;
							for(let x of window.playlist_name){ if(x == ipl){is_in = true;break;} };
							if(!is_in){window.playlist_name.push(ipl);
							TagText.Update_select('playlist_sel', window.playlist_name);
							}
							}
							catch(e){
								console.log('playlist_sel update:'+e);
							}
							
						}
						if(type == 'p'){
							var p2, i = 0;
							for(let p of window.playlist[ipl]){
								p2 = window.playlist[p];
								tt.push(i+':'+ p2.substring(39, p2.length));
								i++;
							}
							
						}
						window.autoplay(document.getElementsByTagName('video')[0], 3, ipl);
					
					}
					else
					{

						var i = 0;
						for(let p of pl){
						
							tt.push(i+':'+ p.substring(39, p.length));
							i++;

						}
						window.autoplay(document.getElementsByTagName('video')[0], 1, null);
						
					}
					
					try{
					getListclass('textstat').next().value.value += tt.length + '\n';
					}catch(e){}

					window.MAXVIDEOPL = tt.length;
					TagText.showprogress('prog_pl');

					var myWorker = new Worker(new TagText().fn2workerURL(wk => {

								
					onmessage = function(oEvent) {
					  postMessage(oEvent.data);
					};

						
					}));

					myWorker.onmessage = function(oEvent) {
						var o = new String(oEvent.data).toString();
						console.log(o);
						var oo = [...o.matchAll(/([0-9]+):(.+)/g)];
						var str = 'javascript:window.I=' + oo[0][1];
						if(window.auto_play.type == 1)str+=';play_video();';
						else if(window.auto_play.type == 3)str+=';play_next_video(window.auto_play.name);';
						console.log('autop n:' + window.auto_play.type + ' ' + auto_play.name);
						new TagText().addvidplaylistszt('rmyt-app-app-win3-z1', str, window.backurl/*window.path_video + 'favicon.ico'*/, 200, 100, oo[0][1] + ' - ' + oo[0][2]);
						TagText.updateprogress('prog_pl', Math.trunc( (parseInt(oo[0][1], 10) / window.MAXVIDEOPL)*100.0 ).toString() );
						if(parseInt(oo[0][1], 10) == window.MAXVIDEOPL-1)TagText.hideprogress('prog_pl');
					};

					window.Timg = parseInt(getListclass('opactimg').next().value.value,10);
					async__$ExEC_FuNC$__6(tt, myWorker, (e) => {myWorker.postMessage(e)});


			       }) 
			     });

		ci.addbuttexecall('Init', 
		() => {

			if(document.location.hostname == ''){
			new TagText().addvidplaylistsz('rmyt-app-app-win3-z1', 'javascript:window.I=28;play_video();', '/media/root/SAVERM/Videos/video/video6/favicon.ico', 100, 100);
			}
			else if(document.location.hostname.indexOf('orange')!=-1){
		new TagText().addvidplaylist('rmyt-app-app-win3-z1', '#live/liveChannel/1400', 'https://rp-live.orange.fr/otv_logos/logo_webtv_livetv_rmcdecouverte.png');
		new TagText().addvidplaylist('rmyt-app-app-win3-z1', '#live/liveChannel/444', 'https://rp-live.orange.fr/otv_logos/logo_webtv_livetv_nrj12.png');
		new TagText().addvidplaylist('rmyt-app-app-win3-z1', '#live/liveChannel/192', 'https://rp-live.orange.fr/otv_logos/logo_webtv_livetv_tf1.png');
		new TagText().addvidplaylist('rmyt-app-app-win3-z1', '#live/liveChannel/4', 'https://rp-live.orange.fr/otv_logos/logo_webtv_livetv_france2.png');
		new TagText().addvidplaylist('rmyt-app-app-win3-z1', '#live/liveChannel/1401', 'https://rp-live.orange.fr/otv_logos/logo_webtv_livetv_equipe21.png');
		new TagText().addvidplaylist('rmyt-app-app-win3-z1', '#live/liveChannel/481', 'https://rp-live.orange.fr/otv_logos/logo_webtv_livetv_bfmtv.png');
		new TagText().addvidplaylist('rmyt-app-app-win3-z1', '#live/liveChannel/195', 'https://rp-live.orange.fr/otv_logos/logo_webtv_livetv_tmc.png');
		new TagText().addvidplaylist('rmyt-app-app-win3-z1', '#live/liveChannel/458', 'https://rp-live.orange.fr/otv_logos/logo_webtv_livetv_directstar.png');

			}

			});

		ci.addbuttexecall('Clear', 
		clear => {
			getListclass('rmyt-app-app-win3-z1').next().value.innerHTML = '';
			getListclass('linkvidtxtpl').next().value.value = '';

			});
		

		ci.addzonebox('rmyt-app-app-win3','rmyt-app-app-win3-z1');

		new TagText().addvidplaylistsz('rmyt-app-app-win3-z1', 'javascript:window.I=28;play_video();', '/media/root/SAVERM/Videos/video/video6/favicon.ico', 100, 100);

		ci.addprogress('0', 'prog_pl');
		ci.addrangeexecall('Time:', 'dtimeimg', 'opactimg', 1000, 10, 0, 1000, ti => { window.Timg = parseInt(getListclass('opactimg').next().value.value,10); }   );

		ci.addrangeexecall('Opacity:', 'dopacpl', 'opacplay', 50, 1, 0, 100, op => { var opac = parseFloat(getListclass('opacplay').next().value.value, 10)/100.0; getListclass('rmyt-app-app-win3').next().value.style.opacity = opac;getListclass('rmyt-app-app-win3').next().value.op = opac; }   );

		new TagText().taglistfuncattr('div', 'class', 'rmyt-app-app-win3-z1', cl = (elem) => { elem.style.height = '550px';elem.style.overflow = 'auto';elem.style.color = 'white';elem.style.fontWeight = 'bold'; } );				
		
		window.updateAllBackWin();
		//TagText.SetAllRGBWin('rmyt-app-app', 'rmyt-app-app-win1', 'rmyt-app-app-win2', 'rmyt-app-app-windesign', 'rmyt-app-app-wintime', 'rmyt-app-app-win1-z1', 'rmyt-app-app-wint-z1', 'rmyt-app-app-win3', 'rmyt-app-app-win3-z1');

		//console.log('false');
	}
	else
	{
		if(TagText.geton('rmyt-app-app-win3') == false){
			new TagText().tagvis('rmyt-app-app-win3', 'visible');//console.log('visible');
			TagText.seton('rmyt-app-app-win3', true);
		}
		else if(TagText.geton('rmyt-app-app-win3') == true)
		{
			new TagText().tagvis('rmyt-app-app-win3', 'hidden');//console.log('hidden11');
			TagText.seton('rmyt-app-app-win3', false);
		}
		else{
			new TagText().tagvis('rmyt-app-app-win3', 'visible');//console.log('visible');
			TagText.seton('rmyt-app-app-win3', true);
		
		}

	}

});

c1.addbuttexecallAddWin('design', 'Design',  () => { 
	
	if(new TagText().getbox('rmyt-app-app-windesign') == false){
		let ci = new TagText();
		ci.addbox(window.__INT__, 'rmyt-app-app-windesign');
		ci.addtextbox('Design');
		ci.addzindex(200000);
		ci.addopacity(0.04);
		new TagText().tagattr('div', 'rgb(244, 0, 0)', '15px', 'class', 'rmyt-app-app-windesign');
		new TagText().tagpos('div', 'class', 'rmyt-app-app-windesign', 'fixed');
		new TagText().tagresz('rmyt-app-app-windesign', '250px', '170px', '4px', '330px'); 
		new TagText().setbox('rmyt-app-app-windesign', true);

		TagText.seton('rmyt-app-app-windesign', true);

		
		ci.addbreak();
		
		ci.addbuttexecall('P', () =>{ TagText.Init_Opac(0.0);TagText.Set_Opac('playlist', 0.6);TagText.Set_Opac('design', 0.1);
		TagText.Set_Opac('time', 0.1);TagText.Set_Opac('info', 0.2);TagText.Set_Opac('stat', 0.1); });
		ci.addbreak();
		ci.addselect('playlist : ', 'playlist_sel', ['ufo', 'most', 'cryptid', 'black_hat']);
		ci.addbuttexecall('select', ()=>{ getListclass('linkvidtxtpl').next().value.value = 'p:' + getListclass('playlist_sel').next().value.value; });
		ci.addbuttexecall('suppr', ()=>{ delete window.playlist[getListclass('playlist_sel').next().value.value];
						window.playlist_name = window.playlist_name.filter(x => x != getListclass('playlist_sel').next().value.value);
						TagText.Update_select('playlist_sel', window.playlist_name); });
		ci.addbreak();

		ci.addrangeexecall('Opacity:', 'dopacdesallwin', 'opacdesallwin', 50, 1, 0, 100, op => { var opac = parseFloat(getListclass('opacdesallwin').next().value.value, 10)/100.0;  TagText.Init_Opac(opac); TagText.Set_Opac('app', 0.0); }   );

		ci.addrangeexecall('Opacity:', 'dopacde', 'opacdes', 50, 1, 0, 100, op => { var opac = parseFloat(getListclass('opacdes').next().value.value, 10)/100.0; getListclass('rmyt-app-app-windesign').next().value.style.opacity = opac;getListclass('rmyt-app-app-windesign').next().value.op = opac; }   );

		window.updateAllBackWin();	
		//TagText.SetAllRGBWin('rmyt-app-app', 'rmyt-app-app-win1', 'rmyt-app-app-win2', 'rmyt-app-app-win3', 'rmyt-app-app-wintime', 'rmyt-app-app-win1-z1', 'rmyt-app-app-win3-z1', 'rmyt-app-app-wint-z1', 'rmyt-app-app-windesign');

	}
	else
	{
		if(TagText.geton('rmyt-app-app-windesign') == false){
			new TagText().tagvis('rmyt-app-app-windesign', 'visible');//console.log('visible');
			TagText.seton('rmyt-app-app-windesign', true);
		}
		else if(TagText.geton('rmyt-app-app-windesign') == true)
		{
			new TagText().tagvis('rmyt-app-app-windesign', 'hidden');//console.log('hidden11');
			TagText.seton('rmyt-app-app-windesign', false);
		}
		else{
			new TagText().tagvis('rmyt-app-app-windesign', 'visible');//console.log('visible');
			TagText.seton('rmyt-app-app-windesign', true);
		}

	}

});

c1.addbuttexecallAddWin('time', 'Time',  () => { 
	
	if(new TagText().getbox('rmyt-app-app-wintime') == false){
		let ci = new TagText();
		ci.addbox(window.__INT__, 'rmyt-app-app-wintime');
		var week = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
		var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
		ci.addtextbox('Time : ' + week[new Date().getDay()] + ' ' + new Date().getDate() + ' ' +  month[new Date().getMonth()] + ' ' + new Date().getFullYear());
		ci.addzindex(200000);
		ci.addopacity(0.04);
		new TagText().tagattr('div', 'rgb(244, 0, 0)', '15px', 'class', 'rmyt-app-app-wintime');
		new TagText().tagpos('div', 'class', 'rmyt-app-app-wintime', 'fixed');
		new TagText().tagresz('rmyt-app-app-wintime', '250px', '170px', '4px', '590px'); 
		new TagText().setbox('rmyt-app-app-wintime', true);

		TagText.seton('rmyt-app-app-wintime', true);

		ci.addzonebox('rmyt-app-app-wintime','rmyt-app-app-wint-z1');		
		

		window.TimeInt = 100;
		let TimeInter = window.TimeInt;

		ci.addbuttexecall('StartT', () => {
			if(window.WorkerTimeON)return false;
			var myWorker = new Worker(new TagText().fn2workerURL(wk => {

			async function async__$ExEC_FuNC$__Time(f, t){
				while(1){
				var r = await new Promise(resolve => { setTimeout(()=>{f();resolve('exec_Time_OK');}, t); } );
				}
					
			};

			function FN(st, n){
				if(st.length < n){
					var nn = n - st.length;
					var str0 = '';
					for(var i = 0;i < nn;i++)str0+='0';
					return str0+st;
				}
				else{
					return st; 
				}
			};

			async__$ExEC_FuNC$__Time(()=>{		
							var t = 'Time : <br>' + FN(new Date().getHours().toString(),2) + ':' + FN(new Date().getMinutes().toString(),2) + ':' + FN(new Date().getSeconds().toString(),2) + ':' + FN(new Date().getMilliseconds().toString(),3);
							
							postMessage(t);

							}, 1
							
						);
			
			
																
			onmessage = function(oEvent) {
				postMessage(oEvent.data);
			};

				
			}));

			myWorker.onmessage = function(oEvent) {
				TagText.settextbox( 'rmyt-app-app-wint-z1', oEvent.data);
			};
			window.WorkerTime = myWorker;
			window.WorkerTimeON = true;
			window.WorkerTimeOFF = false;

		});

		ci.addbuttexecall('StartN', () => {
			if(window.WorkerTimeON)return false;
			var myWorker = new Worker(new TagText().fn2workerURL(wk => {

			async function async__$ExEC_FuNC$__Time(f, t){
				while(1){
				var r = await new Promise(resolve => { setTimeout(()=>{f();resolve('exec_Time_OK');}, t); } );
				}
					
			};

			function FN(st, n){
				if(st.length < n){
					var nn = n - st.length;
					var str0 = '';
					for(var i = 0;i < nn;i++)str0+='0';
					return str0+st;
				}
				else{
					return st; 
				}
			};

			async__$ExEC_FuNC$__Time(()=>{		
							var t = 'Time : <br>' + FN(new Date().getHours().toString(),2) + ':' + FN(new Date().getMinutes().toString(),2) + ':' + FN(new Date().getSeconds().toString(),2);
							
							postMessage(t);

							}, 1000
							
						);
			
			
																
			onmessage = function(oEvent) {
				postMessage(oEvent.data);
			};

				
			}));

			myWorker.onmessage = function(oEvent) {
				TagText.settextbox( 'rmyt-app-app-wint-z1', oEvent.data);
			};
			window.WorkerTime = myWorker;
			window.WorkerTimeON = true;
			window.WorkerTimeOFF = false;

		});

		ci.addbuttexecall('Stop', () => { 
			if(window.WorkerTimeOFF)return false;
			window.WorkerTime.terminate();
			window.WorkerTimeON = false;
			window.WorkerTimeOFF = true;

			
			
		});


		new TagText().taglistfuncattr('div', 'class', 'rmyt-app-app-wint-z1', (elem) => {elem.style.width = '100%';elem.style.backgroundColor = 'rgb(244, 0, 0)'; elem.style.fontSize = '44px';elem.style.color = 'white';elem.style.fontWeight = 'bold'; elem.style.fontOpticalSizing = 'auto';});

		ci.addrangeexecall('Opacity:', 'dopacti', 'opactim', 50, 1, 0, 100, op => { var opac = parseFloat(getListclass('opactim').next().value.value, 10)/100.0; getListclass('rmyt-app-app-wintime').next().value.style.opacity = opac;getListclass('rmyt-app-app-wintime').next().value.op = opac; }   );

		window.updateAllBackWin();	
		//TagText.SetAllRGBWin('rmyt-app-app', 'rmyt-app-app-win1', 'rmyt-app-app-win2', 'rmyt-app-app-win3', 'rmyt-app-app-windesign', 'rmyt-app-app-win1-z1', 'rmyt-app-app-win3-z1', 'rmyt-app-app-wintime','rmyt-app-app-wint-z1');

	}
	else
	{
		if(TagText.geton('rmyt-app-app-wintime') == false){
			new TagText().tagvis('rmyt-app-app-wintime', 'visible');//console.log('visible');
			TagText.seton('rmyt-app-app-wintime', true);
		}
		else if(TagText.geton('rmyt-app-app-wintime') == true)
		{
			new TagText().tagvis('rmyt-app-app-wintime', 'hidden');//console.log('hidden11');
			TagText.seton('rmyt-app-app-wintime', false);
		}
		else{
			new TagText().tagvis('rmyt-app-app-wintime', 'visible');//console.log('visible');
			TagText.seton('rmyt-app-app-wintime', true);
		}

	}

});


c1.addbuttexecall('All Win', () => { TagText.AllWindowDisplay() });

c1.addbreak();
c1.addbuttrmv(' next  video', 'youtube', 'style-scope ytd-watch-next-secondary-results-renderer');
c1.addbuttrmv(' slot', 'youtube', 'style-scope ytd-companion-slot-renderer');
c1.addbuttrmv(' comments', 'youtube', 'style-scope ytd-comments');
c1.addbuttrmv(' info1', 'youtube', 'style-scope ytd-video-primary-info-renderer');
c1.addbuttrmv(' info2', 'youtube', 'ytd-video-secondary-info-renderer');
c1.addbuttrmv(' subtitle', 'youtube', 'caption-window ytp-caption-window-bottom');
c1.addbuttrmv(' 2u', 'youtube', 'yt-simple-endpoint inline-block style-scope ytd-thumbnail');
c1.addbreakgroup('youtube');
c1.addbuttrmvtag(' script', 'youtube', 'script');
c1.addbuttrmvtag(' style', 'youtube', 'style');
c1.addbuttrmvtag(' link', 'youtube', 'link');
c1.addbuttrmvtag(' button', 'youtube', 'button');
c1.addbuttrmvtag(' logo', 'youtube', 'ytd-topbar-logo-renderer');
c1.addbuttrmvtag(' thumb', 'youtube', 'ytd-thumbnail');
c1.addbuttrmvtag(' icon', 'youtube', 'yt-icon');
c1.addbreakgroup('youtube');


c1.addbreakgroup('youtube');
c1.addbuttrmvtagattr(' src script', 'youtube', 'script', 'src');
c1.addbuttrmvtagattr(' link href', 'youtube', 'link', 'href');
c1.addbuttrmvtagattr(' div id', 'youtube', 'div', 'id');
c1.addbuttrmvtagattr(' div class', 'youtube', 'div', 'class');
c1.addbuttrmvtagattr(' button class', 'youtube', 'button', 'class');
c1.addbuttrmvtagattr(' img', 'youtube', 'img', 'src');
c1.addbreakgroup('youtube');
c1.addbuttexecallgroup('IFR', 'youtube',ytd => { new TagText().tagnamermv('IFR')}/*, ytp => { new TagText().tagnamermv('YTP')}*/ );
c1.addbuttexecallgroup('IFRdoc', 'youtube',ytd => { new TagText().iframedoc('iframe', 'div')} );
c1.addbuttexecallgroup('IFRdocALL', 'youtube',ytd => { new TagText().iframedocall('iframe', 'div')},  ytd => { new TagText().iframedocall('iframe', 'script')});
c1.addbuttexecallgroup('IFRdocOb', 'youtube',ytd => { new TagText().iframedocall('object', 'div')},  ytd => { new TagText().iframedocall('object', 'script')});
c1.addbreakgroup('youtube');
c1.addbuttdistag('NO Display button', 'youtube', 'button', 'none');
c1.addbuttdistag('NO Display svg', 'youtube', 'svg', 'none');
c1.addbuttcurrtime('NO PUB', 'video', 444.44, '+');
c1.addbreak();
c1.addbuttexecallgroup('Watch +tard', 'youtube', wm => { new TagText().tagquery('#overlays', '.style-scope .ytd-thumbnail')} );
c1.addbuttexecallgroup('Del Info', 'youtube', di => {new TagText().tagqueryrmvchild('#thumbnail', 1, 1, 1)} );
c1.addbuttexecallgroup('ALL Info', 'youtube', di => {new TagText().tagqueryrmvchild('#thumbnail', 1, 1, 1)}, armvt => {new TagText().tagarrayrmvtag('yt-icon')}, 
			      adt => {new TagText().tagarraydistag('button', 'none', 'svg', 'none')});
c1.addbreak();
c1.addbuttplayvid('PLAY', 'video');
c1.addbuttpausevid('PAUSE', 'video');
c1.addbuttloadvid('LOAD', 'video');
c1.addbutt2execall('PLAY/PAUSE', exe1 => { new TagText().playvid('video') }, exe2 => { new TagText().pausevid('video') });
c1.addbuttwidthvid('+WIDTH VID', 'video', '+');
c1.addbuttwidthvid('-WIDTH VID', 'video', '-');
c1.addbuttheightvid('+HEIGHT VID', 'video', '+');
c1.addbuttheightvid('-HEIGHT VID', 'video', '-');
c1.addbuttcurrtime('FORWARD', 'video', 25.0, '+');
c1.addbuttcurrtime('BACK', 'video', 5.0, '-');
c1.addbreak();
c1.addrangeexecall('time:', 'dtime', 'timer', 50, 1, 0, 100, vol => { new TagText().taglistfunc('video', vol = (elem) => {var timer = getListclass('timer').next().value.value;elem.currentTime = (parseFloat(timer, 10)/100.0) * elem.duration; })} );
c1.addbuttexecall('Update', v05 => {new TagText().taglistfunc('video', speed = (elem) => {getListclass('timer').next().value.value = ((elem.currentTime / elem.duration) *100.0).toString(10); })} );
c1.addbreak();
c1.addbuttexecall('x0.25', v05 => {new TagText().taglistfunc('video', speed = (elem) => {elem.playbackRate = 0.25;getListclass('speed').next().value.value = (elem.playbackRate*100.0).toString(10); })} );
c1.addbuttexecall('x0.5', v05 => {new TagText().taglistfunc('video', speed = (elem) => {elem.playbackRate = 0.5;getListclass('speed').next().value.value = (elem.playbackRate*100.0).toString(10); })} );
c1.addbuttexecall('x1', v1 => {new TagText().tagfunc('video', speed = (elem) => {elem.playbackRate = 1;getListclass('speed').next().value.value = (elem.playbackRate*100.0).toString(10); })} );
c1.addbuttexecall('x1.25', v1 => {new TagText().tagfunc('video', speed = (elem) => {elem.playbackRate = 1.25;getListclass('speed').next().value.value = (elem.playbackRate*100.0).toString(10); })} );
c1.addbuttexecall('x1.75', v1 => {new TagText().tagfunc('video', speed = (elem) => {elem.playbackRate = 1.75;getListclass('speed').next().value.value = (elem.playbackRate*100.0).toString(10); })} );
c1.addbuttexecall('x2', v2 => {new TagText().taglistfunc('video', speed = (elem) => {elem.playbackRate = 2;getListclass('speed').next().value.value = (elem.playbackRate*100.0).toString(10); })} );
c1.addbreak();
c1.addrangeexecall('Speed:', 'dspeed', 'speed', 50, 1, 0, 200, vol => { new TagText().taglistfunc('video', vol = (elem) => {var speedc = getListclass('speed').next().value.value;elem.playbackRate = parseFloat(speedc, 10)/100.0; })} );
c1.addbuttexecall('Update', v05 => {new TagText().taglistfunc('video', speed = (elem) => {getListclass('speed').next().value.value = (elem.playbackRate*100.0).toString(10); })} );
c1.addbreak();
c1.addbuttexecall('Vol-', v2 => {new TagText().tagfunc('video', speed = (elem) => {(elem.volume >= 0.1) ? elem.volume -= 0.1 : elem.volume = 0.0; }, vol = (elem) => {getListclass('volc').next().value.value = (elem.volume*100).toString(10);  })} );
c1.addbuttexecall('Vol+', v2 => {new TagText().tagfunc('video', speed = (elem) => {(elem.volume <= 0.9) ? elem.volume += 0.1 : elem.volume = 1.0; }, vol = (elem) => {getListclass('volc').next().value.value = (elem.volume*100).toString(10); })} );
c1.addbuttexecall('Vol++', v2 => {new TagText().tagfunc('video', speed = (elem) => {(elem.volume <= 0.8) ? elem.volume += 0.2 : elem.volume = 1.0; }, vol = (elem) => {getListclass('volc').next().value.value = (elem.volume*100).toString(10); })} );
c1.addbuttexecall('MAX', v2 => {new TagText().taglistfunc('video', speed = (elem) => {elem.volume = 1.0; }, vol = (elem) => {((getListclass('volc').next()).value).value = 100; } )} );
c1.addbuttexecall('O<', v2 => {new TagText().taglistfunc('video', speed = (elem) => {elem.muted = !elem.muted; })} );
c1.addbreak();
c1.addrangeexecall('Vol:', 'dvolc', 'volc', 50, 1, 0, 100, vol => { new TagText().taglistfunc('video', vol = (elem) => {var volc = ((getListclass('volc').next()).value).value;elem.volume = parseFloat(volc, 10)/100.0; })} );
c1.addbuttexecall('Update', v05 => {new TagText().taglistfunc('video', speed = (elem) => {getListclass('volc').next().value.value = (elem.volume*100.0).toString(10); })} );
c1.addbreak();

c1.addbutttogplayback('<<', 'video', 0.4, 400);
c1.addbuttexecall('<<<', ()=>{ if((auto_play.type == 1)||(auto_play.type == 5)||(auto_play.type == 2))play_video();
				else if((auto_play.type == 3)||(auto_play.type == 6)||(auto_play.type == 4))play_next_video(auto_play.name); console.log('autop n:' + window.auto_play.type + ' ' + auto_play.name);});
c1.addbuttexecall('>>>', ()=>{ if((auto_play.type == 1)||(auto_play.type == 5)||(auto_play.type == 2))play_back_video_n();
				else if((auto_play.type == 3)||(auto_play.type == 6)||(auto_play.type == 4))play_back_video(auto_play.name); console.log('autop n:' + window.auto_play.type + ' ' + auto_play.name);});
c1.addbuttexecall('>>ø', ()=>{ if((auto_play.type == 1)||(auto_play.type == 5)||(auto_play.type == 2))play_rand_video() ;
				else if((auto_play.type == 3)||(auto_play.type == 6)||(auto_play.type == 4))play_random_video(auto_play.name); console.log('autop n:' + window.auto_play.type + ' ' + auto_play.name);});

c1.addbuttexecall('ø', ()=>{ new TagText().taglistfunc('video', (elem) => {elem.loop = !elem.loop; }) });
c1.addbreak();
c1.addbuttcolorexecall('Couleur', 'back_col_butt', () => {new TagText().taglistfunc('body', (elem) => { elem.style.backgroundColor = getElem('back_col_butt').value; })} );
c1.addbuttexecall('Apply', () => {new TagText().taglistfunc('body', (elem) => { elem.style.backgroundColor = getElem('back_col_butt').value; })});

c1.addbreak();
c1.addrangeexecall('Opacity:', 'dopac', 'opac', 50, 1, 0, 100, op => { var opac = parseFloat(getListclass('opac').next().value.value, 10)/100.0; getListclass('rmyt-app-app').next().value.style.opacity = opac;getListclass('rmyt-app-app').next().value.op = opac; }   );


Object.seal(c1);
Object.freeze(c1);
new TagText().tagattr('div', 'rgba(140, 140, 140, 1.0)', '15px', 'class', 'rmyt-app-app');
new TagText().tagpos('div', 'class', 'rmyt-app-app', 'fixed');
new TagText().tagresz('rmyt-app-app', '400px', '1000px', '44px', '100px');
var th = 20, tv = 10, sph = 10, spv = 10;

if(window.updateAllBackWin === undefined){

window.updateAllBackWin = ()=>{TagText.SetAllRGBWin('rmyt-app-app', 'rmyt-app-app-win1', 'rmyt-app-app-win2', 'rmyt-app-app-win3', 'rmyt-app-app-windesign', 'rmyt-app-app-wintime', 'rmyt-app-app-win1-z1', 'rmyt-app-app-win3-z1', 'rmyt-app-app-wint-z1');};

}

window.updateAllBackWin();
window.WINDOWS['youtubeB']();


var cdt = new TagText();
cdt.tagprepos(1, 100, 100, 400, 1400);
cdt.tagtimeint(tv);
cdt.tagspeedint(spv);
cdt.taganimpos('rmyt-app-app');
Object.seal(cdt);
Object.freeze(cdt);
},
	enumerable : false,
	configurable : false,
	writable: false
	
	
});

//TagText.Init_Opac(0.2);
//TagText.Set_Opac('app', 0.0);

var ___sdk___ = new SDK.SDK_TOOLTIP_ffff_dead_f01e_d01e_dead_beef();
Object.seal(___sdk___);
Object.freeze(___sdk___);
