function timall() {
    displayAll(listCar);
}

function tim(from, to) {
    let arr = [];
    for (let i = 0; i < listCar.length; i++) {
        if (listCar[i].gia >= from && listCar[i].gia <= to) {
            arr.push(listCar[i])
        }
    }
    displayAll(arr);
}

function timten() {
    let arr = [];
    let arr1 = ['F', 'e']
    for (let i = 0; i < listCar.length; i++) {
        for (let j = 0; j < listCar[i].ten.length; j++) {
            // for (let k=0;k<j.length;k++) {
            if (listCar[i].ten[j] == 'F' &&listCar[i].ten[j+1]=="e") {
                console.log(listCar[i].ten[j]);
                arr.push(listCar[i]);
            }
            // }
        }
    }
    displayAll(arr);
}

function timten1() {
    let arr = [];
    for (let i = 0; i < listCar.length; i++) {
        if (listCar[i].hangxe == 'Ford') {
            arr.push(listCar[i])
        }
    }
    displayAll(arr);

}

function timten2() {
    let arr = [];
    for (let i = 0; i < listCar.length; i++) {
        if (listCar[i].hangxe == 'Mercesdes') {
            arr.push(listCar[i])
        }
    }
    displayAll(arr);
}

function timten3() {
    let arr = [];
    for (let i = 0; i < listCar.length; i++) {
        if (listCar[i].hangxe == 'Toyota') {
            arr.push(listCar[i])
        }
    }
    displayAll(arr);
}

function timten4() {
    let arr = [];
    for (let i = 0; i < listCar.length; i++) {
        if (listCar[i].hangxe == 'Kia') {
            arr.push(listCar[i])
        }
    }
    displayAll(arr);
}

class Car {
    ten;
    id;
    gia;
    anh;
    mau;
    hangxe;

    constructor(ten, id, gia, anh, mau,hangxe) {
        this.ten = ten;
        this.id = id;
        this.gia = gia;
        this.anh = anh;
        this.mau = mau;
        this.hangxe = hangxe;
    }
}

let p1 = new Car("Fer-Enzo", 1, 30000, "image/index.png", "Đỏ","Fernari");
let p2 = new Car("Ford-EcoSport", 2, 100, "image/ford.jpg", "Trắng","Ford");
let p3 = new Car("Merc-e200", 3, 400, "image/merc.jpg", "Trắng","Mercesdes");
let p4 = new Car("Fer2022", 4, 5000, "image/car2.gif", "Đen",'Fernari');
let p5 = new Car("Toyota", 5, 4000, "image/toyota.jpg", "Trắng",'Toyota');
let p6 = new Car("Kia-Morning", 6, 4000, "image/kiamorning.jpg", 'Đỏ','Kia');
let p7 = new Car("Ford-EcoSport", 7, 1500, "image/ford.jpg", "Trắng",'Ford');
let listCar = [p1, p2, p3, p4, p5, p6, p7];

function displayAll(listCar) {
    let car = '<tr>\n' +
        '<td width="30%" >Car Name</td>\n' +
        '<td width="10%">Mã số</td>\n' +
        '<td width="20%">Hình ảnh</td><br>' +
        '<td width="20%"></td> <br>' +
        '<td width="20%">' + listCar.length + 'car</td> <br>' +
        '</tr>'
    for (let i = 0; i < listCar.length; i++) {
        car += '<tr><td>' + listCar[i].ten + '</td>' +
            '<td>' + listCar[i].id + '</td>' +
            '<td> <img width="100%" src=" ' + listCar[i].anh + '"></td>' +
            '<td><button class="btn-them" onclick="Edit(' + i + ')">Thông tin' +
            '</button></td>' +
            '<td><button class="btn-xoa" onclick="Delete(' + i + ')">Xóa</button></td></tr>'
    }
    document.getElementById('displayCar').innerHTML = car;
    console.log(car);
}
displayAll(listCar);

function addCar() {
    str = document.getElementById('add').value;
    let stt = parseInt(Math.random() * 20);
    let rdgia = parseInt(Math.random() * 30000);
    listCar.push({
        id: stt,
        ten: str,
        gia: rdgia,
        image: '',
        mau: '',
    })
    displayAll(listCar);
    // console.log(listCar);

}

let modal = document.getElementById('myModal');
let span = document.getElementsByClassName('close')[0];
let carName = document.getElementById('carName');
let carID = document.getElementById('carID');
let carPrice = document.getElementById('carPrice');
let carMedia = document.getElementById('carMedia');
let carMau = document.getElementById('carMau');
let carHang = document.getElementById('carHang');

function Edit(index) {
    modal.style.display = 'block';
    span.onclick = function () {
        modal.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    carName.value = listCar[index].ten;
    carID.value = listCar[index].id;
    carPrice.value = listCar[index].gia;
    carMau.value = listCar[index].mau;
    carHang.value = listCar[index].hangxe;
    carMedia.innerHTML = '<img width="100%" src="' + listCar[index].anh + '">';
    // document.getElementById('ha').innerHTML = '<input type="file"onChange="'+readURL+'('+this+')"/>';
    // document.getElementById('upload1').innerHTML = '<img id="upload" src="#" /> <br>';
    // function readURL(input) {
    //     if (input.files && input.files[0]) {
    //         let reader = new FileReader();
    //
    //         reader.onload = function (e) {
    //             $('#upload')
    //                 .attr('src', e.target.result);
    //         };
    //
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }
    document.getElementById('btn').innerHTML = '<button onclick="Update(' + index + ')" class="btn-edit">Sửa</button>'
    document.getElementById('upload').src = "";
    console.log(listCar);
}

function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $('#upload')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function Update(index) {
    if (confirm('Bạn có muốn sửa ' + listCar[index].ten + ' không')) {
        alert("Bạn đã sửa thành công " + listCar[index].ten);
        listCar[index].ten = carName.value;
        listCar[index].id = carID.value;
        listCar[index].gia = carPrice.value;
        listCar[index].mau = carMau.value;
        listCar[index].hangxe = carHang.value;
        listCar[index].anh = document.getElementById('upload').src;
    }
    displayAll(listCar);
}

function Delete(index) {
    if (confirm("Bạn có muốn xóa " + listCar[index].ten + " không")) {
        alert("Bạn đã xóa thành công " + listCar[index].ten);
        listCar.splice(index, 1);
        displayAll(listCar);
    }
}
function timmaso(j) {
    let arr = [];
    for (let i =0;i<listCar.length;i++){
        if (arr[i] == listCar[i].id){

        }
    }
}