
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		ds.EmployeAgence.query("agence.ID = :1","2",
			{
				onSuccess:function(event){
					console.log(arr1);
					arr1.push(event.result);
					//console.log(event.result);
					console.log(arr1);
					source.arr1.sync();
				}
			}
		);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
