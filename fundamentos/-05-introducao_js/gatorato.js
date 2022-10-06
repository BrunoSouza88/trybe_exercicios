if (cat1 > cat2 && cat1 > mouse && cat2 > mouse) {
    return 'cat1';
} else if (cat2 > cat1 && cat2 > mouse && cat1 > mouse) {
    return 'cat2';
} else if (cat1 === mouse && cat1 === cat2 && cat2 === mouse) {
    return 'os gatos trombam e o rato foge'
}