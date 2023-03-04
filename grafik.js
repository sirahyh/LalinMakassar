const apiUrl = 'https://script.google.com/macros/s/AKfycbyG8FAUlwjlnZGqh6wVYLnHRXVazlRlaDWvJ6OXLzwcr4b-pp8ATuJm4ZgREsqz7dnU/exec?action=getUsers';
const ctx = document.getElementById('myChart');

let label = ['08.00-10.00', '10.00-12.00', '12.00-14.00', '14.00-16.00', '16.00-18.00', '18.00-20.00', '20.00-22.00', '22.00-00.00', '00.00-02.00', '02.00-04.00', '04.00-06.00', '06.00-08.00'];

let myChart;

let label1, dataset1;
let chartJlKadir = []
let tanggalJlKadir = []
let DataJlKadir = []


let btnCobaHarian = false;
let btnCobaPekanan = false;
let btnCobaSatuBulan = false;
let btnCobaDuaBulan = false;
let btnCobaTigaBulan = false;
let btnCobaEmpatBulan = false;
let btnCobaAmirullah = false;
let btnCobaAbdulKadir = false;
let btnCobaAdhyaksa = false;
let btnCobaAlauddin = false;
let btnCobaBajiGau = false;
let btnCobaBarukang = false;
let btnCobaCakalang = false;
let btnCobaTataHaji = false;
let btnCobaFlyover = false;
let btnCobaKajaolaliddo = false;

const preloader = document.getElementById("preloader");
let btnGrafikAdhayksa = document.getElementById('grafikAdhyaksa')
let btnGrafikAbdKadir = document.getElementById('grafikAbdKadir')
let btnGrafikAlauddin = document.getElementById('grafikAlauddin')
let btnGrafikAmirullah = document.getElementById('grafikAmirullah')
let btnGrafikBajiGau = document.getElementById('grafikBajigau')
let btnGrafikBarukang = document.getElementById('grafikBarukanga')
let btnGrafikCakalangPanampu = document.getElementById('grafikCakalangPanampu')
let btnGrafikTataHaji = document.getElementById('grafikTataHaji')
let btnGrafikFlyover = document.getElementById('grafikflyover')
let btnGrafikKajaolaliddo = document.getElementById('grafikKajaolaliddo')
let btnHari = document.getElementById('satuhari')
let btnPekan = document.getElementById('pekan')
let btnSatuBulan = document.getElementById('bulan')
let btnDuaBulan = document.getElementById('duabulan')
let btnTigaBulan = document.getElementById('tigabulan')
let btnEmpatBulan = document.getElementById('empatbulan')
let datepicker = document.getElementById('dateid')
let inibuttonPekan = document.getElementById('inibuttonpekan')
let val;
let newDate;


$('#dateid').on("change", function () {
    val = $('#dateid').val()
    console.log(val)
    let dateArr = val.split("/");
    newDate = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];
    console.log(jumlahMacet)
})

$('#dateid').on("change", function () {
    loader()
    getAPI("jumlahMacet").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    });
    console.log
})
let namaJalan;

btnSatuBulan.addEventListener("click", function () {
    console.log('ini adalah percobaan button 1 bulan')
})

btnDuaBulan.addEventListener("click", function () {
    console.log('ini adalah percobaan button 2 bulan')
})

btnTigaBulan.addEventListener("click", function () {
    console.log('ini adalah percobaan button 3 bulan')
})

btnEmpatBulan.addEventListener("click", function () {
    console.log('ini adalah percobaan button 4 bulan')
})

btnPekan.addEventListener("click", function () {
    console.log('ini adalah percobaan button 1 pekan')
})

btnHari.addEventListener("click", function () {
    console.log('ini adalah percobaan button 1 hari')
})

//Percobaan button 1 pekan
btnHari.addEventListener("click", handleButtonHarian);
btnPekan.addEventListener("click", handleButtonPekanan);
btnSatuBulan.addEventListener("click", handleButtonSatuBulan);
btnDuaBulan.addEventListener("click", handleButtonDuaBulan);
btnTigaBulan.addEventListener("click", handleButtonTigaBulan);
btnEmpatBulan.addEventListener("click", handleButtonEmpatBulan);
btnGrafikAmirullah.addEventListener("click", handleButtonAmirullah);
btnGrafikAbdKadir.addEventListener("click", handleButtonAbdulKadir);
btnGrafikAdhayksa.addEventListener("click", handleButtonAdhyaksa);
btnGrafikAlauddin.addEventListener("click", handleButtonAlauddin);
btnGrafikBajiGau.addEventListener("click", handleButtonBajiGau);
btnGrafikBarukang.addEventListener("click", handleButtonBarukang);
btnGrafikCakalangPanampu.addEventListener("click", handleButtonCakalang);
btnGrafikTataHaji.addEventListener("click", handleButtonTataHaji);
btnGrafikFlyover.addEventListener("click", handleButtonFlyover);
btnGrafikKajaolaliddo.addEventListener("click", handleButtonKajaolaliddo);

function setFalse() {
    btnCobaHarian = false;
    btnCobaPekanan = false;
    btnCobaSatuBulan = false;
    btnCobaDuaBulan = false;
    btnCobaTigaBulan = false;
    btnCobaEmpatBulan = false;
}

