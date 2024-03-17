// Fonction d'appel API POST
async function callApiPost(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la requête POST');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Fonction d'appel API GET
async function callApiGet(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Erreur lors de la requête GET');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}



// // Exemple d'utilisation de la fonction d'appel API POST
// const postData = {
//     param1: 'valeur1',
//     param2: 'valeur2'
// };

// callApiPost('http://127.0.0.1:8000/test/', postData)
//     .then(responseData => {
//         console.log(responseData);
//         // Faire quelque chose avec les données de la réponse
//     })
//     .catch(error => {
//         console.error(error);
//         // Gérer l'erreur
//     });

// // Exemple d'utilisation de la fonction d'appel API GET
// callApiGet('http://127.0.0.1:8000/test/')
//     .then(responseData => {
//         console.log(responseData);
//         // Faire quelque chose avec les données de la réponse
//     })
//     .catch(error => {
//         console.error(error);
//         // Gérer l'erreur
//     });