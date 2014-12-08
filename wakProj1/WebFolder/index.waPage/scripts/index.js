
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var add = {};	// @button
	var dataGrid2 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	add.click = function add_click (event)// @startlock
	{// @endlock
		
		sources.dossier.newEntity();
		sources.dossier.date_envoi = new Date();
		sources.dossier.save({onSuccess:function(event)
        {
            sources.dossier.addEntity(sources.dossier.getCurrentElement());
            //sessionStorage.DossierID = sources.dossier.ID;
            redirectDossier(event);
        } });
        
	};// @lock

	dataGrid2.onRowDblClick = function dataGrid2_onRowDblClick (event)// @startlock
	{// @endlock
		redirectDossier(event);
	};// @lock
	
	
	function redirectDossier(event){
		sessionStorage.DossierID = sources.dossier.ID;
		window.location.href = '/dossier.waPage/index.html';
	}

// @region eventManager// @startlock
	WAF.addListener("add", "click", add.click, "WAF");
	WAF.addListener("dataGrid2", "onRowDblClick", dataGrid2.onRowDblClick, "WAF");
// @endregion
};// @endlock
