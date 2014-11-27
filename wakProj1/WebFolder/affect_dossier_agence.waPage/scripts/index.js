
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var affecter = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	affecter.click = function affecter_click (event)// @startlock
	{// @endlock
		sources.dossier.pour_agence.set( sources.agence ); 
   		sources.dossier.save();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("affecter", "click", affecter.click, "WAF");
// @endregion
};// @endlock
