function validator(request) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    uriRegex = /^[\w.]+$/;
    specialCharactersRegex = /^[^<>\\&\'\"]+$/;

    if (!(request.method && methods.includes(request.method))) {
        throw new Error("Invalid request header: Invalid Method")
    };

    if (!(request.uri && (request.uri == '*' || uriRegex.test(request.uri)))) {
        throw new Error("Invalid request header: Invalid URI")
    };

    if (!(request.version && versions.includes(request.version))) {
        throw new Error("Invalid request header: Invalid Version")
    };

    if (!(request.hasOwnProperty('message') && (request.message == '' || specialCharactersRegex.test(request.message)))){
        throw new Error("Invalid request header: Invalid Message")
    };

    return request
}

console.log(validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
))

// console.log(validator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }
//   ))
