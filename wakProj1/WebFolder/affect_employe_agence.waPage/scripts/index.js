
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var affecter = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
		
		
		
 
		sources.dossiersEmployesAgence.newEntity();
		sources.dossiersEmployesAgence.employe.set( sources.employeAgence );
		sources.dossiersEmployesAgence.dossier.set( sources.dossier );
		sources.dossiersEmployesAgence.save({onSuccess:function(event)
        {
            sources.dossiersEmployesAgence.addEntity(sources.dossiersEmployesAgence.getCurrentElement());
         //   redirectDossier(event);
         console.log(sources.dossiersEmployesAgence);
        } });

	};// @lock

	affecter.click = function affecter_click (event)// @startlock
	{// @endlock
		sources.employeAgence.agence.set( sources.agence ); 
   		sources.employeAgence.save();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("affecter", "click", affecter.click, "WAF");
// @endregion
};// @endlock
