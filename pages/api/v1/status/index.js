import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1+1 as sum;");
  console.log(result.rows);
  response.status(200).json({ status: "ok" });
}

export default status;
// pelo fato de possuir a propriedade default, o next sabe que é essa a função de entrada e responsável por lidar com o request e response desse endpoint.
