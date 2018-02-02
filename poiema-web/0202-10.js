function drawTriangle(height) {
    if (!Number.isInteger(height) || height <= 0) {
        // console.log('invalid parameter: ', height);
        // return;
        throw new Error('invalid parameter');
    }
    var star = '';

    for (var i = 0; i < height; i++) {
        for (var j = 0; j <= i; j++) {
            star += '*';
        }
        star += '\n';
    }
    console.log(star)
}
drawTriangle(3);
drawTriangle(5);

drawTriangle('');
drawTriangle(10.99);
drawTriangle(-10);
drawTriangle({});
drawTriangle(true);
drawTriangle(null);
drawTriangle(0);