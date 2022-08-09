function setStorage(key,value){
    return localStorage.setItem(key,value);
}

function getStorage(key){
    return localStorage.getItem(key);
}

function removeStorage(key){
    return localStorage.removeItem(key);
}

function clearAllStorage(){
    return localStorage.clear();
}

export{
    getStorage,
    setStorage,
    clearAllStorage,
    removeStorage
};