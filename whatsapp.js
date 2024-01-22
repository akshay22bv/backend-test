const wbm = require("wbm");

wbm
  .start()
  .then(async () => {
    const contacts = [{ phone: "919686721221", name: "Bruno", age: 21 }];
    const message = "Hi {{name}}, your age is {{age}}";
    // Hi Bruno, your age is 21

    await wbm.send(contacts, message);
    await wbm.end();
  })
  .catch((err) => console.log(err));
