function cook(...params){
    let number = Number(params[0]);
    let commands = params.slice(1)

   while(commands.length != 0){
       currentCommand = commands.shift()
       switch(currentCommand){
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3; 
                console.log(number);
                break;
            case 'fillet':
                number *= 0.8;
                console.log(number);
                break;
       }
   }
}

// cook('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
