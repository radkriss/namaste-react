const correlationIdRegExps = [
    new RegExp("([\\\"](?:\\b(correlationId)\\b)[\"][:][\\s][\\\"]([0-9a-z]*)[\\\"])"),
    new RegExp("([\\\"](?:\\b(calc)\\b)[\"][:][\\s][\\\"]([0-9a-z]*)[\\\"])"),
    new RegExp("((?:\\b(data-correlation-id)\\b)[=][\\\"]([0-9a-z]*)[\\\"])"),
    new RegExp("([\"](?:\\b(calc)\\b)[\"][:][\"]([0-9a-z]*)[\"])")
  ];
  
  // regular expression for finding the rlog ID
  const rlogIdRegExp = new RegExp("rlog[^=:]*[:|=][ \"]([^\" |(-->)]*)");
  
  // searches the page source for a correlation ID
  function getCorrelationId(pageSource) {
    let correlationId;
    correlationIdRegExps.some(function (regExp) {
        let match = regExp.exec(pageSource);
        if (match && match.length > 3) {
            correlationId = match[3];
            return true;
        }
        return false;
    });
    return correlationId;
  }

  console.log(getCorrelationId('lterminal","page":"main:virtualterminal:conceptone:orderentry","pgst":"1708663192734","calc":"438ee4b70620b","nsid":"JLRI5fXUHqCTuXmXV0_AxocuC-JGDPvJ","rsta":"en_GB","pgtf":"Nodejs","s":"ci","ccpg":"GB","csci":"23c046db6ae9476db721bfdc98a610d2","comp":"virtualterminalnodeweb","tsrce":"bizcomponentsnodeweb","cu":"0","ef_policy":"ccpa","c_prefs":"T=0,P=0,F=0,type=initial","cust":"DD8WAANFKHW4L","party_id":"DD8WAANFKHW4L","acnt":"business","aver":"unverified","rstr":"unrestricted","cnac":"GB","xe":"126562","xt":"198416","tssrq":"1708663193561","context_id":"VT-d4433fd918d0ab1347275941fff'));