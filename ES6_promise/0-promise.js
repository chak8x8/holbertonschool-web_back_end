export default function getResponseFromAPI() {
    const myPromise = new Promise((resolve) => {
        resolve("success");
    });
    return myPromise;
}