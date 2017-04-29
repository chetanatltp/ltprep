
<!DOCTYPE html>
<html>
  <head>
      <title>
          API AI APP
      </title>
  </head>

    <body>
        <div>
            <form name="myform" action="javascript:handleSubmit(question.value)">
                <fieldset>
                    <input type="text" name="question" id="question" maxlength="40"> 
                    <input name="Submit"  type="submit" value="Ask question"/> 
                </fieldset>
            </form>
        </div>
    

        <div id="response" style="margin-top:3em; border:1px solid #ccc; padding: 1em">
             Response will display here
        </div>

        <script type="text/javascript">
            function askServer(question, cb) {
               console.log(question);
               fetch('/ask', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question: question }),
               })
               .then((response) => {
                    return response.json().then((obj) => {
                        cb(obj.data);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            }

            function printResponse(text) {
                console.log(text);
                document.getElementById("response").innerHTML = text;
            }

            function handleSubmit(question) {
                if(question != "") {
                    askServer(question, function(text) {
                        printResponse(text);
                    });
                } else {
                    alert("Cannot be empty");
                }
            }
        </script>
    </body>
</html>