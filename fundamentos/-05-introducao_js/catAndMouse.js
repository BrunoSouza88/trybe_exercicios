function catAndMouse (x, y, z) {
    let cat1 = x;
    let cat2 = y;
    let mouse = z;

    if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
        return 'cat1';
    } else if (Math.abs(mouse - cat1 == Math.abs(mouse - cat2))) {
        return 'os gatos trombam e o rato foge';
    } else {
        return 'cat2';
    }
}

console.log (catAndMouse(1, 2, 3));