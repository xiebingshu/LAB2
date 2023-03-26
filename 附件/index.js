window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search(null);
    });
    document.getElementById('top-right').addEventListener('click', function () {
        clickLogin();
    })
    document.getElementsByTagName('input')[0].addEventListener('change', function (){
        search(this.value);
    })

    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...

}

function search(a){
    // TODO: 搜索触发后的行为
    if(a === null)
    {
        let text_tmp = document.getElementById('search-div').getElementsByTagName('input')[0].value;
        if(text_tmp===""){
            alert("请输入搜索内容");
        }
        else{
            alert(text_tmp);
        }
    }
    else{
        let url = "https://www.baidu.com/s?wd=" + a + "&rsv_spt=1&rsv_iqid=0xfe883ef90002c8a0&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_dl=tb&rsv_enter=1&rsv_sug3=23&rsv_sug1=19&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&inputT=4169&rsv_sug4=4169";
        window.open(url);
    }
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug
    let username = Kernal.getUserName();
    console.log(username);
    let content = `<div id="user">
                        <span id="user-img">
                            <img src="img/user.jpg" />
                        </span>
                        <span id="name"></span>
                    </div>`;
     document.getElementById('top-right').innerHTML = content;
     document.getElementById('name').innerText = username
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}