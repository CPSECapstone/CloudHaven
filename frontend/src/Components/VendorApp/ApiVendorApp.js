import axios from "axios";

const vendorPort = "http://localhost:4040"

export function getConstantVendorForms(){
    return axios.get("http://localhost:4040/form/1")
    .then((response) => {
        console.log("success", response.data);
        return response.data;
    })
    .catch((err) => {
        console.log(err);
    });
}
