// lock down mode
function unlock(){
    alert("In order to unlock the device, please enter the password");
    var password = prompt("Please enter the password");
    if (password == "1234"){
        alert("The device has been unlocked");
        db.collection("LockDownMode").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                doc.ref.delete();
            });
        });
        setInterval(function(){
        window.location.reload();
        }, 1000);
    }else{
        alert("The password is incorrect");
    }
}