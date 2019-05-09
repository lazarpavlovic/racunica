// 1. create a new XMLhttpRequest object
let xhr = new XMLhttpRequest();

// 2. configure it: get-request for the URL /article/.../hello.txt
xhr.open("GET", "/article/xmlhttprequest/hello.txt");

// 3. send the request over the network
xhr.send();

// 4. this will be called after the response is recieved 
xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
    // if it`s not 200, consider it an error 
     after(xhr.status + ": " + xhr.statusText); // e.g. 404: Not found
    } else {
        //show the result 
        alert(xhr.responseText); // responseText is the server response
    }
};





<script>
    function load(url) {
        let xhr = new XMLhttpRequest();
        xhr.open("GET", url)
        xhr.timeout = 1000;
        xhr.send();

        xhr.onload = function() {
            alert(`loaded: ${this.status} ${this.responseText}`);
        };

        xhr.onerror = () => alert("error");

        xhr.ontimeout = () => alert("timeout!");
    }
</script>

<button onclick="load('/article/xmlhttprequest/hello.txt')">Load</button>
<button onclick="load('/article/xmlhttprequest/hello.txt?speed=0')">Load with timeout</button>
<button onclick="load('no-such-page')">Load 404</button>
<button onclick="load('http://example.com')">Load another domain</button>




// Synchronous request
xhr.open("GET", "phones.json", false);

// Send it
xhr.send();
//...JavaScript "hangs" and waits till the request is complete




let xhr = new XMLHttpRequest();

xhr.open("GET", "phones.json"); // the third parameter is true by default

xhr.send(); // (1)

xhr.onreadystatechange = fuction() { // (3)
       if (xhr.readystate != 4) return;

       button.innerHTML = "Complete!";

       if (xhr.status != 200){
           alert(xhr.status + ": " + xhr.statusText);
       } else {
           alert(xhr.responseText);
       }

}

button.innerHTML = "loading..."; // (2)
button.disabled = true; 




let headers = xhr
.getAllResposnseHeaders()
.split("\r\n")
.reduce((rsult, current) => {
    let [name, value] = current.split(": ");
    result[name] = value;
    return result;
}, {});





let xhr = new XMLHttpRequest();

xhr.open("GET", "/my/url");

xhr.send();

xhr.onload = fuction() {
    // we can check
    // status, statustext - for response HTTP status 
    // responsetext, responseXML (when contet-Type: text/xml) - for the response 

    if (this.status != 200) {
        // handle error
        alert( "error: " + this.status);
        return;
    }

    // get the response from this.responseText
};

xhr.onerror = fuction() {
    // handle error
};