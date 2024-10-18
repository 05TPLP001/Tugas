const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vT1IxYtif-ByZcYskqDv_c07YRflh6QzkCLJcqz1DyMTkQgqymsckdqnNFDu5IQZknqaR-ErD-RDz1X/pub?gid=0&single=true&output=csv`;
async function fetchData() {
    const response = await fetch(url);
    const data = await response.text();
    const rows = data.split("\n").slice(1);

    rows.forEach(row => {
        const col = row.split(",");
        const nama = col[0];
        let nim = col[1];
        let urlg = col[2]? col[2]:col[2]="https://www.svgrepo.com/show/86725/person.svg";
        const link = col[3]; 

        // Buat elemen HTML
        const cardHTML = `
            <div class="col mb-5 ">
                <div class="card card bg-secondary text-center text-light kartu">
                    <img class="bg-light border rounded-3 w-75 ms-auto me-auto" src="${urlg}" class="card-img-top" alt="${nama}" style="margin:5%; width:auto">
                    <div class="card-body">
                        <h5 class="card-title ">${nama}</h5>
                        <p class="card-text fw-lighter deskripsi">${nim}</p>
                    </div>
                    <div class="card-footer bg-primary-subtle d-md-flex justify-content-center"> 
                        <a class="btn btn-success d-block btnDetail" target='blank' href="${link}" >My Website</a>
                    </div>
                </div>
            </div>`;

        //Input elemen html
        document.getElementById('produk-container').insertAdjacentHTML('beforeend', cardHTML);
    });
}

fetchData();
