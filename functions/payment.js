const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const {getFirestore} = require("firebase-admin/firestore");
const axios = require('axios');

  
const config = {
    method: 'post',
    url: 'https://',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
    },
    data: { "input" : { "prompt" : "Hello World"}}
};

exports.processJobTesting = onDocumentCreated("customers-test/{userid}/payments/{paymentid}", async (event) => {

    const querySnapshot = await getFirestore().collection("jobs").where("userid", "==", event.params.userid).where("status", "==", "unpaid").orderBy("timestamp", "desc").limit(1).get()

    if (!querySnapshot.empty) { // Checking if the query returned any documents
        const doc = querySnapshot.docs[0]; // Getting the first document from the results
        const docRef = doc.ref; // Getting the DocumentReference of the document
    
        await docRef.update({
            status: "paid"
        });
    } else {
        // Handle the case where no documents match the query
        console.log('No matching documents found');
    }

    //hit the Runpod API
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.error(error);
    });

    return "ok"

});
