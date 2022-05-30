const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://back-dot-mortgage-test-347507.lm.r.appspot.com/'
})

export const banksAPI = {
    getBanks() {
        return instance.get('banks').then((resp) => resp.data)
    },

    //TODO: is it appropriate to have only 1 method for create and update?
    saveBank(bank) {
        if (bank.id === undefined) {
            return instance.post('banks', bank)
        }
        return instance.put(`banks/${bank.id}`, bank)
    },

    deleteBank(id) {
        return instance.delete(`banks/${id}`)
    }
}