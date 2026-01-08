function status(request, response) {
  response.status(200).json({ status: "ok" });
}

export default status;
// pelo fato de possuir a propriedade default, o next sabe que é essa a função de entrada e responsável por lidar com o request e response desse endpoint.
