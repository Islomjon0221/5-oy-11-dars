let data =["Elbek", "Feruz", "Shamsiddin", "Jiguli", "Volga", "Velosiped"];
function createUser(name) {
    let li = document.createElement('li');
    li.innerHTML = name;
    return li
};

let gem = document.createDocumentFragment();

const wrapper = document.getElementById("wrapper");

let info = wrapper.innerHTML;

data.forEach(name => {
    let li = createUser(name);
    gem.appendChild(li);

})



wrapper.appendChild(gem)

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";}
    
localStorage.setItem('user', JSON.stringify(wrapper.innerHTML))
sessionStorage.setItem('user', JSON.stringify(wrapper.innerHTML))

document.cookie = setCookie("user", JSON.stringify(wrapper.innerHTML)) ;
