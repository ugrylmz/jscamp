const userFriendList = [
  {
    id: 1,
    name: "Ayşe",
    surname: "Marul"
  },
  {
    id: 2,
    name: "Ece",
    surname: "Akan"
  },
  {
    id: 3,
    name: "Erdal",
    surname: "Akan"
  },
  {
    id: 4,
    name: "Akın",
    surname: "Akan"
  }
];

const usercredential = {
  username: ugurylmz,
  password: supersecret
};

const login = username => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usercredential);
    }, 500);
  });
};

const getFriend = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userFriendList);
    }, 1000);
  });
};

async function asycnFunction() {
  try {
    const username = await login("ugurylmz");
    const friends = await getFriend(user.id);
    console.log(friends);
  } catch (error) {
    console.log(error);
  }
}

asycnFunction();
