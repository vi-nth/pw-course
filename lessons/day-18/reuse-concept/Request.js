// class functional programing
class Request{

    constructor(url, header = {}){
        this.url = url;
this.header = header;
    }

    set url(url){
        this.url = url;
    }

    send(){
        console.log(`Sending request with header: ${this.header}`)
    }

    verifyResponse(){
        console.log(`Verifying the response`);


    }

    setMethod(method){
        this.header = {...this.header, method :mehod};
    }


}

module.exports = Request;

let request = new Request("https://abc", {method: 'GET'});

request.send();
request.verifyResponse();