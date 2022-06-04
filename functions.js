/**
 * 
 * @param {alert massage} msg 
 * @param {*} type 
 * @returns 
 */


const setalert = (msg,type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss = "alert" class="btn-close"></button></p>`

}

/**
 * 
 * @param {email} email 
 * @returns 
 */


const emailcheck = (email) => {
    let emailpattern = /^[a-z0-9\._]{1,}@[a-z0-9]{1,}\.[a-z]{1,4}$/;
    return emailpattern.test(email);
}


/**
 * 
 * @param {cell} cell 
 * @returns 
 */


const cellcheck = (cell) => {
    let pattern = /^(01|8801|\+8801)[0-9]{9}$/;
    return pattern.test(cell);
}


