const qs2json = (input = "") =>
{
    // const qs_object = item => ({ [item.split("=")[0]]: item.split("=")[1] });
    const url = input.split("?")[1] ? input.split("?")[1] : input;
    const func = papam => [ papam.split("=")[0], papam.split("=")[1] ];
    return Object.fromEntries( url.split("&").map( p => func(p) ) );
};

const json2qs = (params = {}, url = "") =>
{
    const api = url ? url + "?" : "";
    const func = papam => `${papam[0]}=${papam[1]}`;
    return api + Object.entries(params).map( p => func(p) ).join("&");
};

export { qs2json, json2qs };