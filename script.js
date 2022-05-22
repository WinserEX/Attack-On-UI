const form = document.getElementById("daForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Daleee");
});



let massText = (iter, targ, txt) => {
    for(let i = iter; i > 0; i--) {
        let select = document.querySelector(targ)
        let div = document.createElement('div')
        div.classList.add("col-xs-12" , "col-md-6", "col-xl-2" ,"py-2", "px-0", "text-center")
        let p = document.createElement("p")
        select.append(div);
        div.append(p);
        p.append(txt);
    }
}

massText(6, "#datA", "捧げよ！ 捧げよ！");



		
