const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwOTcxMjcxLCJpYXQiOjE2OTA5NjAxMzEsImp0aSI6ImE4YzQ5NDNmOWNmNTRlZjI5NmFmNTMyOWUwODM4YWQ5IiwidXNlcl9pZCI6NzkyfQ.5n8YHTjsgAnYnc4gioyV1wPnxM2D16PS6c9kNhC-JoE";
const baseHost = "https://skypro-music-api.skyeng.tech";

export async function getTracks() {
    const response = await fetch(baseHost + "/catalog/track/all/", {
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }
    return data;
}

// export async function registerUser(email, password) {
//     const response = await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
//         headers:{

//         },
//         method: "POST",
//         body: JSON.stringify({
//             email, password, username:email,
//         }),
//     });
//     const data = await response.json();
//     return data;
// }

// export async function getTracksById() {
//     fetch("https://skypro-music-api.skyeng.tech/catalog/track/<id>", {
//         method: "GET",
//     });
//     const dataTrack = await response.json();

//     if (!response.ok) {
//         throw new Error("Ошибка сервера");
//     }
//     console.log(dataTrack);
//     return dataTrack;
// }

// export async function loginUser({ login, password }) {
//     return fetch(baseHost + "/api/user/login", {
//       method: "POST",
//       body: JSON.stringify({
//         login: login
//           .replaceAll("&", "&amp;")
//           .replaceAll("<", "&lt;")
//           .replaceAll(">", "&gt;")
//           .replaceAll('"', "&quot;"),
//         password: password
//           .replaceAll("&", "&amp;")
//           .replaceAll("<", "&lt;")
//           .replaceAll(">", "&gt;")
//           .replaceAll('"', "&quot;"),
//       }),
//     }).then((response) => {
//       if (response.status === 400) {
//         throw new Error("Неверный логин или пароль");
//       }
//       return response.json();
//     });
//   }