function setFalseJalanan() {
    btnCobaAbdulKadir = false;
    btnCobaAdhyaksa = false;
    btnCobaAlauddin = false;
    btnCobaAmirullah = false;
    btnCobaBajiGau = false;
    btnCobaBarukang = false;
    btnCobaCakalang = false;
    btnCobaFlyover = false;
    btnCobaKajaolaliddo = false;
    btnCobaTataHaji = false;
}

function loader() {
    preloader.style.display = "block";
    if (myChart) {
        myChart.destroy();
    }
}

function handleButtonAmirullah() {
    setFalseJalanan()
    btnCobaAmirullah = true;
    checkButtons();
}

function handleButtonAbdulKadir() {
    setFalseJalanan();
    btnCobaAbdulKadir = true;
    checkButtons();
}

function handleButtonAdhyaksa() {
    setFalseJalanan();
    btnCobaAdhyaksa = true;
    checkButtons();
}

function handleButtonAlauddin() {
    setFalseJalanan()
    btnCobaAlauddin = true;
    checkButtons();
}

function handleButtonBajiGau() {
    setFalseJalanan();
    btnCobaBajiGau = true;
    checkButtons();
}

function handleButtonBarukang() {
    setFalseJalanan();
    btnCobaBarukang = true;
    checkButtons();
}

function handleButtonCakalang() {
    setFalseJalanan();
    btnCobaCakalang = true;
    checkButtons();
}

function handleButtonTataHaji() {
    setFalseJalanan();
    btnCobaTataHaji = true;
    checkButtons();
}

function handleButtonFlyover() {
    setFalseJalanan();
    btnCobaFlyover = true;
    checkButtons();
}

function handleButtonKajaolaliddo() {
    setFalseJalanan();
    btnCobaKajaolaliddo = true;
    checkButtons();
}

function handleButtonHarian() {
    btnCobaHarian = true;
    checkButtons();
}

function handleButtonPekanan() {
    btnCobaPekanan = true;
    checkButtons();
}

function handleButtonSatuBulan() {
    btnCobaSatuBulan = true;
    checkButtons();
}

function handleButtonDuaBulan() {
    btnCobaDuaBulan = true;
    checkButtons();
}

function handleButtonTigaBulan() {
    btnCobaTigaBulan = true;
    checkButtons();
}

function handleButtonEmpatBulan() {
    btnCobaEmpatBulan = true;
    checkButtons();
}

