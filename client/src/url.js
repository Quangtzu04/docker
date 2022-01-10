const Url = (endpoint) => {
    const url = "http://localhost:5000/api";
    return url + "/" + endpoint;
};
export default Url;
