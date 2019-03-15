// 首页

import React, { Component } from 'react';

function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit    
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(r => {
            console.log(r, '==========')
            return r.text();
        }) // parses response to JSON
}
class Index extends Component {
    state = {

    }
    componentDidMount() {
        // postData("/EmailSearch?number=1012002").then(res => console.log(res))
        var myHeaders = new Headers();

        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        var myRequest = new Request("/EmailSearch?number=1012002", myInit);

        fetch(myRequest).then(function (response) {
            return response.json();
        }).then(function (r) {
            console.log(r)
            // var objectURL = URL.createObjectURL(myBlob);
            // myImage.src = objectURL;
        });
    }
    render() {
        return (
            <div className="index">
                1111111111
            </div>
        );
    }
}

export default Index;
