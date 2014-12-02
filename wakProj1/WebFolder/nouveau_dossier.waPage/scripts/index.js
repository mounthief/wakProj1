
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var downloadAllBtn = {};	// @button
	var downloadArrowBtn = {};	// @button
	var uploadArrowBtn = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	downloadAllBtn.click = function downloadAllBtn_click (event)// @startlock
	{// @endlock
		
		for(var i=0; i < sources.fichiersDistants.length; i++){
			console.log(i);
			sources.fichiersDistants.distant = "false";
   			sources.fichiersDistants.save();
			resolveDisLocFilesFunc(event);
   		}

	};// @lock


	function resolveDisLocFilesFunc(event){
   		sources.fichiersLocaux.resolveSource({
   			onSuccess : function any() {
				$$('pagesRecus').setValue(sources.fichiersLocaux.length + ' pages');
			}
		});
	
   		sources.fichiersDistants.resolveSource({
   			onSuccess : function any() {
				$$('pagesRestantes').setValue(sources.fichiersDistants.length + ' pages restantes');
			}
		});
	
	}
	
	
	downloadArrowBtn.click = function downloadArrowBtn_click (event)// @startlock
	{// @endlock
		sources.fichiersDistants.distant =  false ;
   		sources.fichiersDistants.save();
		resolveDisLocFilesFunc(event);
	};// @lock

	uploadArrowBtn.click = function uploadArrowBtn_click (event)// @startlock
	{// @endlock
		sources.fichiersLocaux.distant =  true ;
   		sources.fichiersLocaux.save();
		resolveDisLocFilesFunc(event);
	};// @lock
	
	resolveDisLocFilesFunc(event);

// @region eventManager// @startlock
	WAF.addListener("downloadAllBtn", "click", downloadAllBtn.click, "WAF");
	WAF.addListener("downloadArrowBtn", "click", downloadArrowBtn.click, "WAF");
	WAF.addListener("uploadArrowBtn", "click", uploadArrowBtn.click, "WAF");
// @endregion
};// @endlock
