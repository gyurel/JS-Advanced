function sortByTwoCriteria(arr){
    arr.sort(solver)

    function solver(a, b){
        if (a.length === b.length){
            return a.localeCompare(b)
        } else {
            return a.length - b.length
        }
    }
    console.log(arr.join('\n'))
}

// sortByTwoCriteria(['alpha', 
// 'beta', 
// 'gamma']
// )

// sortByTwoCriteria(['Isacc', 
// 'Theodor', 
// 'Jack', 
// 'Harrison', 
// 'George']
// )

sortByTwoCriteria(['test', 
'Deny', 
'omen', 
'Default']
)