function checkButtons() {
    if (btnCobaAmirullah && btnCobaPekanan) {

        loader()
        console.log('Ini grafik pekanan Amirullah')
        getAPI("grafikpekananAmirullah").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaAmirullah && btnCobaSatuBulan) {

        loader()
        console.log('Ini grafik Satu Bulan Amirullah')
        getAPI("grafikSatuBulanAmirullah").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaAmirullah && btnCobaDuaBulan) {

        loader()
        console.log('Ini grafik Dua Bulan Amirullah')
        getAPI("grafikDuaBulanAmirullah").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaAmirullah && btnCobaTigaBulan) {

        loader()
        console.log('Ini grafik Tiga Bulan Amirullah')
        getAPI("grafikTigaBulanAmirullah").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaAmirullah && btnCobaEmpatBulan) {

        loader()
        console.log('Ini grafik Empat Bulan Amirullah')
        getAPI("grafikEmpatBulanAmirullah").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaAmirullah && btnCobaHarian) {

        loader()
        console.log('Jalan Amirullah')
        getAPI("grafikAmirullah").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    // Abdul Kadir
    else if (btnCobaAbdulKadir && btnCobaPekanan) {

        loader()
        console.log('Ini grafik pekanan AbdulKadir')
        getAPI("grafikpekananAbdulKadir").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaAbdulKadir && btnCobaSatuBulan) {

        loader()
        console.log('Ini grafik Satu Bulan AbdulKadir')
        getAPI("grafikSatuBulanAbdulKadir").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaAbdulKadir && btnCobaDuaBulan) {

        loader()
        console.log('Ini grafik Dua Bulan AbdulKadir')
        getAPI("grafikDuaBulanAbdulKadir").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaAbdulKadir && btnCobaTigaBulan) {

        loader()
        console.log('Ini grafik Tiga Bulan AbdulKadir')
        getAPI("grafikTigaBulanAbdulKadir").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaAbdulKadir && btnCobaEmpatBulan) {

        loader()
        console.log('Ini grafik Empat Bulan AbdulKadir')
        getAPI("grafikEmpatBulanAbdulKadir").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaAbdulKadir && btnCobaHarian) {

        loader()
        console.log('Jalan AbdulKadir')
        getAPI("grafikAbdulKadir").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    // Adhyaksa 
    else if (btnCobaAdhyaksa && btnCobaPekanan) {

        loader()
        console.log('Ini grafik pekanan Adhyaksa')
        getAPI("grafikpekananAdhyaksa").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaAdhyaksa && btnCobaSatuBulan) {

        loader()
        console.log('Ini grafik Satu Bulan Adhyaksa')
        getAPI("grafikSatuBulanAdhyaksa").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaAdhyaksa && btnCobaDuaBulan) {

        loader()
        console.log('Ini grafik Dua Bulan Adhyaksa')
        getAPI("grafikDuaBulanAdhyaksa").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaAdhyaksa && btnCobaTigaBulan) {

        loader()
        console.log('Ini grafik Tiga Bulan Adhyaksa')
        getAPI("grafikTigaBulanAdhyaksa").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaAdhyaksa && btnCobaEmpatBulan) {

        loader()
        console.log('Ini grafik Empat Bulan Adhyaksa')
        getAPI("grafikEmpatBulanAdhyaksa").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaAdhyaksa && btnCobaHarian) {

        loader()
        console.log('Jalan Adhyaksa')
        getAPI("grafikAdhyaksa").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }

    // Alauddin
    else if (btnCobaAlauddin && btnCobaPekanan) {

        loader()
        console.log('Ini grafik pekanan Alauddin')
        getAPI("grafikpekananAlauddin").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaAlauddin && btnCobaSatuBulan) {

        loader()
        console.log('Ini grafik Satu Bulan Alauddin')
        getAPI("grafikSatuBulanAlauddin").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaAlauddin && btnCobaDuaBulan) {

        loader()
        console.log('Ini grafik Dua Bulan Alauddin')
        getAPI("grafikDuaBulanAlauddin").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaAlauddin && btnCobaTigaBulan) {

        loader()
        console.log('Ini grafik Tiga Bulan Alauddin')
        getAPI("grafikTigaBulanAlauddin").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaAlauddin && btnCobaEmpatBulan) {

        loader()
        console.log('Ini grafik Empat Bulan Alauddin')
        getAPI("grafikEmpatBulanAlauddin").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaAlauddin && btnCobaHarian) {

        loader()
        console.log('Jalan Alauddin')
        getAPI("grafikAlauddin").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }

    // Baji Gau
    else if (btnCobaBajiGau && btnCobaPekanan) {

        loader()
        console.log('Ini grafik pekanan BajiGau')
        getAPI("grafikpekananBajiGau").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaBajiGau && btnCobaSatuBulan) {

        loader()
        console.log('Ini grafik Satu Bulan BajiGau')
        getAPI("grafikSatuBulanBajiGau").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaBajiGau && btnCobaDuaBulan) {

        loader()
        console.log('Ini grafik Dua Bulan BajiGau')
        getAPI("grafikDuaBulanBajiGau").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaBajiGau && btnCobaTigaBulan) {

        loader()
        console.log('Ini grafik Tiga Bulan BajiGau')
        getAPI("grafikTigaBulanBajiGau").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaBajiGau && btnCobaEmpatBulan) {

        loader()
        console.log('Ini grafik Empat Bulan BajiGau')
        getAPI("grafikEmpatBulanBajiGau").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaBajiGau && btnCobaHarian) {

        loader()
        console.log('Jalan BajiGau')
        getAPI("grafikBajiGau").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }

    // Barukang
    else if (btnCobaBarukang && btnCobaPekanan) {

        loader()
        console.log('Ini grafik pekanan Barukang')
        getAPI("grafikpekananBarukang").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaBarukang && btnCobaSatuBulan) {

        loader()
        console.log('Ini grafik Satu Bulan Barukang')
        getAPI("grafikSatuBulanBarukang").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaBarukang && btnCobaDuaBulan) {

        loader()
        console.log('Ini grafik Dua Bulan Barukang')
        getAPI("grafikDuaBulanBarukang").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaBarukang && btnCobaTigaBulan) {

        loader()
        console.log('Ini grafik Tiga Bulan Barukang')
        getAPI("grafikTigaBulanBarukang").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaBarukang && btnCobaEmpatBulan) {

        loader()
        console.log('Ini grafik Empat Bulan Barukang')
        getAPI("grafikEmpatBulanBarukang").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaBarukang && btnCobaHarian) {

        loader()
        console.log('Jalan Barukang')
        getAPI("grafikBarukang").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }

    // Cakalang Panampu
    else if (btnCobaCakalang && btnCobaPekanan) {

        loader()
        console.log('Ini grafik pekanan Cakalang')
        getAPI("grafikpekananCakalang").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaCakalang && btnCobaSatuBulan) {

        loader()
        console.log('Ini grafik Satu Bulan Cakalang')
        getAPI("grafikSatuBulanCakalang").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaCakalang && btnCobaDuaBulan) {

        loader()
        console.log('Ini grafik Dua Bulan Cakalang')
        getAPI("grafikDuaBulanCakalang").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaCakalang && btnCobaTigaBulan) {

        loader()
        console.log('Ini grafik Tiga Bulan Cakalang')
        getAPI("grafikTigaBulanCakalang").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaCakalang && btnCobaEmpatBulan) {

        loader()
        console.log('Ini grafik Empat Bulan Cakalang')
        getAPI("grafikEmpatBulanCakalang").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaCakalang && btnCobaHarian) {

        loader()
        console.log('Jalan Cakalang')
        getAPI("grafikCakalang").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }

    // Flyover
    else if (btnCobaFlyover && btnCobaPekanan) {

        loader()
        console.log('Ini grafik pekanan Flyover')
        getAPI("grafikpekananFlyover").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaFlyover && btnCobaSatuBulan) {

        loader()
        console.log('Ini grafik Satu Bulan Flyover')
        getAPI("grafikSatuBulanFlyover").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaFlyover && btnCobaDuaBulan) {

        loader()
        console.log('Ini grafik Dua Bulan Flyover')
        getAPI("grafikDuaBulanFlyover").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaFlyover && btnCobaTigaBulan) {

        loader()
        console.log('Ini grafik Tiga Bulan Flyover')
        getAPI("grafikTigaBulanFlyover").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaFlyover && btnCobaEmpatBulan) {

        loader()
        console.log('Ini grafik Empat Bulan Flyover')
        getAPI("grafikEmpatBulanFlyover").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaFlyover && btnCobaHarian) {

        loader()
        console.log('Jalan Flyover')
        getAPI("grafikFlyover").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }

    // Kajaolaliddo
    else if (btnCobaKajaolaliddo && btnCobaPekanan) {

        loader()
        console.log('Ini grafik pekanan Kajaolaliddo')
        getAPI("grafikpekananKajaolaliddo").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaKajaolaliddo && btnCobaSatuBulan) {

        loader()
        console.log('Ini grafik Satu Bulan Kajaolaliddo')
        getAPI("grafikSatuBulanKajaolaliddo").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaKajaolaliddo && btnCobaDuaBulan) {

        loader()
        console.log('Ini grafik Dua Bulan Kajaolaliddo')
        getAPI("grafikDuaBulanKajaolaliddo").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaKajaolaliddo && btnCobaTigaBulan) {

        loader()
        console.log('Ini grafik Tiga Bulan Kajaolaliddo')
        getAPI("grafikTigaBulanKajaolaliddo").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaKajaolaliddo && btnCobaEmpatBulan) {

        loader()
        console.log('Ini grafik Empat Bulan Kajaolaliddo')
        getAPI("grafikEmpatBulanKajaolaliddo").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaKajaolaliddo && btnCobaHarian) {

        loader()
        console.log('Jalan Kajaolaliddo')
        getAPI("grafikKajaolaliddo").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }

    // Tata Haji
    else if (btnCobaTataHaji && btnCobaPekanan) {

        loader()
        console.log('Ini grafik pekanan TataHaji')
        getAPI("grafikpekananTataHaji").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaTataHaji && btnCobaSatuBulan) {

        loader()
        console.log('Ini grafik Satu Bulan TataHaji')
        getAPI("grafikSatuBulanTataHaji").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaTataHaji && btnCobaDuaBulan) {

        loader()
        console.log('Ini grafik Dua Bulan TataHaji')
        getAPI("grafikDuaBulanTataHaji").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaTataHaji && btnCobaTigaBulan) {

        loader()
        console.log('Ini grafik Tiga Bulan TataHaji')
        getAPI("grafikTigaBulanTataHaji").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaTataHaji && btnCobaEmpatBulan) {

        loader()
        console.log('Ini grafik Empat Bulan TataHaji')
        getAPI("grafikEmpatBulanTataHaji").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    } else if (btnCobaTataHaji && btnCobaHarian) {

        loader()
        console.log('Jalan TataHaji')
        getAPI("grafikTataHaji").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }

}

// });
btnGrafikAdhayksa.addEventListener("click", function () {
    preloader.style.display = "block";
    if (myChart) {
        myChart.destroy();
    }
    console.log('ini adhyaksa')
    getAPI("grafikAdhyaksa").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })

    if (tombolPekan == true) {
        getAPI("grafikSatuPekan");
    }
});
btnGrafikAbdKadir.addEventListener("click", function () {
    preloader.style.display = "block";
    if (myChart) {
        myChart.destroy();
    }
    console.log('ini abdKadir')
    getAPI("grafikAbdKadir").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikAlauddin.addEventListener("click", function () {
    preloader.style.display = "block";
    if (myChart) {
        myChart.destroy();
    }
    console.log('ini Alauddin')
    getAPI("grafikAlauddin").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikAmirullah.addEventListener("click", function () {
    preloader.style.display = "block";
    if (myChart) {
        myChart.destroy();
    }
    console.log('ini amirulllah')
    getAPI("grafikAmirullah").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikBajiGau.addEventListener("click", function () {
    preloader.style.display = "block";
    if (myChart) {
        myChart.destroy();
    }
    console.log('ini bajigau')
    getAPI("grafikBajigau").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikBarukang.addEventListener("click", function () {
    preloader.style.display = "block";
    if (myChart) {
        myChart.destroy();
    }
    console.log('ini barukang')
    getAPI("grafikBarukanga").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikCakalangPanampu.addEventListener("click", function () {
    preloader.style.display = "block";
    if (myChart) {
        myChart.destroy();
    }
    console.log('ini cakalang')
    getAPI("grafikCakalangPanampu").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikTataHaji.addEventListener("click", function () {
    preloader.style.display = "block";
    if (myChart) {
        myChart.destroy();
    }
    console.log('ini tatahaji')
    getAPI("grafikTataHaji").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikFlyover.addEventListener("click", function () {
    preloader.style.display = "block";
    if (myChart) {
        myChart.destroy();
    }
    console.log('ini flyover')
    getAPI("grafikflyover").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikKajaolaliddo.addEventListener("click", function () {
    preloader.style.display = "block";
    if (myChart) {
        myChart.destroy();
    }

    console.log('ini kajaolaliddo')
    getAPI("grafikKajaolaliddo").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnPekan.addEventListener("click", function () {
    console.log("ini button Pekan")
})

// btnHari.addEventListener("click", function(){
//     console.log('ini satu hari')
//     getAPI("grafikSatuHari")
// });

// btnPekan.addEventListener("click", function(){
//     console.log('ini satu pekan')
//     getAPI("grafikSatuPekan")
// });

// btnSatuBulan.addEventListener("click", function(){
//     console.log('ini dua bulan')
//     getAPI("grafikDuaBulan")
// });

// btnTigaBulan.addEventListener("click", function(){
//     console.log('ini tiga bulan')
//     getAPI("grafikTigaBulan")
// });

// btnEmpatBulan.addEventListener("click", function(){
//     console.log('ini dua bulan')
//     getAPI("grafikEmpatBulan")
// });

function showChart(datasetfromAPI, namaJalan) {
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: namaJalan,
                data: datasetfromAPI,
                backgroundColor: 'red',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    maxHeight: 100,
                    maxWidth: 100,
                    labels: {
                        boxWidth: 0,
                        boxHeight: 0
                    }
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    beginAtZero: true
                }
            },
            tooltips: {
                mode: 'index'
            }
        }
    });
}


async function getAPI(props) {
    const response = await fetch(apiUrl)
    const barChartData = await response.json()

    const Tanggal = barChartData.kemacetan.map((x) => x.Tanggal)
    const Waktu = barChartData.kemacetan.map((x) => x.Waktu)
    const TotalKemacetan = barChartData.kemacetan.map((x) => x.Total)
    const AbdulKadir = barChartData.kemacetan.map((x) => x.abdul_kadir)
    const AdhyaksaSirua = barChartData.kemacetan.map((x) => x.adhyaksa_sirua)
    const AlauddinTalasalapang = barChartData.kemacetan.map((x) => x.alauddin_talasalapang)
    const Amirullah = barChartData.kemacetan.map((x) => x.amirullah)
    const BajiGau = barChartData.kemacetan.map((x) => x.baji_gau)
    const Barukang = barChartData.kemacetan.map((x) => x.barukang)
    const CakalangPanampu = barChartData.kemacetan.map((x) => x.cakalang_panampu)
    const DgTataRSHaji = barChartData.kemacetan.map((x) => x.dgtata_rshaji)
    const Flyover = barChartData.kemacetan.map((x) => x.flyover)
    const KajaolaliddoKatedral = barChartData.kemacetan.map((x) => x.kajaolaliddo_katedral)
    const TotalAbdulKadir = barChartData.kemacetan.map((x) => x.akumulasi_abdul_kadir)
    const TotalAdhyaksa = barChartData.kemacetan.map((x) => x.akumulasi_adhyaksa_sirua)
    const TotalAlauddin = barChartData.kemacetan.map((x) => x.akumulasi_alauddin)
    const TotalAmirullah = barChartData.kemacetan.map((x) => x.akumulasi_amirullah)
    const TotalBajiGau = barChartData.kemacetan.map((x) => x.akumulasi_baji_gau)
    const TotalBarukang = barChartData.kemacetan.map((x) => x.akumulasi_barukang)
    const TotalCakalang = barChartData.kemacetan.map((x) => x.akumulasi_cakalang_panampu)
    const TotalTataHaji = barChartData.kemacetan.map((x) => x.akumulasi_dgtata_rshaji)
    const TotalFlyover = barChartData.kemacetan.map((x) => x.akumulasi_flyover)
    const TotalKajaolaliddo = barChartData.kemacetan.map((x) => x.akumulasi_kajaolaliddo_katedral)

    // Buat indeks
    let indexPekan = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    let indexSatuBulan = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    let indexDuaBulan = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
    let indexTigaBulan = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
    let indexEmpatBulan = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
    // ubah format data Tanggal
    let newTanggal = Tanggal.map(d => d.slice(0, 10));

    // Ambil index pada data tertentu
    let indexes = newTanggal.reduce((acc, n, i) => {
        if (n == newDate) {
            acc.push(i);
        }
        return acc;
    }, []);

    function dataJalan(values) {
        let nilai = indexes.map(i => values[i]);
        return nilai
    }

    function totalMacet() {
        let filterIndex = newTanggal.filter(n => n == newDate);
        let indexTotal = filterIndex.map(n => newTanggal.indexOf(n));

        let totalmacet = indexTotal.map(i => TotalKemacetan[i]);
        return totalmacet[0];
    }

    function dataPekan(values) {
        let nilai = indexPekan.map(i => values[i]);
        return nilai
    }

    function dataSatuBulan(values) {
        let nilai = indexSatuBulan.map(i => values[i]);
        return nilai
    }

    function dataDuaBulan(values) {
        let nilai = indexDuaBulan.map(i => values[i]);
        return nilai
    }

    function dataTigaBulan(values) {
        let nilai = indexTigaBulan.map(i => values[i]);
        return nilai
    }

    function dataEmpatBulan(values) {
        let nilai = indexEmpatBulan.map(i => values[i]);
        return nilai
    }

    // Ambil tanggal hari ini dan ubah format
    let today = new Date();
    let localDate = today.toLocaleDateString('id-ID', { timeZone: 'UTC', day: '2-digit', month: '2-digit', year: 'numeric' });

    if (props == "grafikAdhyaksa") {
        console.log(today)
        console.log(localDate)
        console.log(totalMacet())
        $('#periode').html(val)
        dataAPI = dataJalan(AdhyaksaSirua)
        namaJalan = "Jalan Adhyaksa"
        console.log(newTanggal)
        console.log(dataPekan(TotalAbdulKadir))
        if (props == "grafikSatuPekan") {
            console.log("data pekan terpilih")
            dataAPI = dataPekan(TotalAbdulKadir)
        }
        console.log(dataAPI)

    } else if (props == "grafikAbdKadir") {
        dataAPI = dataJalan(AbdulKadir)
        namaJalan = "Jalan Abdul Kadir"
    } else if (props == "grafikAlauddin") {
        dataAPI = dataJalan(AlauddinTalasalapang)
        namaJalan = "Jalan Alauddin Talasalapang"
    } else if (props == "grafikAmirullah") {
        $('#periode').html(val)
        dataAPI = dataJalan(Amirullah)
        namaJalan = "Jalan Amirullah"
        console.log(dataPekan(TotalAmirullah))
        console.log(dataSatuBulan(TotalAmirullah))
        console.log(dataDuaBulan(TotalAmirullah))
        console.log(dataTigaBulan(TotalAmirullah))
        console.log(dataEmpatBulan(TotalAmirullah))
    } else if (props == "grafikBajigau") {
        $('#periode').html(val)
        dataAPI = dataJalan(BajiGau)
        namaJalan = "Jalan Baji Gau"
    } else if (props == "grafikBarukanga") {
        dataAPI = dataJalan(Barukang)
        namaJalan = "Jalan Barukang"
    } else if (props == "grafikCakalangPanampu") {
        dataAPI = dataJalan(CakalangPanampu)
        namaJalan = "Jalan Cakalang Panampu"
    } else if (props == "grafikTataHaji") {
        dataAPI = dataJalan(DgTataRSHaji)
        namaJalan = "Jalan Dg Tata RS Haji"
    } else if (props == "grafikflyover") {
        dataAPI = dataJalan(Flyover)
        namaJalan = "Flyover"
    } else if (props == "grafikKajaolaliddo") {
        dataAPI = dataJalan(KajaolaliddoKatedral)
        namaJalan = "Jalan Kajaolaliddon Katedral"
    } else if (props == "grafikpekananAmirullah") {
        $('#periode').html(val)
        dataAPI = dataPekan(TotalAmirullah)
        namaJalan = "Grafik Pekanan Jalan Amirullah"
        console.log(dataAPI)
    } else if (props == "grafikSatuBulanAmirullah") {
        $('#periode').html(val)
        dataAPI = dataSatuBulan(TotalAmirullah)
        namaJalan = "Grafik Satu Bulan Jalan Amirullah"
        console.log(dataAPI)
    } else if (props == "grafikDuaBulanAmirullah") {
        $('#periode').html(val)
        dataAPI = dataDuaBulan(TotalAmirullah)
        namaJalan = "Grafik Dua Bulan Jalan Amirullah"
        console.log(dataAPI)
    } else if (props == "grafikTigaBulanAmirullah") {
        $('#periode').html(val)
        dataAPI = dataTigaBulan(TotalAmirullah)
        namaJalan = "Grafik Tiga Bulan Jalan Amirullah"
    } else if (props == "grafikEmpatBulanAmirullah") {
        $('#periode').html(val)
        dataAPI = dataEmpatBulan(TotalAmirullah)
        namaJalan = "Grafik Empat Bulan Jalan Amirullah"
    }
    else if (props == "jumlahMacet") {
        $('#jumlahMacet').html(totalMacet())
    }
    // Abdul Kadir
    else if (props == "grafikpekananAbdulKadir") {
        $('#periode').html(val)
        dataAPI = dataPekan(TotalAbdulKadir)
        namaJalan = "Grafik Pekanan Jalan AbdulKadir"
        console.log(dataAPI)
    } else if (props == "grafikSatuBulanAbdulKadir") {
        $('#periode').html(val)
        dataAPI = dataSatuBulan(TotalAbdulKadir)
        namaJalan = "Grafik Satu Bulan Jalan AbdulKadir"
        console.log(dataAPI)
    } else if (props == "grafikDuaBulanAbdulKadir") {
        $('#periode').html(val)
        dataAPI = dataDuaBulan(TotalAbdulKadir)
        namaJalan = "Grafik Dua Bulan Jalan AbdulKadir"
        console.log(dataAPI)
    } else if (props == "grafikTigaBulanAbdulKadir") {
        $('#periode').html(val)
        dataAPI = dataTigaBulan(TotalAbdulKadir)
        namaJalan = "Grafik Tiga Bulan Jalan AbdulKadir"
    } else if (props == "grafikEmpatBulanAbdulKadir") {
        $('#periode').html(val)
        dataAPI = dataEmpatBulan(TotalAbdulKadir)
        namaJalan = "Grafik Empat Bulan Jalan AbdulKadir"
    }
    else if (props == "jumlahMacet") {
        $('#jumlahMacet').html(totalMacet())
    }
    // Adhyaksa
    else if (props == "grafikpekananAdhyaksa") {
        $('#periode').html(val)
        dataAPI = dataPekan(TotalAdhyaksa)
        namaJalan = "Grafik Pekanan Jalan Adhyaksa"
        console.log(dataAPI)
    } else if (props == "grafikSatuBulanAdhyaksa") {
        $('#periode').html(val)
        dataAPI = dataSatuBulan(TotalAdhyaksa)
        namaJalan = "Grafik Satu Bulan Jalan Adhyaksa"
        console.log(dataAPI)
    } else if (props == "grafikDuaBulanAdhyaksa") {
        $('#periode').html(val)
        dataAPI = dataDuaBulan(TotalAdhyaksa)
        namaJalan = "Grafik Dua Bulan Jalan Adhyaksa"
        console.log(dataAPI)
    } else if (props == "grafikTigaBulanAdhyaksa") {
        $('#periode').html(val)
        dataAPI = dataTigaBulan(TotalAdhyaksa)
        namaJalan = "Grafik Tiga Bulan Jalan Adhyaksa"
    } else if (props == "grafikEmpatBulanAdhyaksa") {
        $('#periode').html(val)
        dataAPI = dataEmpatBulan(TotalAdhyaksa)
        namaJalan = "Grafik Empat Bulan Jalan Adhyaksa"
    }
    else if (props == "jumlahMacet") {
        $('#jumlahMacet').html(totalMacet())
    }

    // Alauddin
    else if (props == "grafikpekananAlauddin") {
        $('#periode').html(val)
        dataAPI = dataPekan(TotalAlauddin)
        namaJalan = "Grafik Pekanan Jalan Alauddin"
        console.log(dataAPI)
    } else if (props == "grafikSatuBulanAlauddin") {
        $('#periode').html(val)
        dataAPI = dataSatuBulan(TotalAlauddin)
        namaJalan = "Grafik Satu Bulan Jalan Alauddin"
        console.log(dataAPI)
    } else if (props == "grafikDuaBulanAlauddin") {
        $('#periode').html(val)
        dataAPI = dataDuaBulan(TotalAlauddin)
        namaJalan = "Grafik Dua Bulan Jalan Alauddin"
        console.log(dataAPI)
    } else if (props == "grafikTigaBulanAlauddin") {
        $('#periode').html(val)
        dataAPI = dataTigaBulan(TotalAlauddin)
        namaJalan = "Grafik Tiga Bulan Jalan Alauddin"
    } else if (props == "grafikEmpatBulanAlauddin") {
        $('#periode').html(val)
        dataAPI = dataEmpatBulan(TotalAlauddin)
        namaJalan = "Grafik Empat Bulan Jalan Alauddin"
    }
    else if (props == "jumlahMacet") {
        $('#jumlahMacet').html(totalMacet())
    }

    // Baji Gau
    else if (props == "grafikpekananBajiGau") {
        $('#periode').html(val)
        dataAPI = dataPekan(TotalBajiGau)
        namaJalan = "Grafik Pekanan Jalan BajiGau"
        console.log(dataAPI)
    } else if (props == "grafikSatuBulanBajiGau") {
        $('#periode').html(val)
        dataAPI = dataSatuBulan(TotalBajiGau)
        namaJalan = "Grafik Satu Bulan Jalan BajiGau"
        console.log(dataAPI)
    } else if (props == "grafikDuaBulanBajiGau") {
        $('#periode').html(val)
        dataAPI = dataDuaBulan(TotalBajiGau)
        namaJalan = "Grafik Dua Bulan Jalan BajiGau"
        console.log(dataAPI)
    } else if (props == "grafikTigaBulanBajiGau") {
        $('#periode').html(val)
        dataAPI = dataTigaBulan(TotalBajiGau)
        namaJalan = "Grafik Tiga Bulan Jalan BajiGau"
    } else if (props == "grafikEmpatBulanBajiGau") {
        $('#periode').html(val)
        dataAPI = dataEmpatBulan(TotalBajiGau)
        namaJalan = "Grafik Empat Bulan Jalan BajiGau"
    }
    else if (props == "jumlahMacet") {
        $('#jumlahMacet').html(totalMacet())
    }

    // Barukang
    else if (props == "grafikpekananBarukang") {
        $('#periode').html(val)
        dataAPI = dataPekan(TotalBarukang)
        namaJalan = "Grafik Pekanan Jalan Barukang"
        console.log(dataAPI)
    } else if (props == "grafikSatuBulanBarukang") {
        $('#periode').html(val)
        dataAPI = dataSatuBulan(TotalBarukang)
        namaJalan = "Grafik Satu Bulan Jalan Barukang"
        console.log(dataAPI)
    } else if (props == "grafikDuaBulanBarukang") {
        $('#periode').html(val)
        dataAPI = dataDuaBulan(TotalBarukang)
        namaJalan = "Grafik Dua Bulan Jalan Barukang"
        console.log(dataAPI)
    } else if (props == "grafikTigaBulanBarukang") {
        $('#periode').html(val)
        dataAPI = dataTigaBulan(TotalBarukang)
        namaJalan = "Grafik Tiga Bulan Jalan Barukang"
    } else if (props == "grafikEmpatBulanBarukang") {
        $('#periode').html(val)
        dataAPI = dataEmpatBulan(TotalBarukang)
        namaJalan = "Grafik Empat Bulan Jalan Barukang"
    }
    else if (props == "jumlahMacet") {
        $('#jumlahMacet').html(totalMacet())
    }

    // Cakalang Panampu
    else if (props == "grafikpekananCakalang") {
        $('#periode').html(val)
        dataAPI = dataPekan(TotalCakalang)
        namaJalan = "Grafik Pekanan Jalan Cakalang"
        console.log(dataAPI)
    } else if (props == "grafikSatuBulanCakalang") {
        $('#periode').html(val)
        dataAPI = dataSatuBulan(TotalCakalang)
        namaJalan = "Grafik Satu Bulan Jalan Cakalang"
        console.log(dataAPI)
    } else if (props == "grafikDuaBulanCakalang") {
        $('#periode').html(val)
        dataAPI = dataDuaBulan(TotalCakalang)
        namaJalan = "Grafik Dua Bulan Jalan Cakalang"
        console.log(dataAPI)
    } else if (props == "grafikTigaBulanCakalang") {
        $('#periode').html(val)
        dataAPI = dataTigaBulan(TotalCakalang)
        namaJalan = "Grafik Tiga Bulan Jalan Cakalang"
    } else if (props == "grafikEmpatBulanCakalang") {
        $('#periode').html(val)
        dataAPI = dataEmpatBulan(TotalCakalang)
        namaJalan = "Grafik Empat Bulan Jalan Cakalang"
    }
    else if (props == "jumlahMacet") {
        $('#jumlahMacet').html(totalMacet())
    }

    // Flyover
    else if (props == "grafikpekananFlyover") {
        $('#periode').html(val)
        dataAPI = dataPekan(TotalFlyover)
        namaJalan = "Grafik Pekanan Jalan Flyover"
        console.log(dataAPI)
    } else if (props == "grafikSatuBulanFlyover") {
        $('#periode').html(val)
        dataAPI = dataSatuBulan(TotalFlyover)
        namaJalan = "Grafik Satu Bulan Jalan Flyover"
        console.log(dataAPI)
    } else if (props == "grafikDuaBulanFlyover") {
        $('#periode').html(val)
        dataAPI = dataDuaBulan(TotalFlyover)
        namaJalan = "Grafik Dua Bulan Jalan Flyover"
        console.log(dataAPI)
    } else if (props == "grafikTigaBulanFlyover") {
        $('#periode').html(val)
        dataAPI = dataTigaBulan(TotalFlyover)
        namaJalan = "Grafik Tiga Bulan Jalan Flyover"
    } else if (props == "grafikEmpatBulanFlyover") {
        $('#periode').html(val)
        dataAPI = dataEmpatBulan(TotalFlyover)
        namaJalan = "Grafik Empat Bulan Jalan Flyover"
    }
    else if (props == "jumlahMacet") {
        $('#jumlahMacet').html(totalMacet())
    }

    // Kajaolaliddo
    else if (props == "grafikpekananKajaolaliddo") {
        $('#periode').html(val)
        dataAPI = dataPekan(TotalKajaolaliddo)
        namaJalan = "Grafik Pekanan Jalan Kajaolaliddo"
        console.log(dataAPI)
    } else if (props == "grafikSatuBulanKajaolaliddo") {
        $('#periode').html(val)
        dataAPI = dataSatuBulan(TotalKajaolaliddo)
        namaJalan = "Grafik Satu Bulan Jalan Kajaolaliddo"
        console.log(dataAPI)
    } else if (props == "grafikDuaBulanKajaolaliddo") {
        $('#periode').html(val)
        dataAPI = dataDuaBulan(TotalKajaolaliddo)
        namaJalan = "Grafik Dua Bulan Jalan Kajaolaliddo"
        console.log(dataAPI)
    } else if (props == "grafikTigaBulanKajaolaliddo") {
        $('#periode').html(val)
        dataAPI = dataTigaBulan(TotalKajaolaliddo)
        namaJalan = "Grafik Tiga Bulan Jalan Kajaolaliddo"
    } else if (props == "grafikEmpatBulanKajaolaliddo") {
        $('#periode').html(val)
        dataAPI = dataEmpatBulan(TotalKajaolaliddo)
        namaJalan = "Grafik Empat Bulan Jalan Kajaolaliddo"
    }
    else if (props == "jumlahMacet") {
        $('#jumlahMacet').html(totalMacet())
    }

    // Tata Haji
    else if (props == "grafikpekananTataHaji") {
        $('#periode').html(val)
        dataAPI = dataPekan(TotalTataHaji)
        namaJalan = "Grafik Pekanan Jalan TataHaji"
        console.log(dataAPI)
    } else if (props == "grafikSatuBulanTataHaji") {
        $('#periode').html(val)
        dataAPI = dataSatuBulan(TotalTataHaji)
        namaJalan = "Grafik Satu Bulan Jalan TataHaji"
        console.log(dataAPI)
    } else if (props == "grafikDuaBulanTataHaji") {
        $('#periode').html(val)
        dataAPI = dataDuaBulan(TotalTataHaji)
        namaJalan = "Grafik Dua Bulan Jalan TataHaji"
        console.log(dataAPI)
    } else if (props == "grafikTigaBulanTataHaji") {
        $('#periode').html(val)
        dataAPI = dataTigaBulan(TotalTataHaji)
        namaJalan = "Grafik Tiga Bulan Jalan TataHaji"
    } else if (props == "grafikEmpatBulanTataHaji") {
        $('#periode').html(val)
        dataAPI = dataEmpatBulan(TotalTataHaji)
        namaJalan = "Grafik Empat Bulan Jalan TataHaji"
    }
    else if (props == "jumlahMacet") {
        $('#jumlahMacet').html(totalMacet())
    }


    if (myChart) {
        myChart.destroy()
    }

    showChart(dataAPI, namaJalan)


}


