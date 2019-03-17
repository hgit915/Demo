//註冊
var signup = document.querySelector('.signup');


//註冊的click監聽事件
signup.addEventListener('click', function () {

    //取得Input欄位值
    var accoutStr = document.querySelector('#account').value;
    var passwordStr = document.querySelector('#pwd').value;

    // 宣告一個空物件
    var account = {};
    account.email = accoutStr;
    account.password = passwordStr;

    //new 物件，與其他伺服器要資料
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);

    //設定文件格式
    xhr.setRequestHeader('Content-type', 'application/json');

    //轉換型態
    var data = JSON.stringify(account);
    xhr.send(data);

    //因屬非同步，使用onload
    xhr.onload = function () {
        // console.log(xhr);

        //撈取回傳值
        var responseText = JSON.parse(xhr.responseText);
        console.log(responseText.message);

        if (responseText.scuess == true) {
            alert(responseText.message);
        } else {
            alert(responseText.message);
        }

    }

}, false)



//登入
var login = document.querySelector('.login');


//登入的click監聽事件
login.addEventListener('click', function () {

    //取得Input欄位值
    var accoutStr = document.querySelector('#account').value;
    var passwordStr = document.querySelector('#pwd').value;

    // 宣告一個空物件
    var account = {};
    account.email = accoutStr;
    account.password = passwordStr;

    //new 物件，與其他伺服器要資料
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);

    //設定文件格式
    xhr.setRequestHeader('Content-type', 'application/json');

    //轉換型態
    var data = JSON.stringify(account);
    xhr.send(data);

    //因屬非同步，使用onload
    xhr.onload = function () {
        // console.log(xhr);

        //撈取回傳值
        var responseText = JSON.parse(xhr.responseText);
        console.log(responseText.message);

        if (responseText.scuess == true) {
            alert(responseText.message);
        } else {
            alert(responseText.message);
        }

    }

}, false)