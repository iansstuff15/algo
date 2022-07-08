const RandomNumber = (max=10, iterate=1,unique=false) =>{
    
    let collection = []

    for (let i = 0; i < iterate; i++) {
        let value = Math.floor((Math.random() * max) + 1)

        if(unique){
            if(collection.includes(value)){
                
            }
        }
       
    }
}