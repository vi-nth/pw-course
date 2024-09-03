const Request = require("./Request");

// child class, sub class, dẻived clas
class GetRequest extends Requestt  {

    //Overriding
    setMethod(){
        super.setMethod('GET');
    }

}

let request = new GetRequest("https://abc", {method: 'Get'})