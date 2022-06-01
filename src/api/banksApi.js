const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'http://mortgage.eu-central-1.elasticbeanstalk.com/'
})

export const banksAPI = {
    async getBanks() {
        const resp = await instance.get('banks');
        return resp.data;
    },

    //TODO: is it appropriate to have only 1 method for create and update?
    async saveBank(bank) {
        if (bank.id === undefined) {
            const resp = await instance.post('banks', bank);
            return resp.data;
        }
        const resp = await instance.put(`banks/${bank.id}`, bank)
        return resp.data;
    },

    async deleteBank(id) {
        const resp = await instance.delete(`banks/${id}`)
        return resp.data;
    }
}