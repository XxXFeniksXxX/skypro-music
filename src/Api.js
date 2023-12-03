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

export async function registerUser({ email, password }) {
    const response = await fetch(baseHost + "/user/signup/", {  
      method: 'POST',
    body: JSON.stringify({
        email: email
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;"),
      password: password
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;"),
      username: email,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    const data = await response.json()

    if (!response.ok) {
      const error = data.email?.[0] ?? data.username?.[0] ?? data.password?.[0]
      throw new Error(error)
    }
  console.log (data);
    return data
  }

  export async function loginUser({ email, password }) {
    const response = await fetch(baseHost + "/user/login/", {
      method: 'POST',
      body: JSON.stringify({
        email: email
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;"),
        password: password
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;"),
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
    const data = await response.json()

    if (!response.ok) {
      const error = data.email ?? data.password ?? data.detail
      throw new Error(error)
    }
    console.log (data);
    return data
  }
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
