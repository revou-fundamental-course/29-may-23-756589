var name = prompt("Masukkan nama kamu");
            document.getElementById("nama").innerText = name;

            function validateForm() {
                const name = document.forms["message-form"]["full-name"].value;
                const date = document.forms["message-form"]["birth-date"].value;
                const gender = document.forms["message-form"]["gender"].value;
                const message = document.forms["message-form"]["messages"].value;
        
                if (name === "" || date === "" || gender === "" || message === "") {
                    alert("Tidak boleh ada yang kosong");
                    return false;
                }
        
                document.getElementById("nama-lengkap-pengirim").innerText = name;
                document.getElementById("birth-date-pengirim").innerText = date;
                document.getElementById("gender-pengirim").innerText = gender;
                document.getElementById("messages-pengirim").innerText = message;
        
                return false;
            }

            var slideIndex = 1;
            showDivs(slideIndex);

            function plusDivs(n) {
                showDivs((slideIndex += n));
            }

            function showDivs(n) {
                var i;
                var imgList = document.getElementsByClassName("img-slideshow");
                if (n > imgList.length) slideIndex = 1;
                else if(n < 1) slideIndex = imgList.length;

                for(i = 0; i < imgList.length; i++) {
                    imgList[i].style.display ="none";
                }
                 imgList[slideIndex - 1].style.display ="block";
            }

            setInterval(() => {
                plusDivs(1);
            },1600)
