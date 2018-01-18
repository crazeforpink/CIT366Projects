function Set() {
	
	
	this.intersection = function(listA, listB) {

        var resultList = [];

        /*-------------------------------Insert your code here -------------------------------------*/

        /*-------------------------------Insert your code here -------------------------------------*/
        if (listA === null || listB === null) {
            return null;
        }
        for (var i = 0; i < listA.length; i++) {
            var nextValue = listA[i];

            for (var j = 0; j < listB.length; j++) {
                if (listB[j] === nextValue) {
                    resultList.push(listB[j]);
                    break;
                }
            }
        }
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = [];
        if (listA === null || listB === null) {
            return null;
        }
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   
	   /*-------------------------------Insert your code here -------------------------------------*/ 
	   var total = this.symmetricDifference(listA, listB);
	   var total2 = this.intersection(listA,listB);
	   resultList = total.concat(total2);
	   resultList.push;
	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

	   var resultList = [];
        if (listA === null || listB === null) {
            return null;
        }

        /* A/B */
       for (var i = 0; i < listA.length; i++) {
           for (var j = 0; j < listB.length; j++) {
               var double = false;
               if (listA[i] == listB[j]) {
                   double = true;
                   break;
               }

           }
           if (double != true) {
               resultList.push(listA[i]);

           }
       }
	   /*-------------------------------Insert your code here -------------------------------------*/
	   	   
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];
        if (listA === null || listB === null) {
            return null;
        }

        var relA = this.relativeComplement(listA, listB);
        var relB = this.relativeComplement(listB, listA);
        resultList = relA.concat(relB);
        resultList.push;
	   /*-------------------------------Insert your code here -------------------------------------*/

	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}	
	

}
