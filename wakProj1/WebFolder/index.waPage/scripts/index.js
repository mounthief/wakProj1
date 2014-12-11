
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var bttmSearch = {};	// @textField
	var remove = {};	// @button
	var add = {};	// @button
	var dataGrid2 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	bttmSearch.keyup = function bttmSearch_keyup (event)// @startlock
	{// @endlock
		var liveSearchQry = $$("bttmSearch").getValue();
		if(liveSearchQry.length > 0){
			sources.dossier.query('numop = :1', { params: [liveSearchQry + "*"]});
		} else {
			sources.dossier.query('ID > :1', { params: [liveSearchQry + "*"]});
		}
	};// @lock

	remove.click = function remove_click (event)// @startlock
	{// @endlock
		var r = confirm("Voulez-vous vraiment supprimer le dossier N°"+sources.dossier.ID+" ?");
		if(r == true){
			sources.dossier.remove();
		}
	};// @lock

	add.click = function add_click (event)// @startlock
	{// @endlock
		
		sources.dossier.newEntity();
		sources.dossier.date_envoi = new Date();
		sources.dossier.save({onSuccess:function(event)
        {
            sources.dossier.addEntity(sources.dossier.getCurrentElement());
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
	WAF.addListener("bttmSearch", "keyup", bttmSearch.keyup, "WAF");
	WAF.addListener("remove", "click", remove.click, "WAF");
	WAF.addListener("add", "click", add.click, "WAF");
	WAF.addListener("dataGrid2", "onRowDblClick", dataGrid2.onRowDblClick, "WAF");
// @endregion
};// @endlock
