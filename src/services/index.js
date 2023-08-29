const fetchAPI = (path, option) => {
    const res = fetch(`https://http-food-order-9befd-default-rtdb.firebaseio.com/${path}`, option)
        .then(res => res.json())
        .then(data => {
            const loadedMeals = [];
            for (const key in data) {
                loadedMeals.push({...data[key], id: key});
            }
            return loadedMeals
        })
        .catch(error => {
            alert(error.message)
        })
    return res
}

export default fetchAPI