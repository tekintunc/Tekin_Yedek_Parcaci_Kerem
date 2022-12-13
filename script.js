let autoSparePartsList = ["Radyatör23", "Sanziman34", "Filtre3", "Direksiyon5", "Kaporta2", "ayna09"]

let upperCase = (pName) => pName.toUpperCase()
let replaceNumber = (pName) => pName.replace(/[0-9]/g, "")
let birles = (pName) => pName.join("KEREMAG_")






let result = autoSparePartsList.map(upperCase)
                                .map(replaceNumber)
                                .reverse();
                                .join(birles)
                                
                               
                               

console.log(result);