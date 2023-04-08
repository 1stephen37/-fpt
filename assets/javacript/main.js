var infor = [];
var sub = {};
function getinfor() {




}

function check() {
    var name = document.forms[infor]["name"].value;
    var phone = document.forms[infor]["phone"].value;
    var location = document.forms[infor]["location"].value;
    var email = document.forms[infor]["email"].value;
    console.log(name, phone, location, email);

    var check = false; 
    var check1 = false; 
    var check2 = false; 
    var check3 = false; 


    if(name == "") {
        alert("hãy điền tên của bạn");
    } else if(name > 0 || name < 0) {
        alert("tên phải phải là 1 chuỗi kí tự");
    } else {
        check = true;
    }

    if(phone == "") {
        alert("hãy điền số điện thoại của bạn");
    } else {
        check1 = true;
    }

    if(location == "") {
        alert("hãy điền địa chỉ của bạn");
    } else if(location > 0 || location < 0) {
        alert("địa chỉ phải là 1 chuỗi kí tự");
    } else {
       check2 = true;
    }

    if(email == "") {
        alert("hãy điền địa chỉ email của bạn");
    } else if(email > 0 || email < 0) {
        alert("địa chỉ email phải là 1 chuỗi kí tự");
    } else if(email.lastIndexOf("@") == -1) {
        alert("email phải có @");
    }else {
       check3 = true;
    }

    if(check & check1 && check2 && check3) {
        sub = {
            name: name,
            phone: phone,
            location: location,
            email: email
        }

        infor.push(sub);
    }


}

localStorage.setItem("information",JSON.stringify(infor));

function show() {

}