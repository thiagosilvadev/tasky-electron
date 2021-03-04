import task from "../../db/task.js";

export default function handler(req, res) {
  task.newTask(
    {
      nome: "ler asdksad",
      descricao: "çasdkoasdksad koasdkosa oksadkoasko aoksdk oaoksodakod",
      feita: false,
    },
    res
  );
}
