export const initBanks = [
    {
        "id": "0",
        "name": "Bank of America",
        "interest": 0.2,
        "max_loan": 40000,
        "min_down": 0.3,
        "term": 12
    },
    {
        "id": "1",
        "name": "Bank of China",
        "interest": 0.2,
        "max_loan": 2000000,
        "min_down": 0.25,
        "term": 14
    },
    {
        "id": "2",
        "name": "Bank of Ukraine",
        "interest": 0.2,
        "max_loan": 20000,
        "min_down": 0.2,
        "term": 9
    },
    {
        "id": "3",
        "name": "Bank of Spain",
        "interest": 0.2,
        "max_loan": 100000,
        "min_down": 0.4,
        "term": 16
    },
    {
        "id": "4",
        "name": "Bank of Italy",
        "interest": 0.2,
        "max_loan": 300000,
        "min_down": 0.5,
        "term": 32
    }
]

export const getBanks = () => {
    return fetch('https://back-dot-mortgage-test-347507.lm.r.appspot.com/banks')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}