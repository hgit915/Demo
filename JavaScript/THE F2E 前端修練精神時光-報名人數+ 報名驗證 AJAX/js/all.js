var signup = document.querySelector('.signup');


//報名人數
var xhr_people = new XMLHttpRequest();
xhr_people.open('get', 'https://www.thef2e.com/api/signUpTotal', true);
xhr_people.send();

xhr_people.onload = function () {
    var people_data = JSON.parse(xhr_people.response);
    document.querySelector('.people').innerHTML = people_data.total;
}



//報名查詢
signup.addEventListener('click', function () {

    var email = document.querySelector('#account').value;

    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://www.thef2e.com/api/isSignUp/')
    xhr.setRequestHeader('Content-type', 'application/json')

    var email_send = {};
    email_send.email = email;

    var data = JSON.stringify(email_send);

    xhr.send(data)

    xhr.onload = function () {
        var get_data = JSON.parse(xhr.response);
        var status = get_data.success;

        //將時間戳轉換為日期格式
        var date = new Date(get_data.timeStamp);
        var year = date.getFullYear() + '-';

        //getMonth 返回的值是從0開始計算 所以需要加上1
        var month = ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var Day = date.getDate() + ' ';
        var hour = date.getHours() + ':';
        var minutes = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var seconds = date.getSeconds();

        var true_date = year + month + Day + hour + minutes + seconds;
        console.log(true_date);


        if (status == true) {

            document.querySelector('.information').innerHTML =
                '<li>姓名: ' + get_data.nickName + '</li><li>狀態: ' + get_data.message + '</li>' +
                '<li>挑戰技能: ' + get_data.skill + '</li><li>報名日期: ' + true_date + '</li>' +
                '<li>獎狀網址:<a href="' + get_data.Certificate + '"> 網址</a></li>';
        } else {

            document.querySelector('.information').innerHTML =
                '<li>狀態: ' + get_data.message + '</li>';
        }
        console.log(get_data);
        console.log(get_data.message);
    }

}, false)