
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var add = {};	// @button
	var okBtnSupprDossier = {};	// @button
	var cancelBtnSupprDossier = {};	// @button
	var bttmSearch = {};	// @textField
	var remove = {};	// @button
	var dataGrid2 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	add.click = function add_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	okBtnSupprDossier.click = function okBtnSupprDossier_click (event)// @startlock
	{// @endlock
		sources.dossier.remove();
		$$('dossierSupressConfirm').closeDialog(); //ok button
	};// @lock

	cancelBtnSupprDossier.click = function cancelBtnSupprDossier_click (event)// @startlock
	{// @endlock
		$$('dossierSupressConfirm').closeDialog(); //cancel button
	};// @lock

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
		$$('dossierSupressConfirm').displayDialog();
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
	WAF.addListener("okBtnSupprDossier", "click", okBtnSupprDossier.click, "WAF");
	WAF.addListener("cancelBtnSupprDossier", "click", cancelBtnSupprDossier.click, "WAF");
	WAF.addListener("bttmSearch", "keyup", bttmSearch.keyup, "WAF");
	WAF.addListener("remove", "click", remove.click, "WAF");
	WAF.addListener("dataGrid2", "onRowDblClick", dataGrid2.onRowDblClick, "WAF");
// @endregion
};// @endlock
