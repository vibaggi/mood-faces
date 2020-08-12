import axios from 'axios'


export class TeamService {

    static url = process.env.urlBackEnd || "http://localhost:3000"

    static listarEquipes(texto: string){
        return axios.get(this.url+"/teams/listar/"+texto)
    }

    static listarUsuarios(texto: string){
        return axios.get(this.url+"/users/listar/"+texto)
    }

}