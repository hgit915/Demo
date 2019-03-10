//99乘法表



for (let i = 2; i <= 9; i++) {

    let str_li = document.createElement('li');
    str_li.innerHTML = '<p class="number">' + i + '</p>';
    document.querySelector('ul').appendChild(str_li);

    for (let j = 1; j <= 9; j++) {
        let str_p = document.createElement('p');
        str_p.innerHTML = i + ' x ' + j + ' = ' + i * j;
        document.querySelector('ul').appendChild(str_li).appendChild(str_p);


    }
}