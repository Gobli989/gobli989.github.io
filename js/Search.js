function search() {
    var searchTerm = document.getElementById("search").value;
    var se = message(searchTerm);

    const res = document.getElementById('search-result');
    res.innerHTML = '';
    PAGES_HU.filter((page) => message(page.name).includes(se)).forEach((page) => {
        res.innerHTML += `<li class="search-result" onclick="openurl('${page.path}')">${page.name}</li>`;
    });

    console.log(se);
}

function message(str) {
    return str
        .toLowerCase()
        .replace(/\s|-|_/g, '')
        .replace(/ü|ű|ú/g, 'u')
        .replace(/ö|ő|ó/g, 'o')
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i');
}