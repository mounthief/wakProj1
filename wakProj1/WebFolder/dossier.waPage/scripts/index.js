
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var saveDossier = {};	// @button
	var downloadAllBtn = {};	// @button
	var downloadArrowBtn = {};	// @button
	var uploadArrowBtn = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock


	var sessEditDossierID = sessionStorage.DossierID;
	if(sessEditDossierID == 'null'){
		window.location.href = '/index.waPage/index.html';
	}
	
	sessionStorage.DossierID = null;
	

	ds.Dossier.getEntity(sessEditDossierID,{
	     onSuccess:function(event){
	         var a = event.entity;
	         sources.dossier.setCurrentEntity(a);  
	         var pos = sources.dossier.getPosition();
	         },
	     onError:function(event){
	    }}
     );
     
     
	saveDossier.click = function saveDossier_click (event)// @startlock
	{// @endlock
		sources.dossier.save();
	};// @lock


	downloadAllBtn.click = function downloadAllBtn_click (event)// @startlock
	{// @endlock
		
		
		
		
		for(var i=0; i < sources.fichiersDistants.length; i++){
			sources.fichiersDistants.distant = "false";
   			sources.fichiersDistants.save();
   			
   			 sources.fichiersDistants.getValues({
   			 	onSuccess : function(event){
   			 		//console.log("GetValz");
   			 		
   			 	}
   			 });
   			 
   			if(sources.fichiersDistants.selectNext()){
   				//console.log("selectNext");
   			} else {
   				//console.log("selectNextNot");
   			}
   		}
   	
   		resolveDisLocFilesFunc(event);

	};// @lock


	function resolveDisLocFilesFunc(event, frst_shot){
			
		sources.fichiersDistants.query("dossier.ID = "+ sessEditDossierID +" AND distant = true", {
			 onSuccess:function(event){
		         $$('pagesRestantes').setValue(sources.fichiersDistants.length + ' pages restantes');
	         },
	    	onError:function(event){
	    	}
	    });  


		sources.fichiersLocaux.query("dossier.ID = "+ sessEditDossierID +" AND distant = false", {
			 onSuccess:function(event){
		         $$('pagesRecus').setValue(sources.fichiersLocaux.length + ' pages');
	         },
	    	onError:function(event){
	    	}
	    });  
        		
			
		if(frst_shot == 'frst_shot'){
			
			sources.fichier.query("dossier.ID = "+ sessEditDossierID, {
				 onSuccess:function(event){
			         $$('nbrPagesTop').setValue(sources.fichier.length);
			         $$('nbrPagesBtm').setValue(sources.fichier.length);
		         },
		    	onError:function(event){
		    	}
		    });  
	
	    }
		         
		         
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
	

	
	
	resolveDisLocFilesFunc(event, 'frst_shot');
	
	$$('nbrPagesBtm').setValue(sources.fichiersDistants.length + sources.fichiersLocaux.length);
				$$('nbrPagesTop').setValue(sources.fichiersDistants.length);
				
				$$('nbrPagesErrors').setValue(sessEditDossierID);

// @region eventManager// @startlock
	WAF.addListener("saveDossier", "click", saveDossier.click, "WAF");
	WAF.addListener("downloadAllBtn", "click", downloadAllBtn.click, "WAF");
	WAF.addListener("downloadArrowBtn", "click", downloadArrowBtn.click, "WAF");
	WAF.addListener("uploadArrowBtn", "click", uploadArrowBtn.click, "WAF");
// @endregion
};// @endlock
