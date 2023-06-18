var admin = [
    {
        adminid: "avishek25",
        pass: "123asd"
    },
    {
        adminid: "turja26",
        pass: "123asd"
    },
    {
        adminid: "rahat38",
        pass: "123asd"
    },
    {
        adminid: "moin29",
        pass: "123asd"
    },
    {
        adminid: "jamilasad",
        pass: "123asd"
    }
]
function getInfo() {
    var adminid = document.getElementById("adminid").value;
    var pass = document.getElementById("pass").value;

    for (i = 0; i < admin.length; i++) {
        if (adminid == admin[i].adminid && pass == admin[i].pass) {
            window.location.assign("./profile.html")
            return
        }
    }
    alert('Invalid Admin ID or Password')
}
function eye() {
    var x = document.getElementById("pass");
    var y = document.getElementById("hd1");
    var z = document.getElementById("hd2");

    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}
function eyee() {
    var x = document.getElementById("passw");
    var y = document.getElementById("hd1");
    var z = document.getElementById("hd2");

    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}
// function getstu() {
//     var stuid = document.getElementById("stuid").value;
//     var passw = document.getElementById("passw").value;

//     for (i = 0; i < student.length; i++) {
//         if (stuid == student[i].stuid && passw == student[i].passw) {
//             alert('valid Admin ID or Password')
//             return
//         }
//     }
//     alert('Invalid Student ID or Password')
// }
function searchFun() {
    let searchname = document.getElementById('search').value.toUpperCase();
    const elements = document.getElementsByClassName('container');
    const notfound = document.getElementById('nos');
    
    const ids = [];
    
    for (let i = 0; i < elements.length; i++) {
        ids.push(elements[i].id);
    }
    let found = false;
    for (let i = 0; i < elements.length; i++) {
        if (ids[i] === searchname) {
            elements[i].style.display = 'block';
            found = true;
        } else {
            elements[i].style.display = 'none';

        }
    }
    if(found)
    {
        notfound.classList.add('nosearch');
    }
    else{
        notfound.classList.remove('nosearch');
    }
}
function searchMen() {
    let searchname = document.getElementById('search').value.toUpperCase();
    const elements = document.getElementsByClassName('container');
    const notfound = document.getElementById('nos');
    
    const ids = [];
    
    for (let i = 0; i < elements.length; i++) {
        ids.push(elements[i].id);
    }
    let found = false;
    for (let i = 0; i < elements.length; i++) {
        if (ids[i] === searchname) {
            elements[i].style.display = 'block';
            found = true;
        } else {
            elements[i].style.display = 'none';

        }
    }
    if(found)
    {
        notfound.classList.add('nosearch');
    }
    else{
        notfound.classList.remove('nosearch');
    }
}
