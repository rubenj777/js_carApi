function displayAll() {
    fetch("http://localhost/cyclisterie/?type=voiture&action=index")
        .then((res) => res.json())
        .then((voitures) => {
            voitures.forEach((voiture) => {
                console.log(voiture)
            });
        })
}


const create = (name, brand, price) => {
    let url = "http://localhost/cyclisterie/?type=voiture&action=new";
    let bodyRequest = {
        name:name,
        brand:brand,
        price:price
    };
    let request = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyRequest)
    }
    fetch(url,request).then(res=>res.json()).then(data=>{
        console.log(data);
        displayAll();
    });
};

const suppr = (id) => {
    let url = "http://localhost/cyclisterie/?type=voiture&action=del";
    let bodyRequest = {
        id:id
    };
    let request = {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyRequest)
    }
    fetch(url,request).then(res=>res.json()).then(data=>{
        console.log(data);
        displayAll();
    });
}

displayAll();