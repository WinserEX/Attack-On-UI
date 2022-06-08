const form = document.getElementById("daForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Funcionó");
});


let select = document.querySelector("#daForm");

select.addEventListener("submit", function() {
    let inputIter = () => {
        let iterData = document.querySelector("#iterData").value;    
        return iterData;
    }

    let massText = (iter) => {
        for(let i = iter; i > 0; i--) {
            let select = document.querySelector("#datA")
            let div = document.createElement('div')
            div.classList.add("col-xs-12" , "col-md-6", "col-xl-2" ,"py-2", "px-0", "text-center")
            let p = document.createElement("p")
            let h2 = document.createElement("h2")
            select.append(div)
            div.append(h2)
            h2.append("PROVE IT!!!")
            div.append(p)
            p.append("捧げよ！ 捧げよ!");
        }
    }
    
    massText(inputIter());
});







		
