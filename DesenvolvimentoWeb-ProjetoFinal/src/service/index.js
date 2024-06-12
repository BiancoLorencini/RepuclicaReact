import axios from "axios";

const apiAdvice = axios.create({
	baseURL: 'https://api.adviceslip.com/advice' //url da API de conselhos aleatorios
});


//  export function getConselhoById() {
// 	const ids = ['/173', '/89', '/42', '/10', '/7']; // IDs dos conselhos
//  	const randomIndex = Math.floor(Math.random() * ids.length); // Índice aleatório
//  	const url = ids[randomIndex]; // URL com ID aleatório
//  	return apiAdvice.get(url);
//  }

export function getConselhoById(){
	return apiAdvice.get();
}


