
const xhttp = new XMLHttpRequest();

xhttp.open('GET', '/data.json', true);
xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhttp.send();
//https://studies.cs.helsinki.fi/exampleapp/data.json

xhttp.onreadystatechange = function() {

    if (this.readyState !== 4)
        return;
        
    if (this.status !== 200)
        throw new Error('request was defeated');
    
    const data = JSON.parse(this.responseText);
    console.log(data);

    var ul = document.createElement('ul');
    ul.setAttribute('class', 'notes');

    data.forEach(function(note){
        var li = document.createElement('li');

        ul.appendChild(li);
        li.appendChild(document.createTextNode(note.content));
    });

    document.getElementById('notes').appendChild(ul);

    // if(this.readyState == 4 && this.status == 200) {
    //     const data = JSON.parse(this.responseText);
    //     console.log(data);

    //     var ul = document.createElement('ul');
    //     ul.setAttribute('class', 'notes');

    //     data.forEach(function(note){
    //         var li = document.createElement('li');

    //         ul.appendChild(li);
    //         li.appendChild(document.createTextNode(note.content));
    //     });

    //     document.getElementById('notes').appendChild(ul);
    // }
};
