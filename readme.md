Developer Spec

1) Create an express app

2) Express will render a form when going to '/giphysearch' or redirect to '/giphysearch' if '/' is searched

3) At '/giphysearch' the form will have a text box where user can input the name of a given product or a brand

4) The text will be then be used as a search term in a request to the giphy api
- This will be done by naming the text input in the form and then calling it using the body-parser module, i.e. req.body.search

5) The giphy api will then return a JSON file which I will parse and select the relevant data, i.e. a gif url

6) This gif url will then be copied into a results page that displays the result whilst offering a link back to the search page
