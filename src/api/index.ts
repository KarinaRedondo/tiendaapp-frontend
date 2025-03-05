import axios from "axios";

export const urlApi= axios.create({baseURL: "http://localhost:8080/api/v1"})