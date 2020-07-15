function fetchData() {
    fetch("http://91.121.88.38:3000/api/people")
        .then(response => {
            if (!response.ok) {
                throw Error("Marche po !");
            }
            return response.json();
        })
        .then(data => {
            const html = data.map(user => {
                        return `<div class="user">
                                <p> Nom : ${user.name}</p>
                                <p> Age : ${user.age}</p>
                                 <p> Voitures : </p>
                                        <p>${user.cars}</p>
                             </div>
                            <hr>`;
                })
                .join("");
            document.querySelector("#liste").insertAdjacentHTML("afterbegin", html);
        })
}

fetchData();
