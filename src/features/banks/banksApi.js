const axios = require('axios').default;
const rootPath = 'https://back-dot-mortgage-test-347507.lm.r.appspot.com'

export const getBanks = () => {
    return axios.get(`${rootPath}/banks`)
}

//TODO: is it appropriate to have only 1 method for create and update?
export const saveBank = (bank) => {
    if (bank.id === undefined) {
        return axios.post(`${rootPath}/banks`, bank)
    }
    return axios.put(`${rootPath}/banks/${bank.id}`, bank)
}

export const deleteBank = (id) => {
    return axios.delete(`${rootPath}/banks/${id}`)
}