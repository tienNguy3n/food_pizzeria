const fetchAPI = (path, option) => {
    const res = fetch(`https://food-pizzeria-default-rtdb.firebaseio.com/${path}`, option)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            alert(error.message);
        });
    return res
}

export default fetchAPI