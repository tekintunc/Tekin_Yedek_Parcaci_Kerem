let autoSparePartsList = ["Radyatör23", "Sanziman34", "Filtre3", "Direksiyon5", "Kaporta2", "ayna09"]

let simdi = new Date(); 
result = simdi.getFullYear();
let upperCase = (pName) => pName.toUpperCase()
let replaceNumber = (pName) => pName.replace(/[0-9]/g, "")








let result = autoSparePartsList.map(upperCase)
                                .map(replaceNumber)
                                .reverse()
                                .join(" KEREMAG_ ");
                          


                               
                                
                                
                               
                               

console.log(result);