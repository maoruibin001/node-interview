/**
 * Created by lenovo on 2017/11/7.
 */
function request(url, type, data) {
    let xhr = '';
    xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(res) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(typeof res.target.responseText)
        console.log('res: ', res.target.responseText);
      }
    }



    if (type.toLowerCase() === 'post') {
      xhr.open(type, url, true);
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
      xhr.send(data);
    } else {
      xhr.open(type || "get", url + (data ? ('?' + JSON.stringify(data)) : ''), true);
      xhr.send(null);
    }
}


