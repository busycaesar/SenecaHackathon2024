class Token {
  constructor(token, expiry) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token = token;
  }

  async loginUser(user, pass) {
    console.log(user, pass);
    const res = await fetch(`http://localhost:8080/v1/login`, {
      method: "POST",
      body: JSON.stringify({
        userName: user,
        password: pass,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log("login finish");
    const data = await res.json();
    if (res.status === 200) {
      this.setToken(data.token);
      return true;
    } else {
      throw new Error(data.message);
    }
  }
}

export default Token;
