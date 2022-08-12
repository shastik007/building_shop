export const localStorageHelper = {
    save:(key,data) => {
        const json = JSON.stringify(data)
        localStorage.setItem(key, json)
    },
    get:(key) => {
        const value = JSON.parse(localStorage.getItem(key))
        console.log(value,'value');
        return value
    },
    delete:(key) => {
        return localStorage.removeItem(key)
    }
}