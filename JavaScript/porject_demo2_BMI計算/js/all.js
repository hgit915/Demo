//計算結果

let click_result = document.querySelector('.result');
click_result.addEventListener('click', calculate, false);


//顯示BMI紀錄
show_list();


function calculate(e) {
    console.log(e);
    //身高
    let cm_value = (document.querySelector('#cm').value).trim();
    //體重
    let kg_value = (document.querySelector('#kg').value).trim();

    if (cm_value == '') {
        alert("請輸入身高")
        return
    } else if (kg_value == '') {
        alert("請輸入體重")
        return
    }

    //計算bmi值
    let bmi = (kg_value / ((cm_value / 100) ** 2)).toFixed(2);
    console.log(bmi);

    //紀錄時間
    let time = new Date();
    let year = time.getFullYear();
    let month = ((time.getMonth() + 1) >= 10 ? time.getMonth() + 1 : '0' + (time.getMonth() + 1));
    let day = (time.getDate() >= 10 ? time.getDate() : '0' + time.getDate());
    timeStamp = month + '-' + day + '-' + year;
    console.log(timeStamp);

    //計算bmi落於哪個區間
    if (bmi < 18.5) {

        alert('過輕');
        refactor_header(bmi, 'underweight', '#31BAF9', '過輕');
        bmi_log(bmi, cm_value, kg_value, timeStamp, '過輕', 'underweight');

    } else if (bmi < 24) {

        alert('理想');
        refactor_header(bmi, 'normal_weight', '#86D73E', '理想');
        bmi_log(bmi, cm_value, kg_value, timeStamp, '理想', 'normal_weight');

    } else if (bmi < 27) {

        alert('過重');
        refactor_header(bmi, 'over_weight', '#FF982D', '過重');
        bmi_log(bmi, cm_value, kg_value, timeStamp, '過重', 'over_weight');

    } else if (bmi < 30) {

        alert('輕度肥胖');
        refactor_header(bmi, 'slight_middly_obesity', '#FF6C02', '輕度肥胖');
        bmi_log(bmi, cm_value, kg_value, timeStamp, '輕度肥胖', 'slight_middly_obesity');

    } else if (bmi < 35) {

        alert('中度肥胖');
        refactor_header(bmi, 'slight_middly_obesity', '#FF6C02', '中度肥胖');
        bmi_log(bmi, cm_value, kg_value, timeStamp, '中度肥胖', 'slight_middly_obesity');

    } else if (bmi >= 35) {

        alert('重度肥胖');
        refactor_header(bmi, 'extreme_obesity', '#FF1200', '重度肥胖');
        bmi_log(bmi, cm_value, kg_value, timeStamp, '重度肥胖', 'extreme_obesity');
    }

}

//header 畫面重構
function refactor_header(bmi, weight_css, color, text) {
    let str_result = document.querySelector('.result');
    str_result.innerHTML = `<span class="bmi_content">` + bmi.toString() + `<br> <span class="bmi">BMI</span></span><div class="refresh"></div>`;
    str_result.setAttribute('class', 'result_caculate ' + weight_css);

    document.querySelector('.refresh').setAttribute('style', 'background-color:' + color);
    document.querySelector('.bmi_text').textContent = text;
    document.querySelector('.bmi_text').setAttribute('style', 'color:' + color);
}

//記錄至localStorage
function bmi_log(bmi, cm_value, kg_value, F, text, bmi_text) {


    let data_bmi = {
        'text': text,
        'bmi': bmi,
        'cm': cm_value,
        'kg': kg_value,
        'time': timeStamp,
        'bmi_content': bmi_text
    }

    //確認是否已有紀錄,若無則給空陣列
    let bmi_list = JSON.parse(localStorage.getItem('list')) || [];
    bmi_list.push(data_bmi);
    localStorage.setItem('list', JSON.stringify(bmi_list));

    show_list();
}

//顯示清單
function show_list(e) {
    let bmi_data = JSON.parse(localStorage.getItem('list')) || [];
    let data_length = bmi_data.length;
    let str_data = "";
    for (let i = 0; i < data_length; i++) {
        str_data = str_data + `
                     <li id="` + bmi_data[i].bmi_content + `">
                        <span class="list_title">` + bmi_data[i].text + `</span>
                        <span class="detail_title">BMI<span>` + bmi_data[i].bmi + `</span></span>
                        <span class="detail_title">weight<span>` + bmi_data[i].kg + `kg</span></span>
                        <span class="detail_title">height<span>` + bmi_data[i].cm + `cm</span></span>
                        <span class="detail_title">` + bmi_data[i].time + `</span>
                    </li> `
    }
    document.querySelector('.bmi_detail').innerHTML = str_data;
}