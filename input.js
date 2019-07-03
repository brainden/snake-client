let connection;
const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setEncoding('utf8');
    stdin.setRawMode(true);
    stdin.on('data', handleUserInput);
    stdin.resume();

    return stdin;

  }
const handleUserInput =function(key) {
    if(key === '\u0003'){
        process.exit();
    }
    if(key === 'w'){
        connection.write('Move: up');
    }
    if(key === 'a'){
        connection.write('Move: left');
    }
    if(key === 's'){
        connection.write('Move: down');
    }
    if(key === 'd'){
        connection.write('Move: right');
    }
    if(key === '2'){
        connection.write('Say: HELLO')
    }
}


module.exports = {setupInput};