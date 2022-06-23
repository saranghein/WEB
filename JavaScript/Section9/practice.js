const dataFetch = async() => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/users").data;

	return response;
}

const dataResult = dataFetch();//변수에 넣기
console.log(dataResult);